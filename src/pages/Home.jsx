import LeadForm from "../components/LeadForm.jsx";
import { posts } from "../posts/index.js";
import { reelStudies } from "../reelStudies.js";

const orderDetails = [
  "Video link",
  "Target platform",
  "Content goal",
  "Delivery place",
];

const thinkingModes = [
  ["Manual edit", "A real editor turns your source video into a short-form cut instead of sending you an auto-generated fragment."],
  ["Better hook", "We shape the opening so the Short starts with a clear reason to keep watching."],
  ["Clean captions", "We add readable captions that support the idea without covering the important parts of the frame."],
  ["Mobile crop", "We prepare the edit for vertical viewing so the speaker, product, or key moment stays visible on a phone."],
  ["Sound polish", "We clean the voice, balance music, and add small emphasis moments where they improve the edit."],
  ["30-minute return", "We send or upload the finished short-form video back within 30 minutes."],
];

const orderItems = [
  "Send a video file, Drive link, YouTube link, podcast clip, webinar, interview, demo, or founder video.",
  "Tell us the platform: YouTube Shorts, Instagram Reels, TikTok, LinkedIn, or another short-form destination.",
  "Tell us the goal: educate, sell, explain, announce, build authority, or create a punchy highlight.",
  "We manually create one ready-to-post short-form video and return it within 30 minutes.",
];

const afterShoot = [
  "Send the source file or link and tell us where the final Short should go.",
  "We create the edit manually, not as an automatic clip dump.",
  "We prepare a vertical 9:16 version with captions, sound, crop, and pacing tuned for short-form.",
  "We upload it back to your shared folder or return a ready-to-post file.",
  "You get speed without hiring a full editor for every small piece of content.",
];

const operatingModes = [
  {
    title: "Manual 30-minute service",
    body: "For now, we do the work by hand. You send the source clip, and our team handles selection, hook, edit, captions, sound, polish, export, and upload-back.",
  },
  {
    title: "Simple order, finished output",
    body: "You do not need to learn a tool or manage a production process. Place the order, share the video, and get the finished short-form video back.",
  },
];

const featuredGuideSlugs = [
  "video-production-workflow",
  "video-editing-workflow",
  "video-production-checklist",
  "ultimate-guide-to-video-repurposing",
  "ai-video-workflow-digital-publishers",
  "ai-video-editing-newsrooms",
  "reddit-shorts-editing-workflow",
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];

