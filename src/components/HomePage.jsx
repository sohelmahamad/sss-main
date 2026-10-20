import React, { useRef, useState } from 'react'
import './HomePage.css'

/* =====================================================================
   CONFIG
   ===================================================================== */
const CONTACT_EMAIL = 'mahamadsohel654@gmail.com'
// Free form-to-email service (no backend needed). First submission needs a one-time activation.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

// Images (Unsplash). Every image has an automatic gradient fallback if it fails to load.
// To use your own pictures, put them in /public/images and use e.g. '/images/fashion.jpg'
const IMG = {
  plant: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=70',
  about: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=70',
  fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=70',
  corporate: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=70',
  home: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=70',
  campaign: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=70',
}

/* =====================================================================
   DATA
   ===================================================================== */
const heroStats = [
  { icon: 'briefcase', number: '300+', label: 'Projects Completed' },
  { icon: 'users', number: '500+', label: 'Happy Clients' },
  { icon: 'clock', number: '24/7', label: 'Support' },
]

const services = [
  { icon: 'monitor', title: 'Web Design', text: 'Modern, responsive and user-friendly websites that make an impact.' },
  { icon: 'cart', title: 'eCommerce Development', text: 'Powerful online stores that convert visitors into customers.' },
  { icon: 'chart', title: 'Digital Marketing', text: 'Data-driven campaigns to increase your reach and sales.' },
  { icon: 'code', title: 'Custom Web Apps', text: 'Tailored web applications for your unique business needs.' },
  { icon: 'cloud', title: 'Cloud Hosting', text: 'Secure, scalable and reliable hosting solutions.' },
  { icon: 'headset', title: 'IT Support', text: 'Always-on support to keep your business running smoothly.' },
]

const whyUs = [
  { icon: 'users', title: 'Experienced Team', text: 'Skilled professionals with years of industry experience.' },
  { icon: 'clock', title: 'On-Time Delivery', text: 'We value your time and deliver projects on schedule.' },
  { icon: 'heart', title: 'Client Focused', text: 'Your success is our priority, always.' },
]

const aboutStats = [
  { icon: 'checkSquare', number: '300+', label: 'Projects Completed' },
  { icon: 'users', number: '500+', label: 'Happy Clients' },
  { icon: 'clock', number: '24/7', label: 'Dedicated Support' },
]

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Power BI',
  'Shopify', 'WordPress', 'Node.js', 'AWS', 'Firebase', 'MySQL',
]

const projects = [
  { image: IMG.fashion, tag: 'eCommerce Website', title: 'Fashion Store', text: 'Modern eCommerce platform with seamless shopping experience.' },
  { image: IMG.corporate, tag: 'Business Website', title: 'Corporate Website', text: 'Professional website for a growing business brand.' },
  { image: IMG.home, tag: 'eCommerce Website', title: 'Home & Living Store', text: 'Beautiful and functional online store with smooth UX.' },
  { image: IMG.campaign, tag: 'Digital Marketing', title: 'Brand Campaign', text: 'Strategy + Creative + Results for higher engagement.' },
]

const resultStats = [
  { icon: 'checkSquare', number: '300+', label: 'Projects Delivered' },
  { icon: 'users', number: '500+', label: 'Happy Clients' },
  { icon: 'smile', number: '98%', label: 'Client Satisfaction' },
]

const steps = [
  { number: 1, title: 'Discover', text: 'Understand your goals and requirements.' },
  { number: 2, title: 'Design', text: 'Create modern designs that fit your brand.' },
  { number: 3, title: 'Develop', text: 'Build, test and perfect the solution.' },
  { number: 4, title: 'Launch & Grow', text: 'Go live and scale with ongoing support.' },
]

const plans = [
  { name: 'Starter', price: '$499', features: ['Modern Website Design', 'Responsive Layout', 'Basic SEO Setup', '1 Month Support'], featured: false },
  { name: 'Professional', price: '$999', features: ['eCommerce Development', 'Custom Features', 'SEO Optimization', '3 Months Support'], featured: false },
  { name: 'Business', price: '$1,499', features: ['Full Stack Development', 'Digital Marketing (Basic)', 'Priority Support', '6 Months Support'], featured: true },
  { name: 'Enterprise', price: '$2,499', features: ['Advanced Customization', 'Marketing (Advanced)', 'Dedicated Manager', '1 Year Support'], featured: false },
]

// Placeholder testimonials - replace names, roles, quotes and photos with real client details.
// For your own photos use e.g. image: '/images/priya.jpg'
const testimonials = [
  { name: 'Priya Sharma', role: 'Founder, TrendyStore', image: 'https://i.pravatar.cc/120?img=47', quote: 'SSS Technologies delivered an amazing website for our store. Their team is professional and supportive.' },
  { name: 'Rahul Mehta', role: 'CEO, GrowthPro', image: 'https://i.pravatar.cc/120?img=12', quote: 'Our digital marketing results have been fantastic. More traffic, more sales!' },
  { name: 'Sneha Iyer', role: 'Director, UrbanStyle Co.', image: 'https://i.pravatar.cc/120?img=45', quote: 'Great communication, on-time delivery and excellent support. Highly recommended!' },
  { name: 'Arjun Reddy', role: 'Operations Head, DataWorks', image: 'https://i.pravatar.cc/120?img=33', quote: 'The Power BI dashboards gave us clear visibility into our numbers. Decisions are faster now.' },
  { name: 'Ananya Rao', role: 'Owner, Bloom Boutique', image: 'https://i.pravatar.cc/120?img=44', quote: 'They rebuilt our online store and our sales went up noticeably. Reliable and easy to work with.' },
]

const faqs = [
  { q: 'How long does a project take?', a: 'A standard business website usually takes 2 to 4 weeks. eCommerce stores and custom web apps take longer depending on the features required.' },
  { q: 'Do you offer post-launch support?', a: 'Yes. Every plan includes post-launch support, and we also offer ongoing maintenance and 24/7 technical support.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price packages per project. Contact us for a tailored quote if you need something custom.' },
  { q: 'Can you work with my existing website?', a: 'Absolutely. We can refresh the design, improve speed and SEO, and add new features without starting from zero.' },
]

const projectTypes = [
  'Web Design', 'eCommerce Development', 'Digital Marketing', 'Custom Web App',
  'Cloud Hosting', 'IT Support', 'Power BI Dashboard', 'Other',
]

/* =====================================================================
   SMALL HELPERS
   ===================================================================== */
