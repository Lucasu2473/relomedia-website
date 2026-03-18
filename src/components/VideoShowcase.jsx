import { motion } from "framer-motion";

const videos = [
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

const sectionStyle = {
  padding: "32px 0 88px",
  background:
    "radial-gradient(circle at top center, rgba(255,255,255,0.06), transparent 26%), linear-gradient(180deg, #050505 0%, #030303 100%)",
};

const containerStyle = {
  width: "min(1200px, calc(100vw - 48px))",
  margin: "0 auto",
};

const headingStyle = {
  margin: "0 0 14px",
  textAlign: "center",
  color: "#f7f3eb",
  fontFamily: "\"Instrument Sans\", sans-serif",
  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.05em",
};

const introStyle = {
  maxWidth: "760px",
  margin: "0 auto 34px",
  textAlign: "center",
  color: "rgba(242, 239, 232, 0.74)",
  fontSize: "1.02rem",
  lineHeight: 1.6,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "22px",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  padding: "14px",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04)), rgba(255,255,255,0.04)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.42)",
  overflow: "hidden",
};

const frameStyle = {
  position: "relative",
  width: "100%",
  paddingTop: "177.78%",
  overflow: "hidden",
  borderRadius: "18px",
  background: "#000",
};

const iframeStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  border: 0,
};

const titleStyle = {
  margin: 0,
  color: "#f2efe8",
  fontFamily: "\"Instrument Sans\", sans-serif",
  fontSize: "1rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

function toEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const videoId = parsed.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        const videoId = parsed.pathname.split("/")[2];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }
  } catch {
    return "";
  }

  return "";
}

function VideoShowcase() {
  const visibleVideos = videos
    .slice(0, 16)
    .map((video) => ({ ...video, embedUrl: toEmbedUrl(video.url) }))
    .filter((video) => video.embedUrl);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Video Showcase
        </motion.h2>
        <motion.p
          style={introStyle}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Swap any title or link in the array above and the section will automatically convert
          YouTube watch, short, and share URLs into embeds.
        </motion.p>

        <div style={gridStyle}>
          {visibleVideos.map((video, index) => (
            <motion.article
              key={`${video.title}-${index}`}
              style={cardStyle}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={frameStyle}>
                <iframe
                  style={iframeStyle}
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p style={titleStyle}>{video.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
