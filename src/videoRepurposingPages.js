export const VIDEO_REPURPOSING_BASE_PATH = "/video-repurposing";

export const videoRepurposingAuthorityLinks = [
  {
    label: "YouTube Help: Get started creating YouTube Shorts",
    href: "https://support.google.com/youtube/answer/10059070",
    body: "Official Shorts guidance for format, uploads, creator settings, and how Shorts are discovered.",
  },
  {
    label: "W3C WAI: Captions/Subtitles",
    href: "https://www.w3.org/WAI/media/av/captions/",
    body: "Accessibility guidance for captions and subtitles, useful when repurposed clips depend on spoken words.",
  },
];

export const videoRepurposingHub = {
  path: VIDEO_REPURPOSING_BASE_PATH,
  title: "Video Repurposing",
  seoTitle: "Video Repurposing Service for Shorts | Dalaillama",
  description:
    "Turn podcasts, webinars, interviews, lectures, YouTube videos, and press conferences into ready-to-post vertical Shorts with human review, captions, crop, and sound polish.",
  kicker: "Video repurposing service",
  headline: "Turn long recordings into Shorts without dumping random clips.",
  intro: [
    "Dalaillama repurposes long-form source video into focused vertical Shorts for teams that already record useful material but do not want to manage every edit.",
    "Send a podcast, webinar, press conference, YouTube video, interview, or lecture. We find one useful moment, shape the hook, crop for mobile, add captions, polish sound, and return a ready-to-post Short.",
  ],
  workflow: [
    "Review the source recording and transcript for complete ideas, answers, claims, teaching moments, or public-interest updates.",
    "Choose one clip that can stand alone instead of slicing every timestamp into weak posts.",
    "Rewrite the opening around the viewer's problem, question, or curiosity.",
    "Crop the source for vertical viewing while keeping the speaker, slide, screen, or action understandable.",
    "Add readable captions, check names and claims, polish sound, and export the final Short.",
  ],
  faq: [
    {
      question: "Is video repurposing the same as auto clipping?",
      answer:
        "No. Auto clipping often slices by transcript highlights or predicted scores. This service uses human review to choose a complete moment, protect context, and make the final Short feel intentional.",
    },
    {
      question: "What source videos can I send?",
      answer:
        "You can send a podcast, webinar, interview, lecture, press conference, YouTube video, product demo, event recording, or another long-form video that you own or have permission to repurpose.",
    },
    {
      question: "How do you avoid weak Shorts?",
      answer:
        "We look for one clear idea, a strong opening, enough context, readable captions, mobile-safe framing, and a payoff that makes sense even if the viewer never watches the original recording.",
    },
  ],
};

