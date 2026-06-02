import { useState } from "react";
import { trackEvent } from "../analytics.js";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Other",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "India",
    youtubeHandle: "",
    message: "",
    website: "",
  });
  const [state, setState] = useState({ status: "idle", message: "" });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setState({ status: "saving", message: "" });
    trackEvent("lead_submit_attempt", { event_category: "lead_form" });
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok === false) {
        throw new Error(result.message || "Could not save interest.");
      }
      trackEvent("lead_submit_success", { event_category: "lead_form" });
      setState({ status: "sent", message: "Thanks. We saved your email." });
      setForm({ name: "", email: "", phoneNumber: "", country: "India", youtubeHandle: "", message: "", website: "" });
    } catch (error) {
      trackEvent("lead_submit_error", { event_category: "lead_form" });
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Could not save interest.",
      });
    }
  };

  const mailto = `mailto:hello@dalaillama.in?subject=${encodeURIComponent("Dalaillama Creator Studio access")}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phoneNumber}\nCountry: ${form.country}\nYouTube: ${form.youtubeHandle}\n\n${form.message}`
  )}`;

  return (
    <form className="lead-form" onSubmit={submit}>
      <label className="hp-field" aria-hidden="true">
        <span>Website</span>
        <input value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        <span>Name</span>
        <input value={form.name} onChange={(event) => update("name", event.target.value)} type="text" autoComplete="name" required disabled={state.status === "saving"} />
      </label>
      <label>
        <span>Email</span>
        <input value={form.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" required disabled={state.status === "saving"} />
      </label>
      <div className="form-grid">
        <label>
          <span>Phone number</span>
          <input value={form.phoneNumber} onChange={(event) => update("phoneNumber", event.target.value)} type="tel" autoComplete="tel" required disabled={state.status === "saving"} />
        </label>
        <label>
          <span>Country</span>
          <select value={form.country} onChange={(event) => update("country", event.target.value)} required disabled={state.status === "saving"}>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>YouTube handle</span>
        <input value={form.youtubeHandle} onChange={(event) => update("youtubeHandle", event.target.value)} type="text" placeholder="@yourchannel or channel URL" autoComplete="off" required disabled={state.status === "saving"} />
      </label>
      <label>
        <span>What do you record?</span>
        <textarea value={form.message} onChange={(event) => update("message", event.target.value)} rows={4} placeholder="Example: fitness shorts, podcast clips, founder videos. Tell us where the workflow breaks today." disabled={state.status === "saving"} />
      </label>
      <div className="form-actions">
        <button type="submit" disabled={state.status === "saving"} data-ga-event="lead_form_button_click" data-ga-label="Request access form">
          {state.status === "saving" ? "Saving..." : "Request access"}
        </button>
        <a href={mailto} data-ga-event="email_instead_click" data-ga-label="Lead form email instead">Email instead</a>
      </div>
      {state.message && <p className={`form-note ${state.status === "error" ? "form-error" : ""}`}>{state.message}</p>}
    </form>
  );
}
