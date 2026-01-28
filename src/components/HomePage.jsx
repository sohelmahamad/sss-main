import React from 'react'
import './HomePage.css'

function HomePage({ setCurrentPage }) {
  return (
    <div className="page">
 
<div className="page">
      {/* New Hero Section matching the image */}
      <section className="digital-agency-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Web Design, eCommerce & Digital Marketing</h1>
            <p className="hero-description">
              A full-service digital agency with capabilities across web design and development, 
              eCommerce, and digital marketing.
            </p>
            <button className="hero-button">View Our Services</button>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos">
        <div className="container">
          <div className="logos-title">
            <p>Some of companies we've worked with</p>
            <div className="divider"></div>
          </div>
          <div className="logos-grid">
            <div className="logo-item">Superior PALMS</div>
            <div className="logo-item">SUPERIOR LAND DEVELOPMENT</div>
            <div className="logo-item">MANN LAW FIRM</div>
            <div className="logo-item">COX LAW OFFICE</div>
          </div>
        </div>
      </section>

   
    </div>

   <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">💼</div>
              <h3>Professional Team</h3>
              <p>Our experienced professionals deliver top-notch IT solutions tailored to your business needs.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Fast Support</h3>
              <p>24/7 technical support to ensure your systems are always running smoothly.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔒</div>
              <h3>Secure Solutions</h3>
              <p>Enterprise-grade security measures to protect your valuable data and assets.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="about">
        <div className="container">
          <h2>About SSS Technologies</h2>
          <p>
            SSS Technologies is a modern IT services company focused on building fast, scalable, and high-quality digital solutions for businesses of all sizes. We specialize in delivering performance-driven websites and applications using the latest web technologies.
Our core strength lies in creating high-speed eCommerce stores, business websites, and custom web applications that help brands grow online and convert more customers.
          </p>
          <p>
            Our core strength lies in creating high-speed eCommerce stores, business websites, and custom web applications that help brands grow online and convert more customers.
          </p>
        </div>
      </section>
         <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss how we can help you achieve your IT goals.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>

    </div>
  )
}

export default HomePage