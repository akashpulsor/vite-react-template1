import { posts } from "../posts/index.js";
import { reelStudies } from "../reelStudies.js";

const featuredGuideSlugs = [
  "meaningful-short-video-ai",
  "storyboard-shorts-with-images",
  "dp-shorts-with-images",
  "lighting-shorts-with-images",
];

export default function Blog() {
  const featuredPosts = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);

  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Blog back to home">Back to home</a></p>
      <h1>Short Video Editing Guides & Case Studies</h1>
      <p>Practical editing guides, production notes, and case studies for turning existing video into stronger Shorts, Reels, TikToks, and LinkedIn clips.</p>
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