const ICONS = {
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  cart: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>,
  chart: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  cloud: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  headset: <><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  checkSquare: <><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
  smile: <><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
  check: <polyline points="20 6 9 17 4 12" />,
  arrow: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
  left: <polyline points="15 18 9 12 15 6" />,
  right: <polyline points="9 18 15 12 9 6" />,
  plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  minus: <line x1="5" y1="12" x2="19" y2="12" />,
  send: <><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>,
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

// Image with automatic gradient fallback
function Img({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <div className={`${className} img-fallback`} role="img" aria-label={alt} />
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

// Avatar with fallback to the first letter of the name
function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false)
  if (!image || failed) {
    return <div className="avatar avatar-fallback" aria-hidden="true">{name.charAt(0)}</div>
  }
  return (
    <img className="avatar" src={image} alt={name} width="48" height="48" loading="lazy" onError={() => setFailed(true)} />
  )
}

/* =====================================================================
   PAGE
   ===================================================================== */
function HomePage({ setCurrentPage }) {
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)

  // Contact form
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '', _honey: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToPage = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const slideTestimonials = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.testimonial-card')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form._honey) return // spam bot filled the hidden field
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType || 'Not specified',
          message: form.message,
          _subject: `New enquiry from ${form.name} - SSS Technologies`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (res.ok && (data.success === true || data.success === 'true')) {
        setStatus('success')
        setForm({ name: '', email: '', projectType: '', message: '', _honey: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="page">
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow">Your Growth Partner</span>
            <h1>
              Web Design, eCommerce &amp;
              <span> Digital Marketing</span>
            </h1>
            <p className="hero-desc">
              We build modern websites, powerful eCommerce stores and result-driven digital
              marketing strategies that help your business grow online and beyond.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
                Start a Project <Icon name="arrow" size={16} />
              </button>
              <button className="btn btn-outline" onClick={() => scrollToId('work')}>
                View Our Work
              </button>
            </div>
            <div className="hero-stats">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="icon-box icon-box-soft"><Icon name={s.icon} size={20} /></span>
                  <div>
                    <strong>{s.number}</strong>
                    <small>{s.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <span className="blob blob-lg" />
            <span className="blob blob-ring" />
            <span className="blob blob-stripes" />
            <span className="blob blob-dot" />

            <div className="laptop">
              <div className="laptop-screen">
                <div className="mini-nav">
                  <span className="mini-logo">SSS Technologies</span>
                  <span className="mini-links"><i /><i /><i /><i /></span>
                </div>
                <div className="mini-body">
                  <div className="mini-copy">
                    <b>Build Your<br />Online Success</b>
                    <i /><i className="short" />
                    <span className="mini-btn" />
                  </div>
                  <Img src={IMG.plant} alt="" className="mini-img" />
                </div>
              </div>
              <div className="laptop-base" />
            </div>

            <div className="phone">
              <div className="phone-screen">
                <span className="mini-logo">SSS Technologies</span>
                <b>Build Your<br />Online Success</b>
                <span className="mini-btn" />
                <Img src={IMG.plant} alt="" className="phone-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY */}
      <section className="trusted">
        <div className="container">
          <p className="trusted-title">Trusted by businesses worldwide</p>
          <div className="trusted-logos">
            <span className="brand brand-shopify"><Icon name="cart" size={22} />shopify</span>
            <span className="brand brand-wp"><b className="wp-mark">W</b>WordPress</span>
            <span className="brand brand-webflow"><b className="wf-mark">W</b>Webflow</span>
            <span className="brand brand-gads"><b className="ga-mark">▲</b>Google Ads</span>
            <span className="brand brand-aws">aws</span>
            <span className="brand brand-meta"><b className="meta-mark">∞</b>Meta</span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="sec-title">Our Services</h2>
              <p className="sec-text">
                We offer a complete range of digital solutions to help your business stand out,
                grow faster and achieve long-term success.
              </p>
            </div>
            <button className="link-more" onClick={() => goToPage('services')}>
              View All Services <Icon name="arrow" size={15} />
            </button>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="icon-box icon-box-soft"><Icon name={s.icon} size={24} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section section-grey">
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="sec-title">Why Choose Us</h2>
            <p className="sec-text">
              We combine creativity, technology and experience to deliver solutions that drive
              real business results.
            </p>
          </div>
          <div className="split-body why-grid">
            {whyUs.map((w) => (
              <div className="why-card" key={w.title}>
                <span className="icon-box icon-box-plain"><Icon name={w.icon} size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section className="about">
        <span className="about-ring" />
        <div className="container about-grid">
          <div className="about-text">
            <span className="eyebrow">About SSS Technologies</span>
            <h2>Your Vision, Our Technology</h2>
            <p>
              SSS Technologies is a full-service digital agency helping businesses build their
              online presence, increase sales and achieve sustainable growth with innovative
              solutions and dedicated support.
            </p>
            <button className="btn btn-primary" onClick={() => goToPage('about')}>
              Learn More <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="about-media">
            <Img src={IMG.about} alt="Laptop on a desk" className="about-img" />
          </div>
          <div className="about-stats">
            {aboutStats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="icon-box icon-box-glass"><Icon name={s.icon} size={22} /></span>
                <div>
                  <strong>{s.number}</strong>
                  <small>{s.label}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECH STACK */}
      <section className="section">
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">Our Tech Stack</span>
            <h2 className="sec-title">Technologies We Use</h2>
            <p className="sec-text">
              We work with the best tools and technologies to build fast, secure and scalable
              solutions.
            </p>
          </div>
          <div className="split-body">
            <div className="tech-card">
              <div className="tech-grid">
                {techStack.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS */}
      <section className="section section-grey" id="work">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="sec-title">Featured Projects</h2>
              <p className="sec-text">
                Take a look at some of our recent work and see how we turn ideas into powerful
                digital experiences.
              </p>
            </div>
            <button className="link-more" onClick={() => goToPage('contact')}>
              View All Projects <Icon name="arrow" size={15} />
            </button>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <Img src={p.image} alt={p.title} className="project-img" />
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RESULTS */}
      <section className="results">
        <span className="results-ring results-ring-l" />
        <span className="results-ring results-ring-r" />
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">Our Impact</span>
            <h2 className="sec-title">Results That Matter</h2>
            <p className="sec-text">Real numbers. Real growth. Our work makes a difference.</p>
          </div>
          <div className="split-body results-grid">
            {resultStats.map((s) => (
              <div className="result-item" key={s.label}>
                <span className="result-icon"><Icon name={s.icon} size={30} /></span>
                <strong>{s.number}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROCESS */}
      <section className="section">
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">How It Works</span>
            <h2 className="sec-title">Our Simple Process</h2>
            <p className="sec-text">
              From idea to launch, we make the journey simple, transparent and stress-free.
            </p>
          </div>
          <div className="split-body process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s.number}>
                <span className="process-num">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING */}
      <section className="section section-grey">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Pricing</span>
              <h2 className="sec-title">Our Pricing Plans</h2>
              <p className="sec-text">
                Choose the plan that fits your needs. All plans include core features and
                dedicated support.
              </p>
            </div>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="plan-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>/project</span>
                </div>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                  onClick={() => scrollToId('contact')}
                >
                  Get Started {plan.featured && <Icon name="arrow" size={16} />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS (5 cards, slider) */}
      <section className="section">
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">Testimonials</span>
            <h2 className="sec-title">What Our Clients Say</h2>
            <p className="sec-text">Trusted by businesses, loved for our work.</p>
            <div className="slider-nav">
              <button onClick={() => slideTestimonials(-1)} aria-label="Previous testimonials">
                <Icon name="left" size={18} />
              </button>
              <button onClick={() => slideTestimonials(1)} aria-label="Next testimonials">
                <Icon name="right" size={18} />
              </button>
            </div>
          </div>
          <div className="split-body">
            <div className="testimonial-track" ref={trackRef}>
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.name}>
                  <div className="author">
                    <Avatar name={t.name} image={t.image} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <p>“{t.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="section section-faq">
        <div className="container split">
          <div className="split-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="sec-title">Frequently Asked Questions</h2>
            <p className="sec-text">Find quick answers to common questions about our services.</p>
          </div>
          <div className="split-body">
            <div className="faq-list">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i
                return (
                  <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
                    <button
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <Icon name={isOpen ? 'minus' : 'plus'} size={16} />
                    </button>
                    <div className="faq-answer">
                      <div>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-text">
            <span className="eyebrow">Get In Touch</span>
            <h2>Let&apos;s Build Something Great</h2>
            <p>
              Have a project in mind? We&apos;d love to hear from you. Fill out the form and we&apos;ll
              get back to you soon.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from real users */}
            <input
              type="text"
              name="_honey"
              value={form._honey}
              onChange={handleChange}
              className="honey"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form-row">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </label>
            </div>

            <label>
              <span>Project Type</span>
              <select name="projectType" value={form.projectType} onChange={handleChange}>
                <option value="">Select a service</option>
                {projectTypes.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : <>Send Message <Icon name="send" size={16} /></>}
            </button>

            <div className="form-status" role="status" aria-live="polite">
              {status === 'success' && (
                <p className="status-ok">Thank you! Your message has been sent. We&apos;ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="status-err">
                  Sorry, something went wrong. Please try again or email us at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage