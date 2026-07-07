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
    note: "for captions, transcripts, and accessible video delivery",
  },
  ffmpegDocs: {
    label: "FFmpeg documentation",
    url: "https://ffmpeg.org/documentation.html",
    note: "for video processing, scaling, encoding, and QA tooling",
  },
};

export const agencyWorkflowConfigs = [
  {
    title: "Agency Video Editing Workflow: From Client Intake to Approved Shorts",
    slug: "agency-video-editing-workflow",
    description: "A practical agency video editing workflow for intake, batching, editing, QA, client review, revisions, delivery, and reporting.",
    primaryKeyword: "agency video editing workflow",
    intent: "build an agency delivery workflow for client video edits",
    audience: "video agencies, social media agencies, creator agencies, and production teams",
    angle: "This is the agency operations pillar for client video delivery. It focuses on intake, scopes, review, batching, QA, revisions, and client communication rather than newsroom publishing or one-off creator editing.",
    outcome: "a repeatable client delivery system that keeps Shorts moving from raw footage to approved exports without chaos",
    avoid: "handling every client clip as a custom emergency",
    owner: "agency production manager",
    workflow: [
      "Collect source files, platform goals, brand rules, references, deadlines, approval owner, and revision limits at intake.",
      "Group work by client, source type, format, and due date before assigning editors.",
      "Use templates for captions, lower thirds, hooks, export presets, file names, and delivery notes.",
      "Run an internal QA check before the client sees the first draft.",
      "Track revision reason, turnaround time, approved assets, and recurring blockers for each client.",
    ],
    signals: [
      "Editors start with complete briefs instead of chasing missing details.",
      "Clients receive consistent draft links, revision notes, and final exports.",
      "Production managers can see which jobs are blocked, in review, or approved.",
    ],
    guardrails: [
      "Do not promise speed without defining revision limits and client response times.",
      "Avoid one shared folder with mixed clients and no status system.",
      "Keep brand rules and client approvals attached to every batch.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["agency-production-pipeline", "agency-review-workflow", "agency-video-sop"],
    funnel: "MOFU",
    businessIntent: "agency workflow audit",
  },
  {
    title: "Scaling Video Editing Agency: Systems Before Headcount",
    slug: "scaling-video-editing-agency",
    description: "How to scale a video editing agency with intake rules, templates, batch production, QA, automation, and delivery metrics.",
    primaryKeyword: "scaling video editing agency",
    intent: "scale agency editing capacity without quality collapse",
    audience: "agency founders, operations leads, production managers, and editing teams",
    angle: "Scaling an agency is not only hiring more editors. The agency needs a pipeline that makes client work predictable before volume rises.",
    outcome: "higher monthly output with fewer missed deadlines, inconsistent drafts, and client revision loops",
    avoid: "adding editors before fixing briefs, QA, file naming, templates, and client approval paths",
    owner: "agency founder or operations lead",
    workflow: [
      "Separate sales promises from production capacity so delivery does not inherit vague scopes.",
      "Standardize offer tiers, turnaround time, revision limits, and accepted source formats.",
      "Build editor roles around rough cut, caption, polish, QA, and delivery when volume grows.",
      "Use production metrics to spot bottlenecks before hiring.",
      "Create backup capacity for urgent clients without disrupting all other work.",
    ],
    signals: [
      "The agency can add clients without rewriting the process each time.",
      "Editors know what quality means before the first draft is due.",
      "Leadership can forecast capacity from actual cycle time and revision load.",
    ],
    guardrails: [
      "Do not scale by hiding unfinished work from clients.",
      "Avoid unlimited revisions on fast-turnaround Shorts packages.",
      "Keep QA independent enough to catch editor blind spots.",
    ],
    references: ["w3cMedia", "ffmpegDocs"],
    related: ["agency-production-metrics", "agency-workflow-automation", "batch-editing-client-videos"],
    funnel: "BOFU",
    businessIntent: "agency scaling consultation",
  },
  {
    title: "White Label Shorts Editing: Delivery Workflow for Agencies",
    slug: "white-label-shorts-editing",
    description: "A white-label Shorts editing workflow for agencies that need client-ready edits under their own brand.",
    primaryKeyword: "white label shorts editing",
    intent: "evaluate white-label short-form editing support",
    audience: "marketing agencies, creator agencies, consultants, and production partners",
    angle: "White-label editing is not just outsourcing. The external editor has to disappear into the agency's quality standard, naming convention, review language, and client-facing delivery process.",
    outcome: "client-ready Shorts delivered under the agency brand with consistent quality and review control",
    avoid: "sending raw client context to an outside editor without brand rules, approval boundaries, or confidentiality expectations",
    owner: "agency account lead or production manager",
    workflow: [
      "Create a white-label brief with client brand rules, examples, forbidden edits, and delivery format.",
      "Use agency-owned folders, file naming, draft links, and revision notes.",
      "Keep client communication inside the agency unless the client has approved direct vendor contact.",
      "Run agency QA before anything is shown to the client.",
      "Track vendor reliability by turnaround, rework, caption accuracy, and client acceptance rate.",
    ],
    signals: [
      "The client cannot tell which editor or vendor made the Short.",
      "Agency QA catches brand mismatches before client review.",
      "The vendor returns assets in the agency's structure without extra cleanup.",
    ],
    guardrails: [
      "Do not share confidential client assets without permission and access controls.",
      "Avoid letting a vendor define the agency's creative standard.",
      "Keep revision ownership clear so client feedback does not get lost.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["video-outsourcing-guide", "agency-review-workflow", "client-approval-workflow"],
    funnel: "BOFU",
    businessIntent: "white-label editing partner evaluation",
  },
  {
    title: "Batch Editing Client Videos: Agency Workflow for High-Volume Shorts",
    slug: "batch-editing-client-videos",
    description: "How agencies can batch edit client videos with intake rules, templates, QA lanes, revision windows, and delivery tracking.",
    primaryKeyword: "batch editing client videos",
    intent: "batch client video production efficiently",
    audience: "agencies, editing teams, production managers, and content studios",
    angle: "Batch editing is useful only when the batch has enough consistency. Otherwise the agency just creates a bigger pile of mismatched clips.",
    outcome: "a batch workflow that turns client source videos into multiple Shorts without losing brand, context, or approval control",
    avoid: "batching unrelated clients, source types, and formats into one messy editing queue",
    owner: "production coordinator",
    workflow: [
      "Group batches by client, campaign, source type, platform, and deadline.",
      "Lock templates for captions, hook style, lower thirds, music rules, and export presets before editing starts.",
      "Create a batch sheet with source links, selected timestamps, brief notes, draft links, revision status, and final links.",
      "QA the first two clips before producing the rest of the batch.",
      "Deliver the batch with a simple index so the client can review quickly.",
    ],
    signals: [
      "The first approved clip becomes a pattern for the rest of the batch.",
      "Editors spend less time recreating caption and export decisions.",
      "Clients can approve, reject, or comment on each clip without long email chains.",
    ],
    guardrails: [
      "Do not batch until the creative direction is approved.",
      "Avoid using one template across clients with different brand voices.",
      "Keep source timestamps visible so revisions do not require rewatching the whole video.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["agency-video-templates", "agency-video-qa-checklist", "agency-production-pipeline"],
    funnel: "BOFU",
    businessIntent: "batch editing workflow",
  },
  {
    title: "Agency Review Workflow: Internal QA Before Client Feedback",
    slug: "agency-review-workflow",
    description: "An agency review workflow for checking hooks, captions, brand fit, audio, crop, export settings, and client readiness.",
    primaryKeyword: "agency review workflow",
    intent: "improve internal review before client delivery",
    audience: "agency producers, creative directors, editors, and account managers",
    angle: "Agency review should protect the client from messy drafts and protect the team from avoidable revision loops.",
    outcome: "a clean internal review process where only client-ready edits reach the client approval stage",
    avoid: "using the client as the first QA reviewer",
    owner: "creative director or senior producer",
    workflow: [
      "Check the brief before checking the video: platform, goal, brand voice, references, and deadline.",
      "Review the hook, story clarity, caption readability, audio balance, visual crop, and export preset.",
      "Mark feedback as must-fix, nice-to-have, client question, or future template improvement.",
      "Approve the draft only after file naming, links, and delivery notes are correct.",
      "Log repeated fixes so templates and SOPs improve over time.",
    ],
    signals: [
      "Client feedback focuses on preference, not preventable mistakes.",
      "Editors get clear notes instead of vague creative reactions.",
      "QA findings become template updates rather than recurring comments.",
    ],
    guardrails: [
      "Do not let account managers rewrite creative standards on every client request.",
      "Avoid subjective review with no link back to the brief.",
      "Keep internal review fast enough for short turnaround offers.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["agency-video-qa-checklist", "client-approval-workflow", "agency-video-sop"],
    funnel: "BOFU",
    businessIntent: "agency QA workflow",
  },
  {
    title: "Agency Video SOP: Standard Operating Procedure for Client Shorts",
    slug: "agency-video-sop",
    description: "A video editing SOP for agencies covering intake, editing, captions, QA, approvals, revisions, delivery, and reporting.",
    primaryKeyword: "agency video SOP",
    intent: "create an agency SOP for video production",
    audience: "agency founders, production managers, editors, and account teams",
    angle: "An agency SOP should reduce decision fatigue, not remove creative judgment. It should tell editors what must stay consistent and where creative interpretation is allowed.",
    outcome: "a concise SOP that lets the team deliver client Shorts consistently across editors and accounts",
    avoid: "a long internal document nobody opens during deadline pressure",
    owner: "production manager",
    workflow: [
      "Document intake fields, accepted source formats, client assets, references, and approval owners.",
      "Define editing standards for hooks, captions, crop, audio, pacing, branding, and exports.",
      "Create QA checks for spelling, names, platform specs, file names, links, and revision notes.",
      "Set rules for revision limits, response windows, final delivery, and archive storage.",
      "Review the SOP monthly against repeated client feedback and production blockers.",
    ],
    signals: [
      "New editors can follow the process without constant supervision.",
      "Clients receive consistent delivery no matter which editor works on the job.",
      "Production problems become SOP updates, not one-off blame.",
    ],
    guardrails: [
      "Do not turn creative direction into rigid sameness across clients.",
      "Avoid SOPs that ignore account promises and client contracts.",
      "Keep the SOP short enough to use during active production.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["agency-video-editing-workflow", "agency-video-qa-checklist", "agency-video-templates"],
    funnel: "BOFU",
    businessIntent: "agency SOP setup",
  },
  {
    title: "Client Approval Workflow: Get Video Edits Approved Faster",
    slug: "client-approval-workflow",
    description: "A client approval workflow for agencies delivering Shorts, Reels, TikToks, LinkedIn clips, and social video batches.",
    primaryKeyword: "client approval workflow",
    intent: "reduce approval delays in agency video delivery",
    audience: "agencies, account managers, client success teams, and video producers",
    angle: "Client approval is part of production, not something that happens after production. The workflow has to make feedback easy, specific, and time-boxed.",
    outcome: "faster client approvals with fewer vague comments, missed deadlines, and version confusion",
    avoid: "sending a folder of exports and asking the client what they think",
    owner: "account manager",
    workflow: [
      "Name one approval owner and one backup before editing begins.",
      "Send drafts with a short review guide: approve, request change, or ask a question.",
      "Collect feedback against timestamps, not general impressions.",
      "Separate brand corrections, factual corrections, and preference changes.",
      "Close the approval loop with final links, export notes, and usage guidance.",
    ],
    signals: [
      "Clients know exactly what kind of feedback is useful.",
      "Revision rounds are shorter because comments are timestamped.",
      "Final approval is recorded before publishing or handoff.",
    ],
    guardrails: [
      "Do not accept conflicting feedback from multiple client stakeholders without an owner.",
      "Avoid open-ended revision windows on fast-turnaround packages.",
      "Keep final approved exports separate from drafts.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["agency-review-workflow", "managing-multiple-clients", "agency-production-pipeline"],
    funnel: "BOFU",
    businessIntent: "client approval workflow",
  },
  {
    title: "Agency Production Pipeline: Plan, Edit, Review, Deliver, Report",
    slug: "agency-production-pipeline",
    description: "An agency production pipeline for managing client video briefs, editor assignments, QA, approvals, delivery, and metrics.",
    primaryKeyword: "agency production pipeline",
    intent: "build a production pipeline for agency video work",
    audience: "agency operations teams, founders, production leads, and editors",
    angle: "A pipeline gives every job a clear state. Without it, teams confuse busy activity with reliable delivery.",
    outcome: "a visible production system where every client video has a stage, owner, due date, and next action",
    avoid: "managing production from scattered chats, folders, and memory",
    owner: "agency operations lead",
    workflow: [
      "Use stages such as intake, source received, assigned, editing, internal review, client review, revision, approved, delivered, and archived.",
      "Attach brief, source links, brand assets, references, and approval owner to each job.",
      "Set due dates for internal draft, QA, client draft, revision window, and final delivery.",
      "Use automation for reminders, status changes, and final delivery checklists.",
      "Review pipeline health weekly by blocked jobs, late jobs, rework, and approval time.",
    ],
    signals: [
      "Anyone can see where a client job stands.",
      "Editors receive work only when source and brief are ready.",
      "Pipeline metrics explain why turnaround is slipping.",
    ],
    guardrails: [
      "Do not add pipeline stages that nobody owns.",
      "Avoid hiding urgent work outside the system.",
      "Keep client-facing deadlines separate from internal production deadlines.",
    ],
    references: ["ffmpegDocs"],
    related: ["agency-video-editing-workflow", "agency-production-metrics", "agency-workflow-automation"],
    funnel: "BOFU",
    businessIntent: "production pipeline setup",
  },
  {
    title: "Managing Multiple Clients: Video Agency Workflow Without Chaos",
    slug: "managing-multiple-clients",
    description: "How video agencies can manage multiple clients with clean intake, queues, priorities, templates, approvals, and reporting.",
    primaryKeyword: "managing multiple clients",
    intent: "manage several agency video clients at once",
    audience: "agency founders, account managers, production coordinators, and editors",
    angle: "Multiple clients break weak systems. The workflow has to protect each client's brand rules while keeping the agency team from context-switching all day.",
    outcome: "a production rhythm that keeps client priorities visible without letting one urgent account consume the whole team",
    avoid: "mixing client assets, deadlines, and revision notes in one shared production stream",
    owner: "account operations lead",
    workflow: [
      "Create a separate client workspace with brand rules, references, active jobs, revision limits, and approval owner.",
      "Use one master queue for production priority across clients.",
      "Batch similar work by format or platform only after client-specific rules are clear.",
      "Reserve capacity for urgent retainers or same-day packages.",
      "Send client reports that show delivered assets, status, blockers, and next batch needs.",
    ],
    signals: [
      "The team can switch clients without losing brand context.",
      "Account managers see client risk before a deadline is missed.",
      "Editors are not forced to decode scattered feedback from multiple stakeholders.",
    ],
    guardrails: [
      "Do not let one client's urgency silently move every other deadline.",
      "Avoid copying templates across clients without brand review.",
      "Keep access permissions clean when contractors or white-label partners help.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["client-approval-workflow", "agency-production-pipeline", "agency-production-metrics"],
    funnel: "BOFU",
    businessIntent: "multi-client agency operations",
  },
  {
    title: "Reduce Agency Turnaround: Faster Shorts Without Messy Delivery",
    slug: "reduce-agency-turnaround",
    description: "How agencies can reduce video turnaround with cleaner briefs, batching, templates, QA lanes, approvals, and automation.",
    primaryKeyword: "reduce agency turnaround",
    intent: "shorten agency video delivery time",
    audience: "agency owners, production managers, client success teams, and editors",
    angle: "Turnaround problems usually start before editing. Missing briefs, unclear owners, late feedback, and inconsistent templates create most delivery drag.",
    outcome: "shorter draft and final delivery times without pushing mistakes onto clients",
    avoid: "telling editors to work faster while the workflow stays broken",
    owner: "production manager",
    workflow: [
      "Measure time by intake delay, edit time, QA time, client review time, revision time, and final delivery.",
      "Make source links, platform, reference style, brand assets, and deadline mandatory before assignment.",
      "Use templates for recurring packages and approved client styles.",
      "Separate same-day work from standard batches so urgent jobs do not derail all production.",
      "Limit revision windows and clarify what counts as scope change.",
    ],
    signals: [
      "Draft turnaround improves without a rise in QA failures.",
      "Clients respond faster because review instructions are clearer.",
      "Editors spend less time hunting for missing assets.",
    ],
    guardrails: [
      "Do not remove QA to make turnaround look better.",
      "Avoid accepting incomplete briefs into the active queue.",
      "Keep client response time visible in turnaround reports.",
    ],
    references: ["ffmpegDocs", "w3cMedia"],
    related: ["how-agencies-deliver-shorts-fast", "agency-workflow-automation", "agency-video-qa-checklist"],
    funnel: "BOFU",
    businessIntent: "turnaround reduction",
  },
  {
    title: "How Agencies Deliver Shorts Fast: The Delivery System Behind 24-Hour Edits",
    slug: "how-agencies-deliver-shorts-fast",
    description: "How agencies deliver Shorts fast with clear scopes, source readiness, templates, batch editing, QA, and client approval rules.",
    primaryKeyword: "how agencies deliver shorts fast",
    intent: "understand fast agency Shorts delivery",
    audience: "agency clients, agency founders, social media teams, and production managers",
    angle: "Fast delivery is not magic. Agencies deliver Shorts fast when they constrain the offer, standardize the inputs, and protect review time.",
    outcome: "a fast-turnaround Shorts process that clients understand and teams can repeat",
    avoid: "selling unrealistic same-day edits with unlimited revisions and vague source material",
    owner: "agency founder or delivery lead",
    workflow: [
      "Define the fast package: number of Shorts, source length, platform, captions, revision limit, and delivery window.",
      "Require source files, target platform, brand references, and approval owner before the clock starts.",
      "Use approved caption, hook, crop, and export templates.",
      "Run a narrow QA checklist focused on the highest-risk mistakes.",
      "Deliver drafts through one review link with a fixed response window.",
    ],
    signals: [
      "The client knows exactly what fast delivery includes.",
      "Editors do not wait for missing assets after accepting the order.",
      "Same-day work does not interrupt every other client batch.",
    ],
    guardrails: [
      "Do not start the turnaround clock before source and brief are complete.",
      "Avoid promising custom strategy inside a fast production package.",
      "Keep sensitive or regulated clients out of automatic fast lanes unless review is defined.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["done-for-you-shorts", "reduce-agency-turnaround", "agency-video-templates"],
    funnel: "BOFU",
    businessIntent: "fast Shorts delivery",
  },
  {
    title: "Agency Video QA Checklist: What to Check Before Client Delivery",
    slug: "agency-video-qa-checklist",
    description: "A practical agency video QA checklist for captions, crop, audio, brand fit, platform specs, file names, and client readiness.",
    primaryKeyword: "agency video QA checklist",
    intent: "create a QA checklist for agency video delivery",
    audience: "agency editors, QA reviewers, production managers, and account teams",
    angle: "QA should catch mistakes that clients should never have to point out. It is the agency's quality firewall.",
    outcome: "a repeatable checklist that catches caption, brand, crop, audio, export, and delivery issues before client review",
    avoid: "checking only whether the video feels good while missing names, captions, and platform specs",
    owner: "QA reviewer or senior editor",
    workflow: [
      "Check brief match: platform, goal, reference style, brand rules, and deadline.",
      "Check captions: spelling, names, numbers, line breaks, timing, readability, and safe zones.",
      "Check visual edit: hook, pacing, crop, logo, lower thirds, b-roll, and frame clutter.",
      "Check audio: voice clarity, music level, pops, noise, and final loudness consistency.",
      "Check delivery: file name, export format, draft link, final folder, and revision notes.",
    ],
    signals: [
      "Client feedback shifts from basic errors to strategic preference.",
      "Repeated QA issues are visible by editor, client, and template.",
      "Final exports are easy to find and identify later.",
    ],
    guardrails: [
      "Do not skip QA on fast-turnaround edits.",
      "Avoid letting the same editor be the only reviewer on high-value client work.",
      "Keep the checklist short enough to complete every time.",
    ],
    references: ["w3cMedia", "ffmpegDocs", "youtubeShorts"],
    related: ["agency-review-workflow", "agency-video-sop", "batch-editing-client-videos"],
    funnel: "MOFU",
    businessIntent: "QA process setup",
  },
  {
    title: "Agency Video Templates: Faster Shorts Without Making Every Client Look the Same",
    slug: "agency-video-templates",
    description: "How agencies can use video templates for captions, hooks, layouts, exports, and delivery while preserving client brand fit.",
    primaryKeyword: "agency video templates",
    intent: "use templates to speed agency video delivery",
    audience: "agency editors, production managers, creative directors, and social teams",
    angle: "Templates create speed only when they preserve creative room. The best agency templates define structure, not sameness.",
    outcome: "faster production with consistent captions, layouts, file naming, exports, and review notes across client work",
    avoid: "using one visual style for every client because it is faster for the agency",
    owner: "creative operations lead",
    workflow: [
      "Create base templates for captions, speaker clips, podcast clips, product clips, testimonials, and educational Shorts.",
      "Add client-specific style layers for fonts, colors, logo rules, lower thirds, and music guidance.",
      "Use export presets for each platform and package type.",
      "QA templates monthly against client feedback and platform changes.",
      "Retire templates that create repeated revisions or weak performance.",
    ],
    signals: [
      "Editors can begin quickly without flattening client identity.",
      "Template changes reduce repeated QA notes.",
      "Clients approve batches faster because the style is already familiar.",
    ],
    guardrails: [
      "Do not let templates replace hook judgment.",
      "Avoid visual systems that cover faces, captions, or product details.",
      "Keep source-specific templates separate from client brand templates.",
    ],
    references: ["youtubeShorts", "w3cMedia", "ffmpegDocs"],
    related: ["batch-editing-client-videos", "agency-video-sop", "agency-video-qa-checklist"],
    funnel: "MOFU",
    businessIntent: "template system setup",
  },
  {
    title: "Agency Production Metrics: Track the Numbers That Improve Delivery",
    slug: "agency-production-metrics",
    description: "Agency production metrics for turnaround, revision rate, QA failures, utilization, client approval time, and delivery reliability.",
    primaryKeyword: "agency production metrics",
    intent: "measure agency video production health",
    audience: "agency founders, operations leads, production managers, and client success teams",
    angle: "Metrics should reveal where delivery breaks. Vanity output counts do not help if clients are stuck in revisions or editors are overloaded.",
    outcome: "a practical scorecard for capacity, quality, speed, client review, and profitability",
    avoid: "tracking only number of videos delivered",
    owner: "agency operations lead",
    workflow: [
      "Track intake completeness, first-draft turnaround, QA pass rate, revision rounds, and final approval time.",
      "Measure cycle time by client, editor, source type, platform, and package.",
      "Log revision reasons as creative preference, brief mismatch, factual issue, caption issue, brand issue, or scope change.",
      "Compare output against editor capacity and client profitability.",
      "Review metrics weekly and turn repeated problems into SOP or template updates.",
    ],
    signals: [
      "The agency knows whether delays come from editing, QA, client feedback, or unclear briefs.",
      "Pricing and staffing decisions use real production data.",
      "Clients with heavy revision load are visible before margins collapse.",
    ],
    guardrails: [
      "Do not use metrics to pressure editors into skipping quality checks.",
      "Avoid comparing clients with different scopes as if they are identical.",
      "Keep client response time separate from internal turnaround time.",
    ],
    references: ["ffmpegDocs"],
    related: ["scaling-video-editing-agency", "agency-production-pipeline", "reduce-agency-turnaround"],
    funnel: "BOFU",
    businessIntent: "agency metrics dashboard",
  },
  {
    title: "Agency Workflow Automation: Automate the Repetitive Parts of Video Delivery",
    slug: "agency-workflow-automation",
    description: "An agency workflow automation guide for briefs, file routing, transcript prep, status updates, QA reminders, and delivery links.",
    primaryKeyword: "agency workflow automation",
    intent: "automate agency video production operations",
    audience: "agency owners, operations teams, editors, and production coordinators",
    angle: "Automation should remove mechanical work, not hide client context or quality review. The safest automations are around routing, reminders, transcription, status, and delivery.",
    outcome: "less manual admin around video production without losing client control",
    avoid: "automating vague briefs, unreviewed AI outputs, or client-facing messages with no human check",
    owner: "agency operations or systems lead",
    workflow: [
      "Automate brief creation from accepted order forms and client intake fields.",
      "Route files into client folders with naming rules and status tags.",
      "Prepare transcripts, rough timestamps, and platform export presets automatically.",
      "Trigger QA reminders, client review links, revision due dates, and delivery notes.",
      "Audit automations monthly for broken links, wrong folders, and missed edge cases.",
    ],
    signals: [
      "Production managers spend less time moving files and chasing status.",
      "Editors receive prepared jobs with links, assets, and deadlines.",
      "Clients get consistent updates without manual copy-paste work.",
    ],
    guardrails: [
      "Do not automate client approvals without explicit human confirmation.",
      "Avoid AI-generated captions or summaries going out unreviewed.",
      "Keep access permissions strict for white-label and multi-client work.",
    ],
    references: ["ffmpegDocs", "w3cMedia"],
    related: ["agency-production-pipeline", "agency-production-metrics", "reduce-agency-turnaround"],
    funnel: "BOFU",
    businessIntent: "workflow automation setup",
  },
  {
    title: "Video Outsourcing Guide: How Agencies Should Outsource Shorts Editing",
    slug: "video-outsourcing-guide",
    description: "A video outsourcing guide for agencies choosing external editors, white-label partners, QA systems, scopes, and delivery rules.",
    primaryKeyword: "video outsourcing guide",
    intent: "evaluate video editing outsourcing safely",
    audience: "agency founders, consultants, marketing teams, and production managers",
    angle: "Outsourcing works when the agency keeps ownership of quality, brand, and client communication. It fails when outsourcing is used to avoid building a process.",
    outcome: "a safer outsourcing model for Shorts editing, repurposing, captions, and batch production",
    avoid: "sending raw footage to a vendor and hoping the first draft matches the client",
    owner: "agency founder or operations lead",
    workflow: [
      "Define scope, turnaround, revision limits, confidentiality, and accepted source formats before assigning work.",
      "Share brand rules, approved examples, forbidden styles, and platform targets.",
      "Start with a pilot batch and measure QA pass rate, communication, and revision quality.",
      "Keep client communication, final QA, and approval ownership inside the agency.",
      "Review vendor performance by reliability, accuracy, rework, and margin impact.",
    ],
    signals: [
      "The external partner returns drafts that fit the agency's standard.",
      "Outsourcing increases capacity without increasing client-visible errors.",
      "The agency can replace or add partners without changing client workflow.",
    ],
    guardrails: [
      "Do not outsource confidential client work without access and permission rules.",
      "Avoid vendor relationships with unclear file ownership or portfolio usage.",
      "Keep final delivery under agency QA.",
    ],
    references: ["w3cMedia", "youtubeShorts"],
    related: ["white-label-shorts-editing", "agency-review-workflow", "agency-video-qa-checklist"],
    funnel: "BOFU",
    businessIntent: "outsourcing partner evaluation",
  },
  {
    title: "Done For You Shorts: What a Reliable Delivery Workflow Looks Like",
    slug: "done-for-you-shorts",
    description: "A done-for-you Shorts workflow for agencies and teams that want source review, editing, captions, QA, and delivery handled.",
    primaryKeyword: "done for you shorts",
    intent: "evaluate done-for-you Shorts production",
    audience: "agencies, creators, founders, consultants, and marketing teams",
    angle: "Done-for-you Shorts still need a delivery workflow behind the offer: intake, moment selection, QA, approval, export, and client-ready handoff.",
    outcome: "a clear understanding of what a reliable done-for-you Shorts package should include",
    avoid: "buying a cheap clip dump that skips hook judgment, captions, QA, and review",
    owner: "buyer, creator, or agency account lead",
    workflow: [
      "Share the source video, platform target, audience, content goal, examples, and deadline.",
      "Let the editing team choose the strongest moment or work from approved timestamps.",
      "Review a draft with hook, pacing, captions, crop, audio, and export prepared.",
      "Request one focused revision round if the clip misses brief, brand, or factual context.",
      "Receive final exports with platform-ready naming and delivery notes.",
    ],
    signals: [
      "The provider asks for goal and platform, not only the file.",
      "The draft has captions, crop, sound, and pacing already handled.",
      "The final Short can be posted without more editing work.",
    ],
    guardrails: [
      "Do not accept unlimited revision promises without delivery boundaries.",
      "Avoid providers who cannot explain how they choose moments.",
      "Keep ownership, confidentiality, and usage rights clear.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["how-agencies-deliver-shorts-fast", "video-repurposing-service", "short-form-video-editor-attention-span"],
    funnel: "BOFU",
    businessIntent: "done-for-you Shorts order",
  },
  {
    title: "Video Repurposing Service: Turn Existing Content Into Client-Ready Shorts",
    slug: "video-repurposing-service",
    description: "A video repurposing service guide for agencies and teams turning podcasts, webinars, demos, interviews, and events into Shorts.",
    primaryKeyword: "video repurposing service",
    intent: "evaluate a video repurposing service",
    audience: "agencies, B2B marketers, founders, podcasters, and content teams",
    angle: "A repurposing service should not simply resize footage. It should find useful ideas inside existing content and package them for each platform.",
    outcome: "a clear repurposing workflow for turning long-form assets into approved short-form clips",
    avoid: "paying for generic clipping that ignores audience, hook, context, and platform fit",
    owner: "content lead or agency account manager",
    workflow: [
      "Inventory source assets by type: podcast, webinar, demo, interview, event, course, or meeting.",
      "Choose the content goal: educate, sell, explain, build trust, answer objections, or recap.",
      "Select one idea per Short and edit around a complete payoff.",
      "Add captions, crop, sound polish, and platform-specific export settings.",
      "Track which source assets produce the best approved clips.",
    ],
    signals: [
      "The service can explain why a moment became a Short.",
      "The final clip stands alone without requiring the full video.",
      "Repurposing decisions improve as more source assets are processed.",
    ],
    guardrails: [
      "Do not turn every source into the same style of clip.",
      "Avoid publishing client-sensitive or rights-limited footage without review.",
      "Keep source links and timestamps attached for revisions.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["done-for-you-shorts", "turn-podcast-into-shorts", "turn-webinar-into-shorts"],
    funnel: "BOFU",
    businessIntent: "repurposing service order",
  },
  {
    title: "Podcast Editing Service: Agency Workflow for Short-Form Podcast Clips",
    slug: "podcast-editing-service",
    description: "A podcast editing service workflow for agencies delivering episode clips, captions, speaker crops, hooks, and client approvals.",
    primaryKeyword: "podcast editing service",
    intent: "evaluate podcast clip editing services",
    audience: "podcast agencies, creators, founders, and marketing teams",
    angle: "Podcast editing services need a workflow for source review, moment selection, captions, audio polish, approvals, and delivery.",
    outcome: "a repeatable service package for turning podcast recordings into approved short-form clips",
    avoid: "editing podcast clips without speaker labels, episode context, guest approvals, or brand style",
    owner: "podcast producer or agency account lead",
    workflow: [
      "Collect episode files, transcript, guest names, brand assets, forbidden topics, and target platforms.",
      "Mark quote-worthy claims, stories, objections, and teachable answers.",
      "Create speaker-focused vertical crops, readable captions, and clean audio balance.",
      "Run client review for names, claims, guest context, and episode positioning.",
      "Deliver final clips with source timestamps and posting notes.",
    ],
    signals: [
      "The clip works even for viewers who have never heard the podcast.",
      "Guest identity and context are clear.",
      "Caption and audio polish make the clip watchable without extra cleanup.",
    ],
    guardrails: [
      "Do not remove a host question when the guest answer needs it.",
      "Avoid stitching separate answers into a stronger claim.",
      "Check guest and sponsor restrictions before publishing clips.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["turn-podcast-into-shorts", "video-repurposing-service", "agency-review-workflow"],
    funnel: "BOFU",
    businessIntent: "podcast editing order",
  },
  {
    title: "Interview Editing Service: Turn Expert Conversations Into Approved Shorts",
    slug: "interview-editing-service",
    description: "An interview editing service workflow for agencies and teams turning expert, founder, customer, and guest interviews into Shorts.",
    primaryKeyword: "interview editing service",
    intent: "evaluate interview video editing services",
    audience: "agencies, B2B teams, founders, customer marketers, and creators",
    angle: "Interview editing services need a delivery workflow for selecting useful Q&A moments, preserving context, shaping hooks, and routing client review.",
    outcome: "client-ready interview clips with clear context, captions, speaker labels, approvals, and platform exports",
    avoid: "creating polished but misleading answer clips that remove important question context",
    owner: "interview producer or account manager",
    workflow: [
      "Collect interview purpose, speaker names, titles, consent boundaries, brand rules, and target platforms.",
      "Select complete answer arcs: question, point, example, and payoff.",
      "Trim the interviewer only when the answer remains understandable.",
      "Add captions, lower thirds, speaker crops, and sound polish.",
      "Review names, quotes, claims, and approval requirements before final export.",
    ],
    signals: [
      "The edited clip preserves what the speaker meant.",
      "The viewer understands the prompt even if the full question is shortened.",
      "The final export fits the platform and client brand without extra editing.",
    ],
    guardrails: [
      "Do not combine separate answers into one artificial statement.",
      "Avoid using testimonial-style claims without client approval.",
      "Keep release, consent, and usage boundaries visible in the project brief.",
    ],
    references: ["youtubeShorts", "w3cMedia"],
    related: ["turn-interview-into-shorts", "client-approval-workflow", "video-repurposing-service"],
    funnel: "BOFU",
    businessIntent: "interview editing order",
  },
];

const configBySlug = new Map(agencyWorkflowConfigs.map((config) => [config.slug, config]));

export const agencyWorkflowPosts = agencyWorkflowConfigs.map(buildAgencyPost);

export const agencyWorkflowGuides = agencyWorkflowConfigs.map((config) => ({
  title: config.title,
  href: `/blog/${config.slug}`,
  body: config.description,
}));

export const agencyWorkflowInventory = agencyWorkflowConfigs.map((config) => ({
  title: config.title,
  slug: `/blog/${config.slug}`,
  cluster: "Agency Video Operations",
  pillar: "Agency Video Editing Workflow",
  primaryKeyword: config.primaryKeyword,
  intent: config.intent,
  audience: config.audience,
  funnel: config.funnel,
  contentType: "agency workflow guide",
  businessIntent: config.businessIntent,
}));

export const agencyWorkflowSlugs = agencyWorkflowConfigs.map((config) => config.slug);

function buildAgencyPost(config) {
  return {
    title: config.title,
    slug: config.slug,
    description: config.description,
    keywords: [
      config.primaryKeyword,
      "agency video workflow",
      "shorts editing agency",
      "video editing agency operations",
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

## Agency Workflow

${config.workflow.map((item) => `- ${item}`).join("\n")}

## Signs the Workflow Is Working

${config.signals.map((item) => `- ${item}`).join("\n")}

## Delivery Guardrails

${config.guardrails.map((item) => `- ${item}`).join("\n")}

These guardrails protect delivery quality. The team should know what is in scope, who owns review, what counts as done, and how revision notes turn into the next export.

## How Dalaillama Fits This Workflow

Dalaillama can support agencies and client teams with done-for-you short-form edits: source review, moment selection, vertical crop, captions, sound polish, QA, and export. For agency workflows, the useful part is consistency: clear briefs, repeatable standards, review notes, and delivery-ready files that fit the client's platform and brand.

## Credible References

${referencesFor(config).map((ref) => `- [${ref.label}](${ref.url}) ${ref.note}.`).join("\n")}

## Related Guides

${relatedGuides.map((guide) => `- [${guide.title}](${guide.href})`).join("\n")}

### Is ${config.primaryKeyword} mainly a tooling problem?

Usually no. Tools help, but agency delivery improves fastest when intake, scope, review ownership, QA, templates, and client approvals are clear before editing starts.`;
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
