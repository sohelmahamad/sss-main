import React from 'react'
import './HomePage.css'

function HomePage({ setCurrentPage }) {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SSS Technologies</h1>
          <p>Your Trusted IT Partner for Digital Transformation</p>
          <button className="cta-button" onClick={() => setCurrentPage('services')}>
            Explore Our Services
          </button>
        </div>
      </section>
<<<<<<< HEAD
      
=======

>>>>>>> 3e707ed95b13309c75578059b3c679987a99a31e
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
    </div>
  )
}

export default HomePage