export const videoRepurposingChildPages = [
  {
    slug: "turn-podcast-into-shorts",
    title: "Turn Podcast into Shorts",
    seoTitle: "Turn Podcast into Shorts Service | Dalaillama",
    description:
      "Send a podcast episode and get a focused, captioned vertical Short built from one strong guest answer, story, claim, or teaching moment.",
    kicker: "Podcast to Shorts",
    source: "Podcast episode",
    audience: "Podcast teams, founders, and creator-led brands",
    problem:
      "The strongest podcast moment is often buried behind host setup, warm-up, sponsor reads, and long conversational context.",
    outcome:
      "A captioned Short that carries one complete answer or story without making the viewer listen to the whole episode first.",
    bestMoment:
      "A guest gives a direct answer, challenges a belief, shares a compact story, or explains something the audience can use immediately.",
    avoid:
      "Inside jokes, generic episode summaries, cold fragments, or clips where the payoff depends on several earlier minutes.",
    intake: ["Episode file or link", "Speaker names", "Target platform", "Any guest approval rules"],
    workflow: [
      "Scan the transcript for claims, stories, contrarian answers, and clean question-answer pairs.",
      "Choose one idea and remove the warm-up without stripping the speaker's meaning.",
      "Open with the viewer problem or the strongest line, not the episode title.",
      "Keep speaker framing clear and captions readable on mobile.",
      "Check names, show terminology, and guest approval requirements before delivery.",
    ],
    qualityChecks: [
      "One complete thought lands in under a minute.",
      "The first line gives curiosity or practical value.",
      "The clip still sounds like the real guest, not a forced quote.",
    ],
    blogHref: "/blog/turn-podcast-into-shorts",
    relatedSlugs: ["turn-interview-into-shorts", "turn-youtube-video-into-shorts", "turn-webinar-into-shorts"],
  },
  {
    slug: "turn-webinar-into-shorts",
    title: "Turn Webinar into Shorts",
    seoTitle: "Turn Webinar into Shorts Service | Dalaillama",
    description:
      "Repurpose webinar replays into useful short-form clips from teaching moments, Q&A answers, slide explanations, and expert demos.",
    kicker: "Webinar to Shorts",
    source: "Webinar replay",
    audience: "B2B marketers, educators, agencies, and sales enablement teams",
    problem:
      "Webinars are built for depth, but Shorts need one fast insight. The useful moment has to be rescued from housekeeping, slide transitions, and long setup.",
    outcome:
      "A vertical Short that turns one lesson, objection, framework, or demo moment into a mobile-safe clip.",
    bestMoment:
      "The speaker explains one framework, answers a live objection, shows a simple visual, or gives a tactical takeaway from a slide.",
    avoid:
      "Agenda slides, sponsor intros, broad recaps, private attendee details, and slide text too small to read on a phone.",
    intake: ["Replay file or link", "Slide deck if available", "Speaker names", "Public/private usage notes"],
    workflow: [
      "Mark slide changes, audience questions, and speaker spikes before choosing the final moment.",
      "Select a clip that can stand alone without the registration promise or full deck.",
      "Crop between speaker and slide based on what carries the point.",
      "Replace tiny slide details with readable captions or short callouts.",
      "End on the lesson learned instead of a generic webinar CTA.",
    ],
    qualityChecks: [
      "The clip teaches one useful point by itself.",
      "Slide or screen detail is legible after vertical reframing.",
      "No private chat, poll, or attendee information appears.",
    ],
    blogHref: "/blog/turn-webinar-into-shorts",
    relatedSlugs: ["turn-lecture-into-shorts", "turn-podcast-into-shorts", "turn-interview-into-shorts"],
  },
  {
    slug: "turn-press-conference-into-shorts",
    title: "Turn Press Conference into Shorts",
    seoTitle: "Turn Press Conference into Shorts Service | Dalaillama",
    description:
      "Create fast, captioned press conference Shorts while preserving speaker attribution, question context, and editorial review.",
    kicker: "Press conference to Shorts",
    source: "Press conference recording",
    audience: "Newsrooms, public affairs teams, broadcasters, and agencies",
    problem:
      "A press conference clip can become misleading if the question, qualifier, speaker identity, or timestamp context is removed too aggressively.",
    outcome:
      "A short public-interest clip with clear attribution, accurate captions, mobile crop, and review-ready context.",
    bestMoment:
      "A speaker gives a concrete announcement, clarifies a timeline, answers a high-interest question, or corrects a misunderstanding.",
    avoid:
      "Dramatic fragments without source context, unattributed statements, and jump cuts that imply a continuous sentence.",
    intake: ["Source recording", "Event name", "Speaker names and titles", "Review owner"],
    workflow: [
      "Capture speaker name, role, event, and timestamp before cutting.",
      "Decide whether the reporter question must stay for accuracy.",
      "Use lower thirds and captions to separate source remarks from editorial framing.",
      "Keep qualifying language when removing it would change the meaning.",
      "Route sensitive clips through editorial or communications review before publishing.",
    ],
    qualityChecks: [
      "The viewer knows who is speaking and why the moment matters.",
      "The clip can be verified against the full source recording.",
      "Captions do not editorialize the speaker's words.",
    ],
    blogHref: "/blog/turn-press-conference-into-shorts",
    relatedSlugs: ["turn-interview-into-shorts", "turn-youtube-video-into-shorts", "turn-webinar-into-shorts"],
  },
  {
    slug: "turn-youtube-video-into-shorts",
    title: "Turn YouTube Video into Shorts",
    seoTitle: "Turn YouTube Video into Shorts Service | Dalaillama",
    description:
      "Repurpose owned YouTube videos into standalone Shorts using chapters, comments, transcript cues, vertical crop, captions, and a fresh hook.",
    kicker: "YouTube video to Shorts",
    source: "Owned YouTube video",
    audience: "YouTubers, channel managers, editors, and creator teams",
    problem:
      "A good YouTube-to-Shorts edit should create a new entry point into the long video, not feel like a resized trailer or random mid-video fragment.",
    outcome:
      "A vertical Short that delivers a complete mini-lesson, reveal, mistake, opinion, or result from the original video.",
    bestMoment:
      "A tutorial step, before-after reveal, mistake, result, audience-favorite segment, or comment-driven question that can stand alone.",
    avoid:
      "Reused intros, copyright-unclear footage, and clips that only say 'watch the full video' before giving value.",
    intake: ["YouTube link or source file", "Channel ownership or permission", "Target platform", "Preferred CTA"],
    workflow: [
      "Use chapters, comments, retention notes, or transcript search to find proven interest points.",
      "Choose a segment that gives value even if the viewer never clicks the long video.",
      "Rewrite the first line for a vertical viewer who did not see the title or thumbnail.",
      "Crop around the face, object, screen, or action that carries the clip.",
      "Prepare a related-video, pinned comment, or description handoff for the long video.",
    ],
    qualityChecks: [
      "The clip has its own hook and payoff.",
      "The frame works in 9:16 without hiding the important detail.",
      "The source video is owned or cleared for repurposing.",
    ],
    blogHref: "/blog/turn-youtube-video-into-shorts",
    relatedSlugs: ["turn-podcast-into-shorts", "turn-interview-into-shorts", "turn-webinar-into-shorts"],
  },
  {
    slug: "turn-interview-into-shorts",
    title: "Turn Interview into Shorts",
    seoTitle: "Turn Interview into Shorts Service | Dalaillama",
    description:
      "Convert expert, customer, founder, or journalistic interviews into short-form clips that keep context, attribution, and answer quality intact.",
    kicker: "Interview to Shorts",
    source: "Interview recording",
    audience: "Founders, journalists, recruiters, educators, and content teams",
    problem:
      "Interview clips fail when the question disappears, the answer sounds out of context, or the edit makes the speaker seem more certain than they were.",
    outcome:
      "A Short built around one strong answer with enough setup, speaker attribution, clean captions, and a clear reason to keep watching.",
    bestMoment:
      "The interviewee shares a lesson, objection, confession, before-after result, memorable phrase, or direct answer to a common question.",
    avoid:
      "Long biography intros, overlapping interruptions, stitched-together answers, and clips recorded for a limited-use context.",
    intake: ["Interview file or link", "Speaker names and titles", "Usage permission", "Important terms or names"],
    workflow: [
      "Find answer blocks that contain a problem, point of view, and payoff.",
      "Preserve or summarize the missing question when accuracy depends on it.",
      "Trim interruptions and pauses without manufacturing a different position.",
      "Keep speaker name or title visible when authority matters.",
      "Review captions for names, numbers, and quoted language before export.",
    ],
    qualityChecks: [
      "The viewer understands the question being answered.",
      "The speaker's intent is preserved.",
      "The caption file is checked for proper names and claims.",
    ],
    blogHref: "/blog/turn-interview-into-shorts",
    relatedSlugs: ["turn-podcast-into-shorts", "turn-press-conference-into-shorts", "turn-youtube-video-into-shorts"],
  },
  {
    slug: "turn-lecture-into-shorts",
    title: "Turn Lecture into Shorts",
    seoTitle: "Turn Lecture into Shorts Service | Dalaillama",
    description:
      "Turn lecture recordings into educational Shorts built around one concept, example, misconception, proof, or memorable explanation.",
    kicker: "Lecture to Shorts",
    source: "Lecture recording",
    audience: "Educators, universities, online teachers, and learning teams",
    problem:
      "A lecture Short should not compress an entire class. It should make one concept easier to remember or answer one learner question clearly.",
    outcome:
      "A concise educational clip with readable captions, mobile-safe board or slide framing, and one learning outcome.",
    bestMoment:
      "The instructor defines a concept, solves a small example, corrects a misconception, or explains why a topic matters.",
    avoid:
      "Full lesson summaries, board text too small to read, student information, and clips that require syllabus context.",
    intake: ["Lecture file or link", "Topic or module", "Slide or board notes", "Privacy restrictions"],
    workflow: [
      "Find concept boundaries in the transcript, slides, or board sequence.",
      "Choose one outcome: define, demonstrate, compare, or correct.",
      "Crop between instructor, board, and slide based on what carries the learning.",
      "Add captions and short labels for formulas, terms, or names that are hard to hear.",
      "End when the concept lands, not when the lecture naturally moves to the next topic.",
    ],
    qualityChecks: [
      "The clip answers one learner question by itself.",
      "Visual details are readable on mobile.",
      "Student privacy and academic context are protected.",
    ],
    blogHref: "/blog/turn-lecture-into-shorts",
    relatedSlugs: ["turn-webinar-into-shorts", "turn-interview-into-shorts", "turn-youtube-video-into-shorts"],
  },
].map((page) => ({
  ...page,
  path: `${VIDEO_REPURPOSING_BASE_PATH}/${page.slug}`,
}));

export function getVideoRepurposingPage(slug) {
  return videoRepurposingChildPages.find((page) => page.slug === slug);
}
