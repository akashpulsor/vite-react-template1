const PUBLISHED_DATE = "July 1, 2026";
const HERO_IMAGE = "/blog/reddit-shorts-editing-workflow/shorts-editing-workflow.png";

const referenceLibrary = {
  youtubeShorts: {
    label: "YouTube Help: Get started creating YouTube Shorts",
    url: "https://support.google.com/youtube/answer/10059070",
    note: "for Shorts format, upload, and creator expectations",
  },
  w3cMedia: {
    label: "W3C WAI: Making Audio and Video Media Accessible",
    url: "https://www.w3.org/WAI/media/av/",
    note: "for captions, transcripts, and accessible media delivery",
  },
  ffmpegDocs: {
    label: "FFmpeg documentation",
    url: "https://ffmpeg.org/documentation.html",
    note: "for video processing, scaling, encoding, and inspection",
  },
};

export const videoOperationsConfigs = [
  {
    title: "Reduce Video Editing Turnaround Time Without Cutting QA",
    slug: "reduce-video-editing-turnaround-time",
    description: "A workflow guide for reducing video editing turnaround time with better intake, batching, review routing, templates, and QA.",
    primaryKeyword: "reduce video editing turnaround time",
    intent: "shorten editing cycle time",
    audience: "video teams, agencies, creators, publishers, and marketing operations teams",
    angle: "Turnaround time usually breaks before the editor opens the timeline. Missing briefs, unclear review owners, late source files, and vague QA rules create more delay than the edit itself.",
    outcome: "a faster source-to-final workflow that keeps review, captions, and export quality intact",
    avoid: "removing quality checks and calling the workflow faster",
    owner: "video operations lead",
    workflow: [
      "Measure intake delay, edit time, QA time, review wait, revision time, and delivery time separately.",
      "Make source link, platform, format, due date, approval owner, and reference style mandatory before assignment.",
      "Use templates for captions, lower thirds, crops, thumbnails, file names, and export presets.",
      "Split review into fast, standard, and sensitive lanes instead of one queue for every video.",
      "Track repeated revision causes and turn them into brief, template, or checklist updates.",
    ],
    signals: [
      "Editors receive complete work instead of hunting for missing inputs.",
      "Review wait time falls without more caption or export errors.",
      "Turnaround reports separate internal delay from client or stakeholder delay.",
    ],
    guardrails: [
      "Do not measure only final delivery time without tracking review waits.",
      "Avoid accepting incomplete jobs into the active queue.",
      "Keep sensitive, legal, or brand-risk videos out of automatic fast lanes.",
    ],
    references: ["w3cMedia", "ffmpegDocs"],
    related: ["editing-throughput", "review-bottlenecks", "video-delivery-workflow"],
    funnel: "BOFU",
    businessIntent: "turnaround workflow audit",
  },
  {
    title: "How to Produce 100 Shorts Every Week: A Real Production System",
    slug: "how-to-produce-100-shorts-every-week",
    description: "How to produce 100 Shorts every week with source planning, batching, templates, QA, review lanes, and delivery metrics.",
    primaryKeyword: "how to produce 100 shorts every week",
    intent: "build a high-volume Shorts production system",
    audience: "content teams, agencies, publishers, creator networks, and marketing teams",
    angle: "Producing 100 Shorts a week is not a creativity trick. It is a production design problem: enough source material, consistent formats, constrained review, and clear throughput targets.",
    outcome: "a weekly operating rhythm that can move 100 useful Shorts through selection, editing, QA, approval, and publishing",
    avoid: "making 100 weak clips from too little source material just to hit a volume target",
    owner: "head of content or production manager",
    workflow: [
      "Plan source supply before production: long videos, podcasts, webinars, interviews, demos, events, and archive clips.",
      "Define weekly output by content type, platform, client, or campaign instead of one generic quota.",
      "Batch clip selection separately from timeline editing, captioning, QA, and scheduling.",
      "Use approved templates and style rules so editors do not redesign every Short.",
      "Review weekly performance by approved clips, rejected clips, rework, and publishing outcomes.",
    ],
    signals: [
      "The team can see source supply for next week before this week ends.",
      "Output volume rises without a matching rise in rejected clips.",
      "QA issues are caught by batch pattern rather than one video at a time.",
    ],
    guardrails: [
      "Do not create many near-duplicate Shorts targeting the same idea.",
      "Avoid pushing unreviewed AI-selected clips directly to publishing.",
      "Keep a quality threshold that lets the team kill weak clips early.",
    ],
    references: ["youtubeShorts"],
    related: ["batch-video-editing", "managing-hundreds-of-videos", "video-production-kpis"],
    funnel: "BOFU",
    businessIntent: "high-volume Shorts production",
  },
  {
    title: "Batch Video Editing: Workflow for Faster Short-Form Production",
    slug: "batch-video-editing",
    description: "A batch video editing workflow for grouping source files, templates, captions, QA, approvals, and exports.",
    primaryKeyword: "batch video editing",
    intent: "edit multiple videos efficiently",
    audience: "video editors, agencies, creators, publishers, and content operations teams",
    angle: "Batch editing works when the work is similar enough to share decisions. If every video needs a different promise, stakeholder, and style, batching creates confusion.",
    outcome: "a repeatable batch system that reduces setup time and preserves quality",
    avoid: "batching unrelated videos only because they are due on the same day",
    owner: "production coordinator",
    workflow: [
      "Group videos by client, source type, platform, creative style, and due date.",
      "Approve one pattern edit before producing the rest of the batch.",
      "Use shared caption, crop, thumbnail, and export presets for the batch.",
      "QA the batch by pattern first, then spot-check individual risks.",
      "Deliver with an index that lists source, draft, final file, status, and notes.",
    ],
    signals: [
      "Editors spend less time setting up each timeline.",
      "A template correction fixes many videos at once.",
      "Reviewers can approve the batch without opening a messy folder.",
    ],
    guardrails: [
      "Do not batch videos with different legal, brand, or stakeholder risks.",
      "Avoid copying the same hook structure when each clip needs its own promise.",
      "Keep individual source timestamps attached to each final export.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["how-to-produce-100-shorts-every-week", "video-qa-workflow", "editor-checklist"],
    funnel: "MOFU",
    businessIntent: "batch production workflow",
  },
  {
    title: "Video Review Workflow: Get Faster Feedback on Every Draft",
    slug: "video-review-workflow",
    description: "A video review workflow for collecting timestamped feedback, separating QA from approval, and reducing revision loops.",
    primaryKeyword: "video review workflow",
    intent: "improve draft review and feedback",
    audience: "video teams, agencies, marketing teams, publishers, and client-facing producers",
    angle: "Review is not one activity. A video can need technical QA, editorial review, stakeholder approval, brand review, and final publishing sign-off.",
    outcome: "a review workflow that makes feedback specific, fast, and easy to act on",
    avoid: "asking several stakeholders for general thoughts and treating the result as review",
    owner: "review producer",
    workflow: [
      "Separate internal QA from stakeholder approval.",
      "Ask reviewers to comment with timestamps and classify each note as fix, preference, question, or scope change.",
      "Limit who can approve and who can only suggest changes.",
      "Keep captions, thumbnail, platform copy, and export settings in the review path.",
      "Close each round with a clear decision: approved, revise, blocked, or out of scope.",
    ],
    signals: [
      "Editors receive actionable notes instead of broad reactions.",
      "Review cycles have fewer contradictory comments.",
      "Final approval is recorded before delivery or publishing.",
    ],
    guardrails: [
      "Do not let every viewer become an approver.",
      "Avoid separate feedback channels for the same draft.",
      "Keep factual, legal, or brand-risk comments higher priority than preference notes.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["editorial-review-workflow", "review-bottlenecks", "review-less-edit-more"],
    funnel: "MOFU",
    businessIntent: "review workflow design",
  },
  {
    title: "Editorial Review Workflow for Video Teams",
    slug: "editorial-review-workflow",
    description: "An editorial review workflow for checking claims, context, captions, brand risk, approvals, and publishing readiness.",
    primaryKeyword: "editorial review workflow",
    intent: "build an editorial review process for video",
    audience: "publishers, brands, educators, agencies, and internal communications teams",
    angle: "General editorial review helps any video team protect accuracy, context, claims, captions, and stakeholder trust before publishing.",
    outcome: "a clear editorial review path that catches meaning, claim, context, and caption problems before distribution",
    avoid: "reviewing only visual polish while ignoring what the video says",
    owner: "editorial lead",
    workflow: [
      "Identify the claim or promise the video makes in the first seconds.",
      "Check source context, speaker identity, dates, names, numbers, and visual evidence.",
      "Review captions and on-screen text against the approved message.",
      "Classify issues as factual, contextual, brand, legal, accessibility, or preference.",
      "Record the final editorial approval before publishing or client delivery.",
    ],
    signals: [
      "The final video preserves the source meaning after editing.",
      "Caption and title claims match the actual content.",
      "Sensitive videos receive review before they reach social platforms.",
    ],
    guardrails: [
      "Do not let speed remove claim and context review.",
      "Avoid editing quotes into stronger claims than the source supports.",
      "Keep a re-review rule when facts, product details, or campaign claims change.",
    ],
    references: ["w3cMedia"],
    related: ["video-review-workflow", "video-qa-workflow", "publishing-workflow"],
    funnel: "BOFU",
    businessIntent: "editorial review setup",
  },
  {
    title: "Content Repurposing Workflow: Turn Long Assets Into Short-Form Output",
    slug: "content-repurposing-workflow",
    description: "A content repurposing workflow for turning podcasts, webinars, interviews, demos, courses, and events into short videos.",
    primaryKeyword: "content repurposing workflow",
    intent: "repurpose existing content into video assets",
    audience: "content marketers, agencies, creators, publishers, and educators",
    angle: "Content repurposing should start with the useful idea inside the source, not the desire to fill a calendar.",
    outcome: "a repeatable workflow for finding, editing, reviewing, and publishing short-form assets from existing content",
    avoid: "making many clips that all repeat the same point",
    owner: "content operations lead",
    workflow: [
      "Inventory source assets by type, owner, rights, date, and evergreen value.",
      "Choose the repurposing job: teach, explain, sell, prove, recap, answer, or entertain.",
      "Extract one idea per clip and preserve enough context for standalone viewing.",
      "Edit for platform format, captions, crop, sound, and review needs.",
      "Track which source types produce approved clips and useful outcomes.",
    ],
    signals: [
      "Repurposed clips have clear standalone value.",
      "The team knows which long assets are worth mining again.",
      "Internal links or posting notes connect short clips back to deeper assets.",
    ],
    guardrails: [
      "Do not repurpose content with unclear rights or outdated claims.",
      "Avoid treating every timestamp as a publishable clip.",
      "Keep source links and timestamps attached to derivative assets.",
    ],
    references: ["youtubeShorts"],
    related: ["video-repurposing-service", "turn-podcast-into-shorts", "turn-webinar-into-shorts"],
    funnel: "MOFU",
    businessIntent: "repurposing workflow planning",
  },
  {
    title: "Production Pipeline: A Practical Video Workback System",
    slug: "production-pipeline",
    description: "A production pipeline guide for moving videos from brief to source intake, edit, QA, review, approval, publishing, and archive.",
    primaryKeyword: "production pipeline",
    intent: "structure a repeatable video production pipeline",
    audience: "video teams, content operations, agencies, publishers, and marketing teams",
    angle: "A production pipeline makes work visible. Without it, teams rely on memory, messages, and heroic effort.",
    outcome: "a shared system where every video has a stage, owner, deadline, status, and next action",
    avoid: "managing video production from scattered chats and folders",
    owner: "production manager",
    workflow: [
      "Define stages: brief, source received, assigned, editing, QA, review, revision, approved, delivered, published, archived.",
      "Attach owner, deadline, source links, brand rules, and review status to each video.",
      "Use templates for recurring content types and export needs.",
      "Separate blockers from active work so editors are not assigned incomplete jobs.",
      "Review pipeline health weekly for stalled work, rework, missed deadlines, and overcapacity.",
    ],
    signals: [
      "Anyone can see where a video stands without asking.",
      "Blocked work is visible before deadlines are missed.",
      "Pipeline metrics show whether intake, editing, review, or delivery is the bottleneck.",
    ],
    guardrails: [
      "Do not add stages that have no owner or decision.",
      "Avoid hiding urgent jobs outside the pipeline.",
      "Keep final files connected to source files and review history.",
    ],
    references: ["ffmpegDocs"],
    related: ["video-processing-pipeline", "video-delivery-workflow", "video-operations-guide"],
    funnel: "BOFU",
    businessIntent: "production pipeline setup",
  },
  {
    title: "Video Processing Pipeline: From Upload to Final Export",
    slug: "video-processing-pipeline",
    description: "A video processing pipeline guide for ingest, transcoding, thumbnails, captions, QA checks, exports, and delivery.",
    primaryKeyword: "video processing pipeline",
    intent: "design technical video processing flow",
    audience: "video operations teams, engineers, editors, agencies, and media teams",
    angle: "A processing pipeline handles the technical steps that make editors faster: ingest, inspection, transcoding, proxies, captions, derivatives, and exports.",
    outcome: "a predictable technical flow from raw upload to review-ready and publish-ready files",
    avoid: "forcing editors to fix technical input problems one timeline at a time",
    owner: "video operations or technical lead",
    workflow: [
      "Ingest files with metadata: owner, project, source type, rights, frame rate, resolution, audio channels, and due date.",
      "Generate proxies, transcripts, thumbnails, and waveform previews when needed.",
      "Normalize technical settings for editing and review.",
      "Run automated checks for file type, duration, aspect ratio, audio presence, and export status.",
      "Connect final exports back to source and derivative files.",
    ],
    signals: [
      "Editors receive files that open and play correctly.",
      "Technical QA catches bad audio, wrong aspect ratio, or corrupt exports early.",
      "Exports are consistent across platforms and teams.",
    ],
    guardrails: [
      "Do not overwrite source files during processing.",
      "Avoid silent transcodes that change timing, audio, or color without review.",
      "Keep original files accessible for re-edits and audits.",
    ],
    references: ["ffmpegDocs", "w3cMedia"],
    related: ["production-pipeline", "video-qa-workflow", "publishing-workflow"],
    funnel: "BOFU",
    businessIntent: "technical video operations",
  },
  {
    title: "Editor Checklist: What to Confirm Before a Short Is Done",
    slug: "editor-checklist",
    description: "An editor checklist for hooks, story clarity, captions, crop, audio, pacing, brand rules, exports, and delivery notes.",
    primaryKeyword: "editor checklist",
    intent: "give editors a practical final check",
    audience: "video editors, agencies, creators, publishers, and content teams",
    angle: "A good checklist protects editors from repetitive mistakes without turning creative work into a rigid script.",
    outcome: "a short final check editors can run before QA or client review",
    avoid: "sending preventable caption, crop, audio, or export mistakes into review",
    owner: "video editor",
    workflow: [
      "Confirm the first seconds make the point clear.",
      "Check captions for spelling, timing, readability, safe zones, names, and numbers.",
      "Check crop, framing, b-roll, on-screen text, and visual clutter.",
      "Check voice clarity, music balance, noise, and abrupt audio cuts.",
      "Check export format, file name, destination folder, and review notes.",
    ],
    signals: [
      "QA finds fewer basic mistakes.",
      "Editors learn recurring patterns instead of receiving the same note repeatedly.",
      "Drafts feel client-ready before they leave the editor.",
    ],
    guardrails: [
      "Do not use the checklist as a replacement for editorial or stakeholder review.",
      "Avoid making the checklist so long that editors skip it.",
      "Keep source-specific or client-specific checks attached to the brief.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["video-qa-workflow", "batch-video-editing", "agency-video-qa-checklist"],
    funnel: "MOFU",
    businessIntent: "editor workflow support",
  },
  {
    title: "Video QA Workflow: Catch Technical and Content Issues Before Delivery",
    slug: "video-qa-workflow",
    description: "A video QA workflow for checking captions, audio, crop, export settings, brand fit, source context, and publishing readiness.",
    primaryKeyword: "video QA workflow",
    intent: "set up video quality assurance",
    audience: "video teams, agencies, publishers, educators, and content operations teams",
    angle: "QA sits between editing and approval. It should catch technical and execution errors before reviewers spend time on creative or strategic decisions.",
    outcome: "a repeatable QA process that reduces revisions and prevents avoidable delivery mistakes",
    avoid: "using stakeholders as the first quality-control layer",
    owner: "QA reviewer or senior editor",
    workflow: [
      "Check brief match, source context, platform format, and target audience.",
      "Check captions, spelling, names, numbers, timing, and safe zones.",
      "Check audio, crop, pacing, color, frame clutter, and thumbnail frame.",
      "Check export format, duration, file name, folder, and delivery link.",
      "Log recurring QA issues by editor, client, template, and source type.",
    ],
    signals: [
      "Stakeholder revisions focus on message, not preventable mistakes.",
      "QA notes become template or checklist improvements.",
      "Final exports are consistent across editors and batches.",
    ],
    guardrails: [
      "Do not skip QA for urgent videos.",
      "Avoid having the same person be sole editor and QA on high-risk work.",
      "Keep QA scope separate from subjective creative preference.",
    ],
    references: ["w3cMedia", "ffmpegDocs"],
    related: ["editor-checklist", "video-review-workflow", "video-processing-pipeline"],
    funnel: "BOFU",
    businessIntent: "QA workflow setup",
  },
  {
    title: "Managing Hundreds of Videos: Operations Guide for Large Queues",
    slug: "managing-hundreds-of-videos",
    description: "How to manage hundreds of videos with intake rules, queue states, metadata, review lanes, batching, and delivery tracking.",
    primaryKeyword: "managing hundreds of videos",
    intent: "manage large video production queues",
    audience: "content operations teams, agencies, publishers, creator networks, and enterprise teams",
    angle: "Hundreds of videos become unmanageable when the team cannot tell what is ready, blocked, in review, approved, delivered, or archived.",
    outcome: "a large-queue operating model that keeps status, ownership, priority, and metadata visible",
    avoid: "using folders as the production system",
    owner: "video operations manager",
    workflow: [
      "Create standard states for every video and forbid ambiguous status labels.",
      "Track owner, source, due date, platform, review risk, and final destination.",
      "Batch similar jobs but keep individual metadata and approvals attached.",
      "Use dashboards for late work, blocked work, review waits, and delivery volume.",
      "Archive final assets with source links, captions, thumbnails, and published URLs.",
    ],
    signals: [
      "The team can find any video by status, owner, platform, or source.",
      "Managers can move capacity before deadlines fail.",
      "Approved and delivered videos do not get reworked by mistake.",
    ],
    guardrails: [
      "Do not manage high-volume work only in chat.",
      "Avoid vague statuses such as almost done or waiting.",
      "Keep permissions clean when many clients, desks, or contractors are involved.",
    ],
    references: ["ffmpegDocs"],
    related: ["how-to-produce-100-shorts-every-week", "production-pipeline", "video-production-kpis"],
    funnel: "BOFU",
    businessIntent: "high-volume operations setup",
  },
  {
    title: "Review Less, Edit More: Reduce Feedback Drag in Video Production",
    slug: "review-less-edit-more",
    description: "How video teams can review less and edit more by improving briefs, QA, approval ownership, templates, and review rules.",
    primaryKeyword: "review less edit more",
    intent: "reduce unnecessary review load",
    audience: "editors, agencies, content teams, publishers, and production managers",
    angle: "The answer is not no review. The answer is fewer avoidable review cycles because briefs, templates, QA, and approval ownership are clearer.",
    outcome: "less time waiting for vague feedback and more time producing useful videos",
    avoid: "cutting review entirely and letting errors reach clients or platforms",
    owner: "production manager",
    workflow: [
      "Improve briefs so reviewers do not have to invent the direction after the edit.",
      "Use internal QA to remove basic errors before stakeholder review.",
      "Limit approvers and define who can request changes versus who can comment.",
      "Use approved templates for recurring content types.",
      "Track review notes that should have been solved before the review stage.",
    ],
    signals: [
      "Revision notes become fewer and more specific.",
      "Editors spend less time waiting and more time finishing the next video.",
      "Stakeholder review focuses on decisions, not cleanup.",
    ],
    guardrails: [
      "Do not treat all feedback as equally important.",
      "Avoid removing review from sensitive or high-impact videos.",
      "Keep final approval visible before publishing.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["video-review-workflow", "review-bottlenecks", "editor-checklist"],
    funnel: "MOFU",
    businessIntent: "review efficiency improvement",
  },
  {
    title: "AI Assisted Editing Workflow: Use AI Without Losing Editorial Control",
    slug: "ai-assisted-editing-workflow",
    description: "An AI assisted editing workflow for transcripts, clip discovery, captions, rough cuts, QA signals, and human review.",
    primaryKeyword: "AI assisted editing workflow",
    intent: "use AI in video editing operations",
    audience: "video teams, agencies, publishers, creators, and content operations leaders",
    angle: "AI should speed up finding, preparing, and formatting clips. It should not silently decide what is true, on-brand, or ready to publish.",
    outcome: "a workflow where AI reduces repetitive prep while humans keep control of meaning, quality, and approvals",
    avoid: "using AI-generated clips as final output without review",
    owner: "video operations or AI workflow lead",
    workflow: [
      "Use AI for transcription, speaker detection, clip candidate discovery, caption drafts, and summary notes.",
      "Ask editors to verify context, source meaning, names, claims, and visual fit.",
      "Use AI to flag likely QA issues, but keep human QA for final decisions.",
      "Log AI-suggested clips and editor choices to improve prompts and policies.",
      "Measure AI by time saved and quality maintained, not only output volume.",
    ],
    signals: [
      "Editors reach strong moments faster.",
      "Caption and rough-cut prep takes less manual time.",
      "Human review still controls final message and publish readiness.",
    ],
    guardrails: [
      "Do not let AI invent context, claims, or captions without review.",
      "Avoid using automation to mass-produce low-value pages or videos.",
      "Keep sensitive sources under stricter human review.",
    ],
    references: ["w3cMedia"],
    related: ["newsroom-video-automation", "agency-workflow-automation", "video-qa-workflow"],
    funnel: "BOFU",
    businessIntent: "AI editing workflow setup",
  },
  {
    title: "Scaling Video Teams: Roles, Queues, Templates, and Review Lanes",
    slug: "scaling-video-teams",
    description: "How to scale video teams with clear roles, source intake, production queues, templates, QA, metrics, and review lanes.",
    primaryKeyword: "scaling video teams",
    intent: "grow video production capacity",
    audience: "content leaders, agency founders, publishers, marketing teams, and operations managers",
    angle: "Scaling a video team is about clearer roles and fewer repeated decisions before it is about more people.",
    outcome: "a video team that can handle more source material, formats, stakeholders, and publishing channels",
    avoid: "adding editors into a broken queue with unclear briefs and slow approvals",
    owner: "head of video or operations lead",
    workflow: [
      "Define roles for intake, editing, QA, review, delivery, publishing, and metrics.",
      "Create a production queue that separates ready work from blocked work.",
      "Use templates for recurring formats and checklists for recurring mistakes.",
      "Build review lanes by risk and stakeholder complexity.",
      "Track capacity, throughput, quality, rework, and delivery reliability.",
    ],
    signals: [
      "New team members can understand the workflow quickly.",
      "Output rises without hiding quality problems.",
      "Leadership can tell whether bottlenecks are people, process, or tools.",
    ],
    guardrails: [
      "Do not scale by multiplying unofficial workflows.",
      "Avoid letting metrics reward weak high-volume output.",
      "Keep QA and review standards visible as the team grows.",
    ],
    references: ["ffmpegDocs"],
    related: ["video-production-kpis", "editing-throughput", "managing-hundreds-of-videos"],
    funnel: "BOFU",
    businessIntent: "video team scaling",
  },
  {
    title: "Video Production KPIs: Metrics That Actually Improve Output",
    slug: "video-production-kpis",
    description: "Video production KPIs for measuring turnaround, throughput, QA pass rate, review time, revision load, delivery reliability, and output quality.",
    primaryKeyword: "video production KPIs",
    intent: "measure video production performance",
    audience: "production managers, content operations, agencies, publishers, and marketing leaders",
    angle: "Good KPIs explain how production works. Bad KPIs pressure teams to ship more while hiding quality decline.",
    outcome: "a scorecard for speed, quality, throughput, review drag, and delivery reliability",
    avoid: "tracking only number of videos delivered",
    owner: "operations lead",
    workflow: [
      "Track intake completeness, first-draft time, QA pass rate, review time, revision rounds, and final delivery time.",
      "Measure throughput by editor, content type, source type, and platform.",
      "Track quality through QA failures, client rejections, corrections, and rework reasons.",
      "Separate stakeholder delay from internal production delay.",
      "Review KPIs weekly and turn repeated issues into SOP, template, or staffing changes.",
    ],
    signals: [
      "The team can identify where delays actually happen.",
      "Quality metrics sit beside speed metrics.",
      "Leadership can forecast capacity from real production history.",
    ],
    guardrails: [
      "Do not use KPIs to reward low-quality volume.",
      "Avoid comparing complex videos to simple batch clips without context.",
      "Keep metric definitions stable enough to compare over time.",
    ],
    references: ["ffmpegDocs"],
    related: ["editing-throughput", "review-bottlenecks", "scaling-video-teams"],
    funnel: "BOFU",
    businessIntent: "production metrics setup",
  },
  {
    title: "Editing Throughput: Increase Finished Videos Without Burning Out Editors",
    slug: "editing-throughput",
    description: "An editing throughput guide for measuring capacity, reducing setup time, batching work, improving QA, and protecting editor focus.",
    primaryKeyword: "editing throughput",
    intent: "increase editing output capacity",
    audience: "video teams, agencies, publishers, and content operations managers",
    angle: "Throughput is not how fast one editor can sprint. It is how reliably the system turns ready work into approved videos.",
    outcome: "higher finished output with less context switching, rework, and avoidable waiting",
    avoid: "maxing out editors while review, briefs, and source prep remain broken",
    owner: "production manager",
    workflow: [
      "Measure ready work versus blocked work before judging editor capacity.",
      "Reduce setup time with templates, source prep, caption presets, and export presets.",
      "Batch similar tasks but keep creative judgment per video.",
      "Use QA findings to reduce rework instead of blaming editors for repeated system issues.",
      "Protect focus time by limiting urgent interruptions and unclear assignments.",
    ],
    signals: [
      "More videos reach approved status per week.",
      "Editors spend less time waiting, searching, and re-exporting.",
      "Rework rate stays stable or falls as output increases.",
    ],
    guardrails: [
      "Do not confuse busy timelines with finished approved work.",
      "Avoid measuring editor performance without accounting for brief quality.",
      "Keep quality and burnout indicators visible.",
    ],
    references: ["ffmpegDocs", "w3cMedia"],
    related: ["video-production-kpis", "reduce-video-editing-turnaround-time", "batch-video-editing"],
    funnel: "BOFU",
    businessIntent: "throughput improvement",
  },
  {
    title: "Review Bottlenecks: Why Video Drafts Get Stuck",
    slug: "review-bottlenecks",
    description: "How to diagnose video review bottlenecks caused by unclear owners, vague feedback, missing QA, stakeholder conflicts, and approval delays.",
    primaryKeyword: "review bottlenecks",
    intent: "fix video approval delays",
    audience: "video producers, agencies, content teams, publishers, and marketing operations",
    angle: "Review bottlenecks are rarely just slow people. They usually come from unclear authority, too many reviewers, missing QA, or drafts that ask reviewers to solve the brief.",
    outcome: "a review system where videos move through feedback, revision, approval, and delivery without long stalls",
    avoid: "adding reminder messages without fixing the decision structure",
    owner: "review owner or production manager",
    workflow: [
      "Identify where drafts wait: internal QA, stakeholder review, legal, brand, client, or final publishing.",
      "Name one approver and separate optional commenters from decision makers.",
      "Require timestamped feedback and issue type for every requested change.",
      "Create escalation rules for overdue review and conflicting feedback.",
      "Report review time by stakeholder, content type, and risk level.",
    ],
    signals: [
      "Fewer videos wait in review with no next action.",
      "Stakeholders give more specific comments.",
      "Approval time becomes predictable by video type.",
    ],
    guardrails: [
      "Do not route every video through the highest-risk review path.",
      "Avoid letting late feedback restart the whole process without scope rules.",
      "Keep sensitive review strict even while routine review gets faster.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["video-review-workflow", "review-less-edit-more", "video-production-kpis"],
    funnel: "BOFU",
    businessIntent: "review bottleneck fix",
  },
  {
    title: "Video Delivery Workflow: From Approved Edit to Final Handoff",
    slug: "video-delivery-workflow",
    description: "A video delivery workflow for final exports, file naming, captions, thumbnails, folders, client notes, publishing links, and archive.",
    primaryKeyword: "video delivery workflow",
    intent: "standardize final video handoff",
    audience: "agencies, content teams, publishers, editors, and marketing operations teams",
    angle: "Delivery is where many good edits become messy assets. The final handoff should make the video easy to publish, find, revise, and report on.",
    outcome: "clean final delivery with the right files, links, captions, notes, and archive metadata",
    avoid: "dropping final exports into a folder with no context or naming standard",
    owner: "delivery coordinator or editor",
    workflow: [
      "Confirm approval status before exporting final versions.",
      "Export platform-specific files with clear names, aspect ratio, duration, and version.",
      "Include captions, thumbnails, source notes, usage notes, and posting copy where needed.",
      "Place final files in the approved delivery folder and separate them from drafts.",
      "Archive published URLs, final files, source links, and revision history.",
    ],
    signals: [
      "The publisher or client can post without asking for missing pieces.",
      "Final files are easy to distinguish from draft files.",
      "Future revisions can find source and approval context quickly.",
    ],
    guardrails: [
      "Do not deliver unapproved drafts as final files.",
      "Avoid file names that do not identify client, project, platform, version, or date.",
      "Keep caption files and thumbnails with the final export where required.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["publishing-workflow", "production-pipeline", "video-qa-workflow"],
    funnel: "MOFU",
    businessIntent: "delivery workflow setup",
  },
  {
    title: "Publishing Workflow for Video Teams",
    slug: "publishing-workflow",
    description: "A publishing workflow for video teams handling final checks, metadata, thumbnails, captions, platform copy, scheduling, and updates.",
    primaryKeyword: "publishing workflow",
    intent: "publish video assets reliably",
    audience: "content teams, publishers, agencies, creators, and social teams",
    angle: "Publishing is not just uploading a file. It includes metadata, caption checks, thumbnail choice, platform copy, timing, links, and correction paths.",
    outcome: "a reliable platform-ready publishing process that connects final exports to live posts and future updates",
    avoid: "letting final exports disappear into platforms with no tracking or correction plan",
    owner: "publishing manager or social producer",
    workflow: [
      "Confirm final approval, export version, caption status, thumbnail, title, and platform copy.",
      "Adapt metadata and copy for each platform instead of pasting the same text everywhere.",
      "Schedule or publish with the correct links, tags, descriptions, and accessibility settings.",
      "Record live URLs, post time, owner, and any platform-specific notes.",
      "Create an update or takedown path for errors, changed facts, or client requests.",
    ],
    signals: [
      "Every published video can be traced back to the approved final export.",
      "Platform posts have captions, titles, and thumbnails checked before launch.",
      "Corrections can be handled after publishing without confusion.",
    ],
    guardrails: [
      "Do not publish from draft folders.",
      "Avoid using platform copy that overpromises what the video says.",
      "Keep sensitive content under final review before scheduling.",
    ],
    references: ["youtubeShorts"],
    related: ["video-delivery-workflow", "multi-platform-publishing", "editorial-review-workflow"],
    funnel: "BOFU",
    businessIntent: "publishing operations setup",
  },
  {
    title: "Video Operations Guide: Build a System for High-Volume Video Production",
    slug: "video-operations-guide",
    description: "A video operations guide covering intake, production pipelines, AI assistance, QA, review, delivery, publishing, metrics, and scaling.",
    primaryKeyword: "video operations guide",
    intent: "understand video operations end to end",
    audience: "video leaders, content operations teams, agencies, publishers, creators, and marketing teams",
    angle: "Video operations is the system behind consistent video output. It connects the creative work to intake, tooling, review, delivery, publishing, analytics, and archive.",
    outcome: "a complete operating model for teams producing many short-form and long-form video assets",
    avoid: "treating video operations as only editing software or only project management",
    owner: "head of video operations",
    workflow: [
      "Define source intake, production stages, role ownership, review lanes, QA standards, and publishing paths.",
      "Create templates and checklists for recurring formats without flattening creative judgment.",
      "Use AI and processing tools to prepare work, not to bypass human review.",
      "Track KPIs that balance speed, quality, throughput, review time, and delivery reliability.",
      "Archive source, final exports, captions, thumbnails, URLs, and performance notes for reuse.",
    ],
    signals: [
      "The team can explain how a video moves from idea to live post.",
      "Bottlenecks show up in metrics before they become missed deadlines.",
      "Scaling output does not require reinventing the workflow every week.",
    ],
    guardrails: [
      "Do not let operations erase creative judgment.",
      "Avoid automating unreviewed content into public publishing.",
      "Keep quality, accessibility, and source context visible in every workflow stage.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["production-pipeline", "video-production-kpis", "scaling-video-teams"],
    funnel: "MOFU",
    businessIntent: "video operations strategy",
  },
];

const configBySlug = new Map(videoOperationsConfigs.map((config) => [config.slug, config]));

export const videoOperationsPosts = videoOperationsConfigs.map(buildVideoOperationsPost);

export const videoOperationsGuides = videoOperationsConfigs.map((config) => ({
  title: config.title,
  href: `/blog/${config.slug}`,
  body: config.description,
}));

export const videoOperationsInventory = videoOperationsConfigs.map((config) => ({
  title: config.title,
  slug: `/blog/${config.slug}`,
  cluster: "Video Production Operations",
  pillar: "Video Operations Guide",
  primaryKeyword: config.primaryKeyword,
  intent: config.intent,
  audience: config.audience,
  funnel: config.funnel,
  contentType: "video operations guide",
  businessIntent: config.businessIntent,
}));

export const videoOperationsSlugs = videoOperationsConfigs.map((config) => config.slug);

function buildVideoOperationsPost(config) {
  return {
    title: config.title,
    slug: config.slug,
    description: config.description,
    keywords: [
      config.primaryKeyword,
      "video operations",
      "video production workflow",
      "short-form video production",
    ],
    readingTime: "7 min read",
    date: PUBLISHED_DATE,
    body: buildBody(config),
    heroImage: HERO_IMAGE,
    heroImageAlt: `${config.title} workflow`,
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

  return `![${config.title} workflow](${HERO_IMAGE})

${config.angle}

This guide is written for ${config.audience}. The practical goal is ${config.outcome}.

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

## Guardrails

${config.guardrails.map((item) => `- ${item}`).join("\n")}

Good operations work keeps queues, owners, review states, source context, and delivery standards visible so throughput does not depend on private memory or last-minute chasing.

## How Dalaillama Fits This Workflow

Dalaillama can help teams turn long or raw source video into short-form output by handling moment selection, vertical crop, captions, sound polish, QA, and export. For operations-heavy teams, the value is not only editing the clip. It is making the production handoff predictable: clear briefs, source context, review notes, delivery files, and platform-ready exports.

## Credible References

${referencesFor(config).map((ref) => `- [${ref.label}](${ref.url}) ${ref.note}.`).join("\n")}

## Related Guides

${relatedGuides.map((guide) => `- [${guide.title}](${guide.href})`).join("\n")}

### Is ${config.primaryKeyword} mainly about tools?

Tools help, but the highest-leverage fixes are usually process fixes: complete intake, visible queues, review ownership, QA standards, export presets, and useful metrics.`;
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
