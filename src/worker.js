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

    if (shouldServePrerenderedBlogHtml(request, url)) {
      const assetUrl = new URL(request.url);
      assetUrl.pathname = url.pathname === "/blog" ? "/blog/index.html" : `${url.pathname.replace(/\/$/, "")}/index.html`;
      return env.ASSETS.fetch(new Request(assetUrl, request));
    }

    return env.ASSETS.fetch(request);
  },
};

function shouldServePrerenderedBlogHtml(request, url) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  if (url.pathname !== "/blog" && !url.pathname.startsWith("/blog/")) return false;
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return false;

  const accept = request.headers.get("accept") || "";
  return !accept || accept.includes("text/html") || accept.includes("*/*");
}
