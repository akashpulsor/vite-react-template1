import { useEffect } from "react";
import { trackPageView } from "./analytics.js";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import BrandLogo from "./components/BrandLogo.jsx";
import { getPostBySlug } from "./posts/index.js";

const SITE_URL = "https://dalaillama.in";
const DEFAULT_DESCRIPTION =
  "Dalaillama turns your video into short-form content fast. Send the source video and get a ready-to-post Short back in 2 hours.";
const DEFAULT_SOCIAL_IMAGE = "/social-card.svg";

function routeFromPath(pathname) {
  if (pathname === "/blog") return { page: "blog" };
  if (pathname.startsWith("/blog/")) {
    return { page: "post", slug: pathname.replace("/blog/", "").replace(/\/$/, "") };
  }
  return { page: "home" };
}

export default function App() {
  const route = routeFromPath(window.location.pathname);
  const post = route.page === "post" ? getPostBySlug(route.slug) : null;

  useEffect(() => {
    const seo = seoForRoute(route, post);
    applySeo(seo);
    applyStructuredData(seo.structuredData);
    trackPageView(window.location.pathname + window.location.search + window.location.hash);
  }, [route.page, route.slug, post]);

  return (
    <div className="creator-app">
      <div className="site-shell">
        <header className="topbar creator-panel-muted">
          <a className="wordmark" href="/" aria-label="Dalaillama Creator Studio home">
            <BrandLogo />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="/" data-ga-event="nav_click" data-ga-label="Dashboard">Dashboard</a>
            <a href="/#problem" data-ga-event="nav_click" data-ga-label="Problem">Problem</a>
            <a href="/#crew" data-ga-event="nav_click" data-ga-label="How it helps">How it helps</a>
            <a href="/#order" data-ga-event="nav_click" data-ga-label="Order details">Order</a>
            <a href="/#polish" data-ga-event="nav_click" data-ga-label="Polish">Polish</a>
            <a href="/#access" data-ga-event="nav_click" data-ga-label="Access">Access</a>
            <a href="/blog" data-ga-event="nav_click" data-ga-label="Blogs and case studies">Blogs & Case Studies</a>
          </nav>
        </header>
        <main>
          {route.page === "blog" && <Blog />}
          {route.page === "post" && <BlogPost slug={route.slug} />}
          {route.page === "home" && <Home />}
        </main>
      </div>
    </div>
  );
}

function seoForRoute(route, post) {
  if (route.page === "blog") {
    return {
      title: "Blogs & Case Studies | Dalaillama Creator Studio",
      description: "Blogs and case studies about creator production, shot planning, polishing phone footage, and building shorts people want to watch.",
      path: "/blog",
      image: DEFAULT_SOCIAL_IMAGE,
      imageAlt: "Dalaillama Creator Studio logo",
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
    title: "Dalaillama Creator Studio",
    description: DEFAULT_DESCRIPTION,
    path: "/",
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: "Dalaillama Creator Studio logo",
  };
}

function applySeo({ title, description, keywords = [], path, image = DEFAULT_SOCIAL_IMAGE, imageAlt = "", type = "website", articlePublishedTime = "" }) {
  const absoluteImage = absoluteUrl(image);
  document.title = title;
  setMeta("description", description);
  if (keywords.length) setMeta("keywords", keywords.join(", "));
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
  return {
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
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
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
