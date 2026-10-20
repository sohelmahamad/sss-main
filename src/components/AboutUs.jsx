import React, { Fragment } from 'react'
import './AboutUs.css'

/* ------------------------------------------------------------------
   OPTIONAL: put your own office photo here (import or URL).
   e.g.  import officePhoto from '../assets/office.jpg'
         const OFFICE_IMAGE = officePhoto
   If left empty, a built-in illustration is shown instead.
------------------------------------------------------------------- */
const OFFICE_IMAGE = ''

/* ------------------------- Icons (inline SVG, no dependency) ------------------------- */
const ICONS = {
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  eye: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8" />
    </>
  ),
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  headset: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  chevron: <path d="M9 6l6 6-6 6" />,
}

function Icon({ name, className = '' }) {
  return (
    <svg
      className={`au-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/* ------------------------- Hero illustration (inline SVG) ------------------------- */
function HeroIllustration() {
  return (
    <svg className="au-hero-svg" viewBox="0 0 520 420" role="img" aria-label="Isometric technology illustration">
      <defs>
        <linearGradient id="auPlat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ECE9FF" />
          <stop offset="1" stopColor="#D9D3FF" />
        </linearGradient>
        <linearGradient id="auScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4B3FD1" />
          <stop offset="1" stopColor="#2A2488" />
        </linearGradient>
        <linearGradient id="auBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F2FF" />
          <stop offset="1" stopColor="#CFC8FA" />
        </linearGradient>
        <linearGradient id="auOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFB347" />
          <stop offset="1" stopColor="#F26A0F" />
        </linearGradient>
        <linearGradient id="auIndigo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8F83FF" />
          <stop offset="1" stopColor="#4B3FD1" />
        </linearGradient>
      </defs>

      {/* circuit lines */}
      <g stroke="#B9B0FF" strokeWidth="1.4" fill="none" opacity=".85">
        <path d="M30 250 L150 320 L260 385 L400 305" />
        <path d="M70 215 L190 285 L300 350 L470 250" />
        <path d="M150 320 L150 262" />
        <path d="M400 305 L470 262 L470 190" />
        <path d="M60 300 L120 335" />
      </g>

      {/* platform */}
      <path d="M260 215 L455 325 L260 410 L65 325 Z" fill="url(#auPlat)" opacity=".75" />
      <path d="M260 235 L430 322 L260 388 L90 322 Z" fill="#fff" opacity=".7" />

      {/* laptop base */}
      <path d="M170 300 L265 255 L375 305 L280 355 Z" fill="url(#auBase)" stroke="#C4BCF7" />
      {/* keyboard keys */}
      <g fill="#8C82E8" opacity=".75">
        <path d="M210 296 l10 -5 l10 5 l-10 5z" />
        <path d="M235 285 l10 -5 l10 5 l-10 5z" />
        <path d="M260 274 l10 -5 l10 5 l-10 5z" />
        <path d="M232 309 l10 -5 l10 5 l-10 5z" />
        <path d="M257 298 l10 -5 l10 5 l-10 5z" />
        <path d="M282 287 l10 -5 l10 5 l-10 5z" />
        <path d="M254 322 l10 -5 l10 5 l-10 5z" />
        <path d="M279 311 l10 -5 l10 5 l-10 5z" />
        <path d="M304 300 l10 -5 l10 5 l-10 5z" />
      </g>
      {/* laptop screen */}
      <path d="M180 292 L172 150 L318 100 L330 245 Z" fill="url(#auScreen)" stroke="#2A2488" />
      <g stroke="#9DA7FF" strokeWidth="2.4" strokeLinecap="round" opacity=".9">
        <path d="M200 160 L246 145" />
        <path d="M208 180 L270 160" stroke="#FFB347" />
        <path d="M212 200 L252 187" />
        <path d="M216 220 L286 197" />
        <path d="M220 240 L262 227" stroke="#FFB347" />
      </g>

      {/* cloud */}
      <g className="au-float au-float-a">
        <path d="M312 70 a22 22 0 0 1 42 -6 a20 20 0 0 1 8 38 h-48 a18 18 0 0 1 -2 -32z" fill="url(#auIndigo)" />
        <path d="M312 70 a22 22 0 0 1 42 -6 a20 20 0 0 1 8 38 h-48 a18 18 0 0 1 -2 -32z" fill="#fff" opacity=".18" />
        <path d="M338 82 v18 M331 90 l7 -8 l7 8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* server stack */}
      <g className="au-float au-float-b">
        <path d="M425 125 l45 -22 l45 22 v22 l-45 22 l-45 -22z" fill="url(#auIndigo)" />
        <path d="M425 147 l45 22 l45 -22 v22 l-45 22 l-45 -22z" fill="#6A5DE8" />
        <path d="M425 169 l45 22 l45 -22 v22 l-45 22 l-45 -22z" fill="#4B3FD1" />
        <circle cx="470" cy="131" r="3" fill="#fff" opacity=".8" />
      </g>

      {/* shield */}
      <g className="au-float au-float-c">
        <path d="M440 245 l30 -14 l30 14 v26 c0 20 -16 32 -30 40 c-14 -8 -30 -20 -30 -40z" fill="#E7E3FF" stroke="#A89FFF" />
        <path d="M455 268 l12 12 l20 -22" stroke="#4B3FD1" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* cube (orange) */}
      <g className="au-float au-float-b">
        <path d="M150 115 l26 -13 l26 13 v28 l-26 13 l-26 -13z" fill="url(#auIndigo)" />
        <path d="M150 115 l26 13 l26 -13 M176 128 v28" stroke="#fff" strokeOpacity=".35" fill="none" />
        <circle cx="176" cy="132" r="9" fill="url(#auOrange)" />
      </g>

      {/* chart cube */}
      <g className="au-float au-float-a">
        <path d="M85 150 l26 -13 l26 13 v26 l-26 13 l-26 -13z" fill="#fff" stroke="#C4BCF7" />
        <circle cx="111" cy="158" r="11" fill="url(#auOrange)" />
        <path d="M111 158 v-11 a11 11 0 0 1 10 6z" fill="#4B3FD1" />
      </g>

      {/* bar chart tile */}
      <g>
        <path d="M130 290 l30 15 l-30 15 l-30 -15z" fill="#EEEAFF" />
        <rect x="110" y="272" width="7" height="30" fill="url(#auIndigo)" />
        <rect x="121" y="262" width="7" height="40" fill="url(#auIndigo)" />
        <rect x="132" y="278" width="7" height="24" fill="url(#auOrange)" />
      </g>

      {/* dots */}
      <g fill="#6A5DE8">
        <circle cx="60" cy="215" r="4" />
        <circle cx="500" cy="185" r="4" />
        <circle cx="240" cy="62" r="3" />
        <circle cx="395" cy="40" r="3" />
        <circle cx="105" cy="110" r="3" />
      </g>
      <circle cx="470" cy="262" r="4" fill="#F37A1F" />
    </svg>
  )
}

/* ------------------------- Office scene (used if no photo supplied) ------------------------- */
function OfficeScene() {
  return (
    <svg className="au-office-svg" viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="auWall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8EA2D8" />
          <stop offset="1" stopColor="#5B5FC7" />
        </linearGradient>
        <linearGradient id="auDesk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9C7B3" />
          <stop offset="1" stopColor="#B89F86" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#auWall)" />
      {/* blurred window lights */}
      <g fill="#fff" opacity=".35">
        <circle cx="90" cy="70" r="26" />
        <circle cx="160" cy="48" r="16" />
        <circle cx="240" cy="90" r="22" />
        <circle cx="60" cy="150" r="18" />
        <circle cx="300" cy="40" r="12" />
      </g>
      <rect x="0" y="120" width="190" height="150" fill="#fff" opacity=".12" />
      {/* desk */}
      <path d="M0 300 L640 270 V420 H0Z" fill="url(#auDesk)" />
      {/* laptop */}
      <path d="M95 300 L330 288 L400 330 L150 352Z" fill="#2B2F44" />
      <path d="M150 300 L120 150 L330 130 L345 288Z" fill="#14172B" />
      <path d="M160 285 L135 165 L318 148 L330 275Z" fill="#232C5C" opacity=".9" />
      {/* plant */}
      <path d="M385 300 h50 l-6 50 h-38z" fill="#6E5A8E" />
      <g fill="#3E8E5A">
        <ellipse cx="410" cy="268" rx="12" ry="32" transform="rotate(-25 410 268)" />
        <ellipse cx="425" cy="262" rx="11" ry="30" transform="rotate(20 425 262)" />
        <ellipse cx="410" cy="255" rx="10" ry="30" />
      </g>
      {/* mug */}
      <path d="M520 300 h62 v52 a12 12 0 0 1 -12 12 h-38 a12 12 0 0 1 -12 -12z" fill="#3F3A8C" />
      <path d="M582 312 a16 16 0 0 1 0 34" stroke="#3F3A8C" strokeWidth="8" fill="none" />
      <ellipse cx="551" cy="300" rx="31" ry="7" fill="#2B2670" />
    </svg>
  )
}

/* ------------------------- Content ------------------------- */
const highlights = [
  { icon: 'calendar', title: 'Since 2020', label: 'Building digital solutions', tone: 'orange' },
  { icon: 'grid', title: '500+', label: 'Projects Delivered', tone: 'indigo' },
  { icon: 'users', title: '200+', label: 'Happy Clients', tone: 'orange' },
  { icon: 'globe', title: 'Multi-industry', label: 'Expertise', tone: 'indigo' },
]

const values = [
  { icon: 'bulb', title: 'Innovation', text: 'We embrace new ideas, modern technologies and creative solutions to solve real problems.' },
  { icon: 'shield', title: 'Integrity', text: "We do what's right, always. Honesty and transparency are the foundation of our work." },
  { icon: 'star', title: 'Excellence', text: 'We strive for the highest standards in everything we do, from code to customer service.' },
  { icon: 'users', title: 'Customer Focus', text: "Our clients' success is our success. We listen, understand and build solutions that truly fit." },
  { icon: 'users', title: 'Collaboration', text: 'We believe in the power of teamwork — with our clients, partners and each other.' },
  { icon: 'book', title: 'Continuous Learning', text: 'We stay curious, keep learning and evolve with the changing technology landscape.' },
]

const reasons = [
  { icon: 'target', title: 'Tailored Solutions', text: 'Custom-built solutions for your unique business needs.' },
  { icon: 'message', title: 'Transparent Collaboration', text: 'Clear communication, no hidden costs.' },
  { icon: 'shield', title: 'Quality-First Delivery', text: 'Clean code, high performance, lasting results.' },
  { icon: 'heart', title: 'Long-Term Partnership', text: 'We grow when you grow.' },
]

const steps = [
  { icon: 'search', title: 'Discover', text: 'Understand your goals, needs and challenges.' },
  { icon: 'file', title: 'Strategize', text: 'Plan the right approach for maximum impact.' },
  { icon: 'code', title: 'Build', text: 'Develop, test and deliver with precision.' },
  { icon: 'headset', title: 'Support', text: 'Stay with you, always for long-term success.' },
]

const impact = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '200+', label: 'Happy Clients' },
  { number: 'Multi', label: 'Industry Expertise' },
]

/* ------------------------- Page ------------------------- */
function AboutUs() {
  return (
    <div className="au-page">
      {/* ===== HERO ===== */}
      <section className="au-hero">
        <div className="au-container au-hero-grid">
          <div className="au-hero-copy">
            <span className="au-eyebrow">About Us</span>
            <h1>
              Technology That Moves
              <br />
              Your Business Forward
            </h1>
            <p>
              We build innovative digital solutions that help businesses grow, scale and stay ahead in a
              constantly changing world.
            </p>
            
            <div className="au-btn-row">
              <a  className="au-btn au-btn-primary">
                Explore Our Services <Icon name="arrow" className="au-btn-icon" />
              </a>
              <a  className="au-btn au-btn-outline-indigo">
                Meet Our Team
              </a>
            </div>
          </div>
          <div className="au-hero-art">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHT STRIP ===== */}
      <section className="au-strip">
        <div className="au-container au-strip-grid">
          {highlights.map((h) => (
            <div className="au-strip-item" key={h.title}>
              <Icon name={h.icon} className={`au-ic-lg au-tone-${h.tone}`} />
              <div>
                <strong>{h.title}</strong>
                <span>{h.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="au-section au-story">
        <div className="au-container au-story-grid">
          <div className="au-story-copy">
            <span className="au-eyebrow">Our Story</span>
            <h2>
              From a Simple Idea to a
              <br className="au-br-desktop" /> Trusted Technology Partner
            </h2>
            <p>
              SSS Technologies was founded in 2020 with a clear vision — to help businesses leverage
              technology for sustainable growth. What started as a small team with a big dream has grown
              into a trusted technology partner for clients across multiple industries.
            </p>
            <p>
              Today, we combine technical expertise, creative thinking and a customer-first approach to
              deliver solutions that make a real impact.
            </p>
            <a href="#Contact" className="au-btn au-btn-outline-orange au-btn-sm">
              Learn More <Icon name="arrow" className="au-btn-icon" />
            </a>
          </div>

          <figure
            className="au-story-visual"
            style={OFFICE_IMAGE ? { backgroundImage: `url(${OFFICE_IMAGE})` } : undefined}
          >
            {!OFFICE_IMAGE && <OfficeScene />}
            <div className="au-story-overlay" />
            <figcaption>
              Better
              <br />
              Technology
              <br />
              Brighter
              <br />
              Future
              <i />
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="au-section au-mv">
        <div className="au-container au-mv-grid">
          <article className="au-card au-mv-card">
            <div className="au-mv-icon">
              <Icon name="rocket" />
            </div>
            <div className="au-mv-body">
              <h3>Our Mission</h3>
              <i className="au-bar" />
              <p>
                To deliver innovative, reliable and scalable technology solutions that empower businesses to
                achieve their goals and create lasting value for their customers.
              </p>
            </div>
          </article>

          <article className="au-card au-mv-card">
            <div className="au-mv-icon">
              <Icon name="eye" />
            </div>
            <div className="au-mv-body">
              <h3>Our Vision</h3>
              <i className="au-bar" />
              <p>
                To be a globally recognized technology partner, known for our expertise, innovation and
                commitment to helping businesses build a smarter, more digital future.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="au-section au-values">
        <div className="au-container">
          <header className="au-head au-head-center">
            <span className="au-eyebrow">Our Core Values</span>
            <h2>The Values That Drive Us</h2>
            <p>Our core values guide our decisions, shape our culture and define the way we work with our clients.</p>
          </header>

          <div className="au-values-grid">
            {values.map((v) => (
              <article className="au-card au-value" key={v.title}>
                <Icon name={v.icon} className="au-ic-md au-tone-orange" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="au-section au-why">
        <div className="au-container">
          <header className="au-head">
            <span className="au-eyebrow">Why Businesses Choose Us</span>
            <h2>More Than Just a Service Provider</h2>
            <p>We&apos;re a long-term partner in your growth journey. Here&apos;s what sets us apart.</p>
          </header>

          <div className="au-why-grid">
            {reasons.map((r) => (
              <div className="au-why-item" key={r.title}>
                <Icon name={r.icon} className="au-ic-md au-tone-orange" />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="au-section au-process">
        <div className="au-container">
          <header className="au-head">
            <span className="au-eyebrow">Our Process</span>
            <h2>Simple Steps. Powerful Results.</h2>
            <p>We follow a streamlined process to turn your ideas into successful digital solutions.</p>
          </header>

          <div className="au-steps">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="au-step">
                  <span className="au-step-icon">
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < steps.length - 1 && <Icon name="chevron" className="au-step-arrow" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="au-impact">
        <div className="au-container au-impact-grid">
          <div className="au-impact-copy">
            <span className="au-eyebrow au-eyebrow-light">Our Impact</span>
            <h2>Turning Ideas Into Real Results</h2>
            <p>Our work speaks for itself. Here&apos;s a snapshot of the impact we&apos;ve created together with our clients.</p>
          </div>
          <div className="au-impact-stats">
            {impact.map((s) => (
              <div className="au-impact-stat" key={s.label}>
                <strong>{s.number}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs