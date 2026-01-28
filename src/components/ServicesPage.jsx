import React from 'react'
import './ServicesPage.css'

function ServicesPage() {
  return (
    <div className="page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT Solutions for Modern Businesses</p>
        </div>
      </section>


      {/* New WordPress Services Section */}
      <section className="wordpress-services">
        <div className="container">
          <div className="section-header">
            <h2>WordPress Development Services</h2>
            <p>Comprehensive WordPress solutions for businesses of all sizes</p>
          </div>
          
          <div className="wordpress-grid">
            <div className="wordpress-card">
              <div className="wordpress-icon">🆕</div>
              <h3>New WordPress Website</h3>
              <p>Custom WordPress websites built from scratch with modern design and functionality tailored to your business needs.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🎨</div>
              <h3>WordPress Website Redesign</h3>
              <p>Refresh your existing WordPress site with modern design, improved UX, and updated functionality.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Speed up your WordPress site with caching, image optimization, and code minification for better user experience.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🔒</div>
              <h3>Security Audit & Fixing</h3>
              <p>Comprehensive security assessments and fixes to protect your WordPress site from vulnerabilities and attacks.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🔄</div>
              <h3>WordPress Website Upgrade</h3>
              <p>Keep your WordPress core, themes, and plugins updated for security, performance, and compatibility.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🎭</div>
              <h3>Theme Customization & Design</h3>
              <p>Custom theme development or modification of existing themes to match your brand identity perfectly.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🛒</div>
              <h3>E-commerce with WooCommerce</h3>
              <p>Build robust online stores with WooCommerce, including payment integration, inventory management, and shipping solutions.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🔌</div>
              <h3>Plugin Customization & Development</h3>
              <p>Custom plugin development or modification of existing plugins to add specific functionality to your WordPress site.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🔧</div>
              <h3>WordPress Website Maintenance</h3>
              <p>Ongoing maintenance services including updates, backups, security monitoring, and performance checks.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">📱</div>
              <h3>Mobile Optimization</h3>
              <p>Ensure your WordPress site looks and performs perfectly on all mobile devices and screen sizes.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🔍</div>
              <h3>WordPress SEO Services</h3>
              <p>Optimize your WordPress site for search engines with technical SEO, content optimization, and performance enhancements.</p>
            </div>

            <div className="wordpress-card">
              <div className="wordpress-icon">🛡️</div>
              <h3>WordPress Backup Solutions</h3>
              <p>Reliable backup and disaster recovery solutions to protect your WordPress site data and content.</p>
            </div>
          </div>
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

export default ServicesPage