import { useEffect } from "react";
import { trackPageView } from "./analytics.js";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import { getPostBySlug } from "./posts/index.js";

const SITE_URL = "https://dalaillama.in";
const DEFAULT_DESCRIPTION =
  "Dalaillama Creator Studio helps creators plan shorts, shoot against a real shot plan, and polish phone footage like a small production team.";

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
    trackPageView(window.location.pathname + window.location.search + window.location.hash);
  }, [route.page, route.slug, post]);

  return (
    <div className="creator-app">
      <div className="site-shell">
        <header className="topbar creator-panel-muted">
          <a className="wordmark" href="/">dalaillama.in</a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="/" data-ga-event="nav_click" data-ga-label="Dashboard">Dashboard</a>
            <a href="/#problem" data-ga-event="nav_click" data-ga-label="Problem">Problem</a>
            <a href="/#crew" data-ga-event="nav_click" data-ga-label="Crew">Crew</a>
            <a href="/#workflow" data-ga-event="nav_click" data-ga-label="Workflow">Workflow</a>
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
    };
  }

  if (route.page === "post" && post) {
    return {
      title: `${post.title} | Dalaillama`,
      description: post.body.replace(/[#*_`>-]/g, "").replace(/\s+/g, " ").slice(0, 155),
      path: `/blog/${post.slug}`,
    };
  }

  return {
    title: "Dalaillama Creator Studio",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  };
}

function applySeo({ title, description, path }) {
  document.title = title;
  setMeta("description", description);
  setMeta("robots", "index,follow");
  setMeta("og:type", "website", "property");
  setMeta("og:site_name", "dalaillama.in", "property");
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", `${SITE_URL}${path}`, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
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

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}
