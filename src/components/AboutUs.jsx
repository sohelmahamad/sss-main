import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="page">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Empowering Businesses Through Technology Excellence</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, TechSolutions began with a simple mission: to bridge the gap between 
              complex technology and business success. What started as a small team of passionate IT 
              professionals has grown into a leading technology solutions provider, serving clients 
              across multiple industries worldwide.
            </p>
            <p>
              Over the years, we've helped hundreds of organizations transform their operations through 
              innovative technology solutions. Our commitment to excellence and client satisfaction has 
              been the cornerstone of our growth and success.
            </p>
          </div>

          <div className="mission-vision">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver cutting-edge IT solutions that drive business growth, enhance productivity, 
                and create lasting value for our clients. We strive to be more than just a service 
                provider – we aim to be a trusted technology partner.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and innovative IT solutions provider globally, recognized for 
                our technical excellence, customer commitment, and positive impact on businesses and 
                communities we serve.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>💡 Innovation</h4>
                <p>We constantly explore new technologies and methodologies to deliver the best solutions.</p>
              </div>
              <div className="value-item">
                <h4>🤝 Integrity</h4>
                <p>We maintain the highest ethical standards in all our business dealings.</p>
              </div>
              <div className="value-item">
                <h4>⭐ Excellence</h4>
                <p>We are committed to delivering exceptional quality in everything we do.</p>
              </div>
              <div className="value-item">
                <h4>🌟 Customer Focus</h4>
                <p>Our clients' success is our success. We go above and beyond to meet their needs.</p>
              </div>
              <div className="value-item">
                <h4>👥 Collaboration</h4>
                <p>We believe in the power of teamwork and building strong partnerships.</p>
              </div>
              <div className="value-item">
                <h4>📈 Continuous Learning</h4>
                <p>We invest in our team's growth and stay ahead of industry trends.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Impact in Numbers</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              {/* <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs