export const posts = [];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
