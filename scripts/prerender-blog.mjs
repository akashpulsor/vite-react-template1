import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  VIDEO_REPURPOSING_BASE_PATH,
  getVideoRepurposingPage,
  videoRepurposingAuthorityLinks,
  videoRepurposingChildPages,
  videoRepurposingHub,
} from "../src/videoRepurposingPages.js";

const SITE_URL = "https://dalaillama.in";
const CURRENT_LASTMOD = "2026-07-01";
const HOME_TITLE = "Dalaillama | Done-for-You Short Video Editing in 30 Minutes";
const SHORT_VIDEO_EDITOR_TITLE = "Short Video Editor for Reels & YouTube Shorts | Dalaillama";
const VIDEO_REPURPOSING_TITLE = "Video Repurposing Service for Shorts | Dalaillama";
const BLOG_TITLE = "AI Newsroom Video Workflow Knowledge Base | Dalaillama";
const DEFAULT_DESCRIPTION =
  "Done-for-you short video editing for creators and teams. Send a long video, podcast, webinar, interview, demo, or raw clip and get a captioned vertical Short back in 30 minutes.";
const SHORT_VIDEO_EDITOR_DESCRIPTION =
  "A short video editor service for creators and teams. Send existing footage and get one ready-to-post vertical Short for Reels, Shorts, TikTok, or LinkedIn in 30 minutes.";
const VIDEO_REPURPOSING_DESCRIPTION = videoRepurposingHub.description;
const BLOG_DESCRIPTION =
  "AI newsroom video workflow guides for publishers, broadcasters, media teams, agencies, and teams turning long video into approved short-form output.";
