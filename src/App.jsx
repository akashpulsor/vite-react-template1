import { useEffect } from "react";
import { trackPageView } from "./analytics.js";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import ShortVideoEditor from "./pages/ShortVideoEditor.jsx";
import VideoRepurposing from "./pages/VideoRepurposing.jsx";
import BrandLogo from "./components/BrandLogo.jsx";
import { getPostBySlug } from "./posts/index.js";
import { getVideoRepurposingPage, videoRepurposingHub } from "./videoRepurposingPages.js";

const SITE_URL = "https://dalaillama.in";
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

function routeFromPath(pathname) {
  if (pathname === "/short-video-editor" || pathname === "/short-video-editor/") return { page: "shortVideoEditor" };
  if (pathname === "/video-repurposing" || pathname === "/video-repurposing/") return { page: "videoRepurposing" };
  if (pathname.startsWith("/video-repurposing/")) {
    return { page: "videoRepurposingChild", slug: pathname.replace("/video-repurposing/", "").replace(/\/$/, "") };
  }
  if (pathname === "/blog" || pathname === "/blog/") return { page: "blog" };
  if (pathname.startsWith("/blog/")) {
    return { page: "post", slug: pathname.replace("/blog/", "").replace(/\/$/, "") };
  }
  return { page: "home" };
}

export default function App() {
  const route = routeFromPath(window.location.pathname);
  const post = route.page === "post" ? getPostBySlug(route.slug) : null;
  const videoRepurposingPage = route.page === "videoRepurposingChild" ? getVideoRepurposingPage(route.slug) : null;

  useEffect(() => {
    const seo = seoForRoute(route, post, videoRepurposingPage);
    applySeo(seo);
    applyStructuredData(seo.structuredData);
    trackPageView(window.location.pathname + window.location.search + window.location.hash);
  }, [route.page, route.slug, post, videoRepurposingPage]);

  return (
    <div className="creator-app">
      <div className="site-shell">
        <header className="topbar creator-panel-muted">
          <a className="wordmark" href="/" aria-label="Dalaillama home">
            <BrandLogo />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="/" data-ga-event="nav_click" data-ga-label="Home">Home</a>
            <a href="/short-video-editor" data-ga-event="nav_click" data-ga-label="Short video editor">Short Video Editor</a>
            <a href="/video-repurposing" data-ga-event="nav_click" data-ga-label="Video repurposing">Video Repurposing</a>
            <a href="/#problem" data-ga-event="nav_click" data-ga-label="Problem">Problem</a>
            <a href="/#crew" data-ga-event="nav_click" data-ga-label="How it helps">How it helps</a>
            <a href="/#order" data-ga-event="nav_click" data-ga-label="Order details">Order</a>
            <a href="/#polish" data-ga-event="nav_click" data-ga-label="Polish">Polish</a>
            <a href="/#access" data-ga-event="nav_click" data-ga-label="Access">Access</a>
            <a href="/blog" data-ga-event="nav_click" data-ga-label="Editing guides">Editing Guides</a>
          </nav>
        </header>
        <main>
          {route.page === "blog" && <Blog />}
          {route.page === "post" && <BlogPost slug={route.slug} />}
          {route.page === "shortVideoEditor" && <ShortVideoEditor />}
          {route.page === "videoRepurposing" && <VideoRepurposing />}
          {route.page === "videoRepurposingChild" && <VideoRepurposing slug={route.slug} />}
          {route.page === "home" && <Home />}
        </main>
        <footer className="site-footer" aria-label="Short video editing resources">
          <a href="/short-video-editor" data-ga-event="footer_link_click" data-ga-label="Short Video Editor Service">Short Video Editor Service</a>
          <a href="/video-repurposing" data-ga-event="footer_link_click" data-ga-label="Video Repurposing Service">Video Repurposing Service</a>
          <a href="/blog/ai-video-workflow-digital-publishers" data-ga-event="footer_link_click" data-ga-label="AI video workflow for digital publishers">AI Video Workflow for Publishers</a>
          <a href="/blog/ai-video-editing-newsrooms" data-ga-event="footer_link_click" data-ga-label="AI video editing for newsrooms">AI Video Editing for Newsrooms</a>
          <a href="/blog/newsroom-video-workflow" data-ga-event="footer_link_click" data-ga-label="Newsroom video workflow">Newsroom Video Workflow</a>
          <a href="/blog/agency-video-editing-workflow" data-ga-event="footer_link_click" data-ga-label="Agency video editing workflow">Agency Video Editing Workflow</a>
          <a href="/blog/video-operations-guide" data-ga-event="footer_link_click" data-ga-label="Video operations guide">Video Operations Guide</a>
          <a href="/video-repurposing/turn-podcast-into-shorts" data-ga-event="footer_link_click" data-ga-label="Turn Podcast into Shorts">Turn Podcast into Shorts</a>
          <a href="/blog/best-shorts-editing-service" data-ga-event="footer_link_click" data-ga-label="Best Shorts editing service">Best Shorts Editing Service</a>
          <a href="/blog/short-form-video-editor-attention-span" data-ga-event="footer_link_click" data-ga-label="Short-form video editing guide">Short-Form Video Editing Guide</a>
          <a href="/blog/reel-patterns-worth-editing" data-ga-event="footer_link_click" data-ga-label="Reel editing patterns">Reel Editing Patterns</a>
          <a href="/blog/youtube-shorts-hooks" data-ga-event="footer_link_click" data-ga-label="YouTube Shorts hooks">YouTube Shorts Hooks</a>
          <a href="/#access" data-ga-event="footer_link_click" data-ga-label="Send a video">Send a Video</a>
        </footer>
      </div>
    </div>
  );
}