const shortVideoEditorLinks = [
  {
    title: "AI Video Workflow for Digital Publishers",
    href: "/blog/ai-video-workflow-digital-publishers",
    body: "A practical workflow for turning publisher source footage into reviewed, captioned, platform-ready short-form clips.",
  },
  {
    title: "AI Video Editing for Newsrooms",
    href: "/blog/ai-video-editing-newsrooms",
    body: "An enterprise workflow guide for publishers, broadcasters, media teams, agencies, and high-volume video teams.",
  },
  {
    title: "Newsroom Video Workflow",
    href: "/blog/newsroom-video-workflow",
    body: "An end-to-end operating map for intake, clipping, captions, approval, publishing, and archive reuse.",
  },
  {
    title: "Breaking News Video Workflow",
    href: "/blog/breaking-news-video-workflow",
    body: "How to publish urgent news clips faster while keeping source checks, context, and review intact.",
  },
  {
    title: "Editorial Approval Workflow",
    href: "/blog/editorial-approval-workflow",
    body: "A review path for facts, rights, captions, sensitivity, legal review, and publishing sign-off.",
  },
  {
    title: "Broadcast to Vertical Video",
    href: "/blog/broadcast-to-vertical-video",
    body: "A workflow for reframing broadcast packages into mobile-first clips without losing context.",
  },
  {
    title: "Agency Video Editing Workflow",
    href: "/blog/agency-video-editing-workflow",
    body: "A client delivery workflow for intake, batching, internal QA, approvals, revisions, and reporting.",
  },
  {
    title: "White Label Shorts Editing",
    href: "/blog/white-label-shorts-editing",
    body: "How agencies can deliver client-ready Shorts under their own brand with quality control intact.",
  },
  {
    title: "Done For You Shorts",
    href: "/blog/done-for-you-shorts",
    body: "A guide to reliable done-for-you Shorts delivery, from source review to final export.",
  },
  {
    title: "Video Operations Guide",
    href: "/blog/video-operations-guide",
    body: "A cross-team guide to intake, production pipelines, QA, review, delivery, publishing, and KPIs.",
  },
  {
    title: "Reduce Video Editing Turnaround Time",
    href: "/blog/reduce-video-editing-turnaround-time",
    body: "How teams reduce editing turnaround without cutting QA, captions, review, or delivery standards.",
  },
  {
    title: "How to Produce 100 Shorts Every Week",
    href: "/blog/how-to-produce-100-shorts-every-week",
    body: "A realistic operating system for high-volume Shorts production with batching, templates, and review lanes.",
  },
  {
    title: "Best Shorts Editing Service",
    href: "/blog/best-shorts-editing-service",
    body: "A buyer guide for choosing a Shorts editing service based on hooks, captions, crop, QA, turnaround, and delivery.",
  },
  {
    title: "AI Video Editing Service",
    href: "/blog/ai-video-editing-service",
    body: "How to evaluate AI-assisted editing when you still need human review, QA, and managed delivery.",
  },
  {
    title: "Managed Video Editing",
    href: "/blog/managed-video-editing",
    body: "When a handled editing service is better than adding another self-serve video tool.",
  },
  {
    title: "Video Repurposing Service",
    href: "/video-repurposing",
    body: "Turn long-form recordings into focused, captioned Shorts with human review and mobile-first editing.",
  },
  {
    title: "Short Video Editor Service",
    href: "/short-video-editor",
    body: "Send existing video and get a ready-to-post vertical Short back within 30 minutes.",
  },
  {
    title: "Turn Podcast into Shorts",
    href: "/video-repurposing/turn-podcast-into-shorts",
    body: "Send a podcast episode and get one focused Short from a guest answer, story, or claim.",
  },
  {
    title: "Turn Webinar into Shorts",
    href: "/video-repurposing/turn-webinar-into-shorts",
    body: "Repurpose a webinar replay into one useful teaching moment, Q&A answer, or demo clip.",
  },
  {
    title: "Turn Press Conference into Shorts",
    href: "/video-repurposing/turn-press-conference-into-shorts",
    body: "Create fast public-interest clips while preserving attribution, context, and review.",
  },
  {
    title: "Turn Interview into Shorts",
    href: "/video-repurposing/turn-interview-into-shorts",
    body: "Convert expert, founder, customer, or journalistic interviews into answer-led Shorts.",
  },
  {
    title: "Turn YouTube Video into Shorts",
    href: "/video-repurposing/turn-youtube-video-into-shorts",
    body: "Repurpose owned YouTube videos into standalone Shorts with a fresh hook and vertical crop.",
  },
  {
    title: "Turn Lecture into Shorts",
    href: "/video-repurposing/turn-lecture-into-shorts",
    body: "Turn one concept, example, or misconception from a lecture into an educational Short.",
  },
  {
    title: "Short-Form Video Editing: How to Hold Attention",
    href: "/blog/short-form-video-editor-attention-span",
    body: "A guide to hooks, pacing, captions, cut rhythm, and the first three seconds of a Short.",
  },
  {
    title: "What Reddit Creators Ask About Shorts Editing",
    href: "/blog/reddit-shorts-editing-workflow",
    body: "A focused read on the real editing pain creators discuss: captions, retention, CapCut friction, and multi-platform exports.",
  },
  {
    title: "Reel Patterns Worth Editing",
    href: "/blog/reel-patterns-worth-editing",
    body: "How to spot the long-form moments that can become useful Reels and Shorts.",
  },
  {
    title: "How to Write Better Hooks for YouTube Shorts",
    href: "/blog/youtube-shorts-hooks",
    body: "Hook patterns for creators who want viewers to understand the point quickly.",
  },
];

