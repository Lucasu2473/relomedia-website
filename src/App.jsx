function App() {
  return (
    <main className="blank-page" aria-label="ReloMedia homepage">
      <a className="brand" href="/" aria-label="ReloMedia home">
        <span className="brand-mark">
          <img src="/favicon.png" alt="" />
        </span>
        <span>relomedia</span>
      </a>
      <a className="top-cta" href="https://calendly.com/relo-media/new-meeting" target="_blank" rel="noreferrer">
        Talk to us
      </a>
      <section className="hero">
        <h1>Custom Revenue Programs Built in Days</h1>
        <p>Done-For-You Sales Trackers, Dashboards & Automations That 10x Your Pipeline for High-Ticket Coaches & Consultants</p>
        <section className="demo-collage" aria-label="DRTRACKER sales tracker screenshots">
          <img className="desktop-shot shot-left" src="/demos/drtracker-social.png" alt="DRTRACKER social media analytics dashboard" />
          <img className="desktop-shot shot-center" src="/demos/drtracker-sales.png" alt="DRTRACKER sales dashboard" />
          <img className="desktop-shot shot-right" src="/demos/drtracker-stats.png" alt="DRTRACKER overall stats dashboard" />
        </section>
        <section className="primelife-showcase" aria-label="PrimeLife program screenshots">
          <div className="primelife-phone-row">
            <img src="/demos/primelife-home.png" alt="PrimeLife home dashboard" />
            <img src="/demos/primelife-nutrition.png" alt="PrimeLife nutrition tracker" />
            <img src="/demos/primelife-progress.png" alt="PrimeLife progress dashboard" />
            <img src="/demos/primelife-workout.png" alt="PrimeLife workout builder" />
            <img src="/demos/primelife-coach.png" alt="PrimeLife coach chat" />
          </div>
        </section>
        <a className="main-cta" href="https://calendly.com/relo-media/new-meeting" target="_blank" rel="noreferrer">
          Talk to us
        </a>
        <section className="process-section" aria-label="How it works">
          <article>
            <span>1</span>
            <div>
              <h2>Book Your Discovery Call</h2>
              <p>Jump on a quick call with us. We'll learn your exact sales process and show you what a custom revenue program can do for your business.</p>
            </div>
          </article>
          <article>
            <span>2</span>
            <div>
              <h2>We Build It For You</h2>
              <p>Done-for-you. We create your custom sales tracker, dashboard, automations, and anything else you need - built fast in days, not weeks.</p>
            </div>
          </article>
          <article>
            <span>3</span>
            <div>
              <h2>Launch & Scale</h2>
              <p>You get your program live + 30 days of unlimited tweaks and priority support. Watch your pipeline 10x while we handle everything.</p>
            </div>
          </article>
        </section>
        <section className="testimonials-section" aria-label="Testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-frame" />
        </section>
      </section>
    </main>
  );
}

export default App;
