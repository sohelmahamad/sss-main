import React from 'react'
import './WhoWeAre.css'

import heroImg from '../images/who-we-are-hero.png'
import teamImg from '../images/team-illustration.png'

const HERO_IMG = heroImg
const TEAM_IMG = teamImg

/* ---------- Tiny inline icon set (no extra packages needed) ---------- */
const ICONS = {
  code: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  palette: (<><circle cx="13.5" cy="6.5" r=".6" /><circle cx="17.5" cy="10.5" r=".6" /><circle cx="8.5" cy="7.5" r=".6" /><circle cx="6.5" cy="12.5" r=".6" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z" /></>),
  shield: (<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />),
  users: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  star: (<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />),
  globe: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
  trending: (<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>),
  scale: (<><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></>),
  bulb: (<><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>),
  cog: (<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>),
  rocket: (<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>),
  arrow: (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
}

function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/* ---------- Content ---------- */
const stats = [
  { icon: 'users', value: '50+', label: 'Team Members' },
  { icon: 'star', value: '5+', label: 'Years of Average Experience' },
  { icon: 'globe', value: '100%', label: 'Committed to Your Success' },
]

const departments = [
  {
    icon: 'code',
    tone: 'orange',
    title: 'Development Team',
    text: 'We build scalable, high-performance web and mobile applications using the latest technologies and best practices.',
  },
  {
    icon: 'palette',
    tone: 'indigo',
    title: 'Design Team',
    text: 'We create intuitive and visually stunning experiences that bring ideas to life and keep users engaged.',
  },
  {
    icon: 'shield',
    tone: 'violet',
    title: 'Security Team',
    text: 'We ensure your data, systems and users are protected with robust security measures and proactive monitoring.',
  },
]

const culture = [
  {
    icon: 'trending',
    tone: 'green',
    title: 'Growth Mindset',
    text: 'We embrace change, learn continuously and seek new opportunities to grow — individually and as a team.',
  },
  {
    icon: 'users',
    tone: 'orange',
    title: 'Collaboration',
    text: 'We believe in open communication, shared ideas and collective success.',
  },
  {
    icon: 'scale',
    tone: 'blue',
    title: 'Work-Life Balance',
    text: 'We value well-being and flexibility, because great work happens when people feel their best.',
  },
  {
    icon: 'users',
    tone: 'purple',
    title: 'Diversity & Inclusion',
    text: 'We celebrate different backgrounds, perspectives and experiences. Together we build a stronger team.',
  },
]

const steps = [
  {
    icon: 'bulb',
    tone: 'orange',
    title: '1. Share Ideas',
    text: 'We listen, understand your goals and turn ideas into a clear plan.',
  },
  {
    icon: 'cog',
    tone: 'purple',
    title: '2. Build Together',
    text: 'Our teams collaborate, iterate and bring your vision to life.',
  },
  {
    icon: 'rocket',
    tone: 'green',
    title: '3. Deliver Impact',
    text: 'We test, optimize and launch solutions that create real business value.',
  },
]

const hideOnError = (e) => {
  e.currentTarget.style.display = 'none'
}

/* ---------- Page ---------- */
function WhoWeAre() {
  return (
    <div className="wwa">
      {/* ============ HERO ============ */}
      <section className="wwa-hero">
        <div className="wwa-blob" aria-hidden="true" />
        <div className="wwa-container wwa-hero__grid">
          <div className="wwa-hero__text">
            <span className="wwa-eyebrow">Who We Are</span>
            <h1>Who We Are</h1>
            <h2 className="wwa-hero__sub">Meet the Team Behind TechSolutions</h2>
            <span className="wwa-hero__rule" aria-hidden="true" />
            <p>
              We&apos;re a passionate team of technology experts, designers, creatives and
              problem solvers, working together to build innovative digital solutions for a
              better tomorrow.
            </p>
          </div>

          <div className="wwa-hero__media">
            <img src={HERO_IMG} alt="Our team collaborating around a table" onError={hideOnError} />
          </div>
        </div>
      </section>

      {/* ============ OUR TEAM ============ */}
      <section className="wwa-team">
        <div className="wwa-container wwa-team__grid">
          <div className="wwa-team__text">
            <span className="wwa-eyebrow">Our Team</span>
            <h2 className="wwa-title wwa-title--left">A Diverse Team of Experts</h2>
            <p>
              Our strength lies in our people. We are a diverse mix of skilled professionals,
              each bringing unique perspectives, creativity and expertise to help our clients
              succeed. Together, we turn ideas into impactful digital experiences.
            </p>

            <ul className="wwa-stats">
              {stats.map((s) => (
                <li className="wwa-stat" key={s.label}>
                  <span className="wwa-stat__icon"><Icon name={s.icon} size={26} /></span>
                  <div>
                    <strong>{s.value}</strong>
                    <small>{s.label}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="wwa-team__media">
            <img src={TEAM_IMG} alt="Illustration of our team at work" onError={hideOnError} />
          </div>
        </div>
      </section>

      {/* ============ DEPARTMENTS ============ */}
      <section className="wwa-section">
        <div className="wwa-container">
          <header className="wwa-head">
            <span className="wwa-bar" aria-hidden="true" />
            <h2 className="wwa-title">Our Departments</h2>
            <p>Specialized teams. One common goal — delivering exceptional solutions.</p>
          </header>

          <div className="wwa-grid wwa-grid--3">
            {departments.map((d) => (
              <article className={`wwa-card wwa-card--dept tone-${d.tone}`} key={d.title}>
                <span className="wwa-icon wwa-icon--round"><Icon name={d.icon} size={26} /></span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <a href="#contact" className="wwa-link">
                  <Icon name="arrow" size={16} /> Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CULTURE ============ */}
      <section className="wwa-section">
        <div className="wwa-container">
          <header className="wwa-head">
            <span className="wwa-bar" aria-hidden="true" />
            <h2 className="wwa-title">Our Culture</h2>
            <p>Our values shape our work, our relationships and our future.</p>
          </header>

          <div className="wwa-grid wwa-grid--4">
            {culture.map((c) => (
              <article className={`wwa-card wwa-card--culture tone-${c.tone}`} key={c.title}>
                <span className="wwa-icon"><Icon name={c.icon} size={34} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="wwa-section">
        <div className="wwa-container">
          <header className="wwa-head">
            <span className="wwa-bar" aria-hidden="true" />
            <h2 className="wwa-title">How We Work Together</h2>
            <p>A simple process. Powerful results.</p>
          </header>

          <div className="wwa-steps">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <article className={`wwa-step tone-${s.tone}`}>
                  <span className="wwa-icon wwa-icon--ring"><Icon name={s.icon} size={28} /></span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </article>
                {i < steps.length - 1 && (
                  <span className="wwa-step__arrow" aria-hidden="true">
                    <Icon name="arrow" size={20} />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="wwa-cta-wrap">
        <div className="wwa-container">
          <div className="wwa-cta">
            <div className="wwa-cta__text">
              <span className="wwa-eyebrow wwa-eyebrow--light">Join Our Team</span>
              <h2>Great People Build Great Technology</h2>
              <p>Be a part of a team that values innovation, growth and impact.</p>
            </div>
            <a href="#careers" className="wwa-btn">
              Explore Careers <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre