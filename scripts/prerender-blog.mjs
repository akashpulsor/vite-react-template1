import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://dalaillama.in";
const DEFAULT_DESCRIPTION =
  "Dalaillama Creator Studio helps creators plan shorts, shoot against a real shot plan, and polish phone footage like a small production team.";
const DEFAULT_SOCIAL_IMAGE = "/social-card.svg";
const FEATURED_GUIDE_SLUGS = [
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const templatePath = path.join(distDir, "index.html");
const template = await readFile(templatePath, "utf8");
const posts = await loadPosts();

await writeFile(
  templatePath,
  buildPage(template, homeSeo(), renderShell(renderHomeFallback(posts)))
);

await mkdir(path.join(distDir, "blog"), { recursive: true });
await writeFile(
  path.join(distDir, "blog", "index.html"),
  buildPage(template, blogIndexSeo(), renderShell(renderBlogIndex(posts)))
);

for (const post of posts) {
  const outputDir = path.join(distDir, "blog", post.slug);
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    path.join(outputDir, "index.html"),
    buildPage(template, postSeo(post), renderShell(renderPost(post)))
  );
}

console.log(`Prerendered ${posts.length} blog posts for SEO.`);

async function loadPosts() {
  const postsIndex = await readFile(path.join(rootDir, "src", "posts", "index.js"), "utf8");
  const imports = new Map(
    [...postsIndex.matchAll(/import\s+(\w+)\s+from\s+"\.\/([^"]+\.md)\?raw";/g)].map((match) => [
      match[1],
      match[2],
    ])
  );
  const rawPostsBlock = postsIndex.match(/const rawPosts = \[([\s\S]*?)\];/);
  const identifiers = rawPostsBlock
    ? rawPostsBlock[1]
        .split("\n")
        .map((line) => line.trim().replace(/,$/, ""))
        .filter(Boolean)
    : [];

  const orderedFiles = identifiers.map((identifier) => imports.get(identifier)).filter(Boolean);
  const parsed = [];

  for (const file of orderedFiles) {
    const raw = await readFile(path.join(rootDir, "src", "posts", file), "utf8");
    parsed.push(parsePost(raw));
  }

  return parsed;
}

function parsePost(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const frontmatter = match ? parseFrontmatter(match[1]) : {};
  const fullBody = match ? match[2].trim() : raw.trim();
  const title = frontmatter.title || firstHeading(fullBody) || "Untitled";
  const image = firstImage(fullBody);

  return {
    title,
    slug: frontmatter.slug || slugify(title),
    description: frontmatter.description || plainText(fullBody).slice(0, 155),
    keywords: frontmatter.keywords || [],
    readingTime: frontmatter.readingTime || "",
    date: frontmatter.date || "",
    body: stripLeadingH1(fullBody),
    heroImage: frontmatter.ogImage || image?.src || DEFAULT_SOCIAL_IMAGE,
    heroImageAlt: frontmatter.ogImageAlt || image?.alt || title,
  };
}

function parseFrontmatter(text) {
  const lines = text.split("\n");
  const data = {};
  let currentKey = "";

  for (const line of lines) {
    const indent = line.match(/^\s*/)?.[0]?.length || 0;
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (indent === 0 && /^[a-zA-Z][\w-]*:/.test(trimmed)) {
      const [key, ...rest] = trimmed.split(":");
      currentKey = key.trim();
      const value = rest.join(":").trim();
      data[currentKey] = value ? parseValue(value) : {};
      continue;
    }

    if (trimmed.startsWith("- ") && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(trimmed.slice(2).trim().replace(/^"|"$/g, ""));
      continue;
    }

    const nestedMatch = trimmed.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (indent > 0 && nestedMatch && currentKey) {
      if (!data[currentKey] || Array.isArray(data[currentKey]) || typeof data[currentKey] !== "object") {
        data[currentKey] = {};
      }
      data[currentKey][nestedMatch[1]] = parseValue(nestedMatch[2]);
    }
  }

  return data;
}

function parseValue(value) {
  if (!value) return "";
  if (value === "[]") return [];
  if (value === "{}") return {};
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);
  }
  return value.replace(/^"|"$/g, "");
}

function homeSeo() {
  return {
    title: "Dalaillama Creator Studio",
    description: DEFAULT_DESCRIPTION,
    path: "/",
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama Creator Studio logo",
  };
}

function blogIndexSeo() {
  return {
    title: "Blogs & Case Studies | Dalaillama Creator Studio",
    description:
      "Blogs and case studies about creator production, shot planning, polishing phone footage, and building shorts people want to watch.",
    path: "/blog",
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama Creator Studio logo",
  };
}

