import { motion } from "framer-motion";

const videos = [
  { title: "Video 1", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/1.mp4" },
  { title: "Video 2", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/2.MP4" },
  { title: "Video 3", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/3.MP4" },
  { title: "Video 4", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/4.MOV" },
  { title: "Video 5", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/5.mp4" },
  { title: "Video 6", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/6.mp4" },
  { title: "Video 7", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/7.mp4" },
  { title: "Video 8", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/8.mp4" },
  { title: "Video 9", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/9.mp4" },
  { title: "Video 10", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/10.mp4" },
  { title: "Video 11", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/11.mp4" },
  { title: "Video 12", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/12.mp4" },
  { title: "Video 13", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/13.mp4" },
  { title: "Video 14", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/14.mp4" },
  { title: "Video 15", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/15.mp4" },
  { title: "Video 16", url: "https://auth.primelife.one/storage/v1/object/public/relomedia-videos/16.mp4" },
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

const titleStyle = {
  margin: 0,
  color: "#f2efe8",
  fontFamily: "\"Instrument Sans\", sans-serif",
  fontSize: "1rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

function VideoShowcase() {
  const visibleVideos = videos.filter((video) => video.url.trim()).slice(0, 16);

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
          Swap any title or link in the array above and the section will automatically render your
          Supabase-hosted videos.
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
              <video
                controls
                preload="metadata"
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <source src={video.url} type="video/mp4" />
              </video>
              <p style={titleStyle}>{video.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
