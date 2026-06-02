const GOOGLE_TAG_SCRIPT_ID = "dalaillama-landing-ga4";
const DEFAULT_GA_MEASUREMENT_ID = "G-YVWC0J9JC3";

let initialized = false;
let lastTrackedPath = "";

export function initGoogleAnalytics() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const measurementId = googleAnalyticsMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  if (!initialized) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
    initialized = true;
  }
}

export function trackPageView(path = window.location.pathname + window.location.search + window.location.hash) {
  const measurementId = googleAnalyticsMeasurementId();
  if (!measurementId || typeof window.gtag !== "function") return;
  if (lastTrackedPath === path) return;
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
    const target = event.target.closest("[data-ga-event]");
    if (!target) return;

    trackEvent(target.dataset.gaEvent, {
      event_category: target.dataset.gaCategory || "landing",
      event_label: target.dataset.gaLabel || target.textContent?.trim() || target.getAttribute("href") || "",
      link_url: target.getAttribute("href") || undefined,
    });
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
        });
      });
    },
    { threshold: 0.45 }
  );

  window.requestAnimationFrame(() => {
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
  });
}

function googleAnalyticsMeasurementId() {
  const runtimeEnv = window.__ENV__ || {};
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
