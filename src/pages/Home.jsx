import { useEffect, useRef, useState } from "react";
import { posts } from "../posts/index.js";
import { reelStudies } from "../reelStudies.js";

// Two sides of one marketplace: brands who need a video ad, and the creators who make them on
// Dalai Llama. Brands request (no sign-in) on the brands site; creators start free in the studio.
const BRANDS_SITE = "https://brands.dalaillama.in";
const REQUEST_VIDEO_URL = `${BRANDS_SITE}/creators?then=request`;
const BROWSE_CREATORS_URL = `${BRANDS_SITE}/creators`;
const BRAND_SIGN_UP_URL = `${BRANDS_SITE}/brands/sign-in`;
const CREATOR_STUDIO_URL = "https://creator.dalaillama.in/";
// Films made on Dalai Llama for paying clients (the brands site's feed), inspiration videos (ideas
// of what a creator here can make, tagged as such) and the creator catalogue.
const API = "https://api.dalaillama.in/api/v1/public";
const INSPIRATION_API = `${API}/showcase/inspiration`;
const CREATORS_API = `${API}/creators?limit=8`;
const INSPIRATION_PAGE = `${BRANDS_SITE}/inspiration`;

const brandProblems = [
  ["Too many creators, too few that fit", "Open calls bring a flood of portfolios, and most don't match your product, audience or category."],
  ["No proof they deliver", "A reel of personal posts says little about whether someone can deliver an ad a paying client signed off on."],
  ["Price comes last", "Rates surface only after calls and back-and-forth, so you can't plan the campaign around them."],
  ["The brief gets lost", "Script notes, references and approvals scatter across DMs, email and spreadsheets."],
];

const brandAnswers = [
  ["Matched to your industry", "Tell us what the video should do. We route it to an active creator who makes videos for brands like yours, or you pick one yourself."],
  ["Every film is client work", "Each film on a creator's page was made on Dalai Llama and delivered to a client who paid for it."],
  ["A priced brief, straight away", "Your request comes back as a brief with the price on it. Review it, change anything, pay the upfront share to start."],
  ["One place from brief to delivery", "The brief, the storyboard review and the final video live in one link, not in a thread."],
];

const brandSteps = [
  ["Describe the video", "What it should do, the product, who it's for, the length and languages. Add product photos or references if you have them."],
  ["Get a creator and a price", "A creator for your industry takes it and you get the brief with the price, usually the same day."],
  ["Review, pay, receive", "Approve the storyboard, then the finished ad: captions, voice and sound included."],
];

const creatorFeatures = [
  ["From idea to finished ad", "Script, storyboard, scene plan, voice, captions and sound in one guided pipeline, so you deliver ads instead of assembling files."],
  ["The right model for each shot", "Seedance 2.0, Veo 3.1, Kling and more: pick per scene, from a fast draft model to a cinematic one."],
  ["A workflow that thinks ahead", "Shots are planned before they're rendered, so a weak scene is fixed in the storyboard, not after you've paid to render it."],
  ["Cost that stays in check", "See what each render costs before you start it, and re-render only the shot that needs it, not the whole film."],
  ["Music that fits the mood", "The soundtrack follows the ad's mood and pacing: calm for a skincare ritual, punchy for a launch."],
  ["Stretch", "Render a shorter clip and Stretch it to length: the missing frames are filled in, so a slow-motion shot costs a fraction of rendering every second."],
];

const creatorReach = [
  ["Shown to brands, regularly", "Every new film goes to brands in the industries you make for, in automatic outreach and the brands' feed, so your work keeps being seen."],
  ["Your public profile", "A page brands find and follow, with the films you made for paying clients. Followers hear about every new one."],
  ["Outreach from your own address", "Send your work to brands from your Dalai Llama email. One mail a day per brand, never spam."],
  ["Easy to buy from", "A brand who likes your work requests a video in one click, and gets your brief with the price. Requests in your industry are routed to you."],
];

// Prices are monthly; longer billing is the months times the monthly price, less a discount. The
// same totals are the plan rows in product-service (V30), so what's shown here is what's charged.
const CADENCES = [
  ["MONTHLY", "Monthly", 1, 0],
  ["QUARTERLY", "Quarterly", 3, 0.1],
  ["HALF_YEARLY", "Every 6 months", 6, 0.15],
  ["YEARLY", "Yearly", 12, 0.2],
];

// Visitors outside India see US dollars at this rate (payments outside India are coming).
const USD_TO_INR = 95;

