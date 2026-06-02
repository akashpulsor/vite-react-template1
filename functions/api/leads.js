const MAX_FIELD_LENGTHS = {
  name: 160,
  email: 180,
  phoneNumber: 80,
  country: 100,
  youtubeHandle: 220,
  message: 1400,
};

export async function onRequestOptions({ request, env }) {
  return jsonResponse({ ok: true }, 204, request, env);
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.LEADS_KV) {
      return jsonResponse({ ok: false, message: "Lead storage is not configured." }, 500, request, env);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ ok: false, message: "Expected JSON body." }, 415, request, env);
    }

    const payload = await request.json();
    if (String(payload.website || "").trim()) {
      return jsonResponse({ ok: true, message: "Thanks." }, 202, request, env);
    }

    const lead = normalizeLead(payload);
    const errors = validateLead(lead);
    if (errors.length) {
      return jsonResponse({ ok: false, message: errors[0], errors }, 400, request, env);
    }

    const now = new Date().toISOString();
    const ip = request.headers.get("cf-connecting-ip") || "";
    const userAgent = request.headers.get("user-agent") || "";
    const country = request.cf?.country || "";
    const id = crypto.randomUUID();
    const record = {
      id,
      ...lead,
      source: "dalaillama_landing",
      createdAt: now,
      request: {
        country,
        ipHash: await sha256(ip),
        userAgent: truncate(userAgent, 300),
        referer: truncate(request.headers.get("referer") || "", 500),
      },
    };

    await env.LEADS_KV.put(`lead:${now}:${id}`, JSON.stringify(record), {
      metadata: {
        email: lead.email,
        name: lead.name,
        country: lead.country,
        youtubeHandle: lead.youtubeHandle,
        createdAt: now,
      },
    });
    await env.LEADS_KV.put(`lead-email:${lead.email.toLowerCase()}`, id);

    return jsonResponse({ ok: true, id, message: "Lead saved." }, 201, request, env);
  } catch (error) {
    return jsonResponse(
      { ok: false, message: "Could not save lead.", detail: safeError(error) },
      500,
      request,
      env
    );
  }
}

export async function onRequestGet({ request, env }) {
  return jsonResponse({ ok: false, message: "Use POST." }, 405, request, env);
}

function normalizeLead(payload = {}) {
  return {
    name: truncate(clean(payload.name), MAX_FIELD_LENGTHS.name),
    email: truncate(clean(payload.email).toLowerCase(), MAX_FIELD_LENGTHS.email),
    phoneNumber: truncate(clean(payload.phoneNumber), MAX_FIELD_LENGTHS.phoneNumber),
    country: truncate(clean(payload.country), MAX_FIELD_LENGTHS.country),
    youtubeHandle: truncate(clean(payload.youtubeHandle), MAX_FIELD_LENGTHS.youtubeHandle),
    message: truncate(clean(payload.message), MAX_FIELD_LENGTHS.message),
  };
}

function validateLead(lead) {
  const errors = [];
  if (!lead.name) errors.push("Name is required.");
  if (!lead.email) errors.push("Email is required.");
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errors.push("Enter a valid email.");
  if (!lead.phoneNumber) errors.push("Phone number is required.");
  if (!lead.country) errors.push("Country is required.");
  if (!lead.youtubeHandle) errors.push("YouTube handle is required.");
  return errors;
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function truncate(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? text.slice(0, maxLength) : text;
}

function jsonResponse(body, status = 200, request, env) {
  return new Response(status === 204 ? null : JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...corsHeaders(request, env),
    },
  });
}

function corsHeaders(request, env) {
  const origin = request?.headers?.get("origin") || "";
  const allowedOrigin = env?.LEADS_ALLOWED_ORIGIN || origin || "*";
  const allowOrigin = allowedOrigin === "*" || allowedOrigin === origin ? allowedOrigin : "null";
  return {
    "access-control-allow-origin": allowOrigin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "vary": "Origin",
  };
}

async function sha256(value) {
  if (!value) return "";
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function safeError(error) {
  const message = error instanceof Error ? error.message : String(error || "");
  return truncate(message, 300);
}
