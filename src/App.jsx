import { motion } from "framer-motion";

const heroText =
  "We edit your short form and long form videos so you can post more, look better, and grow faster.";

const subText =
  "ReloMedia helps creators, founders, and brands with editing, ideation, scripts, thumbnails, and content that is ready to publish.";

const calendlyLink = "https://calendly.com/relo-media/new-meeting";
const supabaseVideoBaseUrl =
  "https://auth.primelife.one/storage/v1/object/public/relomedia-videos";
const assetPath = (name) => `${supabaseVideoBaseUrl}/${encodeURIComponent(name)}`;
const posterPath = (name) => `/video-posters/${encodeURIComponent(name)}`;

const videos = [
  { title: "Video 1", url: assetPath("1.mp4"), poster: posterPath("1.jpg") },
  { title: "Video 2", url: assetPath("2.MP4"), poster: posterPath("2.jpg") },
  {
    title: "Video 3",
    url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/3.MP4",
    poster: posterPath("3.jpg"),
  },
  {
    title: "Video 4",
    url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/4.MOV",
    poster: posterPath("4.jpg"),
  },
  {
    title: "Video 5",
    url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/5.mp4",
    poster: posterPath("5.jpg"),
  },
  {
    title: "Video 6",
    url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/6.mp4",
    poster: posterPath("6.jpg"),
  },
  { title: "Video 7", url: assetPath("7.mp4"), poster: posterPath("7.jpg") },
  { title: "Video 8", url: assetPath("8.mp4"), poster: posterPath("8.jpg") },
  { title: "Video 9", url: assetPath("9.mp4"), poster: posterPath("9.jpg") },
  { title: "Video 10", url: assetPath("10.mp4"), poster: posterPath("10.jpg") },
  { title: "Video 11", url: assetPath("11.mp4"), poster: posterPath("11.jpg") },
  { title: "Video 12", url: assetPath("12.mp4"), poster: posterPath("12.jpg") },
  { title: "Video 13", url: assetPath("13.mp4"), poster: posterPath("13.jpg") },
  { title: "Video 14", url: assetPath("14.mp4"), poster: posterPath("14.jpg") },
  { title: "Video 15", url: assetPath("15.mp4"), poster: posterPath("15.jpg") },
  { title: "Video 16", url: assetPath("16.mp4"), poster: posterPath("16.jpg") },
];

const heroVideo = videos[0];
const shortVideos = videos.slice(6, 12).map((video, index) => ({
  ...video,
  label: `Short ${index + 1}`,
}));
const longVideos = videos.slice(12, 16).map((video, index) => ({
  ...video,
  label: `Long ${index + 1}`,
}));

const steps = [
  {
    number: "01",
    title: "Record",
    text: "You film the content. We can help shape ideas and direction before you shoot.",
  },
  {
    number: "02",
    title: "We Edit",
    text: "We turn your footage into polished short form and long form content with better pacing, structure, and presentation.",
  },
  {
    number: "03",
    title: "You Post",
    text: "You get content that is easier to review, approve, and publish consistently.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top">
            <img className="brand-logo" src="/favicon.png" alt="ReloMedia" />
            <div className="brand-copy">
              <span className="brand-name">ReloMedia</span>
              <span className="brand-subtitle">Content Editing Agency</span>
            </div>
          </a>

          <a className="call-button nav-button" href={calendlyLink} target="_blank" rel="noreferrer">
            Book a Call
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="container hero-inner"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              Fast turnaround video editing
            </motion.span>
            <motion.h1 variants={fadeUp}>{heroText}</motion.h1>
            <motion.p variants={fadeUp}>{subText}</motion.p>

            <motion.div className="hero-video-shell" variants={fadeUp}>
              <video
                className="hero-video"
                src={heroVideo.url}
                poster={heroVideo.poster}
                controls
                preload="auto"
                playsInline
                loop
                muted
                defaultMuted
                autoPlay
                onCanPlay={(event) => {
                  event.currentTarget.play().catch(() => {});
                }}
              />
            </motion.div>

            <motion.div className="hero-cta-row" variants={fadeUp}>
              <a className="call-button" href={calendlyLink} target="_blank" rel="noreferrer">
                Book a Call
              </a>
              <a className="work-button" href="#work">
                See Our Work
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="process" id="process">
          <div className="container process-shell">
            <motion.div
              className="section-heading centered-heading"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                How it works
              </motion.span>
              <motion.h2 variants={fadeUp}>Simple. Record. We edit. You post.</motion.h2>
            </motion.div>

            <motion.div
              className="step-list"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
            >
              {steps.map((step) => (
                <motion.article key={step.number} className="step-row" variants={fadeUp}>
                  <div className="step-num">{step.number}</div>
                  <div className="step-copy">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="portfolio" id="work">
          <div className="container">
            <motion.div
              className="section-heading centered-heading"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Short form examples
              </motion.span>
              <motion.h2 variants={fadeUp}>Real work. Real edits.</motion.h2>
            </motion.div>

            <motion.div
              className="short-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
            >
              {shortVideos.map((video) => (
                <motion.article key={video.url} className="portfolio-card vertical-card" variants={fadeUp}>
                  <div className="portfolio-frame vertical-frame">
                    <video
                      className="portfolio-video"
                      src={video.url}
                      poster={video.poster}
                      controls
                      preload="auto"
                      playsInline
                    />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="portfolio long-portfolio">
          <div className="container">
            <motion.div
              className="section-heading centered-heading"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Long form examples
              </motion.span>
              <motion.h2 variants={fadeUp}>For YouTube and deeper content.</motion.h2>
            </motion.div>

            <motion.div
              className="long-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
            >
              {longVideos.map((video) => (
                <motion.article key={video.url} className="portfolio-card" variants={fadeUp}>
                  <div className="portfolio-frame wide-frame">
                    <video
                      className="portfolio-video"
                      src={video.url}
                      poster={video.poster}
                      controls
                      preload="auto"
                      playsInline
                    />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="closing">
          <motion.div
            className="container closing-shell"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.h2 variants={fadeUp}>Want content that actually looks polished?</motion.h2>
            <motion.p variants={fadeUp}>
              Book a quick call and let&apos;s see if ReloMedia is the right fit for your content.
            </motion.p>
            <motion.a
              className="call-button large-call"
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
            >
              Book a Call
            </motion.a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
