const editingSteps = [
  "Review the source video and find the strongest short-form moment.",
  "Shape the opening so the first seconds give viewers a reason to keep watching.",
  "Trim pauses, repeated setup, and context that does not help the final Short.",
  "Crop for vertical 9:16 viewing so the speaker, product, or key action stays visible.",
  "Add readable captions, clean sound, balance music, and export a ready-to-post file.",
];

const resourceLinks = [
  {
    title: "AI Video Workflow for Digital Publishers",
    href: "/blog/ai-video-workflow-digital-publishers",
    body: "The site graph and pillar guide for a focused AI-powered newsroom video production knowledge base.",
  },
  {
    title: "AI Video Editing for Newsrooms",
    href: "/blog/ai-video-editing-newsrooms",
    body: "An enterprise guide to AI clipping, captions, detection, review workflows, APIs, and newsroom-grade short-form production.",
  },
  {
    title: "Newsroom Video Workflow",
    href: "/blog/newsroom-video-workflow",
    body: "A workflow map for source intake, clipping, approvals, captions, publishing, and archive reuse.",
  },
  {
    title: "High Volume News Editing",
    href: "/blog/high-volume-news-editing",
    body: "How publishers can increase video output with templates, AI-assisted prep, review queues, and quality control.",
  },
  {
    title: "Reduce News Editing Time",
    href: "/blog/reduce-news-editing-time",
    body: "Workflow fixes for faster newsroom video turnaround without removing editorial checks.",
  },
  {
    title: "Agency Video Editing Workflow",
    href: "/blog/agency-video-editing-workflow",
    body: "A delivery workflow for agencies managing client briefs, batches, reviews, revisions, and final exports.",
  },
  {
    title: "Done For You Shorts",
    href: "/blog/done-for-you-shorts",
    body: "What a reliable done-for-you Shorts workflow should include before you hand off footage.",
  },
  {
    title: "Video Repurposing Service",
    href: "/video-repurposing",
    body: "Turn podcasts, webinars, interviews, lectures, press conferences, and YouTube videos into focused Shorts.",
  },
  {
    title: "Video Operations Guide",
    href: "/blog/video-operations-guide",
    body: "A practical guide to intake, production queues, QA, review, delivery, publishing, and metrics.",
  },
  {
    title: "Video QA Workflow",
    href: "/blog/video-qa-workflow",
    body: "A quality-control workflow for captions, audio, crop, export settings, brand fit, and delivery readiness.",
  },
  {
    title: "Video Delivery Workflow",
    href: "/blog/video-delivery-workflow",
    body: "How to move approved edits into clean final exports, folders, posting notes, and archive records.",
  },
  {
    title: "Best Shorts Editing Service",
    href: "/blog/best-shorts-editing-service",
    body: "What to check before buying a Shorts editing service: hooks, captions, crop, QA, turnaround, and revisions.",
  },
  {
    title: "YouTube Shorts Editing Service",
    href: "/blog/youtube-shorts-editing-service",
    body: "A YouTube Shorts editing service guide for creators and teams turning existing footage into ready-to-post Shorts.",
  },
  {
    title: "Opus Clip Alternative",
    href: "/blog/opus-clip-alternative",
    body: "When managed short-form editing makes more sense than a self-serve AI clipping workflow.",
  },
  {
    title: "Turn Podcast into Shorts",
    href: "/video-repurposing/turn-podcast-into-shorts",
    body: "Send a podcast episode and get a focused Short from one guest answer, story, claim, or teaching moment.",
  },
  {
    title: "Turn Webinar into Shorts",
    href: "/video-repurposing/turn-webinar-into-shorts",
    body: "Repurpose a webinar replay into one useful teaching moment, Q&A answer, framework, or demo clip.",
  },
  {
    title: "Turn Product Demo into Shorts",
    href: "/blog/turn-product-demo-into-shorts",
    body: "A product clip workflow built around one buyer pain, one visible feature, and one result.",
  },
  {
    title: "Turn Internal Meeting into Shorts",
    href: "/blog/turn-internal-meeting-into-shorts",
    body: "Private clip guidance for training, alignment, permissions, and internal review.",
  },
  {
    title: "Short-Form Video Editing: How to Hold Attention",
    href: "/blog/short-form-video-editor-attention-span",
    body: "A practical guide to hooks, pacing, captions, cut rhythm, and the first three seconds of a Short.",
  },
  {
    title: "Reel Patterns Worth Editing",
    href: "/blog/reel-patterns-worth-editing",
    body: "How to identify the quiet, useful, tense, or transformational moments inside longer recordings.",
  },
  {
    title: "How to Write Better Hooks for YouTube Shorts",
    href: "/blog/youtube-shorts-hooks",
    body: "Hook patterns for creators who want viewers to understand the point before they scroll away.",
  },
  {
    title: "Make Phone Footage Look Professional",
    href: "/blog/make-phone-footage-look-professional",
    body: "Simple polish decisions that make ordinary phone footage feel clearer and more finished.",
  },
  {
    title: "How to Plan a YouTube Short",
    href: "/blog/how-to-plan-a-youtube-short",
    body: "A creator-friendly way to move from topic to shot plan before recording the next Short.",
  },
  {
    title: "Improve Audio Quality in Videos",
    href: "/blog/improve-audio-quality-in-videos",
    body: "Why clear voice, room tone, music balance, and small sound decisions matter in short-form edits.",
  },
];