const DEFAULT_SOCIAL_IMAGE = "/social-card.svg";
const FEATURED_GUIDE_SLUGS = [
  "video-production-workflow",
  "video-editing-workflow",
  "video-production-checklist",
  "ultimate-guide-to-video-repurposing",
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];
const NEWSROOM_WORKFLOW_SLUGS = [
  "ai-video-editing-newsrooms",
  "ai-video-workflow-digital-publishers",
  "newsroom-video-workflow",
  "how-newsrooms-produce-shorts",
  "breaking-news-video-workflow",
  "press-conference-workflow",
  "newsroom-video-automation",
  "editorial-approval-workflow",
  "broadcast-to-vertical-video",
  "video-desk-workflow",
  "social-media-workflow-for-publishers",
  "local-news-video-workflow",
  "election-coverage-workflow",
  "sports-news-video-workflow",
  "news-archive-repurposing",
  "video-asset-management-for-newsrooms",
  "high-volume-news-editing",
  "daily-news-production-workflow",
  "multi-platform-publishing",
  "newsroom-editing-sop",
  "reduce-news-editing-time",
  "scaling-newsroom-video-teams",
  "newsroom-video-review-workflow",
  "publish-breaking-news-faster",
  "editorial-video-operations",
];
const AGENCY_WORKFLOW_SLUGS = [
  "agency-video-editing-workflow",
  "scaling-video-editing-agency",
  "white-label-shorts-editing",
  "batch-editing-client-videos",
  "agency-review-workflow",
  "agency-video-sop",
  "client-approval-workflow",
  "agency-production-pipeline",
  "managing-multiple-clients",
  "reduce-agency-turnaround",
  "how-agencies-deliver-shorts-fast",
  "agency-video-qa-checklist",
  "agency-video-templates",
  "agency-production-metrics",
  "agency-workflow-automation",
  "video-outsourcing-guide",
  "done-for-you-shorts",
  "video-repurposing-service",
  "podcast-editing-service",
  "interview-editing-service",
];
const VIDEO_OPERATIONS_SLUGS = [
  "reduce-video-editing-turnaround-time",
  "how-to-produce-100-shorts-every-week",
  "batch-video-editing",
  "video-review-workflow",
  "editorial-review-workflow",
  "content-repurposing-workflow",
  "production-pipeline",
  "video-processing-pipeline",
  "editor-checklist",
  "video-qa-workflow",
  "managing-hundreds-of-videos",
  "review-less-edit-more",
  "ai-assisted-editing-workflow",
  "scaling-video-teams",
  "video-production-kpis",
  "editing-throughput",
  "review-bottlenecks",
  "video-delivery-workflow",
  "publishing-workflow",
  "video-operations-guide",
];
const SERVICE_COMPARISON_SLUGS = [
  "best-podcast-editing-service",
  "best-shorts-editing-service",
  "podcast-to-shorts-service",
  "interview-clipping-service",
  "webinar-editing-service",
  "video-repurposing-service",
  "youtube-shorts-editing-service",
  "done-for-you-shorts",
  "ai-video-editing-service",
  "fast-video-editing-service",
  "opus-clip-alternative",
  "capcut-alternative",
  "descript-alternative",
  "best-ai-video-editing-tool",
  "best-video-repurposing-tool",
  "best-enterprise-video-editor",
  "best-agency-video-editing-tool",
  "ai-video-editing-for-enterprises",
  "professional-shorts-editing",
  "managed-video-editing",
];
const SHORT_VIDEO_EDITOR_RESOURCES = [
  {
    title: "Best Shorts Editing Service",
    href: "/blog/best-shorts-editing-service",
    body: "What to check before buying a Shorts editing service: hooks, captions, crop, QA, turnaround, and revisions.",
  },
  {
    title: "YouTube Shorts Editing Service",
    href: "/blog/youtube-shorts-editing-service",
    body: "A YouTube Shorts editing service guide for creators and teams turning existing footage into ready-to-post Shorts.",
  },
  {
    title: "Opus Clip Alternative",
    href: "/blog/opus-clip-alternative",
    body: "When managed short-form editing makes more sense than a self-serve AI clipping workflow.",
  },
  {
    title: "Video Operations Guide",
    href: "/blog/video-operations-guide",
    body: "A practical guide to intake, production queues, QA, review, delivery, publishing, and metrics.",
  },
  {
    title: "Video QA Workflow",
    href: "/blog/video-qa-workflow",
    body: "A quality-control workflow for captions, audio, crop, export settings, brand fit, and delivery readiness.",
  },
  {
    title: "Video Delivery Workflow",
    href: "/blog/video-delivery-workflow",
    body: "How to move approved edits into clean final exports, folders, posting notes, and archive records.",
  },
  {
    title: "Agency Video Editing Workflow",
    href: "/blog/agency-video-editing-workflow",
    body: "A delivery workflow for agencies managing client briefs, batches, reviews, revisions, and final exports.",
  },
  {
    title: "Done For You Shorts",
    href: "/blog/done-for-you-shorts",
    body: "What a reliable done-for-you Shorts workflow should include before you hand off footage.",
  },
  {
    title: "Video Repurposing Service",
    href: "/video-repurposing",
    body: "Turn podcasts, webinars, interviews, lectures, press conferences, and YouTube videos into focused Shorts.",
  },
  {
    title: "Newsroom Video Workflow",
    href: "/blog/newsroom-video-workflow",
    body: "A workflow map for source intake, clipping, approvals, captions, publishing, and archive reuse.",
  },
  {
    title: "High Volume News Editing",
    href: "/blog/high-volume-news-editing",
    body: "How publishers can increase video output with templates, AI-assisted prep, review queues, and quality control.",
  },
  {
    title: "Reduce News Editing Time",
    href: "/blog/reduce-news-editing-time",
    body: "Workflow fixes for faster newsroom video turnaround without removing editorial checks.",
  },
  {
    title: "Turn Podcast into Shorts",
    href: "/video-repurposing/turn-podcast-into-shorts",
    body: "Send a podcast episode and get a focused Short from one guest answer, story, claim, or teaching moment.",
  },
  {
    title: "Turn Webinar into Shorts",
    href: "/video-repurposing/turn-webinar-into-shorts",
    body: "Repurpose a webinar replay into one useful teaching moment, Q&A answer, framework, or demo clip.",
  },
  {
    title: "Turn Product Demo into Shorts",
    href: "/blog/turn-product-demo-into-shorts",
    body: "A product clip workflow built around one buyer pain, one visible feature, and one result.",
  },
  {
    title: "Turn Internal Meeting into Shorts",
    href: "/blog/turn-internal-meeting-into-shorts",
    body: "Private clip guidance for training, alignment, permissions, and internal review.",
  },
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

await mkdir(path.join(distDir, "video-repurposing"), { recursive: true });
await writeFile(
  path.join(distDir, "video-repurposing", "index.html"),
  buildPage(template, videoRepurposingSeo(), renderShell(renderVideoRepurposingPage()))
);

for (const page of videoRepurposingChildPages) {
  const outputDir = path.join(distDir, "video-repurposing", page.slug);
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    path.join(outputDir, "index.html"),
    buildPage(template, videoRepurposingSeo(page), renderShell(renderVideoRepurposingPage(page)))
  );
}

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

