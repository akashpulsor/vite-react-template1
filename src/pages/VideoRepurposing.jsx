import LeadForm from "../components/LeadForm.jsx";
import {
  VIDEO_REPURPOSING_BASE_PATH,
  getVideoRepurposingPage,
  videoRepurposingAuthorityLinks,
  videoRepurposingChildPages,
  videoRepurposingHub,
} from "../videoRepurposingPages.js";

const hubMetrics = [
  ["Source", "Podcast, webinar, interview, lecture, YouTube video, or press conference"],
  ["Decision", "One useful moment with context, hook, captions, crop, and review"],
  ["Output", "A ready-to-post vertical Short for Shorts, Reels, TikTok, or LinkedIn"],
];

export default function VideoRepurposing({ slug = "" }) {
  const page = slug ? getVideoRepurposingPage(slug) : null;
  if (page) return <VideoRepurposingChild page={page} />;
  return <VideoRepurposingHub />;
}

function VideoRepurposingHub() {
  return (
    <article className="page essay-page service-page video-repurposing-page">
      <p className="back-link">
        <a href="/" data-ga-event="nav_click" data-ga-label="Video repurposing back to home">
          Back to home
        </a>
      </p>

      <section className="service-hero video-repurposing-hero">
        <p className="kicker">{videoRepurposingHub.kicker}</p>
        <h1>{videoRepurposingHub.headline}</h1>
        <div className="hero-body">
          {videoRepurposingHub.intro.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="hero-actions">
          <a
            className="creator-primary hero-button"
            href="/#access"
            data-ga-event="cta_click"
            data-ga-cta-location="video_repurposing_hub"
            data-ga-cta-text="Send a long video"
          >
            Send a Long Video
          </a>
          <a
            className="creator-secondary hero-button"
            href="#repurposing-formats"
            data-ga-event="cta_click"
            data-ga-cta-location="video_repurposing_hub"
            data-ga-cta-text="Choose source format"
          >
            Choose Source Format
          </a>
        </div>
      </section>

      <section className="landing-section split-section video-repurposing-overview">
        <div>
          <p className="kicker">Repurposing map</p>
          <h2>One long recording becomes one intentional Short.</h2>
        </div>
        <div className="repurposing-board creator-panel-muted" aria-label="Video repurposing workflow">
          {hubMetrics.map(([label, body], index) => (
            <div className="repurposing-board-row" key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{label}</strong>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section writing-section" id="repurposing-formats">
        <p className="kicker">Source formats</p>
        <h2>Programmatic landing pages for high-intent repurposing searches.</h2>
        <div className="guide-link-grid">
          {videoRepurposingChildPages.map((item) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={item.path}
              key={item.slug}
              data-ga-event="video_repurposing_format_click"
              data-ga-label={item.title}
            >
              <span>{item.title}</span>
              <small>{item.description}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">Workflow</p>
          <h2>How we keep the edit useful instead of generic.</h2>
        </div>
        <div className="stage-list">
          {videoRepurposingHub.workflow.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <AuthoritySection />

      <section className="landing-section access-section creator-panel" id="repurposing-order">
        <div>
          <p className="kicker">Send a source video</p>
          <h2>Get one focused Short back.</h2>
          <p>
            Share the recording, target platform, and what the Short should achieve. We handle the edit, captions, crop, polish, and upload-back.
          </p>
        </div>
        <LeadForm />
      </section>
    </article>
  );
}

function VideoRepurposingChild({ page }) {
  const relatedPages = page.relatedSlugs.map(getVideoRepurposingPage).filter(Boolean);

  return (
    <article className="page essay-page service-page video-repurposing-page">
      <p className="back-link">
        <a href={VIDEO_REPURPOSING_BASE_PATH} data-ga-event="nav_click" data-ga-label={`${page.title} back to video repurposing`}>
          Back to video repurposing
        </a>
      </p>

      <section className="service-hero video-repurposing-hero">
        <p className="kicker">{page.kicker}</p>
        <h1>{page.title}</h1>
        <div className="hero-body">
          <p>{page.problem}</p>
          <p>{page.outcome}</p>
        </div>
        <div className="hero-actions">
          <a
            className="creator-primary hero-button"
            href="#repurposing-order"
            data-ga-event="cta_click"
            data-ga-cta-location={page.slug}
            data-ga-cta-text="Send this source"
          >
            Send This Source
          </a>
          <a
            className="creator-secondary hero-button"
            href={page.blogHref}
            data-ga-event="resource_link_click"
            data-ga-label={`${page.title} guide`}
          >
            Read Workflow Guide
          </a>
        </div>
      </section>

      <section className="landing-section writing-section">
        <p className="kicker">Fit</p>
        <h2>What makes this source worth repurposing.</h2>
        <div className="guide-link-grid source-fit-grid">
          <div className="guide-link-card creator-panel-muted">
            <span>Best moment</span>
            <small>{page.bestMoment}</small>
          </div>
          <div className="guide-link-card creator-panel-muted">
            <span>Avoid</span>
            <small>{page.avoid}</small>
          </div>
          <div className="guide-link-card creator-panel-muted">
            <span>Audience</span>
            <small>{page.audience}</small>
          </div>
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">Edit workflow</p>
          <h2>How we turn a {page.source.toLowerCase()} into a Short.</h2>
        </div>
        <div className="stage-list">
          {page.workflow.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">Handoff</p>
          <h2>What to send and what we check before delivery.</h2>
        </div>
        <div className="handoff-grid">
          <ChecklistCard title="Send us" items={page.intake} />
          <ChecklistCard title="Quality checks" items={page.qualityChecks} />
        </div>
      </section>

      <section className="landing-section writing-section">
        <p className="kicker">Related formats</p>
        <h2>Other source videos we can repurpose.</h2>
        <div className="guide-link-grid">
          {relatedPages.map((item) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={item.path}
              key={item.slug}
              data-ga-event="video_repurposing_related_click"
              data-ga-label={item.title}
            >
              <span>{item.title}</span>
              <small>{item.description}</small>
            </a>
          ))}
        </div>
      </section>

      <AuthoritySection />

      <section className="landing-section access-section creator-panel" id="repurposing-order">
        <div>
          <p className="kicker">Order this edit</p>
          <h2>Send the {page.source.toLowerCase()}. We will create the Short.</h2>
          <p>
            Include the source link or file, platform, and any names or approval rules we should respect. We return a captioned vertical Short ready for review or posting.
          </p>
        </div>
        <LeadForm />
      </section>
    </article>
  );
}

function ChecklistCard({ title, items }) {
  return (
    <div className="creator-panel-muted checklist-card">
      <h3>{title}</h3>
      <ul className="plain-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AuthoritySection() {
  return (
    <section className="landing-section writing-section">
      <p className="kicker">References</p>
      <h2>Authority links used as publishing guardrails.</h2>
      <div className="guide-link-grid authority-link-grid">
        {videoRepurposingAuthorityLinks.map((link) => (
          <a
            className="guide-link-card creator-panel-muted"
            href={link.href}
            key={link.href}
            data-ga-event="authority_link_click"
            data-ga-label={link.label}
          >
            <span>{link.label}</span>
            <small>{link.body}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