function seoForRoute(route, post, videoRepurposingPage) {
  if (route.page === "shortVideoEditor") {
    return {
      title: SHORT_VIDEO_EDITOR_TITLE,
      description: SHORT_VIDEO_EDITOR_DESCRIPTION,
      path: "/short-video-editor",
      image: DEFAULT_SOCIAL_IMAGE,
      imageAlt: "Dalaillama short video editor service",
      structuredData: shortVideoEditorStructuredData(),
    };
  }

  if (route.page === "videoRepurposing") {
    return {
      title: VIDEO_REPURPOSING_TITLE,
      description: VIDEO_REPURPOSING_DESCRIPTION,
      path: "/video-repurposing",
      image: DEFAULT_SOCIAL_IMAGE,
      imageAlt: "Dalaillama video repurposing service",
      structuredData: videoRepurposingStructuredData(),
    };
  }

  if (route.page === "videoRepurposingChild" && videoRepurposingPage) {
    return {
      title: videoRepurposingPage.seoTitle,
      description: videoRepurposingPage.description,
      path: videoRepurposingPage.path,
      image: DEFAULT_SOCIAL_IMAGE,
      imageAlt: `${videoRepurposingPage.title} service by Dalaillama`,
      structuredData: videoRepurposingStructuredData(videoRepurposingPage),
    };
  }

  if (route.page === "blog") {
    return {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      path: "/blog",
      image: DEFAULT_SOCIAL_IMAGE,
      imageAlt: "Dalaillama short video editing guides",
    };
  }

  if (route.page === "post" && post) {
    const path = `/blog/${post.slug}`;
    const image = post.heroImage || DEFAULT_SOCIAL_IMAGE;
    return {
      title: `${post.title} | Dalaillama`,
      description: post.description || post.body.replace(/[#*_`>-]/g, "").replace(/\s+/g, " ").slice(0, 155),
      keywords: post.keywords || [],
      path,
      image,
      imageAlt: post.heroImageAlt || post.title,
      type: "article",
      articlePublishedTime: isoDate(post.date),
      structuredData: articleStructuredData(post, path, image),
    };
  }

  return {
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama short video editor service",
  };
}

function videoRepurposingStructuredData(page = null) {
  const path = page?.path || "/video-repurposing";
  const title = page?.title || "Video Repurposing";
  const description = page?.description || VIDEO_REPURPOSING_DESCRIPTION;
  const serviceType = page ? page.title : "Video repurposing service";
  const breadcrumbItems = page
    ? [
        ["Home", "/"],
        ["Video Repurposing", "/video-repurposing"],
        [page.title, page.path],
      ]
    : [
        ["Home", "/"],
        ["Video Repurposing", "/video-repurposing"],
      ];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Dalaillama ${title}`,
      serviceType,
      url: `${SITE_URL}${path}`,
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
      mainEntity: (page
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
        : videoRepurposingHub.faq
      ).map((item) => ({
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
      mainEntity: [
        {
          "@type": "Question",
          name: "What can I send to Dalaillama?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can send a long video, podcast clip, webinar, interview, demo, founder video, raw phone footage, Drive link, YouTube link, or downloadable file.",
          },
        },
        {
          "@type": "Question",
          name: "Is this an automatic AI clipping tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Dalaillama is a done-for-you editing service. A real editor chooses the moment, shapes the hook, trims the timeline, adds captions, polishes sound, and prepares the vertical export.",
          },
        },
        {
          "@type": "Question",
          name: "What do I get back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get one ready-to-post vertical short-form video with a tighter hook, mobile crop, readable captions, sound polish, and export suitable for YouTube Shorts, Instagram Reels, TikTok, LinkedIn, or a similar short-form platform.",
          },
        },
      ],
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

function applySeo({ title, description, path, image = DEFAULT_SOCIAL_IMAGE, imageAlt = "", type = "website", articlePublishedTime = "" }) {
  const absoluteImage = absoluteUrl(image);
  document.title = title;
  setMeta("description", description);
  removeMeta("keywords");
  setMeta("robots", "index,follow");
  setMeta("og:type", type, "property");
  setMeta("og:site_name", "dalaillama.in", "property");
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", `${SITE_URL}${path}`, "property");
  setMeta("og:image", absoluteImage, "property");
  setMeta("og:image:alt", imageAlt || title, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", absoluteImage);
  setMeta("twitter:image:alt", imageAlt || title);
  if (type === "article" && articlePublishedTime) {
    setMeta("article:published_time", articlePublishedTime, "property");
    setMeta("article:modified_time", articlePublishedTime, "property");
  } else {
    removeMeta("article:published_time", "property");
    removeMeta("article:modified_time", "property");
  }
  setCanonical(`${SITE_URL}${path}`);
}

function setMeta(name, content, attribute = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function removeMeta(name, attribute = "name") {
  document.head.querySelector(`meta[${attribute}="${name}"]`)?.remove();
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function applyStructuredData(data) {
  const id = "dalaillama-article-jsonld";
  const existing = document.getElementById(id);

  if (!data) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("script");
  element.id = id;
  element.type = "application/ld+json";
  element.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(element);
}

function articleStructuredData(post, path, image) {
  const published = isoDate(post.date);
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description || "",
      image: [absoluteUrl(image)],
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
        "@id": `${SITE_URL}${path}`,
      },
    },
    breadcrumbStructuredData([
      ["Home", "/"],
      ["Editing Guides", "/blog"],
      [post.title, path],
    ]),
  ];
}

function absoluteUrl(path) {
  if (!path) return `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
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
