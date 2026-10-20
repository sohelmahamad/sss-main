import React from 'react'
import './Career.css'
import heroImg from '../images/career-hero.png'

/* ---------- Tiny inline icon set (no extra packages needed) ---------- */
const ICONS = {
  arrow: (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
  grad: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></>),
  home: (<><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>),
  growth: (<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>),
  code: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  cloud: (<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 0 1 0 9z" />),
  pen: (<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
  shield: (<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />),
  db: (<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>),
  users: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  pin: (<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>),
  briefcase: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 13h20" /></>),
  rocket: (<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>),
}

function Icon({ name, size = 22 }) {
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
const perks = [
  {
    icon: 'grad',
    tone: 'navy',
    title: 'Learning Budget',
    text: 'Annual budget for courses, conferences, and professional development.',
  },
  {
    icon: 'home',
    tone: 'orange',
    title: 'Remote Options',
    text: 'Flexible work arrangements including remote and hybrid options.',
  },
  {
    icon: 'growth',
    tone: 'navy',
    title: 'Career Growth',
    text: 'Clear career paths with mentorship and advancement opportunities.',
  },
]

const jobs = [
  { icon: 'code', tone: 'navy', title: 'Senior Full Stack Developer', dept: 'Engineering', location: 'Bengalore , whitefeild', type: 'Full-time' },
  { icon: 'cloud', tone: 'orange', title: 'DevOps Engineer', dept: 'Infrastructure', location: 'Bengalore , whitefeild', type: 'Full-time' },
  { icon: 'pen', tone: 'navy', title: 'UI/UX Designer', dept: 'Design', location: 'Bengalore , whitefeild', type: 'Full-time' },
  { icon: 'shield', tone: 'orange', title: 'Cybersecurity Analyst', dept: 'Security', location: 'Bengalore , whitefeild', type: 'Full-time' },
  { icon: 'db', tone: 'navy', title: 'Data Scientist', dept: 'Analytics', location: 'Bengalore , whitefeild', type: 'Full-time' },
  { icon: 'users', tone: 'orange', title: 'Project Manager', dept: 'Operations', location: 'Bengalore , whitefeild', type: 'Full-time' },
]

const steps = [
  { title: 'Application', text: 'Submit your resume and cover letter through our portal.' },
  { title: 'Initial Screening', text: 'Our HR team reviews your application and conducts a phone screen.' },
  { title: 'Technical Interview', text: 'Meet with the team to discuss your skills and experience.' },
  { title: 'Final Interview', text: 'Meet leadership team and discuss role expectations.' },
  { title: 'Offer', text: 'Receive your offer and join the TechSolutions family!' },
]

/* ---------- Page ---------- */
function Career() {
  return (
    <div className="career">
      {/* ============ HERO ============ */}
      <section className="career-hero">
        <div className="career-container career-hero__grid">
          <div className="career-hero__text">
            <span className="career-eyebrow career-eyebrow--light">Careers at TechSolutions</span>
            <h1>
              Build your future <span>with us.</span>
            </h1>
            <p>
              Join a team that values innovation, collaboration and growth. We create
              meaningful work and grow together.
            </p>
            <a href="#openings" className="career-btn">
              Explore Open Roles <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
        <div className="career-hero__media" aria-hidden="true">
          <img
            src={heroImg}
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </section>

      {/* ============ PERKS ============ */}
      <section className="career-perks">
        <div className="career-container career-grid career-grid--3">
          {perks.map((p) => (
            <article className={`career-card career-perk tone-${p.tone}`} key={p.title}>
              <span className="career-icon career-icon--round"><Icon name={p.icon} size={24} /></span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ OPEN ROLES ============ */}
      <section className="career-section" id="openings">
        <div className="career-container">
          <header className="career-head">
            <span className="career-eyebrow">Current Openings</span>
            <h2>Join Our Growing Team</h2>
            <p>Explore exciting opportunities and find the role that&apos;s right for you.</p>
          </header>

          <div className="career-grid career-grid--jobs">
            {jobs.map((j) => (
              <article className={`career-card career-job tone-${j.tone}`} key={j.title}>
                <div className="career-job__top">
                  <span className="career-icon career-icon--square"><Icon name={j.icon} size={22} /></span>
                  <div>
                    <h3>{j.title}</h3>
                    <p className="career-job__dept">{j.dept}</p>
                  </div>
                </div>

                <div className="career-job__bottom">
                  <ul className="career-job__meta">
                    <li><Icon name="pin" size={14} /> {j.location}</li>
                    <li><Icon name="briefcase" size={14} /> {j.type}</li>
                  </ul>
                  <a  className="career-btn career-btn--outline">Mail resume</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="career-section career-section--process">
        <div className="career-container">
          <header className="career-head">
            <span className="career-eyebrow">Our Recruitment Process</span>
            <h2>From Application to Offer</h2>
            <p>A simple, transparent process to help us find the best fit — and for you to find the right team.</p>
          </header>

          <ol className="career-steps">
            {steps.map((s, i) => (
              <li className="career-step" key={s.title}>
                <div className="career-step__head">
                  <span className={`career-step__num ${i % 2 === 1 ? 'is-orange' : ''}`}>{i + 1}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.text}</p>
                {i < steps.length - 1 && (
                  <span className="career-step__arrow" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="career-cta-wrap">
        <div className="career-container">
          <div className="career-cta">
            <span className="career-cta__icon"><Icon name="rocket" size={26} /></span>
            <div className="career-cta__text">
              <h2>Your next chapter starts here</h2>
              <p>Be part of a team that&apos;s building tomorrow. Explore our open roles and make an impact.</p>
            </div>
            <a href="#openings" className="career-btn">Join Our Team <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career