import { useEffect, useState } from "react";
import { trackEvent } from "../analytics.js";

const API = "https://api.dalaillama.in/api/v1/public";
const BRANDS_SITE = "https://brands.dalaillama.in";

export const INDUSTRIES = [
  ["FASHION", "Fashion"], ["BEAUTY", "Beauty"], ["FOOD_BEVERAGE", "Food & beverage"], ["TECH", "Tech"], ["FINANCE", "Finance"],
  ["REAL_ESTATE", "Real estate"], ["EDUCATION", "Education"], ["HEALTH", "Health"], ["TRAVEL", "Travel"], ["AUTOMOTIVE", "Automotive"],
  ["ECOMMERCE", "E-commerce"], ["ENTERTAINMENT", "Entertainment"], ["OTHER", "Other"],
];
const LENGTHS = [[15, "15 seconds"], [30, "30 seconds"], [45, "45 seconds"], [60, "60 seconds"], [90, "90 seconds"]];
const BUDGETS = [["NOT_SURE", "Not sure yet"], ["UNDER_50K", "Under ₹50k"], ["FROM_50K_TO_2L", "₹50k – 2L"], ["FROM_2L_TO_8L", "₹2L – 8L"], ["OVER_8L", "Over ₹8L"]];
const TIMELINES = [["THIS_MONTH", "This month"], ["ASAP", "As soon as possible"], ["THIS_QUARTER", "This quarter"], ["EXPLORING", "Just exploring"]];

/** Closes on Escape and stops the page scrolling behind it. */
function useModal(onClose) {
  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);
}

/** Our own player for a video on the page: sound on, controls, and a request for one like it. */
export function PlayerModal({ video, onClose, onRequest }) {
  useModal(onClose);
  useEffect(() => trackEvent("video_play", { video_title: video.title, video_tag: video.tag }), [video]);
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <div className="player-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="player-frame">
          <video src={video.videoUrl} poster={video.posterUrl} controls autoPlay playsInline />
        </div>
        <div className="player-caption">
          <span className="work-tag-inline">{video.tag}</span>
          <strong>{video.title}</strong>
          {video.byline && <small>{video.byline}</small>}
          <button type="button" className="creator-primary hero-button" onClick={onRequest}
                  data-ga-event="cta_click" data-ga-cta-location="player" data-ga-cta-text="Make one like this">
            Make one like this
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * "Request a video" right on the landing page: the same request the brands site sends, without
 * signing in. Dalai Llama matches a creator for the industry, who turns it into a priced brief;
 * from an inspiration video, that video is the reference.
 */
export function InquiryModal({ prefill, onClose }) {
  useModal(onClose);
  const [form, setForm] = useState({
    contactName: "", email: "", companyName: "", websiteUrl: "", industry: prefill?.industry || "",
    message: "", durationSeconds: 30, budgetBand: "NOT_SURE", timeline: "THIS_MONTH",
  });
  const [state, setState] = useState({ status: "idle", message: "", briefUrl: null });
  const set = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    setState({ status: "sending", message: "", briefUrl: null });
    trackEvent("inquiry_submit_attempt", { event_category: "inquiry", from: prefill?.source || "landing" });
    const site = form.websiteUrl.trim();
    const body = new FormData();
    const json = (value) => new Blob([JSON.stringify(value)], { type: "application/json" });
    body.append("contact", json({
      contactName: form.contactName.trim(), email: form.email.trim(), companyName: form.companyName.trim(),
      websiteUrl: site && !/^https?:\/\//i.test(site) ? `https://${site}` : site,
    }));
    body.append("data", json({
      message: form.message.trim(), industry: form.industry || null, durationSeconds: Number(form.durationSeconds),
      budgetBand: form.budgetBand, timeline: form.timeline, languages: ["English"],
      campaignDirection: prefill?.reference || null,
    }));
    try {
      const response = await fetch(`${API}/brands/requests`, { method: "POST", body });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Couldn't send your request. Please try again.");
      trackEvent("inquiry_submit_success", { event_category: "inquiry", from: prefill?.source || "landing" });
      setState({ status: "sent", message: "", briefUrl: result.briefUrl || null });
    } catch (error) {
      trackEvent("inquiry_submit_error", { event_category: "inquiry" });
      setState({ status: "idle", message: error instanceof Error ? error.message : "Couldn't send your request.", briefUrl: null });
    }
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={onClose}>
      <div className="inquiry-modal creator-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <h2 id="inquiry-title">{prefill?.title ? "Make one like this" : "Request a video"}</h2>
        <p className="modal-lede">
          {prefill?.title
            ? `Tell us about your brand and we'll match you with a creator who can make an ad like "${prefill.title}".`
            : "Tell us what you need. We match you with a creator for your industry, and you get a brief with the price straight away."}
        </p>
        {state.status === "sent" ? (
          <div className="modal-done">
            {state.briefUrl ? (
              <>
                <p>Your brief is ready. Check the details, change anything you like, and pay the upfront share to start.</p>
                <a className="creator-primary hero-button" href={state.briefUrl}>Review brief &amp; pay</a>
              </>
            ) : (
              <p>Sent. We're matching you with a creator, usually within a day, and we'll email {form.email.trim()} the brief to review and pay.</p>
            )}
          </div>
        ) : (
          <form className="lead-form" onSubmit={submit}>
            <div className="form-grid">
              <label><span>Your name</span>
                <input required maxLength={80} autoComplete="name" value={form.contactName} onChange={set("contactName")} />
              </label>
              <label><span>Work email</span>
                <input required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@yourbrand.com" />
              </label>
              <label><span>Brand</span>
                <input maxLength={120} autoComplete="organization" value={form.companyName} onChange={set("companyName")} />
              </label>
              <label><span>Website (optional)</span>
                <input maxLength={255} autoComplete="url" value={form.websiteUrl} onChange={set("websiteUrl")} placeholder="yourbrand.com" />
              </label>
            </div>
            <label><span>Your industry</span>
              <select value={form.industry} onChange={set("industry")}>
                <option value="">Choose one</option>
                {INDUSTRIES.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
              </select>
            </label>
            <label><span>What should the video do?</span>
              <textarea required maxLength={1000} rows={3} value={form.message} onChange={set("message")}
                        placeholder="e.g. Launch our new face mist for summer, run as Instagram reels, drive online orders." />
            </label>
            <div className="form-grid form-grid-three">
              <label><span>Length</span>
                <select value={form.durationSeconds} onChange={set("durationSeconds")}>
                  {LENGTHS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label><span>Budget</span>
                <select value={form.budgetBand} onChange={set("budgetBand")}>
                  {BUDGETS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label><span>When</span>
                <select value={form.timeline} onChange={set("timeline")}>
                  {TIMELINES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
            </div>
            {state.message && <p className="form-note form-error">{state.message}</p>}
            <div className="form-actions">
              <button type="submit" disabled={state.status === "sending" || !form.message.trim()}>
                {state.status === "sending" ? "Sending…" : "Send request"}
              </button>
              <a href={`${BRANDS_SITE}/creators?then=request`}>More options (images, languages)</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
