import { useEffect, useMemo, useState } from "react";
import LeadForm from "../components/LeadForm.jsx";
import { posts } from "../posts/index.js";
import { reelStudies } from "../reelStudies.js";

const orderDetails = [
  "Product idea",
  "Creative angle",
  "Storyboard",
  "Rendered ad",
];

const thinkingModes = [
  ["Copywriter", "Finds the claim, hook, objection, proof, and call to action before a single frame is rendered."],
  ["Creative director", "Chooses the ad angle, scene order, visual contrast, and retention moments that make the story easy to follow."],
  ["Storyboard system", "Turns the script into camera frames, scene timelines, character notes, captions, and beat-level direction."],
  ["Scene cinematographer", "Writes scene instructions for lighting, lens feel, motion, background, and visual continuity across shots."],
  ["Voice and sound", "Plans native voiceover, lip sync where needed, music rhythm, environmental sound, and caption treatment."],
  ["Render coordinator", "Sends approved scenes through the seedance 2.0/ Google Omini queue and returns one merged, sound-designed asset."],
];

const orderItems = [
  "Ingesting the Spark: describe a product idea, paste a competitor link, add raw text, share a landing page, or submit an unfinished campaign note.",
  "Algorithmic Creative Strategy: the system drafts the script, maps the visual screenplay, detects the high-retention hook, and assigns music beats.",
  "seedance 2.0/ Google Omini Multimodal Synthesis: approved scenes render in cloud clusters with cinematic frames, matching voiceover or lip sync, and contextual sound effects.",
];

const afterShoot = [
  "A concise text script built around one promise, one audience, one offer, and one call to action.",
  "A camera storyboard blueprint with scene order, background notes, character direction, and shot-level timing.",
  "A visual screenplay that can be reviewed before rendering, so bad scenes are corrected before compute is spent.",
  "A native voiceover, caption plan, music rhythm, and environmental sound plan tied to the pacing of the ad.",
  "A finished 60-second video asset after approval, ready for download and ad testing.",
];

const operatingModes = [
  {
    title: "Software department, not a self-serve editor",
    body: "The user does not operate a timeline, write prompts for every shot, or assemble raw clips. The system takes responsibility for the creative path.",
  },
  {
    title: "Blueprint first, wallet deduction second",
    body: "The campaign blueprint proves the creative logic before production starts. The wallet pack is deducted only when the approved job moves into production.",
  },
];

const USD_TO_INR = 95;