const sitemap = buildSitemap(posts);
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(path.join(rootDir, "public", "sitemap.xml"), sitemap);

console.log(`Prerendered ${posts.length} blog posts and ${videoRepurposingChildPages.length + 1} video repurposing pages and wrote sitemap.`);

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

  const shortsPostsPath = path.join(rootDir, "src", "posts", "programmaticShortsPosts.js");
  const shortsModule = await import(pathToFileURL(shortsPostsPath).href);
  const programmaticPosts = shortsModule.programmaticShortsPosts || [];
  const newsroomPostsPath = path.join(rootDir, "src", "posts", "newsroomWorkflowPosts.js");
  const newsroomModule = await import(pathToFileURL(newsroomPostsPath).href);
  const newsroomWorkflowPosts = newsroomModule.newsroomWorkflowPosts || [];
  const agencyPostsPath = path.join(rootDir, "src", "posts", "agencyWorkflowPosts.js");
  const agencyModule = await import(pathToFileURL(agencyPostsPath).href);
  const agencyWorkflowPosts = agencyModule.agencyWorkflowPosts || [];
  const videoOperationsPostsPath = path.join(rootDir, "src", "posts", "videoOperationsPosts.js");
  const videoOperationsModule = await import(pathToFileURL(videoOperationsPostsPath).href);
  const videoOperationsPosts = videoOperationsModule.videoOperationsPosts || [];
  const servicePostsPath = path.join(rootDir, "src", "posts", "serviceComparisonPosts.js");
  const serviceModule = await import(pathToFileURL(servicePostsPath).href);
  const serviceComparisonPosts = serviceModule.serviceComparisonPosts || [];

  return [
    ...parsed.slice(0, 2),
    ...newsroomWorkflowPosts,
    ...agencyWorkflowPosts,
    ...videoOperationsPosts,
    ...serviceComparisonPosts,
    parsed[2],
    ...programmaticPosts,
    ...parsed.slice(3),
  ].filter(Boolean);
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

