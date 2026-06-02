import LeadForm from "../components/LeadForm.jsx";
import { posts } from "../posts/index.js";

const productionPath = [
  "Idea",
  "Storyline",
  "Actor",
  "Script",
  "Shot design",
  "Shoot",
  "Polish",
  "Export",
];

const thinkingModes = [
  ["Director thinking", "Turns a loose idea into something you can actually shoot."],
  ["Writer thinking", "Shapes the hook, beats, dialogue, and payoff."],
  ["DP thinking", "Chooses framing, lens, movement, and gimbal notes."],
  ["Lighting thinking", "Plans key light, bounce, shadows, contrast, and rim light."],
  ["Sound thinking", "Keeps voice clear, then plans ambience, foley, music, and sync hits."],
  ["Editor thinking", "Checks the take, pacing, continuity, and final polish."],
];

const beforeShoot = [
  "Find or write the idea.",
  "Generate story options and save one.",
  "Build the storyline, characters, and emotional beats.",
  "Map actors to roles.",
  "Turn the story into shot-wise screenplay.",
  "Generate storyboard, lighting, sound, and camera plans.",
];

const afterShoot = [
  "Upload the real take for each planned shot.",
  "Choose the frame that represents the clip.",
  "Enhance the selected shot with production design context.",
  "Apply the same look to following shots for continuity.",
  "Clean recorded audio and mix dialogue, foley, ambience, music, and SFX.",
];

const operatingModes = [
  {
    title: "Budget polish is being tested",
    body: "The low-cost path is not available yet. We are still testing selected frames, background plates, compositing, grading, OpenCV recipes, and audio cleanup before offering it to users.",
  },
  {
    title: "Premium polish",
    body: "Use Veo for shots where motion, relighting, transitions, or client-facing quality justify the extra cost.",
  },
];

