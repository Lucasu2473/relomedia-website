import { motion } from "framer-motion";

const heroText =
  "We will Edit your Short/Long Form Videos in High Quality with a Lighting Fast Turnaround Time.";

const subText =
  "We also offer Ideation, Scripts, Video Editing, Thumbnails, SEO";

const calendlyLink = "https://calendly.com/relo-media/new-meeting";

const youtubeVideos = [
  { title: "Video 1", url: "https://youtu.be/HcOvU8HXG-s" },
  { title: "Video 2", url: "https://youtube.com/shorts/GYqCjtn2dXQ?feature=share" },
  { title: "Video 3", url: "https://youtube.com/shorts/WvVw9wbkG98?feature=share" },
  { title: "Video 4", url: "https://youtube.com/shorts/7Ex7eK1LLtU?feature=share" },
  { title: "Video 5", url: "https://youtube.com/shorts/whvig8K9v4w?feature=share" },
  { title: "Video 6", url: "https://youtu.be/kBeKrxg51iI" },
  { title: "Video 7", url: "https://youtube.com/shorts/PJCQlsXkK_k?feature=share" },
  { title: "Video 8", url: "https://youtube.com/shorts/dYxj7YDAx3g?feature=share" },
  { title: "Video 9", url: "https://youtube.com/shorts/sPetMNcxZyM?feature=share" },
  { title: "Video 10", url: "https://youtube.com/shorts/U2nelBsMTjc?feature=share" },
  { title: "Video 11", url: "https://youtube.com/shorts/70-2hVs4bjc?feature=share" },
  { title: "Video 12", url: "https://youtube.com/shorts/YiTnz1Wwpag?feature=share" },
  { title: "Video 13", url: "https://youtu.be/JarOGjXFoFI" },
  { title: "Video 14", url: "https://youtu.be/HcRontKNSvs" },
  { title: "Video 15", url: "https://youtu.be/wrfjIQa5_3I" },
  { title: "Video 16", url: "https://youtu.be/L8ZYmFpUtco" },
];

function toEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    const withParams = (videoId) => {
      const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",
        playsinline: "1",
        rel: "0",
        modestbranding: "1",
        controls: "0",
        showinfo: "0",
        iv_load_policy: "3",
      });

      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    };

    if (host === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      return videoId ? withParams(videoId) : "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const videoId = parsed.searchParams.get("v");
        return videoId ? withParams(videoId) : "";
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        const videoId = parsed.pathname.split("/")[2];
        return videoId ? withParams(videoId) : "";
      }

      if (parsed.pathname.startsWith("/embed/")) {
        const videoId = parsed.pathname.split("/")[2];
        return videoId ? withParams(videoId) : "";
      }
    }
  } catch {
    return "";
  }

  return "";
}

const embeddedVideos = youtubeVideos.map((video) => ({
  ...video,
  src: toEmbedUrl(video.url),
}));

const heroVideo = embeddedVideos[0];
const stackVideos = embeddedVideos.slice(1, 6).map((video, index) => ({
  ...video,
  label: `Client ${index + 1}`,
}));

const shortVideos = embeddedVideos.slice(6, 12).map((video, index) => ({
  ...video,
  label: `Short ${index + 1}`,
}));

const longVideos = embeddedVideos.slice(12, 16).map((video, index) => ({
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

const slideUpSoft = {
  hidden: { opacity: 0, y: 42, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -36, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 36, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
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

function VideoBox({ className, label, src, vertical = false, motionVariant = slideUpSoft }) {
  return (
    <motion.div
      className={`video-box ${className}${vertical ? " vertical" : ""}`}
      variants={motionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="video-screen">
        <iframe
          className="media-video"
          src={src}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="video-overlay-top">
          <span className="video-pill">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <div className="brand">ReloMedia</div>
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
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <div className="hero-image">
                <iframe
                  className="hero-video"
                  src={heroVideo.src}
                  title={heroVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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

            <motion.div
              className="vertical-stack"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {stackVideos.map((video, index) => (
                <VideoBox
                  key={video.src}
                  className={`vertical-art-${index + 1}`}
                  label={video.label}
                  src={video.src}
                  vertical
                  motionVariant={slideInRight}
                />
              ))}
            </motion.div>
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
              {shortVideos.map((video, index) => (
                <motion.div
                  key={video.src}
                  className="short-example"
                  variants={index % 2 === 0 ? slideInLeft : slideUpSoft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <VideoBox
                    className={`short-preview short-preview-${(index % 6) + 1}`}
                    label={video.label}
                    src={video.src}
                    vertical
                    motionVariant={index % 2 === 0 ? slideInLeft : slideUpSoft}
                  />
                </motion.div>
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
              {longVideos.map((video, index) => (
                <motion.div
                  key={video.src}
                  className="long-example"
                  variants={index % 2 === 0 ? slideInRight : slideUpSoft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <VideoBox
                    className={`long-preview long-preview-${(index % 6) + 1}`}
                    label={video.label}
                    src={video.src}
                    motionVariant={index % 2 === 0 ? slideInRight : slideUpSoft}
                  />
                </motion.div>
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
