import { posts } from "../posts/index.js";

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
  const remainingPosts = posts.filter((post) => !featuredGuideSlugs.includes(post.slug));

  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Blog back to dashboard">Back to dashboard</a></p>
      <h1>Blogs & Case Studies</h1>
      <p>We will publish product blogs and real creator workflow case studies here.</p>
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
        <div className="post-list">
          {remainingPosts.map((post) => (
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
      ) : (
        <p className="empty-note">No posts yet.</p>
      )}
    </article>
  );
}
