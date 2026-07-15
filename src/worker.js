import { onRequestGet, onRequestOptions, onRequestPost } from "../functions/api/leads.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads") {
      const context = { request, env, params: {}, waitUntil: ctx.waitUntil.bind(ctx) };

      if (request.method === "OPTIONS") return onRequestOptions(context);
      if (request.method === "POST") return onRequestPost(context);
      if (request.method === "GET") return onRequestGet(context);

      return new Response(JSON.stringify({ ok: false, message: "Method not allowed." }), {
        status: 405,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    if (url.pathname === "/api/country") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: countryHeaders() });
      }
      if (request.method !== "GET") {
        return new Response(JSON.stringify({ ok: false, message: "Method not allowed." }), {
          status: 405,
          headers: countryHeaders(),
        });
      }

      const country = countryFromRequest(request);
      return new Response(JSON.stringify({
        ok: true,
        country,
        currency: country === "IN" ? "INR" : "USD",
      }), {
        status: 200,
        headers: countryHeaders(),
      });
    }

    return env.ASSETS.fetch(request);
  },
};

function countryFromRequest(request) {
  const candidates = [
    request.cf?.country,
    request.headers.get("cf-ipcountry"),
    request.headers.get("x-vercel-ip-country"),
    request.headers.get("x-country-code"),
  ];
  const country = candidates
    .map((value) => String(value || "").trim().toUpperCase())
    .find((value) => /^[A-Z]{2}$/.test(value));
  return country || "US";
}

function countryHeaders() {
  return {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "private, max-age=300",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
  };
}