function postSeo(post) {
  const pathName = `/blog/${post.slug}`;
  const published = isoDate(post.date);
  return {
    title: `${post.title} | Dalaillama`,
    description: post.description,
    keywords: post.keywords,
    path: pathName,
    type: "article",
    image: post.heroImage,
    imageAlt: post.heroImageAlt,
    articlePublishedTime: published,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: [absoluteUrl(post.heroImage)],
      datePublished: published,
      dateModified: published,
      author: {
        "@type": "Organization",
        name: "Dalaillama",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Dalaillama",
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/favicon.svg"),
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}${pathName}`,
      },
    },
  };
}

function buildPage(baseHtml, seo, rootHtml) {
  const image = absoluteUrl(seo.image || DEFAULT_SOCIAL_IMAGE);
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = setMeta(html, "name", "description", seo.description);
  html = seo.keywords?.length ? setMeta(html, "name", "keywords", seo.keywords.join(", ")) : html;
  html = setMeta(html, "name", "robots", "index,follow");
  html = setMeta(html, "property", "og:type", seo.type || "website");
  html = setMeta(html, "property", "og:site_name", "dalaillama.in");
  html = setMeta(html, "property", "og:title", seo.title);
  html = setMeta(html, "property", "og:description", seo.description);
  html = setMeta(html, "property", "og:url", `${SITE_URL}${seo.path}`);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:alt", seo.imageAlt || seo.title);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", seo.title);
  html = setMeta(html, "name", "twitter:description", seo.description);
  html = setMeta(html, "name", "twitter:image", image);
  html = setMeta(html, "name", "twitter:image:alt", seo.imageAlt || seo.title);
  html = setCanonical(html, `${SITE_URL}${seo.path}`);

  if (seo.type === "article" && seo.articlePublishedTime) {
    html = setMeta(html, "property", "article:published_time", seo.articlePublishedTime);
    html = setMeta(html, "property", "article:modified_time", seo.articlePublishedTime);
  }

  if (seo.structuredData) {
    html = injectJsonLd(html, "dalaillama-article-jsonld", seo.structuredData);
  }

  return html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
}

function renderShell(content) {
  return `
    <div class="creator-app">
      <div class="site-shell">
        <header class="topbar creator-panel-muted">
          <a class="wordmark" href="/" aria-label="Dalaillama Creator Studio home">Dalaillama Creator Studio</a>
          <nav class="nav-links" aria-label="Primary navigation">
            <a href="/">Dashboard</a>
            <a href="/#workflow">Workflow</a>
            <a href="/#production-guides">Production Guides</a>
            <a href="/blog">Blogs & Case Studies</a>
          </nav>
        </header>
        <main>${content}</main>
      </div>
    </div>`;
}

function renderHomeFallback(allPosts) {
  const featuredPosts = featuredPostsFrom(allPosts);
  return `
    <article class="landing-page">
      <section class="landing-hero studio-hero">
        <div class="hero-copy">
          <p class="kicker">Dalaillama Creator Studio</p>
          <h1>Plan the short. Shoot the take. Polish it like a studio.</h1>
          <div class="hero-body">
            <p>Creators do not just need a better filter.</p>
            <p>Dalaillama helps creators plan storyboards, DP camera notes, lighting sheets, sound cues, and polish decisions before recording.</p>
          </div>
        </div>
      </section>
      <section class="landing-section writing-section" id="production-guides">
        <p class="kicker">Production guides</p>
        <h2>See Shorts planned from concept to production.</h2>
        ${renderGuideCards(featuredPosts)}
      </section>
      <section class="landing-section writing-section">
        <p class="kicker">Blogs & case studies</p>
        <h2>Work stories from the product.</h2>
        <div class="writing-list">
          ${allPosts.map((post) => renderWritingLink(post)).join("")}
        </div>
      </section>
    </article>`;
}

function renderBlogIndex(allPosts) {
  const featuredPosts = featuredPostsFrom(allPosts);

  return `
    <article class="page essay-page">
      <p class="back-link"><a href="/">Back to dashboard</a></p>
      <h1>Blogs & Case Studies</h1>
      <p>Product blogs and creator workflow case studies about planning, shooting, lighting, reviewing, and polishing short videos.</p>
      <section class="blog-featured-block" aria-label="Featured production guides and case studies">
        <h2>Featured Production Guides and Case Studies</h2>
        ${renderGuideCards(featuredPosts)}
      </section>
      <h2>All Blog Posts</h2>
      <div class="post-list">
        ${allPosts.map((post) => renderPostLink(post)).join("")}
      </div>
    </article>`;
}

function renderPost(post) {
  return `
    <article class="page essay-page">
      <p class="back-link"><a href="/">Back to dashboard</a></p>
      <p class="kicker">${escapeHtml(post.date)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <div class="post-body">${renderMarkdown(post.body)}</div>
      <p class="back-link"><a href="/blog">Back to blogs & case studies</a></p>
    </article>`;
}

function renderGuideCards(featuredPosts) {
  return `
    <div class="guide-link-grid">
      ${featuredPosts
        .map(
          (post) => `
            <a class="guide-link-card creator-panel-muted" href="/blog/${escapeAttribute(post.slug)}">
              <span>${escapeHtml(post.title)}</span>
              <small>${escapeHtml(post.description)}</small>
            </a>`
        )
        .join("")}
    </div>`;
}

function renderWritingLink(post) {
  return `
    <a class="writing-link" href="/blog/${escapeAttribute(post.slug)}">
      <span>${escapeHtml(post.title)}</span>
      <small>${escapeHtml(post.date)}</small>
    </a>`;
}

function renderPostLink(post) {
  return `
    <a class="post-link" href="/blog/${escapeAttribute(post.slug)}">
      <span>${escapeHtml(post.title)}</span>
      <small>${escapeHtml(post.date)}</small>
    </a>`;
}

function renderMarkdown(markdown) {
  const blocks = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      if (block.startsWith("# ")) return `<h1>${escapeHtml(block.replace(/^# /, ""))}</h1>`;
      if (block.startsWith("## ")) return `<h2>${escapeHtml(block.replace(/^## /, ""))}</h2>`;
      if (block.startsWith("### ")) return `<h3>${escapeHtml(block.replace(/^### /, ""))}</h3>`;

      const imageMatch = block.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        return `
          <figure class="post-figure">
            <img src="${escapeAttribute(imageMatch[2])}" alt="${escapeAttribute(imageMatch[1])}" loading="lazy" />
            ${imageMatch[1] ? `<figcaption>${escapeHtml(imageMatch[1])}</figcaption>` : ""}
          </figure>`;
      }

      if (isTable(block)) return renderTable(block);

      if (block.startsWith("- ")) {
        return `
          <ul class="plain-list">
            ${block
              .split("\n")
              .map((item) => `<li>${formatInline(item.replace(/^- /, ""))}</li>`)
              .join("")}
          </ul>`;
      }

      return `<p>${formatInline(block.replace(/\n/g, " "))}</p>`;
    })
    .join("");
}

function renderTable(block) {
  const lines = block.split("\n").filter(Boolean);
  const headers = splitTableRow(lines[0]);
  const rows = lines.slice(2).map(splitTableRow);
  return `
    <div class="post-table-wrap">
      <table class="post-table">
        <thead>
          <tr>${headers.map((header) => `<th>${formatInline(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function formatInline(text) {
  const parts = [];
  const inlinePattern = /(\*\*[^*]+?\*\*|\[[^\]]+?\]\([^)]+?\))/g;
  let cursor = 0;
  let match;

  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    parts.push(match[0]);
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));

  return parts
    .map((part) => {
      const linkMatch = part.match(/^\[([^\]]+?)\]\(([^)]+?)\)$/);
      if (linkMatch) {
        return `<a href="${escapeAttribute(linkMatch[2])}">${escapeHtml(linkMatch[1])}</a>`;
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return `<strong>${escapeHtml(part.slice(2, -2))}</strong>`;
      }
      return escapeHtml(part);
    })
    .join("");
}

