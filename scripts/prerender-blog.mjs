import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://dalaillama.in";
const HOME_TITLE = "Dalaillama | Done-for-You Short Video Editing in 2 Hours";
const SHORT_VIDEO_EDITOR_TITLE = "Short Video Editor for Reels & YouTube Shorts | Dalaillama";
const BLOG_TITLE = "Short Video Editing Guides & Case Studies | Dalaillama";
const DEFAULT_DESCRIPTION =
  "Done-for-you short video editing for creators and teams. Send a long video, podcast, webinar, interview, demo, or raw clip and get a captioned vertical Short back in 2 hours.";
const SHORT_VIDEO_EDITOR_DESCRIPTION =
  "A short video editor service for creators and teams. Send existing footage and get one ready-to-post vertical Short for Reels, Shorts, TikTok, or LinkedIn in 2 hours.";
const BLOG_DESCRIPTION =
  "Practical short video editing guides and case studies about hooks, Reels, YouTube Shorts, captions, pacing, phone footage, audio, and production workflow.";
const DEFAULT_SOCIAL_IMAGE = "/social-card.svg";
const FEATURED_GUIDE_SLUGS = [
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];
const SHORT_VIDEO_EDITOR_RESOURCES = [
  {
    title: "Short-Form Video Editing: How to Hold Attention",
    href: "/blog/short-form-video-editor-attention-span",
    body: "A practical guide to hooks, pacing, captions, cut rhythm, and the first three seconds of a Short.",
  },
  {
    title: "Reel Patterns Worth Editing",
    href: "/blog/reel-patterns-worth-editing",
    body: "How to identify the quiet, useful, tense, or transformational moments inside longer recordings.",
  },
  {
    title: "How to Write Better Hooks for YouTube Shorts",
    href: "/blog/youtube-shorts-hooks",
    body: "Hook patterns for creators who want viewers to understand the point before they scroll away.",
  },
  {
    title: "Make Phone Footage Look Professional",
    href: "/blog/make-phone-footage-look-professional",
    body: "Simple polish decisions that make ordinary phone footage feel clearer and more finished.",
  },
  {
    title: "How to Plan a YouTube Short",
    href: "/blog/how-to-plan-a-youtube-short",
    body: "A creator-friendly way to move from topic to shot plan before recording the next Short.",
  },
  {
    title: "Improve Audio Quality in Videos",
    href: "/blog/improve-audio-quality-in-videos",
    body: "Why clear voice, room tone, music balance, and small sound decisions matter in short-form edits.",
  },
];
const SHORT_VIDEO_EDITOR_FAQ = [
  {
    question: "What can I send to Dalaillama?",
    answer:
      "You can send a long video, podcast clip, webinar, interview, demo, founder video, raw phone footage, Drive link, YouTube link, or downloadable file.",
  },
  {
    question: "Is this an automatic AI clipping tool?",
    answer:
      "No. Dalaillama is a done-for-you editing service. A real editor chooses the moment, shapes the hook, trims the timeline, adds captions, polishes sound, and prepares the vertical export.",
  },
  {
    question: "What do I get back?",
    answer:
      "You get one ready-to-post vertical short-form video with a tighter hook, mobile crop, readable captions, sound polish, and export suitable for YouTube Shorts, Instagram Reels, TikTok, LinkedIn, or a similar short-form platform.",
  },
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

await mkdir(path.join(distDir, "short-video-editor"), { recursive: true });
await writeFile(
  path.join(distDir, "short-video-editor", "index.html"),
  buildPage(template, shortVideoEditorSeo(), renderShell(renderShortVideoEditorPage()))
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
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama short video editor service",
  };
}

function shortVideoEditorSeo() {
  return {
    title: SHORT_VIDEO_EDITOR_TITLE,
    description: SHORT_VIDEO_EDITOR_DESCRIPTION,
    path: "/short-video-editor",
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama short video editor service",
    structuredData: shortVideoEditorStructuredData(),
  };
}

function blogIndexSeo() {
  return {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    path: "/blog",
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama short video editing guides",
  };
}

function postSeo(post) {
  const pathName = `/blog/${post.slug}`;
  const published = isoDate(post.date);
  return {
    title: `${post.title} | Dalaillama`,
    description: post.description,
    path: pathName,
    type: "article",
    image: post.heroImage,
    imageAlt: post.heroImageAlt,
    articlePublishedTime: published,
    structuredData: [
      {
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
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${pathName}`,
        },
      },
      breadcrumbStructuredData([
        ["Home", "/"],
        ["Editing Guides", "/blog"],
        [post.title, pathName],
      ]),
    ],
  };
}

function shortVideoEditorStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Dalaillama Short Video Editor",
      serviceType: "Short-form video editing",
      url: `${SITE_URL}/short-video-editor`,
      description: SHORT_VIDEO_EDITOR_DESCRIPTION,
      areaServed: "Worldwide",
      provider: {
        "@type": "Organization",
        name: "Dalaillama",
        url: SITE_URL,
      },
    },
    breadcrumbStructuredData([
      ["Home", "/"],
      ["Short Video Editor", "/short-video-editor"],
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SHORT_VIDEO_EDITOR_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}

function breadcrumbStructuredData(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${item}`,
    })),
  };
}

