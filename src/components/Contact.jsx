import React, { useState } from 'react'
import './Contact.css'

/* ------------------------------------------------------------------
   No image files needed: the hero illustration and logo are drawn with
   inline SVG below, so they always show.
------------------------------------------------------------------- */
const HeroArt = () => (
  <svg
    className="cp-hero-art"
    viewBox="0 0 400 300"
    role="img"
    aria-label="Laptop showing the SSS Technologies logo"
    style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 460, height: 'auto', display: 'block', margin: '0 auto' }}
  >
    <defs>
      <linearGradient id="heroScreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff7ee" />
        <stop offset="1" stopColor="#ffe3c4" />
      </linearGradient>
      <linearGradient id="heroLogo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e65100" />
        <stop offset="1" stopColor="#ffb347" />
      </linearGradient>
    </defs>
    {/* laptop lid */}
    <rect x="70" y="30" width="260" height="170" rx="12" fill="#2b2f36" />
    <rect x="80" y="40" width="240" height="150" rx="6" fill="url(#heroScreen)" />
    {/* logo mark */}
    <circle cx="200" cy="100" r="30" fill="url(#heroLogo)" />
    <text x="200" y="110" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="800" fill="#fff">SSS</text>
    <text x="200" y="152" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="22" fontWeight="800" fill="#e65100">TECHNOLOGIES</text>
    <text x="200" y="171" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" letterSpacing="3" fill="#555"></text>
    {/* base */}
    <path d="M40 206h320l-18 22a10 10 0 0 1-8 4H66a10 10 0 0 1-8-4z" fill="#c9ccd2" />
    <rect x="165" y="206" width="70" height="6" rx="3" fill="#a9adb5" />
    {/* desk shadow */}
    <ellipse cx="200" cy="246" rx="150" ry="10" fill="#000" opacity="0.08" />
  </svg>
)

const COMPANY = {
  name: 'SSS Technologies',
  email: 'ssstechnologies@gmail.com',
  phoneDisplay: '+91 9493507748',
  phoneHref: '+919493507748',
  addressLines: ['1-1-04, Beside First cry,', 'Whitefield,', 'Bangalore - 560066'],
  mapQuery: 'Whitefield, Bangalore',
}

const SUBJECTS = [
  'General enquiry',
  'Project discussion',
  'Request a quote',
  'Technical support',
  'Careers',
  'Other',
]

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  COMPANY.mapQuery
)}&output=embed`
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  COMPANY.name + ' ' + COMPANY.mapQuery
)}`

/* ----------------------------- Icons ------------------------------ */
const Svg = ({ children, className, fill = 'none', stroke = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
)

const PinIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
)
const MailIcon = ({ className }) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </Svg>
)
const PhoneIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
)
const ClockIcon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
)
const UserIcon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </Svg>
)
const ListIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
  </Svg>
)
const ChatIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12z" />
  </Svg>
)
const SendIcon = ({ className }) => (
  <Svg className={className} fill="currentColor" stroke="none">
    <path d="M2.5 11.2 20.8 3.3c.9-.4 1.8.5 1.4 1.4l-7.9 18.3c-.4.9-1.7.8-2-.1l-2.2-6.8-6.8-2.2c-.9-.3-1-1.6-.1-2z" />
    <path d="M9.8 14.2 21 4" stroke="#fff" strokeWidth="1.2" fill="none" />
  </Svg>
)
const MapIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4z" />
    <path d="M9 4v13.5M15 6.5V20" />
  </Svg>
)

const LinkedInIcon = () => (
  <Svg fill="currentColor" stroke="none">
    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" />
  </Svg>
)
const TwitterIcon = () => (
  <Svg fill="currentColor" stroke="none">
    <path d="M22 5.9c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a3.7 3.7 0 0 0-6.3 3.4A10.5 10.5 0 0 1 3 4.9a3.7 3.7 0 0 0 1.1 4.9c-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.3 3 3.7-.6.2-1.1.2-1.7.1.5 1.5 1.8 2.5 3.4 2.6A7.4 7.4 0 0 1 2 17.2 10.5 10.5 0 0 0 7.7 19c6.8 0 10.5-5.7 10.2-10.8.8-.5 1.4-1.2 2.1-2.3z" />
  </Svg>
)
const FacebookIcon = () => (
  <Svg fill="currentColor" stroke="none">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />
  </Svg>
)
const InstagramIcon = () => (
  <Svg>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </Svg>
)
const YouTubeIcon = () => (
  <Svg fill="currentColor" stroke="none">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
  </Svg>
)

const SOCIALS = [
  { name: 'LinkedIn', cls: 'linkedin', href: '#', Icon: LinkedInIcon },
  { name: 'Twitter', cls: 'twitter', href: '#', Icon: TwitterIcon },
  { name: 'Facebook', cls: 'facebook', href: '#', Icon: FacebookIcon },
  { name: 'Instagram', cls: 'instagram', href: '#', Icon: InstagramIcon },
  { name: 'YouTube', cls: 'youtube', href: '#', Icon: YouTubeIcon },
]

