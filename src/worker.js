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

    return env.ASSETS.fetch(request);
  },
};
