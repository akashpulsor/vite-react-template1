import { posts } from "../posts/index.js";
import { agencyWorkflowGuides } from "../posts/agencyWorkflowPosts.js";
import { newsroomWorkflowGuides } from "../posts/newsroomWorkflowPosts.js";
import { sourceToShortsConfigs } from "../posts/programmaticShortsPosts.js";
import { serviceComparisonGuides } from "../posts/serviceComparisonPosts.js";
import { videoOperationsGuides } from "../posts/videoOperationsPosts.js";
import { reelStudies } from "../reelStudies.js";

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

export default function Blog() {
  const featuredPosts = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);
  const sourceToShortsGuides = sourceToShortsConfigs.map((config) => ({
    title: config.title,
    href: `/blog/${config.slug}`,
    body: config.description,
  }));

  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Blog back to home">Back to home</a></p>
      <h1>Video Editing Guides</h1>
      <p>Practical guides for turning long, raw, or rough footage into focused short-form videos with stronger hooks, cleaner captions, better pacing, and reliable review.</p>
      <section className="blog-featured-block" aria-label="Newsroom video operations guides">
        <h2>Newsroom Video Operations Guides</h2>
        <p className="empty-note">Practical guides for publishers, broadcasters, video desks, and editorial operations teams improving AI-assisted newsroom video workflows without weakening editorial review.</p>
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
        <p className="empty-note">Practical guides for agencies managing client Shorts, white-label editing, batching, approval, QA, templates, metrics, outsourcing, and fast delivery.</p>
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
        <p className="empty-note">Operations guides for teams reducing turnaround, increasing throughput, fixing review bottlenecks, scaling production, and managing high-volume video delivery.</p>
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
        <p className="empty-note">Evaluation guides for choosing Shorts editing services, podcast clipping, AI video tools, managed editing, and alternatives to self-serve editing software.</p>
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
        <p className="empty-note">Source-specific guides for turning podcasts, interviews, webinars, meetings, broadcasts, events, investor updates, sports footage, and civic recordings into Shorts.</p>
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
