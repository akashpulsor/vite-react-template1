import { posts } from "../posts/index.js";
import contentInventory from "../contentInventory.json";
import { knowledgeBaseClusters, programmaticSeoTemplates, seoOrchestratorStages } from "../knowledgeBaseGraph.js";
import { agencyWorkflowGuides, agencyWorkflowInventory } from "../posts/agencyWorkflowPosts.js";
import { newsroomWorkflowGuides, newsroomWorkflowInventory } from "../posts/newsroomWorkflowPosts.js";
import { programmaticShortsInventory, sourceToShortsConfigs } from "../posts/programmaticShortsPosts.js";
import { serviceComparisonGuides, serviceComparisonInventory } from "../posts/serviceComparisonPosts.js";
import { videoOperationsGuides, videoOperationsInventory } from "../posts/videoOperationsPosts.js";
import { reelStudies } from "../reelStudies.js";

const featuredGuideSlugs = [
  "ai-video-workflow-digital-publishers",
  "ai-video-editing-newsrooms",
  "reddit-shorts-editing-workflow",
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];

export default function Blog() {
  const featuredPosts = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);
  const fullContentInventory = [
    ...contentInventory,
    ...newsroomWorkflowInventory,
    ...agencyWorkflowInventory,
    ...videoOperationsInventory,
    ...serviceComparisonInventory,
    ...programmaticShortsInventory,
  ];
  const contentBuckets = summarizeBuckets(fullContentInventory);
  const sourceToShortsGuides = sourceToShortsConfigs.map((config) => ({
    title: config.title,
    href: `/blog/${config.slug}`,
    body: config.description,
  }));

  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Blog back to home">Back to home</a></p>
      <h1>AI Newsroom Video Workflow Knowledge Base</h1>
      <p>Practical guides, site-graph planning, and production notes for publishers, broadcasters, agencies, and media teams turning long video into approved short-form output.</p>
      <section className="blog-featured-block" aria-label="AI newsroom workflow knowledge base map">
        <h2>Knowledge Base Site Graph</h2>
        <p className="empty-note">The blog is organized as a topical authority map, with pillar pages, supporting articles, industry pages, workflow pages, and comparison pages connected intentionally.</p>
        <div className="guide-link-grid">
          {knowledgeBaseClusters.map((cluster) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={cluster.href}
              key={cluster.title}
              data-ga-event="knowledge_graph_click"
              data-ga-label={cluster.title}
            >
              <span>{cluster.title}</span>
              <small>{cluster.pillar}. {cluster.intent} Includes: {cluster.topics.slice(0, 3).join(", ")}.</small>
            </a>
          ))}
        </div>
        <div className="guide-link-grid">
          {programmaticSeoTemplates.map((template) => (
            <div className="guide-link-card creator-panel-muted" key={template.pattern}>
              <span>{template.pattern}</span>
              <small>{template.examples}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Newsroom video operations guides">
        <h2>Newsroom Video Operations Guides</h2>
        <p className="empty-note">A focused cluster for publishers, broadcasters, video desks, and editorial operations teams improving AI-assisted newsroom video workflows without diluting editorial review.</p>
        <div className="guide-link-grid">
          {newsroomWorkflowGuides.map((guide) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={guide.href}
              key={guide.href}
              data-ga-event="newsroom_workflow_click"
              data-ga-label={guide.title}
            >
              <span>{guide.title}</span>
              <small>{guide.body}</small>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Agency video operations guides">
        <h2>Agency Video Operations Guides</h2>
        <p className="empty-note">A focused cluster for agencies managing client Shorts, white-label editing, batching, approval, QA, templates, metrics, outsourcing, and fast delivery.</p>
        <div className="guide-link-grid">
          {agencyWorkflowGuides.map((guide) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={guide.href}
              key={guide.href}
              data-ga-event="agency_workflow_click"
              data-ga-label={guide.title}
            >
              <span>{guide.title}</span>
              <small>{guide.body}</small>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Video production operations guides">
        <h2>Video Production Operations Guides</h2>
        <p className="empty-note">A broader operations cluster for teams reducing turnaround, increasing throughput, fixing review bottlenecks, scaling production, and managing high-volume video delivery.</p>
        <div className="guide-link-grid">
          {videoOperationsGuides.map((guide) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={guide.href}
              key={guide.href}
              data-ga-event="video_operations_click"
              data-ga-label={guide.title}
            >
              <span>{guide.title}</span>
              <small>{guide.body}</small>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Service and tool evaluation guides">
        <h2>Service and Tool Evaluation Guides</h2>
        <p className="empty-note">Buyer-intent guides for choosing Shorts editing services, podcast clipping, AI video tools, managed editing, and alternatives to self-serve editing software.</p>
        <div className="guide-link-grid">
          {serviceComparisonGuides.map((guide) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={guide.href}
              key={guide.href}
              data-ga-event="service_comparison_click"
              data-ga-label={guide.title}
            >
              <span>{guide.title}</span>
              <small>{guide.body}</small>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Source-to-Shorts conversion guides">
        <h2>Source-to-Shorts Conversion Guides</h2>
        <p className="empty-note">A focused cluster for teams searching by source format: podcasts, interviews, webinars, meetings, broadcasts, events, investor updates, sports footage, and civic recordings.</p>
        <div className="guide-link-grid">
          {sourceToShortsGuides.map((guide) => (
            <a
              className="guide-link-card creator-panel-muted"
              href={guide.href}
              key={guide.href}
              data-ga-event="source_to_shorts_click"
              data-ga-label={guide.title}
            >
              <span>{guide.title}</span>
              <small>{guide.body}</small>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="SEO content orchestrator audit">
        <h2>SEO Content Orchestrator Audit</h2>
        <p className="empty-note">The current blog inventory is stored as machine-readable metadata, so future articles can be checked for cluster fit, business intent, internal links, and cannibalization before they are written. Current tracked inventory: {fullContentInventory.length} articles.</p>
        <div className="guide-link-grid">
          {seoOrchestratorStages.map((stage) => (
            <div className="guide-link-card creator-panel-muted" key={stage.title}>
              <span>{stage.title}</span>
              <small>{stage.body}</small>
            </div>
          ))}
        </div>
        <div className="guide-link-grid">
          {contentBuckets.map((bucket) => (
            <div className="guide-link-card creator-panel-muted" key={bucket.cluster}>
              <span>{bucket.cluster}</span>
              <small>{bucket.count} articles. Pillars: {bucket.pillars.join(", ")}. Funnel mix: {bucket.funnels.join(", ")}.</small>
            </div>
          ))}
        </div>
      </section>
      <section className="blog-featured-block" aria-label="Reel patterns with short-form potential">
        <h2>Reel Patterns Worth Editing</h2>
        <p className="empty-note">Some clips are not popular yet, but they have the raw material for a good reel: a clear idea, tension, usefulness, or a visible before-and-after.</p>
        <div className="guide-link-grid">
          {reelStudies.map((study) => (
            <div className="guide-link-card creator-panel-muted" key={study.title}>
              <span>{study.title}</span>
              <small>{study.body}</small>
            </div>
          ))}
        </div>
      </section>
      {featuredPosts.length > 0 && (
        <section className="blog-featured-block" aria-label="Featured production guides and case studies">
          <h2>Featured Production Guides and Case Studies</h2>
          <div className="guide-link-grid">
            {featuredPosts.map((post) => (
              <a
                className="guide-link-card creator-panel-muted"
                href={`/blog/${post.slug}`}
                key={post.slug}
                data-ga-event="blog_post_click"
                data-ga-label={post.title}
              >
                <span>{post.title}</span>
                <small>{post.description}</small>
              </a>
            ))}
          </div>
        </section>
      )}
      {posts.length > 0 ? (
        <>
          <h2>All Blog Posts</h2>
          <div className="post-list">
            {posts.map((post) => (
              <a
                className="post-link"
                href={`/blog/${post.slug}`}
                key={post.slug}
                data-ga-event="blog_post_click"
                data-ga-label={post.title}
              >
                <span>{post.title}</span>
                <small>{post.date}</small>
              </a>
            ))}
          </div>
        </>
      ) : (
        <p className="empty-note">No posts yet.</p>
      )}
    </article>
  );
}

function summarizeBuckets(items) {
  const buckets = new Map();

  items.forEach((item) => {
    const existing = buckets.get(item.cluster) || {
      cluster: item.cluster,
      count: 0,
      pillars: new Set(),
      funnels: new Set(),
    };
    existing.count += 1;
    existing.pillars.add(item.pillar);
    existing.funnels.add(item.funnel);
    buckets.set(item.cluster, existing);
  });

  return Array.from(buckets.values())
    .map((bucket) => ({
      ...bucket,
      pillars: Array.from(bucket.pillars).slice(0, 2),
      funnels: Array.from(bucket.funnels),
    }))
    .sort((a, b) => b.count - a.count || a.cluster.localeCompare(b.cluster));
}