const creatorPlans = [
  {
    code: "FREE",
    name: "Free",
    monthly: 0,
    tagline: "Get found and start creating",
    features: [
      "Public creator profile",
      "Reach out to your own audience",
      "100 emails a month to brands",
      "Your profile shown to up to 10 brands",
      "Automatic outreach to brands who may like your videos",
      "Create and download videos",
    ],
    cta: "Start free",
  },
  {
    code: "STUDIO",
    name: "Studio",
    monthly: 2999,
    tagline: "For creators taking on paid work",
    featured: true,
    features: [
      "Everything in Free",
      "1,000 emails a month to brands",
      "Your profile shown to up to 100 brands",
      "Edit any shot",
      "Upload product and reference images",
      "Share brief links with clients",
    ],
    cta: "Choose Studio",
  },
  {
    code: "PRO",
    name: "Pro",
    monthly: 6999,
    tagline: "Every feature, no limit on reach",
    features: [
      "Everything in Studio",
      "3,000 emails a month to brands",
      "Your profile shown to every brand",
      "Upscaling, with upscale preview",
      "Upload your character voices",
      "Every feature in the studio",
    ],
    cta: "Choose Pro",
  },
];

// A 60-second video starts at this base price (in the visitor's currency); the rest is the creator's
// own rate, set by their skill and the work.
const BRAND_VIDEO_BASE_USD = 20;

