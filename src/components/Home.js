import React from 'react';
import "../css/Home.scss";
import Gallery from './Gallery';
import Workplaces from './Workplaces';
import Events from './Events';
import About from './About';
import Testimonial from './Testimonial';
import Executive from './Executive';
import ContactUs from './ContactUs';
import CountUp from "react-countup";

/*
  WAVE DIVIDER — RULES:
  ─────────────────────────────────────────────────────────────────────
  • wrapper div background  = 'above' colour  (section above the wave)
  • SVG path fill           = 'below' colour  (section below the wave)
  • Path MUST close at y=height (bottom edge) — NOT at y=0 (top edge).
    Closing at y=0 fills the TOP with 'below' colour, which is backward.
  ─────────────────────────────────────────────────────────────────────

  Proven paths (both fill the BOTTOM half with 'below' colour):

  Normal  — S-wave: dips down at left-center, rises up at right-center
    M0,mid  C360,h    1080,0    1440,mid  L1440,h  L0,h  Z

  Flipped — S-wave: rises up at left-center, dips down at right-center
    M0,mid  C360,0    1080,h    1440,mid  L1440,h  L0,h  Z

  Both start/end at mid-height on the left/right edges, creating a
  symmetric wave where the upper half shows 'above' and the lower
  half shows 'below'.
*/
function Wave({ above = "#111827", below = "#fdfcf9", flip = false, height = 80 }) {
  const h   = height;
  const mid = Math.round(h / 2);

  const path = flip
    ? `M0,${mid} C360,0 1080,${h} 1440,${mid} L1440,${h} L0,${h} Z`
    : `M0,${mid} C360,${h} 1080,0 1440,${mid} L1440,${h} L0,${h} Z`;

  return (
    <div style={{ background: above, lineHeight: 0, fontSize: 0, display: "block", overflow: "hidden", margin: 0, padding: 0 }}>
      <svg
        viewBox={`0 0 1440 ${h}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ display: "block", width: "100%", height: `${h}px` }}
      >
        <path d={path} fill={below} />
      </svg>
    </div>
  );
}

function Home() {
  const stats = [
    { value: 20,  suffix: "+", label: "Years of Service"  },
    { value: 500, suffix: "+", label: "Children Impacted" },
    { value: 120, suffix: "+", label: "Volunteers"        },
    { value: 8,   suffix: "",  label: "Workplaces"        },
    { value: 50,  suffix: "+", label: "Events Conducted"  },
  ];

  /* ── Colour palette ─────────────────────────────────────────
     Keep these in sync with each section's own CSS background.
     Mismatches create visible colour seams at the wave edges.
  ─────────────────────────────────────────────────────────── */
  const C = {
    hero:        "#111827",  // Gallery dark bg
    cream:       "#fdfcf9",  // Stats, Workplaces, About, Contact
    eventBg:     "#0a1628",  // Events dark bg
    execBg:      "#1f2937",  // Executives dark bg
    testimonial: "#162032",  // Testimonial dark bg
  };

  return (
    <div className="home">

      {/* ── Hero ── */}
      <Gallery />

      {/* hero → stats   (dark → cream)  flip so wave rises on left */}
      <Wave above={C.hero} below={C.cream} flip height={88} />

      {/* ── Stats ── */}
      <section id="stats" className="stats-section-wrap" style={{ background: C.cream }}>
        <div className="stats-inner page-section">
          <div className="stats_intro reveal">
            <span className="section-eyebrow">Impact at a glance</span>
            <h2 className="section-heading">Measured in lives, not just numbers.</h2>
            <p className="section-copy">
              AASRA's work grows through consistent volunteering, long-term workplace
              relationships, and small moments that compound into lasting change.
            </p>
          </div>
          <div className="stats_grid">
            {stats.map((item, idx) => (
              <article
                className={`stat_card premium-card reveal delay-${idx + 1}`}
                key={item.label}
              >
                <div className="stat_value">
                  <CountUp end={item.value} duration={1.8} enableScrollSpy scrollSpyOnce />
                  <span>{item.suffix}</span>
                </div>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workplaces (same cream bg — no wave needed, seamless) ── */}
      <div id="workplaces" style={{ background: C.cream }}>
        <Workplaces />
      </div>

      {/* workplaces → events  (cream → dark)  normal S-wave */}
      <Wave above={C.cream} below={C.eventBg} height={88} />

      {/* ── Events ── */}
      <div id="events" style={{ background: C.eventBg }}>
        <Events />
      </div>

      {/* events → about  (dark → cream)  flip */}
      <Wave above={C.eventBg} below={C.cream} flip height={88} />

      {/* ── About ── */}
      <div id="about" style={{ background: C.cream }}>
        <About />
      </div>

      {/* about → executives  (cream → navy)  normal */}
      <Wave above={C.cream} below={C.execBg} height={72} />

      {/* ── Executives ── */}
      <div id="executives" style={{ background: C.execBg }}>
        <Executive />
      </div>

      {/* executives → testimonial  (navy → deep navy)  flip */}
      <Wave above={C.execBg} below={C.testimonial} flip height={56} />

      {/* ── Testimonials ── */}
      <div style={{ background: C.testimonial }}>
        <Testimonial />
      </div>

      {/* testimonial → contact  (deep navy → cream)  normal */}
      <Wave above={C.testimonial} below={C.cream} height={88} />

      {/* ── Contact ── */}
      <div id="contact" style={{ background: C.cream }}>
        <ContactUs />
      </div>

    </div>
  );
}

export default Home;