function buildPage(baseHtml, seo, rootHtml) {
  const image = absoluteUrl(seo.image || DEFAULT_SOCIAL_IMAGE);
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = setMeta(html, "name", "description", seo.description);
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
          <a class="wordmark" href="/" aria-label="Dalaillama home">Dalaillama</a>
          <nav class="nav-links" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="/short-video-editor">Short Video Editor</a>
            <a href="/#order">Order</a>
            <a href="/#production-guides">Production Guides</a>
            <a href="/blog">Editing Guides</a>
          </nav>
        </header>
        <main>${content}</main>
        <footer class="site-footer" aria-label="Short video editing resources">
          <a href="/short-video-editor">Short Video Editor Service</a>
          <a href="/blog/short-form-video-editor-attention-span">Short-Form Video Editing Guide</a>
          <a href="/blog/reel-patterns-worth-editing">Reel Editing Patterns</a>
          <a href="/blog/youtube-shorts-hooks">YouTube Shorts Hooks</a>
          <a href="/#access">Send a Video</a>
        </footer>
      </div>
    </div>`;
}

function renderHomeFallback(allPosts) {
  const featuredPosts = featuredPostsFrom(allPosts);
  const shortVideoEditorLinks = [
    {
      title: "Short Video Editor Service",
      href: "/short-video-editor",
      body: "Send existing video and get a ready-to-post vertical Short back within 2 hours.",
    },
    ...SHORT_VIDEO_EDITOR_RESOURCES.slice(0, 3),
  ];

  return `
    <article class="landing-page">
      <section class="landing-hero studio-hero">
        <div class="hero-copy">
          <p class="kicker">Done-for-you short video editing</p>
          <h1>Short video editing done for you in 2 hours.</h1>
          <div class="hero-body">
            <p>Send us the video. We create the Short for you.</p>
            <p>Share a long video, raw clip, podcast, webinar, interview, demo, or founder video. We manually edit it, add captions and polish, then return a ready-to-post short-form video.</p>
            <p>The promise is simple: your video becomes a finished Short in 2 hours.</p>
          </div>
        </div>
      </section>
      <section class="landing-section writing-section" id="production-guides">
        <p class="kicker">Production guides</p>
        <h2>See Shorts planned from concept to production.</h2>
        ${renderGuideCards(featuredPosts)}
      </section>
      <section class="landing-section writing-section" id="short-video-editor-links">
        <p class="kicker">Short video editor links</p>
        <h2>For creators searching for a short video editor.</h2>
        ${renderLinkCards(shortVideoEditorLinks)}
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
      <p class="back-link"><a href="/">Back to home</a></p>
      <h1>Short Video Editing Guides & Case Studies</h1>
      <p>Practical editing guides, production notes, and case studies for turning existing video into stronger Shorts, Reels, TikToks, and LinkedIn clips.</p>
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

function renderShortVideoEditorPage() {
  const editingSteps = [
    "Review the source video and find the strongest short-form moment.",
    "Shape the opening so the first seconds give viewers a reason to keep watching.",
    "Trim pauses, repeated setup, and context that does not help the final Short.",
    "Crop for vertical 9:16 viewing so the speaker, product, or key action stays visible.",
    "Add readable captions, clean sound, balance music, and export a ready-to-post file.",
  ];

  return `
    <article class="page essay-page service-page">
      <p class="back-link"><a href="/">Back to home</a></p>
      <section class="service-hero">
        <p class="kicker">Short video editor service</p>
        <h1>Short video editor for Reels, YouTube Shorts, TikTok, and LinkedIn.</h1>
        <div class="hero-body">
          <p>Dalaillama turns existing video into short-form content for YouTube Shorts, Instagram Reels, TikTok, LinkedIn, and similar vertical platforms.</p>
          <p>Send a long recording, podcast clip, webinar, interview, product demo, founder video, or raw phone footage. We manually edit the moment, add captions and sound polish, then return one finished Short within 2 hours.</p>
        </div>
        <div class="hero-actions">
          <a class="creator-primary hero-button" href="/#access">Send Your Video</a>
          <a class="creator-secondary hero-button" href="/#order">See Order Details</a>
        </div>
      </section>
      <section class="landing-section split-section">
        <div>
          <p class="kicker">What the editor does</p>
          <h2>We make judgment calls a simple clipper misses.</h2>
        </div>
        <div class="stage-list">
          ${editingSteps
            .map(
              (item, index) => `
                <div class="stage-row">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${escapeHtml(item)}</p>
                </div>`
            )
            .join("")}
        </div>
      </section>
      <section class="landing-section essay-section">
        <p class="kicker">Who it is for</p>
        <h2>Useful for teams with footage, but no time to edit every small clip.</h2>
        <div class="essay-copy">
          <p>This works best when you already record useful material: podcasts, sales calls, expert interviews, lessons, product demos, webinars, events, or founder updates.</p>
          <p>The goal is not to make every possible clip. The goal is to find one good short-form idea inside the source, make it clear, and deliver it in a format that is ready to post.</p>
        </div>
      </section>
      <section class="landing-section writing-section" id="short-video-editor-resources">
        <p class="kicker">Short video editor resources</p>
        <h2>Helpful links for planning, editing, and polishing better Shorts.</h2>
        ${renderLinkCards(SHORT_VIDEO_EDITOR_RESOURCES)}
      </section>
      <section class="landing-section essay-section">
        <p class="kicker">FAQ</p>
        <h2>Common questions before sending a clip.</h2>
        <div class="faq-list">
          ${SHORT_VIDEO_EDITOR_FAQ.map(
            (item) => `
              <details class="faq-item creator-panel-muted">
                <summary>${escapeHtml(item.question)}</summary>
                <p>${escapeHtml(item.answer)}</p>
              </details>`
          ).join("")}
        </div>
      </section>
    </article>`;
}

function renderPost(post) {
  return `
    <article class="page essay-page">
      <p class="back-link"><a href="/">Back to home</a></p>
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

function renderLinkCards(links) {
  return `
    <div class="guide-link-grid">
      ${links
        .map(
          (link) => `
            <a class="guide-link-card creator-panel-muted" href="${escapeAttribute(link.href)}">
              <span>${escapeHtml(link.title)}</span>
              <small>${escapeHtml(link.body)}</small>
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