function videoRepurposingSeo(page = null) {
  return {
    title: page?.seoTitle || VIDEO_REPURPOSING_TITLE,
    description: page?.description || VIDEO_REPURPOSING_DESCRIPTION,
    path: page?.path || VIDEO_REPURPOSING_BASE_PATH,
    type: "website",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: page ? `${page.title} service by Dalaillama` : "Dalaillama video repurposing service",
    structuredData: videoRepurposingStructuredData(page),
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

function videoRepurposingStructuredData(page = null) {
  const pathName = page?.path || VIDEO_REPURPOSING_BASE_PATH;
  const title = page?.title || "Video Repurposing";
  const description = page?.description || VIDEO_REPURPOSING_DESCRIPTION;
  const breadcrumbItems = page
    ? [
        ["Home", "/"],
        ["Video Repurposing", VIDEO_REPURPOSING_BASE_PATH],
        [page.title, page.path],
      ]
    : [
        ["Home", "/"],
        ["Video Repurposing", VIDEO_REPURPOSING_BASE_PATH],
      ];
  const faqItems = page
    ? [
        {
          question: `What do I get when I ${page.title.toLowerCase()}?`,
          answer: page.outcome,
        },
        {
          question: `What should I send for ${page.source.toLowerCase()} repurposing?`,
          answer: page.intake.join(", "),
        },
      ]
    : videoRepurposingHub.faq;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Dalaillama ${title}`,
      serviceType: page ? page.title : "Video repurposing service",
      url: `${SITE_URL}${pathName}`,
      description,
      areaServed: "Worldwide",
      provider: {
        "@type": "Organization",
        name: "Dalaillama",
        url: SITE_URL,
      },
    },
    breadcrumbStructuredData(breadcrumbItems),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
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
            <a href="/video-repurposing">Video Repurposing</a>
            <a href="/#order">Order</a>
            <a href="/#production-guides">Production Guides</a>
            <a href="/blog">Editing Guides</a>
          </nav>
        </header>
        <main>${content}</main>
        <footer class="site-footer" aria-label="Short video editing resources">
          <a href="/short-video-editor">Short Video Editor Service</a>
          <a href="/video-repurposing">Video Repurposing Service</a>
          <a href="/blog/newsroom-video-workflow">Newsroom Video Workflow</a>
          <a href="/blog/agency-video-editing-workflow">Agency Video Editing Workflow</a>
          <a href="/blog/video-operations-guide">Video Operations Guide</a>
          <a href="/video-repurposing/turn-podcast-into-shorts">Turn Podcast into Shorts</a>
          <a href="/blog/best-shorts-editing-service">Best Shorts Editing Service</a>
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
    body: "Send existing video and get a ready-to-post vertical Short back within 30 minutes.",
    },
    ...SHORT_VIDEO_EDITOR_RESOURCES.slice(0, 3),
  ];

  return `
    <article class="landing-page">
      <section class="landing-hero studio-hero">
        <div class="hero-copy">
          <p class="kicker">Done-for-you short video editing</p>
          <h1>Short video editing done for you in 30 minutes.</h1>
          <div class="hero-body">
            <p>Send us the video. We create the Short for you.</p>
            <p>Share a long video, raw clip, podcast, webinar, interview, demo, or founder video. We manually edit it, add captions and polish, then return a ready-to-post short-form video.</p>
            <p>The promise is simple: your video becomes a finished Short in 30 minutes.</p>
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
  const newsroomWorkflowPosts = NEWSROOM_WORKFLOW_SLUGS.map((slug) => allPosts.find((post) => post.slug === slug)).filter(Boolean);
  const agencyWorkflowPosts = AGENCY_WORKFLOW_SLUGS.map((slug) => allPosts.find((post) => post.slug === slug)).filter(Boolean);
  const videoOperationsPosts = VIDEO_OPERATIONS_SLUGS.map((slug) => allPosts.find((post) => post.slug === slug)).filter(Boolean);
  const serviceComparisonPosts = SERVICE_COMPARISON_SLUGS.map((slug) => allPosts.find((post) => post.slug === slug)).filter(Boolean);
  const sourceToShortsPosts = allPosts.filter((post) => post.slug.startsWith("turn-"));

  return `
    <article class="page essay-page">
      <p class="back-link"><a href="/">Back to home</a></p>
      <h1>Video Editing Guides</h1>
      <p>Practical guides for turning long, raw, or rough footage into focused short-form videos with stronger hooks, cleaner captions, better pacing, and reliable review.</p>
      <section class="blog-featured-block" aria-label="Newsroom video operations guides">
        <h2>Newsroom Video Operations Guides</h2>
        <p class="empty-note">Focused guides for publishers, broadcasters, video desks, and editorial operations teams improving AI-assisted newsroom video workflows without weakening editorial review.</p>
        ${renderGuideCards(newsroomWorkflowPosts)}
      </section>
      <section class="blog-featured-block" aria-label="Agency video operations guides">
        <h2>Agency Video Operations Guides</h2>
        <p class="empty-note">Focused guides for agencies managing client Shorts, white-label editing, batching, approval, QA, templates, metrics, outsourcing, and fast delivery.</p>
        ${renderGuideCards(agencyWorkflowPosts)}
      </section>
      <section class="blog-featured-block" aria-label="Video production operations guides">
        <h2>Video Production Operations Guides</h2>
        <p class="empty-note">Broader operations guides for teams reducing turnaround, increasing throughput, fixing review bottlenecks, scaling production, and managing high-volume video delivery.</p>
        ${renderGuideCards(videoOperationsPosts)}
      </section>
      <section class="blog-featured-block" aria-label="Service and tool evaluation guides">
        <h2>Service and Tool Evaluation Guides</h2>
        <p class="empty-note">Evaluation guides for choosing Shorts editing services, podcast clipping, AI video tools, managed editing, and alternatives to self-serve editing software.</p>
        ${renderGuideCards(serviceComparisonPosts)}
      </section>
      <section class="blog-featured-block" aria-label="Source-to-Shorts conversion guides">
        <h2>Source-to-Shorts Conversion Guides</h2>
        <p class="empty-note">Focused source-specific guides for turning podcasts, interviews, webinars, meetings, broadcasts, events, investor updates, sports footage, and civic recordings into Shorts.</p>
        ${renderGuideCards(sourceToShortsPosts)}
      </section>
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

function renderVideoRepurposingPage(page = null) {
  if (page) return renderVideoRepurposingChild(page);
  const hubMetrics = [
    ["Source", "Podcast, webinar, interview, lecture, YouTube video, or press conference"],
    ["Decision", "One useful moment with context, hook, captions, crop, and review"],
    ["Output", "A ready-to-post vertical Short for Shorts, Reels, TikTok, or LinkedIn"],
  ];

  return `
    <article class="page essay-page service-page video-repurposing-page">
      <p class="back-link"><a href="/">Back to home</a></p>
      <section class="service-hero video-repurposing-hero">
        <p class="kicker">${escapeHtml(videoRepurposingHub.kicker)}</p>
        <h1>${escapeHtml(videoRepurposingHub.headline)}</h1>
        <div class="hero-body">
          ${videoRepurposingHub.intro.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        </div>
        <div class="hero-actions">
          <a class="creator-primary hero-button" href="/#access">Send a Long Video</a>
          <a class="creator-secondary hero-button" href="#repurposing-formats">Choose Source Format</a>
        </div>
      </section>
      <section class="landing-section split-section video-repurposing-overview">
        <div>
          <p class="kicker">Repurposing map</p>
          <h2>One long recording becomes one intentional Short.</h2>
        </div>
        <div class="repurposing-board creator-panel-muted" aria-label="Video repurposing workflow">
          ${hubMetrics
            .map(
              ([label, body], index) => `
                <div class="repurposing-board-row">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>${escapeHtml(label)}</strong>
                    <p>${escapeHtml(body)}</p>
                  </div>
                </div>`
            )
            .join("")}
        </div>
      </section>
      <section class="landing-section writing-section" id="repurposing-formats">
        <p class="kicker">Source formats</p>
        <h2>Choose the source format you already have.</h2>
        ${renderLinkCards(
          videoRepurposingChildPages.map((item) => ({
            title: item.title,
            href: item.path,
            body: item.description,
          }))
        )}
      </section>
      <section class="landing-section split-section">
        <div>
          <p class="kicker">Workflow</p>
          <h2>How we keep the edit useful instead of generic.</h2>
        </div>
        <div class="stage-list">
          ${renderStageRows(videoRepurposingHub.workflow)}
        </div>
      </section>
      ${renderAuthoritySection()}
      <section class="landing-section access-section creator-panel" id="repurposing-order">
        <div>
          <p class="kicker">Send a source video</p>
          <h2>Get one focused Short back.</h2>
          <p>Share the recording, target platform, and what the Short should achieve. We handle the edit, captions, crop, polish, and upload-back.</p>
        </div>
      </section>
    </article>`;
}

function renderVideoRepurposingChild(page) {
  const relatedPages = page.relatedSlugs.map(getVideoRepurposingPage).filter(Boolean);

  return `
    <article class="page essay-page service-page video-repurposing-page">
      <p class="back-link"><a href="${escapeAttribute(VIDEO_REPURPOSING_BASE_PATH)}">Back to video repurposing</a></p>
      <section class="service-hero video-repurposing-hero">
        <p class="kicker">${escapeHtml(page.kicker)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <div class="hero-body">
          <p>${escapeHtml(page.problem)}</p>
          <p>${escapeHtml(page.outcome)}</p>
        </div>
        <div class="hero-actions">
          <a class="creator-primary hero-button" href="#repurposing-order">Send This Source</a>
          <a class="creator-secondary hero-button" href="${escapeAttribute(page.blogHref)}">Read Workflow Guide</a>
        </div>
      </section>
      <section class="landing-section writing-section">
        <p class="kicker">Fit</p>
        <h2>What makes this source worth repurposing.</h2>
        <div class="guide-link-grid source-fit-grid">
          <div class="guide-link-card creator-panel-muted">
            <span>Best moment</span>
            <small>${escapeHtml(page.bestMoment)}</small>
          </div>
          <div class="guide-link-card creator-panel-muted">
            <span>Avoid</span>
            <small>${escapeHtml(page.avoid)}</small>
          </div>
          <div class="guide-link-card creator-panel-muted">
            <span>Audience</span>
            <small>${escapeHtml(page.audience)}</small>
          </div>
        </div>
      </section>
      <section class="landing-section split-section">
        <div>
          <p class="kicker">Edit workflow</p>
          <h2>How we turn a ${escapeHtml(page.source.toLowerCase())} into a Short.</h2>
        </div>
        <div class="stage-list">
          ${renderStageRows(page.workflow)}
        </div>
      </section>
      <section class="landing-section split-section">
        <div>
          <p class="kicker">Handoff</p>
          <h2>What to send and what we check before delivery.</h2>
        </div>
        <div class="handoff-grid">
          ${renderChecklistCard("Send us", page.intake)}
          ${renderChecklistCard("Quality checks", page.qualityChecks)}
        </div>
      </section>
      <section class="landing-section writing-section">
        <p class="kicker">Related formats</p>
        <h2>Other source videos we can repurpose.</h2>
        ${renderLinkCards(
          relatedPages.map((item) => ({
            title: item.title,
            href: item.path,
            body: item.description,
          }))
        )}
      </section>
      ${renderAuthoritySection()}
      <section class="landing-section access-section creator-panel" id="repurposing-order">
        <div>
          <p class="kicker">Order this edit</p>
          <h2>Send the ${escapeHtml(page.source.toLowerCase())}. We will create the Short.</h2>
          <p>Include the source link or file, platform, and any names or approval rules we should respect. We return a captioned vertical Short ready for review or posting.</p>
        </div>
      </section>
    </article>`;
}

function renderStageRows(items) {
  return items
    .map(
      (item, index) => `
        <div class="stage-row">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(item)}</p>
        </div>`
    )
    .join("");
}

function renderChecklistCard(title, items) {
  return `
    <div class="creator-panel-muted checklist-card">
      <h3>${escapeHtml(title)}</h3>
      <ul class="plain-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>`;
}

function renderAuthoritySection() {
  return `
    <section class="landing-section writing-section">
      <p class="kicker">References</p>
      <h2>Authority links used as publishing guardrails.</h2>
      ${renderLinkCards(videoRepurposingAuthorityLinks.map((link) => ({
        title: link.label,
        href: link.href,
        body: link.body,
      })))}
    </section>`;
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
          <p>Send a long recording, podcast clip, webinar, interview, product demo, founder video, or raw phone footage. We manually edit the moment, add captions and sound polish, then return one finished Short within 30 minutes.</p>
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

function buildSitemap(allPosts) {
  const urls = [
    {
      loc: "/",
      lastmod: CURRENT_LASTMOD,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: "/short-video-editor",
      lastmod: CURRENT_LASTMOD,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: VIDEO_REPURPOSING_BASE_PATH,
      lastmod: CURRENT_LASTMOD,
      changefreq: "weekly",
      priority: "0.9",
    },
    ...videoRepurposingChildPages.map((page) => ({
      loc: page.path,
      lastmod: CURRENT_LASTMOD,
      changefreq: "weekly",
      priority: "0.85",
    })),
    {
      loc: "/blog",
      lastmod: CURRENT_LASTMOD,
      changefreq: "monthly",
      priority: "0.6",
    },
    ...allPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: isoDate(post.date) || CURRENT_LASTMOD,
      changefreq: "monthly",
      priority: post.slug.startsWith("turn-") ? "0.8" : "0.7",
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderSitemapUrl).join("\n")}
</urlset>
`;
}

function renderSitemapUrl(item) {
  return `  <url>
    <loc>${escapeXml(`${SITE_URL}${item.loc}`)}</loc>
    <lastmod>${escapeXml(item.lastmod)}</lastmod>
    <changefreq>${escapeXml(item.changefreq)}</changefreq>
    <priority>${escapeXml(item.priority)}</priority>
  </url>`;
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

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
