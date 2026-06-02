import { getPostBySlug } from "../posts/index.js";
import { renderMarkdown } from "../posts/renderMarkdown.jsx";

export default function BlogPost({ slug }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <article className="page essay-page">
        <p className="kicker">404</p>
        <h1>Post not found.</h1>
        <p><a href="/blog" data-ga-event="nav_click" data-ga-label="404 back to blogs and case studies">Back to blogs & case studies</a></p>
      </article>
    );
  }

  return (
    <article className="page essay-page">
      <p className="back-link"><a href="/" data-ga-event="nav_click" data-ga-label="Post back to dashboard">Back to dashboard</a></p>
      <p className="kicker">{post.date}</p>
      <h1>{post.title}</h1>
      <div className="post-body">{renderMarkdown(post.body)}</div>
      <p className="back-link"><a href="/blog" data-ga-event="nav_click" data-ga-label="Post back to blogs and case studies">Back to blogs & case studies</a></p>
    </article>
  );
}
