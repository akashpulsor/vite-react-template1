import { posts } from "../posts/index.js";

export default function Blog() {
  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Blog back to dashboard">Back to dashboard</a></p>
      <h1>Blogs & Case Studies</h1>
      <p>We will publish product blogs and real creator workflow case studies here.</p>
      {posts.length > 0 ? (
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
      ) : (
        <p className="empty-note">No posts yet.</p>
      )}
    </article>
  );
}