/* ---------------------------- Component --------------------------- */
const EMPTY_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setSent(false)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send formData to your backend / email service here
    setSent(true)
    setFormData(EMPTY_FORM)
  }

  return (
    <div className="contact-page">
      {/* ============================ HERO ============================ */}
      <section className="cp-hero">
        <div className="cp-container cp-hero-inner">
          <div className="cp-hero-text">
            <span className="cp-eyebrow">Get in touch</span>
            <h1>
              Contact <span className="cp-accent">Us</span>
            </h1>
            <span className="cp-underline" aria-hidden="true" />
            <p>
              We&rsquo;d love to hear from you! Whether you have a question, need support
              or want to discuss a project, our team is here to help. Reach out to us
              through any of the following channels.
            </p>
            <p className="cp-script">Let&rsquo;s Build Something Great Together</p>
          </div>

          <div className="cp-hero-visual">
            <svg
              className="cp-swoosh"
              viewBox="0 0 200 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cpSwoosh" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#e65100" />
                  <stop offset="0.6" stopColor="#f47b20" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
              <path
                d="M60 0 C 150 20, 150 120, 90 170 C 130 110, 110 40, 20 0 Z"
                fill="url(#cpSwoosh)"
              />
              <path
                d="M100 0 C 190 30, 180 140, 120 200 C 160 130, 150 50, 70 0 Z"
                fill="#ffd9ad"
                opacity="0.8"
              />
            </svg>
            <HeroArt />
          </div>
        </div>
      </section>

      {/* ======================= INFO + FORM ========================== */}
      <section className="cp-main">
        <div className="cp-container cp-main-grid">
          {/* ---------- left column: info cards ---------- */}
          <div className="cp-info-col">
            <article className="cp-card cp-info-card">
              <span className="cp-icon-circle">
                <PinIcon />
              </span>
              <div>
                <h3>Our Office</h3>
                <p className="cp-line">
                  <PinIcon className="cp-mini" />
                  <span>
                    {COMPANY.addressLines.map((l, i) => (
                      <React.Fragment key={l}>
                        {l}
                        {i < COMPANY.addressLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </p>
              </div>
            </article>

            <article className="cp-card cp-info-card">
              <span className="cp-icon-circle">
                <MailIcon />
              </span>
              <div>
                <h3>Email Us</h3>
                <p className="cp-line">
                  <MailIcon className="cp-mini" />
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </p>
              </div>
            </article>

            <article className="cp-card cp-info-card">
              <span className="cp-icon-circle">
                <PhoneIcon />
              </span>
              <div>
                <h3>Call Us</h3>
                <p className="cp-line">
                  <PhoneIcon className="cp-mini" />
                  <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phoneDisplay}</a>
                </p>
              </div>
            </article>

            <article className="cp-card cp-info-card">
              <span className="cp-icon-circle">
                <ClockIcon />
              </span>
              <div>
                <h3>Business Hours</h3>
                <p className="cp-line">
                  <ClockIcon className="cp-mini" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </p>
                <p className="cp-sub">Saturday &amp; Sunday: Closed</p>
              </div>
            </article>

            <article className="cp-card cp-follow">
              <h3>Follow Us</h3>
              <span className="cp-underline cp-underline-sm" aria-hidden="true" />
              <div className="cp-socials">
                {SOCIALS.map(({ name, cls, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className={`cp-social ${cls}`}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </article>
          </div>

          {/* ---------- right column: form ---------- */}
          <div className="cp-card cp-form-card">
            <span className="cp-eyebrow">Send us a message</span>
            <h2>
              We&rsquo;re Here to <span className="cp-accent">Help</span>
            </h2>
            <p className="cp-form-intro">
              Fill out the form below and we&rsquo;ll get back to you as soon as possible.
            </p>

            <form className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-field">
                <label htmlFor="name">
                  Full Name <span className="cp-req">*</span>
                </label>
                <div className="cp-input-wrap">
                  <UserIcon className="cp-input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="email">
                  Email Address <span className="cp-req">*</span>
                </label>
                <div className="cp-input-wrap">
                  <MailIcon className="cp-input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="phone">Phone Number</label>
                <div className="cp-input-wrap">
                  <PhoneIcon className="cp-input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="subject">
                  Subject <span className="cp-req">*</span>
                </label>
                <div className="cp-input-wrap">
                  <ListIcon className="cp-input-icon" />
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cp-field cp-span-2">
                <label htmlFor="message">
                  Message <span className="cp-req">*</span>
                </label>
                <div className="cp-input-wrap cp-textarea-wrap">
                  <ChatIcon className="cp-input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="cp-submit cp-span-2">
                <SendIcon className="cp-submit-icon" />
                Send Message
              </button>

              {sent && (
                <p className="cp-success cp-span-2" role="status">
                  Thank you for contacting us! We will get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ========================== MAP + VISIT ======================= */}
      <section className="cp-visit">
        <div className="cp-container cp-visit-grid">
          <div className="cp-map">
            <iframe
              title="SSS Technologies location map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="cp-map-label">
              <strong>{COMPANY.name}</strong>
              <span>Whitefield, Bangalore</span>
            </div>
          </div>

          <div className="cp-visit-card">
            <span className="cp-eyebrow">Visit our office</span>
            <h2>
              We&rsquo;re Located in <span className="cp-accent">Whitefield, Bangalore</span>
            </h2>
            <p>
              Come and meet our team! We&rsquo;d be happy to discuss your project, answer
              your questions, and explore how we can work together.
            </p>
            <p className="cp-line cp-visit-address">
              <PinIcon className="cp-mini cp-mini-solid" />
              <span>
                {COMPANY.addressLines.map((l, i) => (
                  <React.Fragment key={l}>
                    {l}
                    {i < COMPANY.addressLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </p>
            <a
              className="cp-directions"
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapIcon className="cp-directions-icon" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact