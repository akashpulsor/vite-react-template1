import planShort from "./how-to-plan-a-youtube-short.md?raw";
import hooks from "./youtube-shorts-hooks.md?raw";
import shotList from "./what-is-a-shot-list.md?raw";
import storyboardShort from "./storyboard-youtube-short.md?raw";
import talkingHeadLighting from "./talking-head-video-lighting.md?raw";
import phoneProfessional from "./professional-videos-with-phone.md?raw";
import reviewFootage from "./review-footage-before-editing.md?raw";
import audioQuality from "./improve-audio-quality-in-videos.md?raw";
import phoneFootageProfessional from "./make-phone-footage-look-professional.md?raw";
import creatorWorkflow from "./creator-production-workflow.md?raw";
import meaningfulShortVideoAi from "./meaningful-short-video-ai.md?raw";
import storyboardShortsWithImages from "./storyboard-shorts-with-images.md?raw";
import dpShortsWithImages from "./dp-shorts-with-images.md?raw";
import lightingShortsWithImages from "./lighting-shorts-with-images.md?raw";

const rawPosts = [
  meaningfulShortVideoAi,
  lightingShortsWithImages,
  dpShortsWithImages,
  storyboardShortsWithImages,
  planShort,
  hooks,
  shotList,
  storyboardShort,
  talkingHeadLighting,
  phoneProfessional,
  reviewFootage,
  audioQuality,
  phoneFootageProfessional,
  creatorWorkflow,
];

export const posts = rawPosts.map(parsePost);

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

function parsePost(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const frontmatter = match ? parseFrontmatter(match[1]) : {};
  const body = match ? match[2].trim() : raw.trim();
  return {
    title: frontmatter.title || firstHeading(body) || "Untitled",
    slug: frontmatter.slug || slugify(frontmatter.title || firstHeading(body) || "untitled"),
    description: frontmatter.description || "",
    keywords: frontmatter.keywords || [],
    readingTime: frontmatter.readingTime || "",
    date: frontmatter.date || "",
    body: stripLeadingH1(body),
    heroImage: frontmatter.ogImage || firstImage(body)?.src || "",
    heroImageAlt: frontmatter.ogImageAlt || firstImage(body)?.alt || "",
    imagePrompts: frontmatter.imagePrompts || {},
    relatedArticles: frontmatter.relatedArticles || [],
  };
}

function parseFrontmatter(text) {
  const lines = text.split("\n");
  const data = {};
  let currentKey = "";
  for (const line of lines) {
    const indent = line.match(/^\s*/)?.[0]?.length || 0;
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (indent === 0 && /^[a-zA-Z][\w-]*:/.test(trimmed)) {
      const [key, ...rest] = trimmed.split(":");
      currentKey = key.trim();
      const value = rest.join(":").trim();
      data[currentKey] = value ? parseValue(value) : {};
      continue;
    }
    if (trimmed.startsWith("- ") && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(trimmed.slice(2).trim().replace(/^"|"$/g, ""));
      continue;
    }
    const nestedMatch = trimmed.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (indent > 0 && nestedMatch && currentKey) {
      if (!data[currentKey] || Array.isArray(data[currentKey]) || typeof data[currentKey] !== "object") {
        data[currentKey] = {};
      }
      data[currentKey][nestedMatch[1]] = parseValue(nestedMatch[2]);
    }
  }
  return data;
}

function parseValue(value) {
  if (!value) return "";
  if (value === "[]") return [];
  if (value === "{}") return {};
  if (value.startsWith("[") && value.endsWith("]")) {
    return value.slice(1, -1).split(",").map((item) => item.trim().replace(/^"|"$/g, "")).filter(Boolean);
  }
  return value.replace(/^"|"$/g, "");
}

function firstHeading(body) {
  return body.split("\n").find((line) => line.startsWith("# "))?.replace(/^# /, "").trim();
}

function stripLeadingH1(body) {
  return body.replace(/^# .+\n+/, "").trim();
}

function firstImage(body) {
  const match = body.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  return match ? { alt: match[1], src: match[2] } : null;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