function setMeta(html, attribute, name, content) {
  const tag = `<meta ${attribute}="${escapeAttribute(name)}" content="${escapeAttribute(content || "")}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${escapeRegExp(name)}"[^>]*>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeAttribute(href)}" />`;
  if (/<link\s+rel="canonical"[^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel="canonical"[^>]*>/i, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function injectJsonLd(html, id, data) {
  const escapedJson = JSON.stringify(data).replace(/</g, "\\u003c");
  const tag = `<script type="application/ld+json" id="${escapeAttribute(id)}">${escapedJson}</script>`;
  const pattern = new RegExp(`<script[^>]+id="${escapeRegExp(id)}"[\\s\\S]*?<\\/script>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function featuredPostsFrom(allPosts) {
  return FEATURED_GUIDE_SLUGS.map((slug) => allPosts.find((post) => post.slug === slug)).filter(Boolean);
}

function isTable(block) {
  const lines = block.split("\n");
  return lines.length >= 2 && lines[0].includes("|") && /^\|?\s*:?-{3,}:?\s*\|/.test(lines[1]);
}

function splitTableRow(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function firstHeading(body) {
  return body
    .split("\n")
    .find((line) => line.startsWith("# "))
    ?.replace(/^# /, "")
    .trim();
}

function firstImage(body) {
  const match = body.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  return match ? { alt: match[1], src: match[2] } : null;
}

function stripLeadingH1(body) {
  return body.replace(/^# .+\n+/, "").trim();
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[#*_`>|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isoDate(displayDate) {
  const months = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };
  const match = String(displayDate || "").trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return "";
  const month = months[match[1].toLowerCase()];
  if (!month) return "";
  return `${match[3]}-${month}-${match[2].padStart(2, "0")}`;
}

function absoluteUrl(value) {
  if (!value) return `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