export default function Home() {
  const featuredGuides = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);

  return (
    <article className="landing-page">
      <section className="landing-hero studio-hero" id="hero" aria-label="Landing hero">
        <div className="hero-copy">
          <p className="kicker">Done-for-you short video editing</p>
          <h1>Short video editing done for you in 30 minutes.</h1>
          <div className="hero-body">
            <p>Send us the video. We create the Short for you.</p>
            <p>
              Share a long video, raw clip, podcast, webinar, interview, demo, or founder video. We take the order, manually edit it, add captions and polish, then return a ready-to-post short-form video.
            </p>
            <p>
              The promise is simple: your video becomes a finished Short in 30 minutes.
            </p>
          </div>
          <div className="hero-actions">
            <a
              className="creator-primary hero-button"
              href="#access"
              data-ga-event="cta_click"
              data-ga-cta-location="hero_section"
              data-ga-cta-text="Send a Clip"
            >
              Send Your Video
            </a>
            <a
              className="creator-secondary hero-button"
              href="#access"
              data-ga-event="cta_click"
              data-ga-cta-location="hero_section"
              data-ga-cta-text="Talk to Us"
            >
              Talk to Us
            </a>
            <a
              className="hero-link"
              href="#access"
              data-ga-event="cta_click"
              data-ga-cta-location="hero_section"
              data-ga-cta-text="Send order details"
            >
              Send order details
            </a>
          </div>
          <p className="hero-note">
            Built for creators and teams who already record long-form content but need short-form output fast.
          </p>
        </div>

        <div className="production-board creator-panel" aria-label="Short video order preview">
          <div className="board-header">
            <span>Short video order</span>
            <strong>30 minute return</strong>
          </div>
          <div className="pipeline-strip">
            {orderDetails.map((item) => (
              <div className="pipeline-pill" key={item}>{item}</div>
            ))}
          </div>
          <div className="shot-preview-card">
            <div>
              <p>Simple offer</p>
              <h2>Place the order. We create the Short.</h2>
              <span>No editing process to manage. Send the source video and we return a finished short-form edit in 30 minutes.</span>
            </div>
            <div className="mini-frame" aria-hidden="true">
              <div className="mini-light" />
              <div className="mini-person" />
            </div>
          </div>
          <div className="board-timeline">
            <div className="timeline-row">
              <span>Video</span>
              <b />
              <b />
              <b />
            </div>
            <div className="timeline-row edited">
              <span>Short</span>
              <b />
              <b />
            </div>
            <div className="timeline-row sound">
              <span>Return</span>
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section essay-section" id="problem">
        <p className="kicker">The problem</p>
        <h2>You have video. You need short-form output quickly.</h2>
        <div className="essay-copy">
          <p>
            Most creators and teams already have usable content sitting inside long recordings.
          </p>
          <p>
            Someone has to watch the recording, choose the strongest moment, understand the context, write the hook, trim the lead-in, keep the payoff, add captions, clean sound, crop for mobile, and export the final version.
          </p>
          <p>
            We remove that work from your day. Send the order, and we turn the video into a short-form edit fast.
          </p>
        </div>
      </section>

      <section className="landing-section" id="crew">
        <p className="kicker">How the product helps</p>
        <h2>We turn your shared video into a finished short-form edit.</h2>
        <div className="crew-grid">
          {thinkingModes.map(([role, body]) => (
            <div className="crew-card creator-panel-muted" key={role}>
              <h3>{role}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section" id="order">
        <div>
          <p className="kicker">Order details</p>
          <h2>Tell us what to make. We handle the edit.</h2>
        </div>
        <div className="stage-list">
          {orderItems.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">Manual edit</p>
          <h2>We make the short-form version feel intentional.</h2>
        </div>
        <div className="essay-copy">
          <p>
            A strong Short is not only a trimmed timeline. We decide where to stay on the speaker, where to crop tighter, where captions should carry the idea, and where a pause makes the line land.
          </p>
          <p>
            That is why the final output feels made, not merely clipped. The viewer sees a clear short-form story instead of a leftover piece of a longer video.
          </p>
        </div>
      </section>

      {featuredGuides.length > 0 && (
        <section className="landing-section writing-section" id="production-guides">
          <p className="kicker">Knowledge base</p>
          <h2>AI video workflow guides for publishers and teams.</h2>
          <div className="guide-link-grid">
            {featuredGuides.map((post) => (
              <a
                className="guide-link-card creator-panel-muted"
                href={`/blog/${post.slug}`}
                key={post.slug}
                data-ga-event="blog_link_click"
                data-ga-label={post.title}
              >
                <span>{post.title}</span>
                <small>{post.description}</small>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="landing-section writing-section" id="short-video-editor-links">
        <p className="kicker">Short video editor links</p>
        <h2>For teams building a repeatable short-form video workflow.</h2>
        <div className="guide-link-grid">
          {shortVideoEditorLinks.map((link) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={link.href}
              key={link.href}
              data-ga-event="resource_link_click"
              data-ga-label={link.title}
            >
              <span>{link.title}</span>
              <small>{link.body}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="landing-section split-section" id="polish">
        <div>
          <p className="kicker">Manual edit and upload</p>
          <h2>You get a ready-to-post Short back within 30 minutes.</h2>
        </div>
        <div className="stage-list">
          {afterShoot.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section mode-section">
        <div className="mode-copy">
          <p className="kicker">Service model</p>
          <h2>Order in. Short-form video out.</h2>
          <p>
            We are not asking users to learn another editor. The offer is simple: send us the source video and get a polished Short back in 30 minutes.
          </p>
        </div>
        <div className="mode-list">
          {operatingModes.map((mode) => (
            <div className="mode-card creator-panel-muted" key={mode.title}>
              <h3>{mode.title}</h3>
              <p>{mode.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section essay-section">
        <p className="kicker">What it is not</p>
        <h2>It is not a random AI clipping button.</h2>
        <div className="essay-copy">
          <p>
            The useful version keeps the creator's real words, face, timing, and identity intact.
          </p>
          <p>
            We do not just slice a long video into fragments. We make judgment calls: what moment is worth posting, what context is needed, where the hook starts, and how the edit should move.
          </p>
          <p>
            If the source clip does not have a strong Short inside it, we should tell you. That honesty is part of the service.
          </p>
        </div>
      </section>

      <section className="landing-section writing-section" id="writing">
        <p className="kicker">Blogs & case studies</p>
        <h2>Work stories from the product.</h2>
        <div className="blog-featured-block" aria-label="Reel patterns with short-form potential">
          <h2>Reel patterns worth editing</h2>
          <p className="empty-note">Not every strong reel starts as a popular clip. These are the kinds of moments we look for when turning long video into short-form content.</p>
          <div className="guide-link-grid">
            {reelStudies.map((study) => (
              <div className="guide-link-card creator-panel-muted" key={study.title}>
                <span>{study.title}</span>
                <small>{study.body}</small>
              </div>
            ))}
          </div>
        </div>
        {posts.length > 0 ? (
          <div className="writing-list">
            {posts.map((post) => (
            <a
              className="writing-link"
              href={`/blog/${post.slug}`}
              key={post.slug}
              data-ga-event="blog_link_click"
              data-ga-label={post.title}
            >
              <span>{post.title}</span>
              <small>{post.date}</small>
            </a>
            ))}
          </div>
        ) : (
          <p className="empty-note">Blogs and case studies will live here soon.</p>
        )}
      </section>

      <section className="landing-section access-section creator-panel" id="access">
        <div>
          <p className="kicker">Send a clip</p>
          <h2>Send one clip. Get one Short back.</h2>
          <p>
            Share a long video, raw clip, podcast, webinar, interview, product demo, or founder video. Tell us the platform and what you want the Short to achieve.
          </p>
          <p>
            We are taking orders manually first so every delivery teaches us what creators actually need.
          </p>
        </div>
        <LeadForm />
      </section>
    </article>
  );
}
