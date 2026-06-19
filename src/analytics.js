const GOOGLE_TAG_SCRIPT_ID = "dalaillama-landing-ga4";
const DEFAULT_GA_MEASUREMENT_ID = "G-YVWC0J9JC3";
const SCROLL_DEPTH_MARKS = [25, 50, 75, 90];
const SOCIAL_LINK_HOSTS = [
  "twitter.com",
  "x.com",
  "linkedin.com",
  "wa.me",
  "whatsapp.com",
  "instagram.com",
  "youtube.com",
  "youtu.be",
  "facebook.com",
  "threads.net",
  "tiktok.com",
];

let initialized = typeof window !== "undefined" && window.__DALAILLAMA_GA4_INITIALIZED__ === true;
let lastTrackedPath = "";

export function initGoogleAnalytics() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const measurementId = googleAnalyticsMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!hasGoogleTagScript()) {
    const script = document.createElement("script");
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  if (!initialized) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId);
    window.__DALAILLAMA_GA4_INITIALIZED__ = true;
    window.__DALAILLAMA_GA4_AUTO_PAGE_VIEW__ = true;
    initialized = true;
  }
}

export function trackPageView(path = window.location.pathname + window.location.search + window.location.hash) {
  const measurementId = googleAnalyticsMeasurementId();
  if (!measurementId || typeof window.gtag !== "function") return;
  if (lastTrackedPath === path) return;

  if (!lastTrackedPath && usesAutomaticPageView()) {
    lastTrackedPath = path;
    return;
  }

  lastTrackedPath = path;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    transport_type: "beacon",
    ...params,
  });
}

export function initLandingClickTracking() {
  if (typeof document === "undefined" || document.__dalaillamaClickTracking) return;
  document.__dalaillamaClickTracking = true;

  document.addEventListener("click", (event) => {
    const clickedElement = event.target instanceof Element ? event.target : null;
    if (!clickedElement) return;

    const trackedElement = clickedElement.closest("[data-ga-event]");
    if (trackedElement) trackDatasetClick(trackedElement);

    const outboundLink = clickedElement.closest("a[href]");
    if (outboundLink) trackOutboundDrive(outboundLink);
  });
}

export function initSectionViewTracking() {
  if (typeof window === "undefined" || typeof document === "undefined" || document.__dalaillamaSectionTracking) return;
  if (!("IntersectionObserver" in window)) return;
  document.__dalaillamaSectionTracking = true;

  const seen = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seen.has(entry.target.id)) return;
        seen.add(entry.target.id);
        trackEvent("section_view", {
          event_category: "landing",
          event_label: entry.target.id,
          section_id: entry.target.id,
          section_name: sectionName(entry.target),
        });
      });
    },
    { threshold: 0.45 }
  );

  window.requestAnimationFrame(() => {
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
  });
}

export function initScrollDepthTracking() {
  if (typeof window === "undefined" || typeof document === "undefined" || document.__dalaillamaScrollTracking) return;
  document.__dalaillamaScrollTracking = true;

  const seen = new Set();
  let ticking = false;

  const reportDepth = () => {
    ticking = false;
    const depth = currentScrollDepth();

    SCROLL_DEPTH_MARKS.forEach((mark) => {
      if (depth < mark || seen.has(mark)) return;
      seen.add(mark);
      trackEvent("scroll_depth", {
        event_category: "engagement",
        event_label: `${mark}%`,
        percent_scrolled: mark,
      });
    });

    if (seen.size === SCROLL_DEPTH_MARKS.length) {
      window.removeEventListener("scroll", requestDepthReport);
      window.removeEventListener("resize", requestDepthReport);
    }
  };

  const requestDepthReport = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(reportDepth);
  };

  window.addEventListener("scroll", requestDepthReport, { passive: true });
  window.addEventListener("resize", requestDepthReport);
  requestDepthReport();
}

function trackDatasetClick(target) {
  const eventName = target.dataset.gaEvent;
  if (!eventName) return;

  if (eventName === "cta_click") {
    trackEvent("cta_click", {
      cta_location: target.dataset.gaCtaLocation || "unspecified",
      cta_text: target.dataset.gaCtaText || normalizedText(target) || "CTA",
    });
    return;
  }

  trackEvent(eventName, {
    event_category: target.dataset.gaCategory || "landing",
    event_label: target.dataset.gaLabel || normalizedText(target) || safeAnalyticsHref(target) || "",
    link_url: safeAnalyticsHref(target) || undefined,
  });
}

function trackOutboundDrive(anchor) {
  const drive = outboundDrive(anchor);
  if (!drive) return;

  trackEvent(drive.isSocial ? "social_link_click" : "outbound_link_click", {
    event_category: "engagement",
    event_label: normalizedText(anchor) || drive.label,
    link_domain: drive.domain,
    link_type: drive.type,
    link_url: drive.safeUrl,
  });
}

function outboundDrive(anchor) {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return null;

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }

  const protocol = url.protocol;
  const hostname = url.hostname.toLowerCase();
  const isHttp = protocol === "http:" || protocol === "https:";
  const isContactLink = ["mailto:", "tel:", "sms:", "whatsapp:"].includes(protocol);
  const isSocial = hostname ? SOCIAL_LINK_HOSTS.some((host) => hostname === host || hostname.endsWith(`.${host}`)) : protocol === "whatsapp:";
  const isExternalHttp = isHttp && hostname !== window.location.hostname.toLowerCase();

  if (!isContactLink && !isSocial && !isExternalHttp) return null;

  return {
    domain: hostname || protocol.replace(":", ""),
    isSocial,
    label: hostname || protocol.replace(":", ""),
    safeUrl: safeAnalyticsHref(anchor),
    type: isSocial ? "social" : isContactLink ? protocol.replace(":", "") : "outbound",
  };
}

function safeAnalyticsHref(element) {
  const href = element.getAttribute("href");
  if (!href) return "";

  if (/^(mailto|tel|sms|whatsapp):/i.test(href)) {
    return href.split("?")[0];
  }

  return href;
}

function currentScrollDepth() {
  const body = document.body;
  const root = document.documentElement;
  const viewportHeight = window.innerHeight || root.clientHeight || 0;
  const scrollTop = window.scrollY || root.scrollTop || body.scrollTop || 0;
  const pageHeight = Math.max(
    body.scrollHeight,
    root.scrollHeight,
    body.offsetHeight,
    root.offsetHeight,
    body.clientHeight,
    root.clientHeight
  );

  if (pageHeight <= viewportHeight) return 100;
  return Math.min(100, Math.round(((scrollTop + viewportHeight) / pageHeight) * 100));
}

function hasGoogleTagScript() {
  return Boolean(
    document.getElementById(GOOGLE_TAG_SCRIPT_ID) ||
      document.querySelector('script[src^="https://www.googletagmanager.com/gtag/js?id="]')
  );
}

function sectionName(section) {
  return section.querySelector("h1, h2, .kicker")?.textContent?.trim() || section.id;
}

function normalizedText(element) {
  return element.textContent?.replace(/\s+/g, " ").trim() || element.getAttribute("aria-label") || "";
}

function googleAnalyticsMeasurementId() {
  const runtimeEnv = typeof window !== "undefined" ? window.__ENV__ || {} : {};
  return firstText(
    runtimeEnv.GA_MEASUREMENT_ID,
    runtimeEnv.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    import.meta.env.VITE_GA_MEASUREMENT_ID,
    import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID,
    DEFAULT_GA_MEASUREMENT_ID
  );
}

function firstText(...values) {
  return values.find((value) => typeof value === "string" && value.trim()) || "";
}

function usesAutomaticPageView() {
  return typeof window !== "undefined" && window.__DALAILLAMA_GA4_AUTO_PAGE_VIEW__ === true;
}
