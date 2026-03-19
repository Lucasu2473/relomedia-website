import { motion } from "framer-motion";

const heroText =
  "We will Edit your Short/Long Form Videos in High Quality with a Lighting Fast Turnaround Time.";

const subText =
  "We also offer Ideation, Scripts, Video Editing, Thumbnails, SEO";

const calendlyLink = "https://calendly.com/relo-media/new-meeting";
const supabaseVideoBaseUrl =
  "https://auth.primelife.one/storage/v1/object/public/relomedia-videos";
const assetPath = (name) => `${supabaseVideoBaseUrl}/${encodeURIComponent(name)}`;
const posterPath = (name) => `/video-posters/${encodeURIComponent(name)}`;

const videos = [
  { title: "Video 1", url: assetPath("1.mp4"), poster: posterPath("1.jpg") },
  { title: "Video 2", url: assetPath("2.MP4"), poster: posterPath("2.jpg") },
  { title: "Video 3", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/3.MP4", poster: posterPath("3.jpg") },
  { title: "Video 4", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/4.MOV", poster: posterPath("4.jpg") },
  { title: "Video 5", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/5.mp4", poster: posterPath("5.jpg") },
  { title: "Video 6", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/6.mp4", poster: posterPath("6.jpg") },
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
const showcaseVideos = videos.slice(1, 6);
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
    title: "Get on Camera",
    text: "Set aside some time to record, and we'll prepare the video ideas & scripts beforehand (Another Offer than only Video Editing). Our team will coach you on the best practices for recording videos that perform and get conversions.",
  },
  {
    number: "02",
    title: "We Edit The Videos",
    text: "Our team will transform your recordings into long and short-form videos. Depending on your goals, we can make as many or as few videos as you like. You'll have enough content to post once to multiple times daily.",
  },
  {
    number: "03",
    title: "Upload to Any Platform",
    text: "Now you can take your short-form or long form videos and post them on all platforms. Sit back, relax, and watch the views and conversions come in. and yes we will make sure we triple check the quality of videos as there will be no random English caption mistakes.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -48, y: 12 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 48, y: 12 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <img className="brand-logo" src="/favicon.png" alt="ReloMedia" />
          </div>
          <a
            className="call-button nav-button"
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="container hero-inner"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={fadeUp} initial="hidden" animate="show">
              {heroText}
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show">
              {subText}
            </motion.p>

            <motion.div
              className="hero-image-frame"
              variants={slideInRight}
              initial="hidden"
              animate="show"
            >
              <div className="hero-image">
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
              </div>
            </motion.div>

            <motion.div className="hero-cta-row" variants={fadeUp}>
              <a className="call-button" href={calendlyLink} target="_blank" rel="noreferrer">
                Book a Call
              </a>
              <a className="work-button" href="#short-examples">
                See Our Work
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="trusted">
          <motion.div
            className="container"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2>Trusted By:</h2>
          </motion.div>
        </section>

        <section className="satisfaction">
          <div className="container satisfaction-layout">
            <motion.div
              className="satisfaction-copy"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3>We have</h3>
              <h3>THE BEST</h3>
              <h3>SATISFACTION</h3>
              <h3>RATE</h3>
              <p>Here's why</p>
            </motion.div>

            <div className="testimonial-rail">
              <div className="testimonial-stack">
                {showcaseVideos
                  .filter((video) => video.url && video.url.trim() !== "")
                  .map((video, index) => (
                    <motion.article
                      key={video.url}
                      className="fresh-video-card testimonial-card"
                      variants={index % 2 === 0 ? slideInRight : slideInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.05 }}
                    >
                      <div className="fresh-video-frame">
                        <video
                          className="fresh-video-player"
                          src={video.url}
                          poster={video.poster}
                          controls
                          preload="auto"
                          playsInline
                        />
                      </div>
                      <div className="testimonial-pill-row">
                        <span className="video-pill">{`Client ${index + 1}`}</span>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container steps-container">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              Here's How It Works a Simple 3-Step Process- it's really that easy.
            </motion.h2>

            <motion.div
              className="step-list"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  className="step-row"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="step-num">{step.number}</div>
                  <div className="step-copy">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="examples" id="short-examples">
          <div className="container">
            <motion.h2
              className="examples-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              Short Examples
            </motion.h2>

            <motion.div
              className="short-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {shortVideos
                .filter((video) => video.url && video.url.trim() !== "")
                .map((video, index) => (
                  <motion.article
                    key={video.url}
                    className="short-example"
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.08 }}
                  >
                    <div className="fresh-video-card short-portfolio-card">
                      <div className="fresh-video-frame">
                        <video
                          className="fresh-video-player"
                          src={video.url}
                          poster={video.poster}
                          controls
                          preload="auto"
                          playsInline
                        />
                      </div>
                      <div className="testimonial-pill-row">
                        <span className="video-pill">{video.label}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </motion.div>
          </div>
        </section>

        <section className="examples long-examples">
          <div className="container">
            <motion.h2
              className="examples-title long-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              Long-Form Examples
            </motion.h2>

            <motion.div
              className="long-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {longVideos
                .filter((video) => video.url && video.url.trim() !== "")
                .map((video, index) => (
                  <motion.article
                    key={video.url}
                    className="long-example"
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.08 }}
                  >
                    <div className="fresh-video-card long-portfolio-card">
                      <div className="long-video-frame">
                        <video
                          className="long-video-player"
                          src={video.url}
                          poster={video.poster}
                          controls
                          preload="auto"
                          playsInline
                        />
                      </div>
                      <div className="testimonial-pill-row">
                        <span className="video-pill">{video.label}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </motion.div>
          </div>
        </section>

        <section className="closing">
          <motion.div
            className="container closing-inner"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2>Ready to Scale? Let's Talk!</h2>
            <p>Book a FREE Call With Our Team Below to Get Started!</p>
            <a
              className="call-button large-call"
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