export default function Home() {
  return (
    <article className="landing-page">
      <section className="landing-hero studio-hero" aria-label="Landing hero">
        <div className="hero-copy">
          <p className="kicker">Dalaillama Creator Studio</p>
          <h1>Plan the short. Shoot the take. Polish it like a studio.</h1>
          <div className="hero-body">
            <p>Creators do not just need a better filter.</p>
            <p>
              They need help thinking through the production decisions that usually come from a small crew: what to say, how to block it, where to put the camera, how to light the face, when to re-shoot, and how to make the final clip feel intentional.
            </p>
            <p>
              Dalaillama gives that workflow to people recording alone on a phone.
            </p>
          </div>
          <div className="hero-actions">
            <a className="creator-primary hero-button" href="#access" data-ga-event="cta_click" data-ga-label="Hero request access">Request access</a>
            <a className="hero-link" href="#workflow" data-ga-event="cta_click" data-ga-label="Hero see workflow">See the workflow</a>
          </div>
          <p className="hero-note">
            Built first for creators making shorts, reels, podcast clips, coaching videos, product videos, and founder-led content.
          </p>
        </div>

        <div className="production-board creator-panel" aria-label="Production workflow preview">
          <div className="board-header">
            <span>Creator production board</span>
            <strong>8 steps</strong>
          </div>
          <div className="pipeline-strip">
            {productionPath.map((step, index) => (
              <div className="pipeline-pill" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="shot-preview-card">
            <div>
              <p>Shot 04</p>
              <h2>Medium close-up, slight push-in</h2>
              <span>Key light left, soft bounce right, dialogue stays primary.</span>
            </div>
            <div className="mini-frame" aria-hidden="true">
              <div className="mini-light" />
              <div className="mini-person" />
            </div>
          </div>
          <div className="board-timeline">
            <div className="timeline-row">
              <span>Raw take</span>
              <b />
              <b />
              <b />
            </div>
            <div className="timeline-row edited">
              <span>Polished</span>
              <b />
              <b />
            </div>
            <div className="timeline-row sound">
              <span>Sound</span>
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section essay-section" id="problem">
        <p className="kicker">The problem</p>
        <h2>A creator shooting alone has to think like a small production team.</h2>
        <div className="essay-copy">
          <p>
            Recording is easy now. Production is still hard.
          </p>
          <p>
            A creator has to choose the idea, ask the follow-up questions, write the hook, plan the shots, find a usable room, set the light, record the take, notice what went wrong, fix the sound, edit the clip, and keep publishing.
          </p>
          <p>
            Most tools enter too late. They start after the video exists. But many bad videos were already lost when the production thinking did not happen before the first take.
          </p>
        </div>
      </section>

      <section className="landing-section" id="crew">
        <p className="kicker">How the product helps</p>
        <h2>The missing production thinking.</h2>
        <div className="crew-grid">
          {thinkingModes.map(([role, body]) => (
            <div className="crew-card creator-panel-muted" key={role}>
              <h3>{role}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section" id="workflow">
        <div>
          <p className="kicker">Workflow</p>
          <h2>It starts before the camera turns on.</h2>
        </div>
        <div className="stage-list">
          {beforeShoot.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section split-section">
        <div>
          <p className="kicker">Shot design</p>
          <h2>Every shot gets a plan, not just an image.</h2>
        </div>
        <div className="essay-copy">
          <p>
            The app creates storyboard direction, lighting build sheets, sound cues, DP camera notes, gimbal movement, framing, wardrobe, props, and creator setup guidance.
          </p>
          <p>
            The point is not to make a pretty card. The point is to tell the creator what to record so the footage has a chance to work.
          </p>
        </div>
      </section>

      <section className="landing-section split-section" id="polish">
        <div>
          <p className="kicker">Shoot and polish</p>
          <h2>After recording, the app becomes the review room.</h2>
        </div>
        <div className="stage-list">
          {afterShoot.map((item, index) => (
            <div className="stage-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section mode-section">
        <div className="mode-copy">
          <p className="kicker">Cost control</p>
          <h2>Not every shot deserves the expensive path.</h2>
          <p>
            The product has to be useful for people testing content every day. It also has to produce a stronger result when a shot is important.
          </p>
        </div>
        <div className="mode-list">
          {operatingModes.map((mode) => (
            <div className="mode-card creator-panel-muted" key={mode.title}>
              <h3>{mode.title}</h3>
              <p>{mode.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section essay-section">
        <p className="kicker">What it is not</p>
        <h2>It is not a magic button for making fake videos.</h2>
        <div className="essay-copy">
          <p>
            The useful version keeps the creator's performance, words, timing, and identity intact.
          </p>
          <p>
            The software should improve what surrounds the performance: the plan, room, light, color, sound, continuity, and final polish.
          </p>
          <p>
            If the take is wrong, it should say re-shoot. That is a feature, not a failure.
          </p>
        </div>
      </section>

      <section className="landing-section writing-section" id="writing">
        <p className="kicker">Blogs & case studies</p>
        <h2>Work stories from the product.</h2>
        {posts.length > 0 ? (
          <div className="writing-list">
            {posts.slice(0, 5).map((post) => (
            <a
              className="writing-link"
              href={`/blog/${post.slug}`}
              key={post.slug}
              data-ga-event="blog_link_click"
              data-ga-label={post.title}
            >
              <span>{post.title}</span>
              <small>{post.date}</small>
            </a>
            ))}
          </div>
        ) : (
          <p className="empty-note">Blogs and case studies will live here soon.</p>
        )}
      </section>

      <section className="landing-section access-section creator-panel" id="access">
        <div>
          <p className="kicker">Request access</p>
          <h2>Bring one rough clip.</h2>
          <p>
            We want early users who already record and can tell us where production thinking breaks: idea, script, shot plan, lighting, take review, polish, audio, or export.
          </p>
          <p>
            Leave your email and what you record. We will start with a small group and learn from real projects.
          </p>
        </div>
        <LeadForm />
      </section>
    </article>
  );
}
