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

      <section className="services-list">
        <div className="container">
          <div className="service-item">
            <div className="service-icon">☁️</div>
            <div className="service-content">
              <h3>Cloud Computing Solutions</h3>
              <p>
                Migrate your infrastructure to the cloud with our expert guidance. We provide cloud 
                architecture design, migration services, and ongoing management for AWS, Azure, and 
                Google Cloud Platform.
              </p>
              <ul>
                <li>Cloud Migration & Integration</li>
                <li>Infrastructure as a Service (IaaS)</li>
                <li>Platform as a Service (PaaS)</li>
                <li>Cloud Security & Compliance</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">🛡️</div>
            <div className="service-content">
              <h3>Cybersecurity Services</h3>
              <p>
                Protect your business from cyber threats with our comprehensive security solutions. 
                Our team provides vulnerability assessments, penetration testing, and 24/7 security 
                monitoring.
              </p>
              <ul>
                <li>Network Security Assessment</li>
                <li>Threat Detection & Response</li>
                <li>Security Awareness Training</li>
                <li>Compliance Management</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">💻</div>
            <div className="service-content">
              <h3>Custom Software Development</h3>
              <p>
                Build scalable, robust applications tailored to your business requirements. From web 
                applications to mobile apps, we deliver solutions that drive results.
              </p>
              <ul>
                <li>Web Application Development</li>
                <li>Mobile App Development</li>
                <li>API Development & Integration</li>
                <li>Legacy System Modernization</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">📊</div>
            <div className="service-content">
              <h3>IT Consulting & Strategy</h3>
              <p>
                Strategic IT planning and consulting to align technology with your business objectives. 
                We help you make informed decisions about technology investments.
              </p>
              <ul>
                <li>IT Infrastructure Planning</li>
                <li>Digital Transformation Strategy</li>
                <li>Technology Roadmap Development</li>
                <li>Vendor Selection & Management</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">🔧</div>
            <div className="service-content">
              <h3>Managed IT Services</h3>
              <p>
                Let us handle your IT operations so you can focus on your core business. We provide 
                proactive monitoring, maintenance, and support for your entire IT infrastructure.
              </p>
              <ul>
                <li>24/7 System Monitoring</li>
                <li>Help Desk Support</li>
                <li>Network Management</li>
                <li>Backup & Disaster Recovery</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">📈</div>
            <div className="service-content">
              <h3>Data Analytics & BI</h3>
              <p>
                Transform your data into actionable insights. Our analytics solutions help you make 
                data-driven decisions and uncover new business opportunities.
              </p>
              <ul>
                <li>Business Intelligence Solutions</li>
                <li>Data Warehousing</li>
                <li>Predictive Analytics</li>
                <li>Dashboard & Reporting Tools</li>
              </ul>
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