const rateCardPlans = [
  {
    code: "complete_ai_video_pack",
    title: "Complete AI Video Pack",
    badge: "Full AI production",
    usd: 5999 / USD_TO_INR,
    unit: "60-second wallet deduction",
    summary: "A complete AI-generated ad workflow with blueprint, AI scenes, captions, sound, and basic human editor finishing.",
    points: [
      "Includes idea shaping, ad script, screenplay, storyboard path, scene prompts, and production plan.",
      "Generates the AI video scenes with consistency prompts, seeds, character details, background notes, and shot timing.",
      "Basic editor finishing is included for merge, captions, SRT, sound balance, pacing, and export-ready delivery.",
      "Best for explainers, product stories, educational ads, and quick campaign tests where full AI visuals are acceptable.",
    ],
  },
  {
    code: "hybrid_ugc_creator_pack",
    title: "Hybrid UGC Creator Pack",
    badge: "UGC sourcing + AI",
    usd: 8999 / USD_TO_INR,
    unit: "60-second wallet deduction",
    summary: "AI scenes plus platform-managed UGC creator sourcing, creator brief, and editor assembly into one finished ad.",
    points: [
      "Includes the complete AI workflow plus UGC creator brief creation for talking-head, testimonial, demo, or proof scenes.",
      "Dalaillama handles creator search and production routing so the user does not hunt through UGC marketplaces.",
      "Basic editor finishing is included to combine UGC footage, AI scenes, captions, voice, music, and final export.",
      "Best for founder-style ads, product demos, trust-building proof, and hybrid human plus AI B-roll videos.",
    ],
    featured: true,
  },
  {
    code: "managed_launch_pack",
    title: "Managed Launch Pack",
    badge: "Higher-stakes ad",
    usd: 12999 / USD_TO_INR,
    unit: "60-second wallet deduction",
    summary: "A supervised production pack for campaigns where the script, proof, pacing, and final asset need more senior attention.",
    points: [
      "Includes sharper angle selection, hook alternatives, screenplay review, storyboard validation, and production routing.",
      "Supports full AI or hybrid UGC depending on which scenes need a human face, product proof, or generated visual explanation.",
      "A senior editor owns final assembly, sound, captions, pacing, CTA clarity, export, and delivery notes.",
      "Best for launch ads, offer tests, paid campaigns, investor/customer proof videos, and brand-sensitive production.",
    ],
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
  const pricing = useLocalizedPricing();
  const [selectedPackageCode, setSelectedPackageCode] = useState("");
  const selectedPackage = useMemo(
    () => quotePackage(selectedPackageCode, pricing),
    [pricing, selectedPackageCode]
  );
  const featuredGuides = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);
  const featuredGuideCards = featuredGuides.slice(0, FEATURED_GUIDE_CARD_LIMIT);
  const latestPostLinks = posts.slice(0, LATEST_POST_LINK_LIMIT);

  return (
    <article className="landing-page">
      <section className="landing-hero studio-hero" id="hero" aria-label="Landing hero">
        <div className="hero-copy">
          <p className="kicker">On-demand creative department in software</p>
          <h1>Turn a product idea into a finished video ad in 5 minutes.</h1>
          <div className="hero-body">
            <p>Dalaillama turns a link, rough idea, or campaign note into a script, storyboard, scene plan, voiceover, captions, sound design, and final 60-second video.</p>
            <p>
              The old workflow makes founders write the script, brief an editor, chase storyboard revisions, and stitch raw files together. Dalaillama handles the copywriting, storyboard layouts, scene cinematography, and multimodal rendering through seedance 2.0/ Google Omini cloud clusters in one pass.
            </p>
            <p>
              You review the creative blueprint first. If it is right, the system renders the finished ad with native voiceover and contextual sound.
            </p>
          </div>
          <div className="hero-actions">
            <a
              className="creator-primary hero-button"
              href="#pricing"
              data-ga-event="cta_click"
              data-ga-cta-location="hero_section"
              data-ga-cta-text="Get a Free Campaign Blueprint"
            >
              Get a Free Campaign Blueprint
            </a>
            <a
              className="creator-secondary hero-button"
              href="#order"
              data-ga-event="cta_click"
              data-ga-cta-location="hero_section"
              data-ga-cta-text="See the Pipeline"
            >
              See the Pipeline
            </a>
          </div>
          <p className="hero-note">
            Built for founders who need finished ads, not another production tool to manage.
          </p>
        </div>

        <div className="production-board creator-panel" aria-label="Video ad production preview">
          <div className="board-header">
            <span>Campaign pipeline</span>
            <strong>5 minute draft</strong>
          </div>
          <div className="pipeline-strip">
            {orderDetails.map((item) => (
              <div className="pipeline-pill" key={item}>{item}</div>
            ))}
          </div>
          <div className="shot-preview-card">
            <div>
              <p>Simple workflow</p>
              <h2>Link in. Blueprint out. Render when ready.</h2>
              <span>The system writes the campaign, maps the shots, renders scenes, adds voice and sound, then returns one finished video asset.</span>
            </div>
            <div className="mini-frame" aria-hidden="true">
              <div className="mini-light" />
              <div className="mini-person" />
            </div>
          </div>
          <div className="board-timeline">
            <div className="timeline-row">
              <span>Brief</span>
              <b />
              <b />
              <b />
            </div>
            <div className="timeline-row edited">
              <span>Scenes</span>
              <b />
              <b />
            </div>
            <div className="timeline-row sound">
              <span>Sound</span>
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section essay-section" id="problem">
        <p className="kicker">Why software alone fails</p>
        <h2>Most video tools still leave the hard part with the founder.</h2>
        <div className="essay-copy">
          <p>
            Standard AI video tools usually produce a talking-head clip with captions. That is not a campaign. The founder still has to decide what to say, why it matters, what proof to show, how the scenes should move, and where the viewer should end up.
          </p>
          <p>
            Agencies solve more of the problem, but the loop is slow. A week can disappear before the first storyboard comes back, and every change creates another handoff.
          </p>
          <p>
            Dalaillama collapses the copywriter, creative director, storyboard artist, animator, voice artist, and sound designer into one software pipeline. The useful output is not a prompt. It is a finished ad.
          </p>
        </div>
      </section>

      <section className="landing-section" id="crew">
        <p className="kicker">System truth</p>
        <h2>The software takes over the creative department roles.</h2>
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
          <p className="kicker">Autonomous pipeline architecture</p>
          <h2>Three operational steps from spark to finished ad.</h2>
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
          <p className="kicker">Blueprint before compute</p>
          <h2>You can inspect the ad before paying for the final render.</h2>
        </div>
        <div className="essay-copy">
          <p>
            The first output is a campaign blueprint: the hook, the exact script, the visual screenplay, the storyboard layout, scene timing, camera movement, caption style, voice direction, and sound plan.
          </p>
          <p>
            This matters because bad creative should be fixed before expensive rendering starts. You approve the logic first. Then the production queue turns it into video.
          </p>
        </div>
      </section>

      {featuredGuideCards.length > 0 && (
        <section className="landing-section writing-section" id="production-guides">
          <p className="kicker">Knowledge base</p>
          <h2>Production notes for teams that want the deeper workflow.</h2>
          <div className="guide-link-grid">
            {featuredGuideCards.map((post) => (
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

      <section className="landing-section split-section" id="polish">
        <div>
          <p className="kicker">What comes back</p>
          <h2>The output is structured before it becomes a video file.</h2>
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
          <h2>An ad production system, not another blank canvas.</h2>
          <p>
            The founder gives Dalaillama the product context. The system handles the creative sequence and returns an asset that can be tested.
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

      <PricingSection
        pricing={pricing}
        selectedPackageCode={selectedPackageCode}
        onSelectPackage={setSelectedPackageCode}
      />

      <section className="landing-section essay-section">
        <p className="kicker">What it is not</p>
        <h2>It is not an editor, clipping tool, or prompt box.</h2>
        <div className="essay-copy">
          <p>
            A tool still asks the user to do the thinking. It gives knobs, timelines, and exports. That is not enough when the real bottleneck is deciding what the ad should say.
          </p>
          <p>
            Dalaillama starts at the campaign level. It decides the hook, writes the script, maps the scenes, maintains visual continuity, and renders the final output after approval.
          </p>
          <p>
            If the blueprint is weak, you should see that before spending on production. That is why every pack starts with the blueprint before production spend.
          </p>
        </div>
      </section>

      <section className="landing-section writing-section" id="writing">
        <p className="kicker">Research notes</p>
        <h2>Useful reading without turning the page into a link farm.</h2>
        <div className="blog-featured-block" aria-label="Reel patterns with short-form potential">
          <h2>Creative patterns worth studying</h2>
          <p className="empty-note">These are the kinds of decisions that sit underneath a strong short-form ad: the hook, proof, scene rhythm, and final action.</p>
          <div className="guide-link-grid">
            {reelStudies.map((study) => (
              <div className="guide-link-card creator-panel-muted" key={study.title}>
                <span>{study.title}</span>
                <small>{study.body}</small>
              </div>
            ))}
          </div>
        </div>
        {latestPostLinks.length > 0 ? (
          <div className="writing-list">
            {latestPostLinks.map((post) => (
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

      <ResourceDirectory featuredGuides={featuredGuides} />

      <section className="landing-section access-section creator-panel" id="access">
        <div>
          <p className="kicker">Submit campaign details</p>
          <h2>Send the link or idea. The selected pack is attached to the request.</h2>
          <p>
            Share the product, target customer, campaign goal, and any reference links. Choose the pack that matches how much human presence and creative supervision the ad needs.
          </p>
          <p>
            This is wallet-based, not a subscription. The selected pack is deducted only when the approved job moves into production.
          </p>
        </div>
        <LeadForm selectedPackage={selectedPackage} requirePackage />
      </section>
    </article>
  );
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

function PricingSection({ pricing, selectedPackageCode, onSelectPackage }) {
  return (
    <section className="landing-section pricing-section" id="pricing">
      <div className="pricing-head">
        <div>
          <p className="kicker">Wallet production packs</p>
          <h2>Pick the production path. The blueprint comes before the deduction.</h2>
          <p>
            These are one-time wallet deductions for a finished 60-second ad. Each pack includes ideation, screenplay, storyboard planning, render or creator routing, captions, sound, and basic editor finishing.
          </p>
        </div>
      </div>

      <div className="pricing-grid">
        {rateCardPlans.map((plan) => {
          const isSelected = selectedPackageCode === plan.code;
          return (
            <article
              className={`pricing-card creator-panel-muted${plan.featured ? " pricing-card-featured" : ""}${isSelected ? " pricing-card-selected" : ""}`}
              key={plan.title}
            >
              <div className="pricing-card-top">
                <span className="pricing-badge">{plan.badge}</span>
                <small>{plan.unit}</small>
              </div>
              <h3>{plan.title}</h3>
              <div className="price-row">
                <strong>{pricing.format(plan.usd)}</strong>
                <span>{plan.unit}</span>
              </div>
              <p>{plan.summary}</p>
              <ul className="pricing-list">
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="pricing-card-link"
                href="#access"
                onClick={() => onSelectPackage(plan.code)}
                data-ga-event="cta_click"
                data-ga-cta-location="pricing_section"
                data-ga-cta-text={plan.title}
              >
                {isSelected ? "Selected pack" : "Choose this pack"}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function useLocalizedPricing() {
  const [country, setCountry] = useState(() => browserCountryGuess());

  useEffect(() => {
    let cancelled = false;
    fetch("/api/country", { headers: { accept: "application/json" } })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const detectedCountry = cleanCountry(data?.country);
        if (!cancelled && detectedCountry) setCountry(detectedCountry);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return useMemo(() => {
    const isIndia = country === "IN";
    return {
      country,
      currency: isIndia ? "INR" : "USD",
      currencyLabel: isIndia ? "Indian rupees" : "US dollars",
      format: (usd) => (isIndia ? formatInr(usd * USD_TO_INR) : formatUsd(usd)),
    };
  }, [country]);
}

function quotePackage(packageCode, pricing) {
  const plan = rateCardPlans.find((item) => item.code === packageCode);
  if (!plan) return null;
  return {
    code: plan.code,
    title: plan.title,
    badge: plan.badge,
    unit: plan.unit,
    price: pricing.format(plan.usd),
    currency: pricing.currency,
    usd: Number(plan.usd.toFixed(2)),
    summary: plan.summary,
  };
}

function browserCountryGuess() {
  if (typeof navigator !== "undefined") {
    const languages = [navigator.language, ...(navigator.languages || [])]
      .filter(Boolean)
      .map((value) => value.toUpperCase());
    if (languages.some((language) => language.endsWith("-IN") || language === "IN")) {
      return "IN";
    }
  }

  if (typeof Intl !== "undefined") {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (timeZone === "Asia/Kolkata" || timeZone === "Asia/Calcutta") {
      return "IN";
    }
  }

  return "US";
}

function cleanCountry(country) {
  const value = String(country || "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(value) ? value : "";
}

function formatInr(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

function formatUsd(amount) {
  if (amount === 0) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount < 10 ? 2 : 0,
    maximumFractionDigits: amount < 10 ? 2 : 0,
  }).format(amount);
}
