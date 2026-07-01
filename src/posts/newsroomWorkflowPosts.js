const PUBLISHED_DATE = "July 1, 2026";
const HERO_IMAGE = "/blog/ai-video-editing-newsrooms/newsroom-ai-video-workflow.png";

const referenceLibrary = {
  reutersDigitalNews2026: {
    label: "Reuters Institute Digital News Report 2026",
    url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026",
    note: "for current audience, platform, and online news video context",
  },
  apPrinciples: {
    label: "Associated Press News Values and Principles",
    url: "https://www.ap.org/about/news-values-and-principles/",
    note: "for accuracy, fairness, independence, and editorial standards",
  },
  googleNewsInitiative: {
    label: "Google News Initiative",
    url: "https://newsinitiative.withgoogle.com/",
    note: "for digital journalism, audience, and newsroom training resources",
  },
  googleHelpful: {
    label: "Google Search Central: helpful, reliable, people-first content",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    note: "for publishing useful pages instead of search-only content",
  },
  googleAi: {
    label: "Google Search Central: guidance about AI-generated content",
    url: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content",
    note: "for using AI-assisted workflows without lowering content quality",
  },
  googleArticleSchema: {
    label: "Google Search Central: Article structured data",
    url: "https://developers.google.com/search/docs/appearance/structured-data/article",
    note: "for article metadata and search appearance basics",
  },
  googleSitemaps: {
    label: "Google Search Central: Learn about sitemaps",
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    note: "for sitemap discovery and crawl efficiency context",
  },
  youtubeShorts: {
    label: "YouTube Help: Get started creating YouTube Shorts",
    url: "https://support.google.com/youtube/answer/10059070",
    note: "for Shorts format and upload context",
  },
  w3cMedia: {
    label: "W3C WAI: Making Audio and Video Media Accessible",
    url: "https://www.w3.org/WAI/media/av/",
    note: "for captions, transcripts, and accessible video practices",
  },
  iptcVideoMetadata: {
    label: "IPTC Video Metadata Hub",
    url: "https://iptc.org/standards/video-metadata-hub/",
    note: "for video metadata fields used in professional media operations",
  },
  ffmpegDocs: {
    label: "FFmpeg documentation",
    url: "https://ffmpeg.org/documentation.html",
    note: "for technical video processing, encoding, scaling, and inspection",
  },
};

const existingPillars = [
  {
    title: "AI Video Editing for Newsrooms",
    slug: "ai-video-editing-newsrooms",
    description: "The existing enterprise pillar for newsroom-grade AI clipping, captions, detection, review, and publishing operations.",
    primaryKeyword: "AI video editing for newsrooms",
    intent: "enterprise AI newsroom video platform evaluation",
    audience: "newsrooms, broadcasters, publishers, and media operators",
    funnel: "BOFU",
    businessIntent: "enterprise newsroom demo request",
  },
  {
    title: "AI Workflow for Digital Publishers",
    slug: "ai-video-workflow-digital-publishers",
    description: "The existing publisher workflow pillar for turning long-form video into approved short-form output.",
    primaryKeyword: "AI workflow for digital publishers",
    intent: "publisher workflow planning and operational evaluation",
    audience: "digital publishers, broadcasters, and video desks",
    funnel: "MOFU",
    businessIntent: "publisher workflow audit",
  },
];

export const newsroomWorkflowConfigs = [
  {
    title: "Newsroom Video Workflow: From Source Footage to Published Short",
    slug: "newsroom-video-workflow",
    description: "A practical newsroom video workflow for intake, clipping, edit review, captions, metadata, approvals, and multi-platform publishing.",
    primaryKeyword: "newsroom video workflow",
    intent: "map an end-to-end newsroom video production system",
    audience: "digital editors, video desks, newsroom operators, and publishers",
    angle: "This page is the operating map for the cluster. It explains the handoff from assignment to source video, edit, review, publishing, and archive so the other pages can go deeper without repeating the same overview.",
    outcome: "a repeatable video production line where breaking news, explainers, interviews, and broadcasts move through consistent checkpoints",
    avoid: "building separate manual workflows for every desk, channel, and editor",
    owner: "head of video or managing editor",
    workflow: [
      "Capture every source with a story slug, owner, rights status, location, and publish priority.",
      "Separate urgent clips, evergreen clips, archive clips, and platform-specific adaptations before editing begins.",
      "Run transcript, shot, speaker, and caption prep early so editors can choose moments faster.",
      "Use editorial review checkpoints for factual accuracy, context, captions, rights, and sensitivity.",
      "Publish with metadata that supports search, social discovery, archive retrieval, and future reuse.",
    ],
    signals: [
      "Editors can see which stories need video before a producer asks.",
      "Every clip has a source timestamp, approval owner, and target platform.",
      "Archive retrieval is part of the workflow instead of an afterthought.",
    ],
    guardrails: [
      "Do not let automation publish news clips without editorial sign-off.",
      "Avoid treating speed and verification as separate teams with no handoff.",
      "Keep one source of truth for status so desks do not duplicate edits.",
    ],
    references: ["reutersDigitalNews2026", "apPrinciples", "iptcVideoMetadata", "googleHelpful"],
    related: ["ai-video-editing-newsrooms", "editorial-approval-workflow", "video-desk-workflow"],
    funnel: "MOFU",
    businessIntent: "workflow audit",
  },
  {
    title: "How Newsrooms Produce Shorts: Editorial Workflow for Social Video",
    slug: "how-newsrooms-produce-shorts",
    description: "How newsrooms produce Shorts from interviews, press conferences, broadcasts, explainers, and archive footage without losing context.",
    primaryKeyword: "how newsrooms produce shorts",
    intent: "understand short-form production inside editorial teams",
    audience: "newsroom social editors, video producers, and digital publishers",
    angle: "This article focuses on newsroom Shorts production, not creator-style repurposing. The editorial problem is making one short clip fast while preserving sourcing, context, corrections, captions, and platform fit.",
    outcome: "a short-form production flow that gets useful news clips onto YouTube Shorts, Reels, TikTok, and social feeds with review intact",
    avoid: "cutting every strong quote into a Short before checking whether the clip changes the story meaning",
    owner: "social video editor",
    workflow: [
      "Start with the story angle: what should the viewer know after 30 to 90 seconds?",
      "Choose a clip with a clear source, speaker, date, and reason for being short-form.",
      "Write a hook that states the news value without sensationalizing uncertainty.",
      "Crop for vertical while keeping faces, documents, captions, and lower thirds legible.",
      "Route final captions, thumbnail frame, and platform copy through the right desk.",
    ],
    signals: [
      "The clip answers what happened, why it matters, or what changed.",
      "The source context is visible even if the viewer never opens the full story.",
      "The Short has a single editorial promise, not a collage of unrelated moments.",
    ],
    guardrails: [
      "Do not remove the question from a quote if the answer depends on it.",
      "Avoid trending audio or meme framing on sensitive news.",
      "Keep correction and update procedures clear after the Short is published.",
    ],
    references: ["youtubeShorts", "apPrinciples", "w3cMedia", "googleHelpful"],
    related: ["broadcast-to-vertical-video", "social-media-workflow-for-publishers", "newsroom-video-review-workflow"],
    funnel: "MOFU",
    businessIntent: "short-form newsroom workflow",
  },
  {
    title: "Breaking News Video Workflow: Publish Fast Without Losing Verification",
    slug: "breaking-news-video-workflow",
    description: "A breaking news video workflow for intake, verification, rapid clipping, editorial review, captions, and updates.",
    primaryKeyword: "breaking news video workflow",
    intent: "speed up breaking news video publishing safely",
    audience: "breaking news desks, digital editors, broadcasters, and publishers",
    angle: "Breaking news video needs a different workflow from evergreen publishing. The page focuses on speed, verification, update discipline, and visible context during a moving story.",
    outcome: "a fast publish path that keeps source checks, rights, lower thirds, captions, and story updates in the same lane",
    avoid: "publishing the first dramatic clip before the desk knows where it came from and what it shows",
    owner: "breaking news editor",
    workflow: [
      "Open a live story workspace with source, verification, rights, and update fields visible.",
      "Classify video as confirmed, developing, user-generated, agency, official, or archive.",
      "Create a fast first clip only after the minimum verification and context fields are filled.",
      "Add date, location, speaker, and uncertainty labels directly into captions or lower thirds.",
      "Set a review timer so clips are updated, corrected, replaced, or pulled as the story changes.",
    ],
    signals: [
      "The desk can tell which footage is verified and which is still developing.",
      "A fast clip still includes date, location, source, and known limitations.",
      "The publishing channel has a correction and update path ready before posting.",
    ],
    guardrails: [
      "Do not reuse old footage without visible archive context.",
      "Avoid auto-captioning names or locations without human review.",
      "Do not let urgency override rights, safety, or harm checks.",
    ],
    references: ["apPrinciples", "googleNewsInitiative", "w3cMedia", "googleHelpful"],
    related: ["publish-breaking-news-faster", "newsroom-video-review-workflow", "daily-news-production-workflow"],
    funnel: "BOFU",
    businessIntent: "breaking news workflow improvement",
  },
  {
    title: "Press Conference Workflow: Clip Official Remarks for News and Social",
    slug: "press-conference-workflow",
    description: "A press conference workflow for source capture, speaker labels, transcript review, short clips, and editorial approval.",
    primaryKeyword: "press conference workflow",
    intent: "turn official remarks into accurate newsroom clips",
    audience: "newsrooms, public affairs editors, broadcasters, and agency video teams",
    angle: "This page is about the newsroom workflow around press conferences, while the source-to-Shorts page covers the direct repurposing use case. Here the emphasis is queueing, verification, official context, and multi-clip production.",
    outcome: "a repeatable method for turning one official event into accurate clips, quote cards, social video, and archive assets",
    avoid: "lifting a quote without the reporter question, policy context, or speaker role",
    owner: "assignment editor or video desk lead",
    workflow: [
      "Log event title, speaker names, roles, location, date, rights, and live source before clipping.",
      "Generate a transcript and mark announcements, clarifications, questions, and corrections.",
      "Create separate edits for hard news updates, explanatory clips, and social summaries.",
      "Preserve question context when it affects the meaning of the answer.",
      "Archive the full event and each clip with source timestamp metadata.",
    ],
    signals: [
      "Every clip can be traced back to the full event timestamp.",
      "The newsroom can produce several clips without repeating the same angle.",
      "Official claims are labelled as claims, announcements, or responses.",
    ],
    guardrails: [
      "Do not stitch answers from separate questions into one implied statement.",
      "Avoid editorial captions that add certainty the speaker did not provide.",
      "Keep sensitive announcements under editor review before platform distribution.",
    ],
    references: ["apPrinciples", "iptcVideoMetadata", "w3cMedia", "googleHelpful"],
    related: ["turn-press-conference-into-shorts", "breaking-news-video-workflow", "editorial-approval-workflow"],
    funnel: "BOFU",
    businessIntent: "press conference clipping workflow",
  },
  {
    title: "Newsroom Video Automation: Where AI Helps and Where Editors Stay in Control",
    slug: "newsroom-video-automation",
    description: "A practical guide to newsroom video automation for transcripts, shot detection, clipping, captions, routing, and human approval.",
    primaryKeyword: "newsroom video automation",
    intent: "evaluate automation in editorial video operations",
    audience: "newsroom leaders, product teams, video desks, and media operations teams",
    angle: "Automation should remove repetitive handling, not editorial judgment. This page separates safe automation from decisions that need editors, legal review, or desk ownership.",
    outcome: "an automation plan that speeds transcript, detection, routing, formatting, and metadata while keeping final editorial accountability human",
    avoid: "using AI as a direct publishing system for unreviewed news clips",
    owner: "newsroom product or video operations lead",
    workflow: [
      "Automate ingestion, transcription, scene detection, speaker labels, and platform formatting first.",
      "Use AI suggestions to rank clip candidates, not to decide what is newsworthy alone.",
      "Create approval states for factual checks, rights checks, caption checks, and sensitive topics.",
      "Log model output and editor decisions so the team can audit bad suggestions later.",
      "Measure time saved against correction rate, not only clip volume.",
    ],
    signals: [
      "Editors spend less time finding timestamps and more time judging context.",
      "Automation reduces duplicate exports, manual captioning, and file movement.",
      "The system can explain why a clip was suggested without hiding source context.",
    ],
    guardrails: [
      "Do not let AI summarize disputed facts without editor verification.",
      "Avoid measuring success only by number of clips published.",
      "Keep a fallback manual workflow for breaking stories and sensitive topics.",
    ],
    references: ["googleAi", "apPrinciples", "ffmpegDocs", "googleHelpful"],
    related: ["ai-video-editing-newsrooms", "high-volume-news-editing", "reduce-news-editing-time"],
    funnel: "BOFU",
    businessIntent: "AI automation evaluation",
  },
  {
    title: "Editorial Approval Workflow for Newsroom Video",
    slug: "editorial-approval-workflow",
    description: "A newsroom video approval workflow for fact checks, rights, captions, legal review, sensitive topics, and publishing sign-off.",
    primaryKeyword: "editorial approval workflow",
    intent: "design an approval process for newsroom video",
    audience: "editors, newsroom managers, legal reviewers, and video operations teams",
    angle: "Approval is not a bureaucratic delay when it is designed well. It is the system that lets teams publish faster because the risk checks are known before the clip is made.",
    outcome: "a clear review path that separates routine clips from sensitive, legal, civic, election, financial, or conflict-related clips",
    avoid: "sending every clip through the same slow chain or letting risky clips bypass review",
    owner: "managing editor",
    workflow: [
      "Classify clips by risk: routine, sensitive, legal, civic, election, financial, safety, or correction-prone.",
      "Assign one owner for facts, one for rights, and one for platform copy when the clip is high risk.",
      "Use checkboxes for source, date, speaker identity, caption accuracy, rights, and context.",
      "Require timestamp notes for quotes, claims, archival footage, and user-generated video.",
      "Record approval status before the clip is scheduled or posted.",
    ],
    signals: [
      "Editors know which clips can be fast-tracked and which need extra review.",
      "A correction can be traced to the missed checkpoint that caused it.",
      "Caption and lower-third review is part of approval, not a last-minute visual task.",
    ],
    guardrails: [
      "Do not make approval informal for high-risk categories.",
      "Avoid hidden Slack-only approvals that cannot be audited later.",
      "Keep legal review proportional so routine news video does not stall.",
    ],
    references: ["apPrinciples", "googleHelpful", "w3cMedia", "googleArticleSchema"],
    related: ["newsroom-video-review-workflow", "newsroom-editing-sop", "editorial-video-operations"],
    funnel: "BOFU",
    businessIntent: "editorial workflow governance",
  },
  {
    title: "Broadcast to Vertical Video: Reframe TV Segments for Mobile News",
    slug: "broadcast-to-vertical-video",
    description: "How broadcasters and publishers can convert landscape TV segments into vertical video without breaking context or readability.",
    primaryKeyword: "broadcast to vertical video",
    intent: "adapt broadcast footage for vertical social platforms",
    audience: "broadcasters, TV newsrooms, digital producers, and social video editors",
    angle: "This page focuses on the reframing problem: a broadcast package is built for a horizontal screen, while vertical platforms require a different visual hierarchy.",
    outcome: "vertical news clips where the speaker, footage, lower thirds, captions, and context remain legible on mobile",
    avoid: "cropping the center of the frame blindly and hiding the action, quote source, or lower third",
    owner: "broadcast digital producer",
    workflow: [
      "Identify the visual subject in each shot: anchor, correspondent, guest, screen, field footage, graphic, or document.",
      "Choose crop rules for each shot type before exporting a vertical version.",
      "Rebuild lower thirds and captions so names, locations, and source context are readable.",
      "Use split layouts only when both speaker and evidence matter at the same time.",
      "Review the final clip on a phone before publishing.",
    ],
    signals: [
      "The viewer can identify who is speaking without relying on the original lower third.",
      "Important action stays in frame after vertical crop.",
      "Graphics and captions are rebuilt for mobile rather than squeezed from broadcast.",
    ],
    guardrails: [
      "Do not crop out visual evidence that changes the story.",
      "Avoid covering broadcast lower thirds with new captions.",
      "Check rights if the segment includes agency, pool, or third-party footage.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs", "apPrinciples"],
    related: ["turn-news-broadcast-into-shorts", "how-newsrooms-produce-shorts", "multi-platform-publishing"],
    funnel: "BOFU",
    businessIntent: "broadcast repurposing workflow",
  },
  {
    title: "Video Desk Workflow: A Practical Operating Model for Newsrooms",
    slug: "video-desk-workflow",
    description: "A video desk workflow for assignments, intake, clipping, editing, approvals, publishing, and archive reuse.",
    primaryKeyword: "video desk workflow",
    intent: "organize a newsroom video desk",
    audience: "video desk leads, managing editors, digital publishers, and newsroom operations teams",
    angle: "A video desk is not just a group of editors. It is a queue, a priority system, a review model, and a publishing engine connected to the rest of the newsroom.",
    outcome: "a desk model where assignments, breaking news, social clips, archive requests, and daily video output are visible in one workflow",
    avoid: "turning the video desk into a last-minute service desk for every department",
    owner: "video desk lead",
    workflow: [
      "Create intake fields for story slug, desk owner, deadline, source file, rights, and target platform.",
      "Prioritize clips by news value, urgency, audience value, and business impact.",
      "Use templates for routine edits, breaking clips, explainers, social Shorts, and archive pulls.",
      "Assign review owners before the edit starts so producers do not chase approvals later.",
      "Track output, cycle time, rework, correction rate, and reuse by desk.",
    ],
    signals: [
      "Editors can see the whole queue without asking in chat.",
      "Routine clips move quickly and sensitive clips get flagged early.",
      "The desk can show which work produces audience or subscription value.",
    ],
    guardrails: [
      "Do not accept video requests without source, rights, deadline, and owner.",
      "Avoid assigning every clip as urgent.",
      "Keep a daily debrief so workflow problems are fixed before they become habits.",
    ],
    references: ["reutersDigitalNews2026", "iptcVideoMetadata", "apPrinciples", "googleHelpful"],
    related: ["newsroom-video-workflow", "daily-news-production-workflow", "scaling-newsroom-video-teams"],
    funnel: "BOFU",
    businessIntent: "video desk operations audit",
  },
  {
    title: "Social Media Workflow for Publishers: From Story Desk to Platform Video",
    slug: "social-media-workflow-for-publishers",
    description: "A publisher social media workflow for turning news stories, broadcasts, interviews, and explainers into platform-ready video.",
    primaryKeyword: "social media workflow for publishers",
    intent: "structure social publishing for newsrooms and media brands",
    audience: "publishers, social editors, audience teams, and newsroom leaders",
    angle: "For publishers, social workflow is not only distribution. It is packaging, verification, audience fit, platform risk, analytics, and feedback into the next assignment cycle.",
    outcome: "a social video operation where editors know which stories deserve Shorts, Reels, TikToks, LinkedIn clips, and site embeds",
    avoid: "posting the same caption, crop, and thumbnail everywhere because the file is already exported",
    owner: "audience or social lead",
    workflow: [
      "Decide the platform job before editing: inform, explain, update, drive to article, or build brand trust.",
      "Create platform-specific hook, crop, caption, and thumbnail rules.",
      "Check the story status and sensitivity before applying social-native packaging.",
      "Route platform copy, labels, hashtags, and pinned links through the editorial owner.",
      "Feed performance data back into the daily video desk meeting.",
    ],
    signals: [
      "The same story can become different platform assets without repeating the same angle.",
      "Social editors know when a story should not be turned into casual short-form video.",
      "Analytics influence future packaging without replacing editorial judgment.",
    ],
    guardrails: [
      "Do not let platform trends override newsroom standards.",
      "Avoid posting corrections only on the website if the error lives on social video.",
      "Keep platform-specific captions accessible and accurate.",
    ],
    references: ["reutersDigitalNews2026", "googleNewsInitiative", "youtubeShorts", "apPrinciples"],
    related: ["how-newsrooms-produce-shorts", "multi-platform-publishing", "publish-breaking-news-faster"],
    funnel: "MOFU",
    businessIntent: "publisher social video workflow",
  },
  {
    title: "Local News Video Workflow: Produce Useful Clips With a Small Team",
    slug: "local-news-video-workflow",
    description: "A local news video workflow for small teams turning meetings, field footage, interviews, and community updates into clips.",
    primaryKeyword: "local news video workflow",
    intent: "help local newsrooms create video with limited staff",
    audience: "local publishers, regional newsrooms, city desks, and small broadcast teams",
    angle: "Local newsrooms usually have more useful source material than editing time. This workflow focuses on practical prioritization, templates, community context, and lightweight approval.",
    outcome: "a small-team video process that turns civic meetings, interviews, weather, sports, and community stories into accurate short clips",
    avoid: "copying national newsroom workflows that require staff, tools, and review layers a local team does not have",
    owner: "local editor or digital producer",
    workflow: [
      "Choose daily video priorities around public usefulness: safety, civic decisions, schools, weather, traffic, sports, and local accountability.",
      "Use simple templates for meeting clips, reporter standups, interview answers, and explainers.",
      "Capture names, locations, dates, and source links carefully because local audiences spot errors fast.",
      "Batch captioning and exports at set times instead of interrupting every story.",
      "Archive clips by town, beat, person, event, and rights status for future reuse.",
    ],
    signals: [
      "One producer can publish more clips without increasing correction risk.",
      "Local context appears in captions and lower thirds, not just article links.",
      "Community questions guide what becomes a video.",
    ],
    guardrails: [
      "Do not use social packaging that makes civic or tragedy coverage feel casual.",
      "Avoid overproducing clips when a clear captioned excerpt would serve the audience better.",
      "Keep public meeting footage labelled with source and date.",
    ],
    references: ["googleNewsInitiative", "apPrinciples", "w3cMedia", "googleHelpful"],
    related: ["newsroom-video-workflow", "daily-news-production-workflow", "news-archive-repurposing"],
    funnel: "MOFU",
    businessIntent: "local newsroom workflow support",
  },
  {
    title: "Election Coverage Workflow for Newsroom Video",
    slug: "election-coverage-workflow",
    description: "An election video workflow for debates, results, explainers, candidate clips, live updates, and editorial review.",
    primaryKeyword: "election coverage workflow",
    intent: "plan election video coverage with speed and accuracy",
    audience: "political editors, election desks, broadcasters, and civic publishers",
    angle: "Election video is high stakes because clips can spread faster than corrections. The workflow needs prebuilt templates, review rules, source labels, and escalation paths before election night.",
    outcome: "a coverage system for candidate clips, result explainers, debate moments, live updates, and post-result analysis",
    avoid: "publishing out-of-context candidate or result clips without clear status labels",
    owner: "politics editor or election desk lead",
    workflow: [
      "Prepare templates for candidate quotes, debate clips, result status, explainers, and correction updates before election week.",
      "Use clear labels for projected, called, too close to call, unofficial, official, and updated results.",
      "Route candidate claims, misinformation, and high-risk clips through senior editorial review.",
      "Keep a source log for footage, data, charts, and election authority references.",
      "Build a post-election archive so clips can be found by race, candidate, region, and topic.",
    ],
    signals: [
      "Every results clip shows status, source, and time.",
      "Candidate clips preserve the question and context when needed.",
      "The desk has a correction workflow ready for social video, not just articles.",
    ],
    guardrails: [
      "Do not imply a result before the newsroom has made or accepted the call.",
      "Avoid algorithmic clipping of candidate remarks without political editor review.",
      "Keep misinformation, hate, and safety review standards visible in the queue.",
    ],
    references: ["apPrinciples", "googleNewsInitiative", "w3cMedia", "googleHelpful"],
    related: ["breaking-news-video-workflow", "editorial-approval-workflow", "publish-breaking-news-faster"],
    funnel: "BOFU",
    businessIntent: "election video operations",
  },
  {
    title: "Sports News Video Workflow: Highlights, Interviews, and Match Context",
    slug: "sports-news-video-workflow",
    description: "A sports news video workflow for interviews, rights-safe highlights, match context, rapid clips, and social publishing.",
    primaryKeyword: "sports news video workflow",
    intent: "organize sports video production for publishers",
    audience: "sports desks, broadcasters, clubs, leagues, and digital publishers",
    angle: "Sports video is fast, emotional, and rights-sensitive. This page focuses on newsroom operations, not just highlight editing.",
    outcome: "a sports video workflow that separates rights-cleared highlights, interviews, analysis, fan reaction, and live updates",
    avoid: "mixing licensed match footage, reporter video, social embeds, and archive clips without rights labels",
    owner: "sports editor or sports video lead",
    workflow: [
      "Tag every asset by match, team, player, competition, date, rights, and usage window.",
      "Prepare templates for score updates, tactical explainers, interview quotes, and highlight clips.",
      "Keep scoreboard, time, player identification, and competition context visible in short clips.",
      "Route rights-sensitive footage through a rights owner before publishing off-platform.",
      "Archive emotional moments, tactical clips, and record moments for future features.",
    ],
    signals: [
      "The viewer knows the match context even without opening the article.",
      "Rights-cleared content is easy to separate from restricted footage.",
      "Sports editors can publish fast without losing stats, names, or score accuracy.",
    ],
    guardrails: [
      "Do not publish match footage without rights confirmation.",
      "Avoid pairing interview audio with unrelated match visuals.",
      "Check names, scores, and competition labels before every export.",
    ],
    references: ["youtubeShorts", "iptcVideoMetadata", "apPrinciples", "w3cMedia"],
    related: ["turn-sports-interview-into-shorts", "turn-match-highlights-into-shorts", "high-volume-news-editing"],
    funnel: "BOFU",
    businessIntent: "sports media workflow",
  },
  {
    title: "News Archive Repurposing: Turn Old Footage Into Useful New Clips",
    slug: "news-archive-repurposing",
    description: "A news archive repurposing workflow for finding, verifying, rights-checking, clipping, and updating older newsroom footage.",
    primaryKeyword: "news archive repurposing",
    intent: "reuse archive video safely and efficiently",
    audience: "publishers, archive teams, video desks, and documentary-style news teams",
    angle: "Archive repurposing creates authority when it adds context. It creates risk when old footage is made to look current or rights are unclear.",
    outcome: "an archive workflow that turns old interviews, broadcasts, field footage, and explainers into dated, verified, reusable assets",
    avoid: "using archive visuals as generic b-roll without date, source, or story relevance",
    owner: "archive editor or video operations lead",
    workflow: [
      "Search by people, places, event, beat, date, rights, and visual content rather than filename alone.",
      "Verify whether the footage is current, historical, illustrative, or background context.",
      "Add visible archive labels when old footage appears in a new story.",
      "Check rights, talent restrictions, and music before republishing on social platforms.",
      "Update metadata after the new clip is published so the archive becomes easier to reuse next time.",
    ],
    signals: [
      "Archive footage adds context the audience could not get from a fresh clip alone.",
      "The clip makes its date and source clear.",
      "The archive system can find the new derivative asset later.",
    ],
    guardrails: [
      "Do not use archive footage in breaking news without a clear archive label.",
      "Avoid implying old conditions are present-day conditions.",
      "Keep rights and usage windows attached to every repurposed export.",
    ],
    references: ["iptcVideoMetadata", "apPrinciples", "googleArticleSchema", "googleHelpful"],
    related: ["video-asset-management-for-newsrooms", "newsroom-video-workflow", "turn-documentary-into-shorts"],
    funnel: "MOFU",
    businessIntent: "archive workflow audit",
  },
  {
    title: "Video Asset Management for Newsrooms: Metadata, Rights, and Reuse",
    slug: "video-asset-management-for-newsrooms",
    description: "A newsroom video asset management guide covering metadata, rights, source tracking, archive search, and reuse workflows.",
    primaryKeyword: "video asset management for newsrooms",
    intent: "structure newsroom video libraries for retrieval and reuse",
    audience: "media operations teams, archive editors, newsroom product teams, and publishers",
    angle: "Video asset management is the invisible layer behind fast video production. If metadata, rights, and source timestamps are missing, the archive becomes expensive storage instead of newsroom leverage.",
    outcome: "a searchable video library where source footage, clips, captions, rights, derivatives, and publishing history stay connected",
    avoid: "saving finished MP4 files with vague names and no rights, source, or story metadata",
    owner: "media asset manager or newsroom operations lead",
    workflow: [
      "Define required fields: title, slug, date, location, people, source, rights, usage window, transcript, and derivative links.",
      "Connect source files, edit projects, caption files, thumbnails, published URLs, and archive notes.",
      "Use controlled vocabularies for beats, topics, locations, and event types where possible.",
      "Record rights and sensitivity restrictions before editors request reuse.",
      "Audit missing metadata weekly for high-value footage and recurring beats.",
    ],
    signals: [
      "Editors can find a relevant clip in minutes without asking the archive team.",
      "Rights restrictions travel with the asset into new edits.",
      "Published clips link back to the source recording and transcript.",
    ],
    guardrails: [
      "Do not separate rights metadata from the media file and its derivatives.",
      "Avoid free-text tags when the newsroom needs consistent search.",
      "Keep sensitive footage restricted even after derivative clips are made.",
    ],
    references: ["iptcVideoMetadata", "googleArticleSchema", "googleSitemaps", "apPrinciples"],
    related: ["news-archive-repurposing", "video-desk-workflow", "high-volume-news-editing"],
    funnel: "BOFU",
    businessIntent: "video asset management planning",
  },
  {
    title: "High Volume News Editing: Produce More Clips Without Lowering Standards",
    slug: "high-volume-news-editing",
    description: "A high-volume news editing workflow for batch intake, clip templates, AI assistance, review queues, and quality control.",
    primaryKeyword: "high volume news editing",
    intent: "scale daily newsroom video output",
    audience: "publishers, broadcast groups, agencies, and newsroom operations leaders",
    angle: "High-volume editing is not only hiring more editors. It requires intake discipline, reusable templates, AI-assisted prep, clear review states, and metrics that catch quality drift.",
    outcome: "more publishable clips per day with fewer repeated decisions and less manual file handling",
    avoid: "rewarding output count while ignoring corrections, duplicate angles, fatigue, and weak editorial value",
    owner: "video operations lead",
    workflow: [
      "Group source material by urgency, desk, platform, rights, and review risk before editing starts.",
      "Use templates for captions, lower thirds, crops, thumbnails, and exports.",
      "Automate transcription, rough clip discovery, aspect ratio conversion, and file routing.",
      "Reserve human review for editorial judgment, sensitive context, facts, names, and platform framing.",
      "Track cycle time, rework, corrections, unused exports, and performance by content type.",
    ],
    signals: [
      "The team produces more clips without increasing correction rate.",
      "Editors repeat fewer mechanical tasks per export.",
      "Managers can see bottlenecks by desk, editor, and source type.",
    ],
    guardrails: [
      "Do not use volume targets that encourage thin or duplicated clips.",
      "Avoid batching captions without human review for names and locations.",
      "Keep priority lanes open for breaking news and sensitive stories.",
    ],
    references: ["googleAi", "ffmpegDocs", "apPrinciples", "googleHelpful"],
    related: ["newsroom-video-automation", "reduce-news-editing-time", "scaling-newsroom-video-teams"],
    funnel: "BOFU",
    businessIntent: "high-volume newsroom editing",
  },
  {
    title: "Daily News Production Workflow: Plan, Edit, Review, Publish, Repeat",
    slug: "daily-news-production-workflow",
    description: "A daily news production workflow for planning video priorities, assigning clips, reviewing edits, and publishing across platforms.",
    primaryKeyword: "daily news production workflow",
    intent: "run a daily video production cycle in a newsroom",
    audience: "daily editors, video desks, publishers, and audience teams",
    angle: "Daily production works when planning, assignments, source intake, and publishing slots are visible before the day becomes reactive.",
    outcome: "a daily rhythm that balances planned explainers, breaking updates, social clips, archive reuse, and platform deadlines",
    avoid: "starting every day from zero with no reusable agenda, queue, or review cadence",
    owner: "daily editor or video desk producer",
    workflow: [
      "Start with a morning video agenda tied to the story budget and expected audience demand.",
      "Assign each clip a source, editor, desk owner, platform, deadline, and review risk.",
      "Keep a mid-day reset for breaking stories and underperforming priorities.",
      "Batch routine exports and reserve review time for sensitive or high-impact stories.",
      "End the day by archiving assets, noting corrections, and feeding performance into tomorrow's plan.",
    ],
    signals: [
      "Editors know the day's video priorities before files arrive.",
      "The desk can adjust quickly when breaking news changes the plan.",
      "Daily output includes a healthy mix of urgent, useful, and evergreen clips.",
    ],
    guardrails: [
      "Do not let planned evergreen video block urgent public-interest updates.",
      "Avoid publishing platform clips without a desk owner who can handle corrections.",
      "Keep a visible cut-off for low-value edits that consume the day.",
    ],
    references: ["reutersDigitalNews2026", "googleNewsInitiative", "apPrinciples", "googleHelpful"],
    related: ["video-desk-workflow", "breaking-news-video-workflow", "editorial-video-operations"],
    funnel: "MOFU",
    businessIntent: "daily newsroom operations",
  },
  {
    title: "Multi Platform Publishing for News Video",
    slug: "multi-platform-publishing",
    description: "A multi-platform publishing workflow for adapting newsroom video to site, YouTube, Shorts, Reels, TikTok, LinkedIn, and newsletters.",
    primaryKeyword: "multi platform publishing",
    intent: "publish newsroom video across channels without duplicate effort",
    audience: "publishers, social teams, audience editors, and newsroom operations teams",
    angle: "Multi-platform publishing is not one export uploaded everywhere. Each platform needs a specific crop, headline, caption, metadata, link strategy, and correction path.",
    outcome: "a publishing matrix that makes one approved clip work across site embeds, YouTube, Shorts, Reels, TikTok, LinkedIn, newsletters, and apps",
    avoid: "creating disconnected exports that cannot be updated, corrected, or traced back to the source story",
    owner: "audience editor or publishing operations lead",
    workflow: [
      "Define the platform job before export: reach, referral, retention, subscriber value, or live update.",
      "Create export presets for aspect ratio, captions, headline length, thumbnail, and metadata.",
      "Attach canonical story links and published URLs back to the asset record.",
      "Make corrections and takedowns platform-aware so errors do not survive on social video.",
      "Compare performance by platform job, not only view count.",
    ],
    signals: [
      "Every platform version has a reason to exist.",
      "Captions, thumbnails, and descriptions are adapted instead of copied.",
      "The newsroom can update all versions when the story changes.",
    ],
    guardrails: [
      "Do not use the same framing for sensitive stories on casual platforms.",
      "Avoid losing canonical source links when clips move to social.",
      "Keep platform metadata consistent with the approved headline and story status.",
    ],
    references: ["youtubeShorts", "googleArticleSchema", "googleSitemaps", "apPrinciples"],
    related: ["social-media-workflow-for-publishers", "broadcast-to-vertical-video", "newsroom-video-workflow"],
    funnel: "BOFU",
    businessIntent: "multi-platform publishing workflow",
  },
  {
    title: "Newsroom Editing SOP: Standard Operating Procedure for Video Clips",
    slug: "newsroom-editing-sop",
    description: "A newsroom editing SOP for video intake, clipping, captions, lower thirds, approvals, exports, metadata, and corrections.",
    primaryKeyword: "newsroom editing SOP",
    intent: "create a repeatable SOP for newsroom video editing",
    audience: "newsroom managers, editors, producers, and media operations teams",
    angle: "An SOP should make good editorial habits repeatable. It should not turn editors into button-pushers or hide judgment behind checklists.",
    outcome: "a concise SOP that new editors can follow while senior editors still control sensitive decisions",
    avoid: "writing a giant process document nobody opens during deadline pressure",
    owner: "video desk lead or managing editor",
    workflow: [
      "Document the required intake fields: story slug, source, rights, owner, platform, deadline, and review risk.",
      "Define edit standards for hook, context, crop, caption, lower third, audio, and thumbnail frame.",
      "Create review gates for facts, names, rights, sensitivity, legal, corrections, and platform copy.",
      "Specify export naming, folder location, metadata fields, and published URL tracking.",
      "Review the SOP monthly against corrections, bottlenecks, and new platform requirements.",
    ],
    signals: [
      "New editors can produce routine clips without asking for every rule.",
      "Senior editors can quickly identify which checkpoint failed when rework happens.",
      "The SOP is short enough to use during a live news day.",
    ],
    guardrails: [
      "Do not turn editorial judgment into a purely mechanical checklist.",
      "Avoid letting old platform specs stay in the SOP after formats change.",
      "Keep sensitive-topic escalation rules clear and hard to skip.",
    ],
    references: ["apPrinciples", "w3cMedia", "iptcVideoMetadata", "googleHelpful"],
    related: ["editorial-approval-workflow", "newsroom-video-review-workflow", "video-desk-workflow"],
    funnel: "BOFU",
    businessIntent: "SOP implementation",
  },
  {
    title: "Reduce News Editing Time: Workflow Fixes Before Hiring More Editors",
    slug: "reduce-news-editing-time",
    description: "How to reduce news editing time with better intake, transcripts, templates, AI prep, review routing, and export automation.",
    primaryKeyword: "reduce news editing time",
    intent: "cut newsroom video turnaround time",
    audience: "newsroom leaders, video desk managers, operations teams, and publishers",
    angle: "The fastest gains usually come before the timeline opens: better intake, transcripts, rights labels, templates, review routes, and export presets.",
    outcome: "shorter cycle time from source video to approved publishable clip",
    avoid: "asking editors to work faster while preserving the same broken handoffs",
    owner: "video operations lead",
    workflow: [
      "Measure where time is lost: waiting for source, finding moments, captions, review, export, or publishing.",
      "Make story owner, rights, deadline, platform, and source timestamp mandatory at intake.",
      "Use transcripts and AI-assisted candidate detection to reduce search time.",
      "Standardize caption styles, lower thirds, thumbnails, and export presets.",
      "Split review into routine, sensitive, and urgent lanes so every clip does not wait in the same queue.",
    ],
    signals: [
      "Editors spend less time waiting for missing information.",
      "Caption and export time falls without increasing errors.",
      "Review time becomes predictable by risk level.",
    ],
    guardrails: [
      "Do not remove editorial checks just to improve speed metrics.",
      "Avoid automating a workflow before fixing bad intake fields.",
      "Track correction rate beside turnaround time.",
    ],
    references: ["googleAi", "ffmpegDocs", "apPrinciples", "googleHelpful"],
    related: ["newsroom-video-automation", "high-volume-news-editing", "publish-breaking-news-faster"],
    funnel: "BOFU",
    businessIntent: "turnaround time reduction",
  },
  {
    title: "Scaling Newsroom Video Teams: Roles, Queues, Review, and Automation",
    slug: "scaling-newsroom-video-teams",
    description: "How to scale newsroom video teams with roles, intake queues, review lanes, templates, automation, and performance reporting.",
    primaryKeyword: "scaling newsroom video teams",
    intent: "grow newsroom video output and team capacity",
    audience: "newsroom executives, video leaders, publishers, and operations managers",
    angle: "Scaling a newsroom video team is not only adding headcount. It is defining roles, queues, approvals, reusable formats, and the automation that protects editors from repetitive work.",
    outcome: "a team model that can handle more desks, more platforms, and more source types without losing standards",
    avoid: "centralizing every video request into one overloaded team with no intake discipline",
    owner: "director of video or newsroom operations lead",
    workflow: [
      "Separate roles for assignment, source prep, edit, review, publishing, archive, and analytics.",
      "Create desk-level intake rules so priorities arrive with enough information to act.",
      "Use templates and automation to absorb routine volume before expanding headcount.",
      "Define escalation paths for legal, civic, conflict, election, financial, and sensitive clips.",
      "Report capacity by cycle time, output quality, rework, corrections, and audience value.",
    ],
    signals: [
      "The team can add a new desk or platform without reinventing the workflow.",
      "Editors know whether they are editing, reviewing, publishing, or firefighting.",
      "Leadership can see whether bottlenecks are staffing, tooling, or process.",
    ],
    guardrails: [
      "Do not scale by creating more parallel unofficial workflows.",
      "Avoid hiding quality decline behind output charts.",
      "Keep senior editorial judgment available for high-risk clips.",
    ],
    references: ["reutersDigitalNews2026", "googleNewsInitiative", "apPrinciples", "googleAi"],
    related: ["video-desk-workflow", "high-volume-news-editing", "editorial-video-operations"],
    funnel: "BOFU",
    businessIntent: "team scaling consultation",
  },
  {
    title: "Newsroom Video Review Workflow: Catch Errors Before Social Clips Spread",
    slug: "newsroom-video-review-workflow",
    description: "A newsroom video review workflow for facts, captions, context, rights, sensitive footage, corrections, and platform copy.",
    primaryKeyword: "newsroom video review workflow",
    intent: "build a review process for newsroom clips",
    audience: "editors, video producers, social teams, legal reviewers, and publishers",
    angle: "Video review has to check more than the timeline. Names, captions, source footage, platform copy, lower thirds, and missing context can all create errors.",
    outcome: "a review workflow that catches factual, visual, caption, rights, and context problems before publication",
    avoid: "reviewing only whether the edit looks good while ignoring what the clip claims",
    owner: "senior editor or review producer",
    workflow: [
      "Check the claim: what does the clip say happened, and is that still current?",
      "Check source context: date, location, speaker, rights, archive status, and timestamp.",
      "Check captions, lower thirds, spelling, names, numbers, and pronunciation-dependent terms.",
      "Check platform copy, thumbnail frame, and headline against the approved story angle.",
      "Log review status and correction instructions where publishing teams can see them.",
    ],
    signals: [
      "Reviewers can quickly find the source timestamp behind every quote.",
      "Caption errors are caught before export, not after posting.",
      "Sensitive clips are escalated without slowing routine clips.",
    ],
    guardrails: [
      "Do not review video in isolation from the article or live story status.",
      "Avoid approving captions separately from the timeline they describe.",
      "Keep a re-review rule when stories update materially.",
    ],
    references: ["apPrinciples", "w3cMedia", "googleHelpful", "googleArticleSchema"],
    related: ["editorial-approval-workflow", "newsroom-editing-sop", "publish-breaking-news-faster"],
    funnel: "BOFU",
    businessIntent: "review workflow design",
  },
  {
    title: "Publish Breaking News Faster: Video Workflow Without Skipping Context",
    slug: "publish-breaking-news-faster",
    description: "How to publish breaking news video faster with prepared templates, intake rules, verification lanes, and rapid review.",
    primaryKeyword: "publish breaking news faster",
    intent: "improve breaking news video speed",
    audience: "breaking news teams, social editors, publishers, and broadcasters",
    angle: "Publishing faster is not the same as editing faster. The real speed comes from prepared templates, source readiness, pre-approved review lanes, and clear update rules.",
    outcome: "a breaking video workflow that reduces time-to-publish while protecting accuracy, rights, and correction handling",
    avoid: "removing verification steps and calling that a speed strategy",
    owner: "breaking news video lead",
    workflow: [
      "Prebuild templates for urgent updates, official statements, weather, traffic, elections, sports, and public safety.",
      "Require minimum source fields before a clip enters the fast lane.",
      "Use transcript and shot detection to locate the usable moment quickly.",
      "Run a rapid review focused on source, date, location, speaker, captions, and current story status.",
      "Publish with update language when the story is still developing.",
    ],
    signals: [
      "The desk can publish a useful first clip without reinventing design or review.",
      "Corrections and updates can be pushed across social platforms.",
      "Speed improves without a rise in takedowns or caption errors.",
    ],
    guardrails: [
      "Do not prewrite certainty into templates for developing stories.",
      "Avoid archive footage unless it is visibly labelled as archive.",
      "Keep a senior escalation path for public safety, conflict, crime, and civic stories.",
    ],
    references: ["apPrinciples", "googleNewsInitiative", "w3cMedia", "googleHelpful"],
    related: ["breaking-news-video-workflow", "reduce-news-editing-time", "newsroom-video-review-workflow"],
    funnel: "BOFU",
    businessIntent: "breaking news speed workflow",
  },
  {
    title: "Editorial Video Operations: The Operating System for Modern Newsrooms",
    slug: "editorial-video-operations",
    description: "A guide to editorial video operations across planning, intake, automation, review, publishing, archive, analytics, and governance.",
    primaryKeyword: "editorial video operations",
    intent: "understand and design video operations for media teams",
    audience: "newsroom executives, publishers, video directors, product teams, and operations leaders",
    angle: "Editorial video operations is the layer that connects newsroom judgment to repeatable production. It includes process, people, tooling, standards, metadata, rights, review, and performance learning.",
    outcome: "a newsroom operating model where video output grows without losing editorial trust",
    avoid: "treating video operations as a pile of editing tools rather than a cross-desk production system",
    owner: "editorial operations or head of video",
    workflow: [
      "Define the video operating model: desks served, source types, platform goals, review standards, and output expectations.",
      "Standardize intake, metadata, rights, captions, approvals, exports, and archive handling.",
      "Use automation to reduce mechanical work while keeping editorial accountability clear.",
      "Measure cycle time, rework, corrections, audience value, archive reuse, and team capacity.",
      "Review the operating model regularly as platforms, story types, and newsroom priorities change.",
    ],
    signals: [
      "Leadership can see how a video moves from idea to published asset.",
      "Every team knows when it owns source, edit, review, publishing, and correction.",
      "The operation can scale by improving systems, not only by adding people.",
    ],
    guardrails: [
      "Do not separate workflow design from editorial standards.",
      "Avoid one-off tools that do not connect to archive, approval, or publishing.",
      "Keep people-first editorial judgment visible in any AI-assisted process.",
    ],
    references: ["reutersDigitalNews2026", "apPrinciples", "googleAi", "iptcVideoMetadata"],
    related: ["newsroom-video-workflow", "scaling-newsroom-video-teams", "ai-video-editing-newsrooms"],
    funnel: "BOFU",
    businessIntent: "editorial operations strategy",
  },
];

