import { useEffect, useState } from "react";

const BOARD_API = "https://api.dalaillama.in/api/v1/public/showcase/inspiration";
const BOARD_PAGE = "https://brands.dalaillama.in/inspiration";
const REQUEST_VIDEO_URL = "https://brands.dalaillama.in/creators?then=request";

/** One of each industry in turn (the board comes sorted by industry), so a short strip shows the range. */
function mixed(list) {
  const byIndustry = new Map();
  for (const item of list) byIndustry.set(item.industry, [...(byIndustry.get(item.industry) || []), item]);
  const queues = [...byIndustry.values()];
  const out = [];
  while (queues.some((q) => q.length)) for (const q of queues) if (q.length) out.push(q.shift());
  return out;
}

/**
 * Videos D2C brands are running, picked from Pinterest by our team. They play in Pinterest's own
 * embed, credited to their makers: references, not our work. Hidden when nothing is picked yet.
 */
export default function InspirationStrip({ limit = 6 }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let cancelled = false;
    fetch(BOARD_API)
      .then((r) => (r.ok ? r.json() : []))
      .then((list) => !cancelled && setItems(Array.isArray(list) ? mixed(list).slice(0, limit) : []))
      .catch(() => {});
    return () => { cancelled = true; };
  }, [limit]);

  if (items.length === 0) return null;
  return (
    <section className="landing-section" id="inspiration" aria-label="Inspiration">
      <p className="kicker">Inspiration</p>
      <h2>Ads brands like yours are running</h2>
      <p>From Pinterest, credited to their makers. See one you like? Ask for one like it.</p>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", marginTop: 20 }}>
        {items.map((item) => (
          <figure key={item.id} style={{ margin: 0 }}>
            <iframe
              title={item.title}
              src={`https://assets.pinterest.com/ext/embed.html?id=${item.pinId}`}
              loading="lazy"
              scrolling="no"
              style={{ width: "100%", maxWidth: 345, height: 560, border: 0, borderRadius: 12 }}
            />
            <figcaption style={{ marginTop: 8 }}>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className="hero-actions" style={{ marginTop: 20 }}>
        <a className="creator-primary hero-button" href={REQUEST_VIDEO_URL}
           data-ga-event="cta_click" data-ga-cta-location="inspiration_section" data-ga-cta-text="Make one like this">
          Make one like this
        </a>
        <a className="creator-secondary hero-button" href={BOARD_PAGE}
           data-ga-event="cta_click" data-ga-cta-location="inspiration_section" data-ga-cta-text="See all inspiration">
          See all inspiration
        </a>
      </div>
    </section>
  );
}