const featuredGuideSlugs = [
  "ai-video-process-d2c-brands",
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

const FEATURED_GUIDE_CARD_LIMIT = 6;
const LATEST_POST_LINK_LIMIT = 9;

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
  const featuredGuideCards = featuredGuides.slice(0, FEATURED_GUIDE_CARD_LIMIT);
  const latestPostLinks = posts.slice(0, LATEST_POST_LINK_LIMIT);
  const ideas = useJson(INSPIRATION_API, []);
  const creators = useJson(CREATORS_API, []);

  return (
    <article className="landing-page">
      <section className="landing-hero" id="hero" aria-label="Landing hero">
        <div className="hero-copy">
          <p className="kicker">Video ads, made by creators on Dalai Llama</p>
          <h1>The right creator for your next video ad.</h1>
          <div className="hero-body">
            <p>Tell us what the video should do. We match you with a creator who makes ads for brands like yours, and you get a priced brief straight away.</p>
            <p>
              The videos here show the kind of ad our creators make. No open calls, no chasing portfolios, no price after three calls.
            </p>
          </div>
          <div className="hero-actions">
            <a className="creator-primary hero-button" href={REQUEST_VIDEO_URL}
               data-ga-event="cta_click" data-ga-cta-location="hero_section" data-ga-cta-text="Request a video">
              Request a video
            </a>
            <a className="creator-secondary hero-button" href={BROWSE_CREATORS_URL}
               data-ga-event="cta_click" data-ga-cta-location="hero_section" data-ga-cta-text="See creators' work">
              See creators' work
            </a>
          </div>
          <p className="hero-note">
            You make videos? We put your work in front of brands, again and again.{" "}
            <a className="hero-link" href="#creators" data-ga-event="cta_click" data-ga-cta-location="hero_section" data-ga-cta-text="For creators">
              Get seen, sell more, free
            </a>
          </p>
        </div>
        <HeroIdea idea={ideas.find((idea) => idea.posterUrl)} />
      </section>

      <section className="landing-section essay-section" id="problem">
        <p className="kicker">For brands</p>
        <h2>Finding the right creator is the hard part.</h2>
        <div className="essay-copy">
          <p>
            In one survey of US marketers, finding the right creators was the top challenge, ahead of strategy and measurement
            (<a className="hero-link" href="https://www.emarketer.com/content/marketers-struggle-find-compatible-creators-despite-rising-budgets--new-research-finds"
                target="_blank" rel="noopener noreferrer">EMARKETER, 43.9%</a>). Budgets keep rising; the search doesn't get easier.
          </p>
        </div>
        <div className="crew-grid crew-grid-two">
          {brandProblems.map(([title, body]) => (
            <div className="crew-card creator-panel-muted" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section" id="how">
        <div>
          <p className="kicker">What Dalai Llama does</p>
          <h2>A creator who fits, a price up front, one place for the work.</h2>
        </div>
        <div className="stage-list">
          {brandAnswers.map(([title, body], index) => (
            <div className="stage-row" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong className="row-title">{title}.</strong> {body}</p>
            </div>
          ))}
        </div>
      </section>

      <WorkGrid ideas={ideas} />

      <section className="landing-section split-section" id="order">
        <div>
          <p className="kicker">How a request works</p>
          <h2>From a few lines to a finished ad.</h2>
          <div className="hero-actions">
            <a className="creator-primary hero-button" href={REQUEST_VIDEO_URL}
               data-ga-event="cta_click" data-ga-cta-location="how_section" data-ga-cta-text="Request a video">
              Request a video
            </a>
          </div>
        </div>
        <div className="stage-list">
          {brandSteps.map(([title, body], index) => (
            <div className="stage-row" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong className="row-title">{title}.</strong> {body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section" id="creators">
        <p className="kicker">For creators</p>
        <h2>We keep your work in front of brands.</h2>
        <p className="section-lede">
          Brands buy from creators they keep seeing. Dalai Llama shows your films to brands in the industries you make for, again
          and again: on your profile, in the brands' feed, in automatic outreach and in mail from your own address. More brands see
          your work, and buying a video from you takes one click.
        </p>
        <div className="stage-list reach-list">
          {creatorReach.map(([title, body], index) => (
            <div className="stage-row" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong className="row-title">{title}.</strong> {body}</p>
            </div>
          ))}
        </div>
        <CreatorCatalogue creators={creators} />
        <h3 className="subhead">And a studio that makes the ad</h3>
        <div className="crew-grid">
          {creatorFeatures.map(([title, body]) => (
            <div className={`crew-card creator-panel-muted${title === "Stretch" ? " crew-card-accent" : ""}`} key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <PricingSection />

      {featuredGuideCards.length > 0 && (
        <section className="landing-section writing-section" id="production-guides">
          <p className="kicker">Knowledge base</p>
          <h2>Production notes for teams that want the deeper workflow.</h2>
          <div className="guide-link-grid">
            {featuredGuideCards.map((post) => (
              <a className="guide-link-card creator-panel-muted" href={`/blog/${post.slug}`} key={post.slug}
                 data-ga-event="blog_link_click" data-ga-label={post.title}>
                <span>{post.title}</span>
                <small>{post.description}</small>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="landing-section writing-section" id="writing">
        <p className="kicker">Research notes</p>
        <h2>What sits underneath a strong short-form ad.</h2>
        <div className="blog-featured-block" aria-label="Reel patterns with short-form potential">
          <div className="guide-link-grid">
            {reelStudies.map((study) => (
              <div className="guide-link-card creator-panel-muted" key={study.title}>
                <span>{study.title}</span>
                <small>{study.body}</small>
              </div>
            ))}
          </div>
        </div>
        {latestPostLinks.length > 0 && (
          <div className="writing-list">
            {latestPostLinks.map((post) => (
              <a className="writing-link" href={`/blog/${post.slug}`} key={post.slug} data-ga-event="blog_link_click" data-ga-label={post.title}>
                <span>{post.title}</span>
                <small>{post.date}</small>
              </a>
            ))}
          </div>
        )}
      </section>

      <ResourceDirectory featuredGuides={featuredGuides} />

      <section className="landing-section access-section creator-panel" id="access">
        <div>
          <p className="kicker">Start here</p>
          <h2>Need a video? Make videos? Both start free.</h2>
          <p>Brands: describe the video and get a priced brief from a creator who fits. Creators: set up your profile and start reaching brands.</p>
        </div>
        <div className="hero-actions">
          <a className="creator-primary hero-button" href={REQUEST_VIDEO_URL}
             data-ga-event="cta_click" data-ga-cta-location="access_section" data-ga-cta-text="Request a video">
            Request a video
          </a>
          <a className="creator-secondary hero-button" href={CREATOR_STUDIO_URL}
             data-ga-event="cta_click" data-ga-cta-location="access_section" data-ga-cta-text="Start free as a creator">
            Start free as a creator
          </a>
        </div>
      </section>
    </article>
  );
}

/** The hero's right side: an inspiration video playing muted, with a request for one like it. */
function HeroIdea({ idea }) {
  if (!idea) return <div className="hero-film creator-panel"><div className="hero-film-frame"><div className="hero-film-empty" /></div></div>;
  const request = `${REQUEST_VIDEO_URL}&inspiration=${encodeURIComponent(idea.pinId)}${idea.industry ? `&industry=${idea.industry}` : ""}`;
  return (
    <a className="hero-film creator-panel" href={request} data-ga-event="cta_click" data-ga-cta-location="hero_video"
       data-ga-cta-text="Make one like this" aria-label={`Make an ad like ${idea.title}`}>
      <div className="hero-film-frame">
        {idea.videoUrl
          ? <video src={idea.videoUrl} poster={idea.posterUrl} autoPlay muted loop playsInline aria-label={idea.title} />
          : <img src={idea.posterUrl} alt="" loading="eager" />}
        <span className="work-tag">Inspiration</span>
      </div>
      <div className="hero-film-caption">
        <span>{INDUSTRY_LABEL[idea.industry] || "Inspiration"}</span>
        <strong>{idea.title}</strong>
        <small>{idea.makerName ? `by ${idea.makerName} · ` : ""}make one like this for your brand</small>
      </div>
    </a>
  );
}

/** A public list from our API; {@code fallback} until (and unless) it answers. */
function useJson(url, fallback) {
  const [data, setData] = useState(fallback);
  useEffect(() => {
    let cancelled = false;
    fetch(url, { headers: { accept: "application/json" } })
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => { if (!cancelled && Array.isArray(body)) setData(body); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [url]);
  return data;
}

/** "What we can create": inspiration videos, each tagged, in one masonry grid. (Creators' own films
 * join it once there are enough of them.) */
function WorkGrid({ ideas }) {
  const shown = ideas.filter((idea) => idea.posterUrl).slice(0, 12);
  if (shown.length === 0) return null;
  return (
    <section className="landing-section" id="films" aria-label="What we can create">
      <p className="kicker">What we can create</p>
      <h2>Ads for every kind of brand.</h2>
      <p className="section-lede">
        The kind of ad our creators can make for you. See one you like? Ask for one like it.
      </p>
      <div className="work-grid">
        {shown.map((idea) => <IdeaCard idea={idea} key={idea.id} />)}
      </div>
      <p className="hero-note">
        <a className="hero-link" href={INSPIRATION_PAGE} data-ga-event="cta_click" data-ga-cta-location="work_section" data-ga-cta-text="More inspiration">
          More inspiration
        </a>{" · "}
        <a className="hero-link" href={BROWSE_CREATORS_URL} data-ga-event="cta_click" data-ga-cta-location="work_section" data-ga-cta-text="See every creator">
          See every creator
        </a>
      </p>
    </section>
  );
}

/** An inspiration video in our own player: muted, plays on hover or tap. */
function IdeaCard({ idea }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);
  const play = () => video.current?.play().then(() => setPlaying(true)).catch(() => {});
  const stop = () => { video.current?.pause(); setPlaying(false); };
  const ratio = idea.posterWidth && idea.posterHeight ? `${idea.posterWidth} / ${idea.posterHeight}` : "9 / 16";
  const request = `${REQUEST_VIDEO_URL}&inspiration=${encodeURIComponent(idea.pinId)}${idea.industry ? `&industry=${idea.industry}` : ""}`;
  return (
    <div className="work-card creator-panel-muted">
      <div className="work-card-frame" style={{ aspectRatio: ratio }} onMouseEnter={play} onMouseLeave={stop}
           onClick={() => (playing ? stop() : play())}>
        {idea.videoUrl
          ? <video ref={video} src={idea.videoUrl} poster={idea.posterUrl} muted loop playsInline preload="none" aria-label={idea.title} />
          : <img src={idea.posterUrl} alt="" loading="lazy" />}
        {idea.videoUrl && !playing && <span className="play-badge" aria-hidden="true">▶</span>}
        <span className="work-tag">Inspiration</span>
      </div>
      <span className="film-card-meta">{INDUSTRY_LABEL[idea.industry] || "Inspiration"}</span>
      <strong>{idea.title}</strong>
      {idea.makerName && <small>by {idea.makerName}</small>}
      <a className="work-card-request" href={request} data-ga-event="cta_click" data-ga-cta-location="work_section" data-ga-cta-text="Make one like this">
        Make one like this
      </a>
    </div>
  );
}

/** Creators with films to show: a card each, to their page. */
function CreatorCatalogue({ creators }) {
  if (creators.length < 3) return null;
  return (
    <div className="creator-catalogue" aria-label="Creators on Dalai Llama">
      {creators.map((creator) => (
        <a className="creator-card creator-panel-muted" href={creator.profileUrl} key={creator.handle}
           data-ga-event="creator_click" data-ga-label={creator.handle}>
          <div className="creator-card-cover">{creator.coverUrl && <img src={creator.coverUrl} alt="" loading="lazy" />}</div>
          <div className="creator-card-body">
            {creator.avatarUrl ? <img className="creator-avatar" src={creator.avatarUrl} alt="" loading="lazy" />
              : <span className="creator-avatar creator-avatar-initial">{creator.displayName.slice(0, 1)}</span>}
            <div>
              <strong>{creator.displayName}</strong>
              <small>
                {[creator.headline, `${creator.filmCount} film${creator.filmCount === 1 ? "" : "s"}`].filter(Boolean).join(" · ")}
              </small>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

const INDUSTRY_LABEL = {
  FASHION: "Fashion", BEAUTY: "Beauty", FOOD_BEVERAGE: "Food & beverage", TECH: "Tech", FINANCE: "Finance",
  REAL_ESTATE: "Real estate", EDUCATION: "Education", HEALTH: "Health", TRAVEL: "Travel", AUTOMOTIVE: "Automotive",
  ECOMMERCE: "E-commerce", ENTERTAINMENT: "Entertainment", OTHER: "Other",
};

function PricingSection() {
  const [audience, setAudience] = useState("CREATORS");
  const [cadence, setCadence] = useState("MONTHLY");
  const [, , months, discount] = CADENCES.find(([code]) => code === cadence);
  const money = useLocalCurrency();

  return (
    <section className="landing-section pricing-section" id="pricing">
      <div className="pricing-head">
        <div>
          <p className="kicker">Pricing</p>
          <h2>Free to start, on both sides.</h2>
        </div>
        <div className="segmented" role="tablist" aria-label="Pricing for">
          {[["CREATORS", "For creators"], ["BRANDS", "For brands"]].map(([code, label]) => (
            <button key={code} type="button" role="tab" aria-selected={audience === code} onClick={() => setAudience(code)}
                    className={audience === code ? "is-active" : ""} data-ga-event="pricing_tab" data-ga-label={label}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {audience === "CREATORS" ? (
        <>
          <div className="segmented segmented-small" role="radiogroup" aria-label="Billing">
            {CADENCES.map(([code, label]) => (
              <button key={code} type="button" role="radio" aria-checked={cadence === code} onClick={() => setCadence(code)}
                      className={cadence === code ? "is-active" : ""} data-ga-event="pricing_cadence" data-ga-label={label}>
                {label}
              </button>
            ))}
          </div>
          <div className="pricing-grid">
            {creatorPlans.map((plan) => (
              <article className={`pricing-card creator-panel-muted${plan.featured ? " pricing-card-featured" : ""}`} key={plan.code}>
                <div className="pricing-card-top">
                  <span className="pricing-badge">{plan.tagline}</span>
                </div>
                <h3>{plan.name}</h3>
                <div className="price-row">
                  <strong>{money.format(billed(money.amount(plan.monthly), months, discount) / months)}</strong>
                  <span>{plan.monthly === 0 ? "forever" : "a month"}</span>
                </div>
                <p className="price-billed">
                  {plan.monthly === 0 ? "No card needed"
                    : months === 1 ? "Billed monthly"
                      : `Billed ${money.format(billed(money.amount(plan.monthly), months, discount))} ${months === 12 ? "a year" : `every ${months} months`} · save ${Math.round(discount * 100)}%`}
                </p>
                <ul className="pricing-list">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <a className="pricing-card-link" href={CREATOR_STUDIO_URL}
                   data-ga-event="cta_click" data-ga-cta-location="pricing_section" data-ga-cta-text={`${plan.name} ${cadence}`}>
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="pricing-grid pricing-grid-two">
          <article className="pricing-card creator-panel-muted">
            <div className="pricing-card-top"><span className="pricing-badge">Your brand profile</span></div>
            <h3>Free</h3>
            <div className="price-row"><strong>{money.format(0)}</strong><span>to join</span></div>
            <ul className="pricing-list">
              <li>Create your brand profile</li>
              <li>Browse creators and the films they made for clients</li>
              <li>Follow creators and get their new films</li>
              <li>Request a video, with or without signing in</li>
            </ul>
            <a className="pricing-card-link" href={BRAND_SIGN_UP_URL} data-ga-event="cta_click" data-ga-cta-location="pricing_section" data-ga-cta-text="Brand profile">
              Create your profile
            </a>
          </article>
          <article className="pricing-card creator-panel-muted pricing-card-featured">
            <div className="pricing-card-top"><span className="pricing-badge">A finished video ad</span></div>
            <h3>Per video</h3>
            <div className="price-row"><strong>From {money.format(money.fromUsd(BRAND_VIDEO_BASE_USD))}</strong><span>for a 60-second video</span></div>
            <p className="price-billed">A base price; the rest depends on the creator you choose, their skill and the work.</p>
            <ul className="pricing-list">
              <li>Pick a creator, or let us match one for your industry</li>
              <li>The full price is on your brief before you pay anything</li>
              <li>Pay an upfront share to start production</li>
              <li>Storyboard review before the final render</li>
              <li>Captions, voice and sound included</li>
            </ul>
            <a className="pricing-card-link" href={REQUEST_VIDEO_URL} data-ga-event="cta_click" data-ga-cta-location="pricing_section" data-ga-cta-text="Request a video">
              Request a video
            </a>
          </article>
        </div>
      )}
      {money.currency !== "INR" && (
        <p className="hero-note">Prices in US dollars. Card payments from outside India are coming soon.</p>
      )}
    </section>
  );
}

/** One billing period's price: the monthly price times the months, less the cadence's discount. */
function billed(monthly, months, discount) {
  return Math.round(monthly * months * (1 - discount));
}

/** Rupees in India, US dollars elsewhere: the country from our edge (/api/country), guessed from
 * the browser until it answers. {@code amount} turns a rupee price into the visitor's currency. */
function useLocalCurrency() {
  const [country, setCountry] = useState(() => browserCountryGuess());
  useEffect(() => {
    let cancelled = false;
    fetch("/api/country", { headers: { accept: "application/json" } })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const code = String(data?.country || "").trim().toUpperCase();
        if (!cancelled && /^[A-Z]{2}$/.test(code)) setCountry(code);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);
  const india = country === "IN";
  return {
    currency: india ? "INR" : "USD",
    amount: (inrPrice) => (india ? inrPrice : Math.round(inrPrice / USD_TO_INR)),
    fromUsd: (usdPrice) => (india ? usdPrice * USD_TO_INR : usdPrice),
    format: (value) => new Intl.NumberFormat(india ? "en-IN" : "en-US", {
      style: "currency", currency: india ? "INR" : "USD", maximumFractionDigits: 0,
    }).format(Math.round(value)),
  };
}

function browserCountryGuess() {
  if (typeof navigator !== "undefined") {
    const languages = [navigator.language, ...(navigator.languages || [])].filter(Boolean).map((v) => v.toUpperCase());
    if (languages.some((language) => language.endsWith("-IN"))) return "IN";
  }
  if (typeof Intl !== "undefined") {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (zone === "Asia/Kolkata" || zone === "Asia/Calcutta") return "IN";
  }
  return "US";
}

function ResourceDirectory({ featuredGuides }) {
  const productionLinks = featuredGuides.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
  }));
  const serviceLinks = shortVideoEditorLinks.map((link) => ({
    title: link.title,
    href: link.href,
  }));
  const blogLinks = posts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
  }));

  return (
    <section className="landing-section resource-directory" id="resource-directory">
      <details className="resource-directory-toggle">
        <summary>
          <span>Browse more guides</span>
          <small>Production, storyboard, repurposing, and workflow links</small>
        </summary>
        <div className="resource-directory-body">
          <div className="resource-quick-links" aria-label="Primary resource links">
            <a href="/blog" data-ga-event="resource_link_click" data-ga-label="Blog archive">Blog archive</a>
            <a href="/short-video-editor" data-ga-event="resource_link_click" data-ga-label="Short video editor">Short video editor</a>
            <a href="/video-repurposing" data-ga-event="resource_link_click" data-ga-label="Video repurposing">Video repurposing</a>
            <a href="/#pricing" data-ga-event="resource_link_click" data-ga-label="Pricing">Pricing</a>
          </div>
          <ResourceGroup title="Production guides" links={productionLinks} />
          <ResourceGroup title="Service and workflow pages" links={serviceLinks} />
          <ResourceGroup title="Full blog archive" links={blogLinks} />
        </div>
      </details>
    </section>
  );
}

function ResourceGroup({ title, links }) {
  if (!links.length) return null;

  return (
    <details className="resource-group">
      <summary>
        <span>{title}</span>
        <small>{links.length} links</small>
      </summary>
      <div className="resource-link-list">
        {links.map((link) => (
          <a
            href={link.href}
            key={`${title}-${link.href}`}
            data-ga-event="resource_link_click"
            data-ga-label={link.title}
          >
            {link.title}
          </a>
        ))}
      </div>
    </details>
  );
}