const faqItems = [
  {
    question: "What can I send to Dalaillama?",
    answer:
      "You can send a long video, podcast clip, webinar, interview, demo, founder video, raw phone footage, Drive link, YouTube link, or downloadable file.",
  },
  {
    question: "Is this an automatic AI clipping tool?",
    answer:
      "No. Dalaillama is a done-for-you editing service. A real editor chooses the moment, shapes the hook, trims the timeline, adds captions, polishes sound, and prepares the vertical export.",
  },
  {
    question: "What do I get back?",
    answer:
      "You get one ready-to-post vertical short-form video with a tighter hook, mobile crop, readable captions, sound polish, and export suitable for YouTube Shorts, Instagram Reels, TikTok, LinkedIn, or a similar short-form platform.",
  },
];

export default function ShortVideoEditor() {
  return (
    <article className="page essay-page service-page">
      <p className="back-link">
        <a href="/" data-ga-event="nav_click" data-ga-label="Short video editor back to home">
          Back to home
        </a>
      </p>

      <section className="service-hero">
        <p className="kicker">Short video editor service</p>
        <h1>Short video editor for Reels, YouTube Shorts, TikTok, and LinkedIn.</h1>
        <div className="hero-body">
          <p>
            Dalaillama turns existing video into short-form content for YouTube Shorts, Instagram Reels, TikTok, LinkedIn, and similar vertical platforms.
          </p>
          <p>
            Send a long recording, podcast clip, webinar, interview, product demo, founder video, or raw phone footage. We manually edit the moment, add captions and sound polish, then return one finished Short within 30 minutes.
          </p>
        </div>
        <div className="hero-actions">
          <a
            className="creator-primary hero-button"
            href="/#access"
            data-ga-event="cta_click"
            data-ga-cta-location="short_video_editor_page"
            data-ga-cta-text="Send your video"
          >
            Send Your Video
          </a>
          <a
            className="creator-secondary hero-button"
            href="/#order"
            data-ga-event="cta_click"
            data-ga-cta-location="short_video_editor_page"
            data-ga-cta-text="See order details"
          >
            See Order Details
          </a>
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">What the editor does</p>
          <h2>We make judgment calls a simple clipper misses.</h2>
        </div>
        <div className="stage-list">
          {editingSteps.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section essay-section">
        <p className="kicker">Who it is for</p>
        <h2>Useful for teams with footage, but no time to edit every small clip.</h2>
        <div className="essay-copy">
          <p>
            This works best when you already record useful material: podcasts, sales calls, expert interviews, lessons, product demos, webinars, events, or founder updates.
          </p>
          <p>
            The goal is not to make every possible clip. The goal is to find one good short-form idea inside the source, make it clear, and deliver it in a format that is ready to post.
          </p>
        </div>
      </section>

      <section className="landing-section writing-section" id="short-video-editor-resources">
        <p className="kicker">Short video editor resources</p>
        <h2>Helpful links for planning, editing, and polishing better Shorts.</h2>
        <div className="guide-link-grid">
          {resourceLinks.map((link) => (
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

      <section className="landing-section essay-section">
        <p className="kicker">FAQ</p>
        <h2>Common questions before sending a clip.</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item creator-panel-muted" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
