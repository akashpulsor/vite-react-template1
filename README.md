# Dalaillama Landing

Cloudflare Pages app with a Pages Function at `/api/leads`.

## Build

```bash
npm install
npm run build
```

## Cloudflare Setup

Create KV namespaces:

```bash
npx wrangler kv namespace create LEADS_KV
npx wrangler kv namespace create LEADS_KV --preview
```

Copy the returned IDs into `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "LEADS_KV"
id = "production_namespace_id"
preview_id = "preview_namespace_id"
```

Pages settings:

```text
Build command: npm run build
Build output directory: dist
```

The lead form posts JSON to `/api/leads`. Records are saved as `lead:<timestamp>:<uuid>` in `LEADS_KV`.