const allNewsroomGuides = [...existingPillars, ...newsroomWorkflowConfigs];
const configBySlug = new Map(allNewsroomGuides.map((config) => [config.slug, config]));

export const newsroomWorkflowPosts = newsroomWorkflowConfigs.map(buildNewsroomPost);

export const newsroomWorkflowGuides = allNewsroomGuides.map((config) => ({
  title: config.title,
  href: `/blog/${config.slug}`,
  body: config.description,
}));

export const newsroomWorkflowInventory = newsroomWorkflowConfigs.map((config) => ({
  title: config.title,
  slug: `/blog/${config.slug}`,
  cluster: "Newsroom Video Operations",
  pillar: "AI Video Editing for Newsrooms",
  primaryKeyword: config.primaryKeyword,
  intent: config.intent,
  audience: config.audience,
  funnel: config.funnel,
  contentType: "newsroom workflow guide",
  businessIntent: config.businessIntent,
}));

export const newsroomWorkflowSlugs = allNewsroomGuides.map((config) => config.slug);

function buildNewsroomPost(config) {
  return {
    title: config.title,
    slug: config.slug,
    description: config.description,
    keywords: [
      config.primaryKeyword,
      "newsroom video workflow",
      "AI video editing for newsrooms",
      "editorial video operations",
    ],
    readingTime: "8 min read",
    date: PUBLISHED_DATE,
    body: buildBody(config),
    heroImage: HERO_IMAGE,
    heroImageAlt: `${config.title} workflow diagram`,
    imagePrompts: {},
    relatedArticles: config.related.map((slug) => `/blog/${slug}`),
  };
}

function buildBody(config) {
  const relatedGuides = config.related.map((slug) => {
    const relatedConfig = configBySlug.get(slug);
    return {
      title: relatedConfig?.title || slugToTitle(slug),
      href: `/blog/${slug}`,
    };
  });

  return `![${config.title} workflow diagram](${HERO_IMAGE})

${config.angle}

This guide targets ${config.audience}. The goal is ${config.outcome}. It is intentionally different from the source-to-Shorts pages: those explain how to repurpose one recording type, while this page explains the newsroom operating problem behind the keyword "${config.primaryKeyword}."

## Workflow Fit

| Decision | Recommended direction |
| --- | --- |
| Primary intent | ${config.intent} |
| Best outcome | ${config.outcome} |
| Avoid | ${config.avoid} |
| Workflow owner | ${config.owner} |

## Operating Workflow

${config.workflow.map((item) => `- ${item}`).join("\n")}

## Signs the Workflow Is Working

${config.signals.map((item) => `- ${item}`).join("\n")}

## Editorial Guardrails

${config.guardrails.map((item) => `- ${item}`).join("\n")}

Guardrails protect topical authority as much as editorial trust. A thin page that repeats the same generic "make Shorts faster" advice would compete with the rest of the cluster. A useful page gives one newsroom role a clear decision path, source-specific checks, and links to the right supporting workflow.

## How Dalaillama Would Support This

Dalaillama can help a newsroom or publisher turn long source video into short-form outputs faster by handling source review, moment selection, vertical crop, captions, sound polish, export, and upload-ready packaging. For newsroom work, the important layer is not only editing speed. It is the review path: source context, captions, rights, editorial approval, and platform fit should be clear before a clip goes live.

## Credible References

${referencesFor(config).map((ref) => `- [${ref.label}](${ref.url}) ${ref.note}.`).join("\n")}

## Related Guides

${relatedGuides.map((guide) => `- [${guide.title}](${guide.href})`).join("\n")}

### Is ${config.primaryKeyword} an AI workflow?

It can include AI, but it should not be only an AI workflow. The useful setup combines automation for repetitive work with human editorial review for facts, context, rights, captions, and sensitive stories.

### How does this avoid cannibalization?

This page owns the "${config.primaryKeyword}" angle. Related pages cover adjacent jobs such as approval, automation, archive reuse, breaking news speed, source-to-Shorts conversion, or platform publishing. Internal links point readers to the more specific workflow instead of repeating the same article under different titles.

### What should a newsroom prepare before using this workflow?

Prepare a source intake form, rights labels, review owner, platform targets, caption standard, export presets, and an archive metadata rule. Those basics reduce rework before any AI or editing automation is added.`;
}

function referencesFor(config) {
  const keys = Array.from(new Set(config.references));
  return keys.map((key) => referenceLibrary[key]).filter(Boolean);
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
