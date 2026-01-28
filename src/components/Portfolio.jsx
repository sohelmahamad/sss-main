import React, { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Modernization',
      category: 'web',
      client: 'RetailCo',
      description: 'Complete redesign and migration of legacy e-commerce platform to modern microservices architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: '300% increase in performance, 45% reduction in cart abandonment'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'mobile',
      client: 'MediCare Plus',
      description: 'Mobile-first healthcare management system for patient records, appointments, and telemedicine.',
      technologies: ['React Native', 'Firebase', 'HIPAA Compliance'],
      results: 'Serving 50,000+ patients, 99.9% uptime'
    },
    {
      id: 3,
      title: 'Financial Analytics Dashboard',
      category: 'data',
      client: 'FinTech Solutions',
      description: 'Real-time analytics dashboard for financial data visualization and reporting.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      results: 'Processing 1M+ transactions daily, real-time insights'
    },
    {
      id: 4,
      title: 'Cloud Migration Project',
      category: 'cloud',
      client: 'Global Manufacturing Inc',
      description: 'Enterprise-wide migration from on-premise infrastructure to AWS cloud.',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      results: '60% cost reduction, improved scalability'
    },
    {
      id: 5,
      title: 'Cybersecurity Implementation',
      category: 'security',
      client: 'Banking Corp',
      description: 'Comprehensive security audit and implementation of advanced security measures.',
      technologies: ['Firewall', 'Encryption', 'SOC 2', 'Penetration Testing'],
      results: 'Zero security breaches, SOC 2 Type II certified'
    },
    {
      id: 6,
      title: 'AI-Powered Customer Service',
      category: 'ai',
      client: 'TelecomX',
      description: 'AI chatbot implementation for automated customer service and support.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'API Integration'],
      results: '70% reduction in support tickets, 24/7 availability'
    },
    {
      id: 7,
      title: 'Supply Chain Optimization',
      category: 'web',
      client: 'Logistics Pro',
      description: 'Web-based supply chain management system with real-time tracking and analytics.',
      technologies: ['Angular', 'Java', 'MySQL', 'Google Maps API'],
      results: '40% improvement in delivery times'
    },
    {
      id: 8,
      title: 'Mobile Banking Application',
      category: 'mobile',
      client: 'Community Bank',
      description: 'Secure mobile banking app with biometric authentication and instant transfers.',
      technologies: ['Flutter', 'Dart', 'Biometric Auth', 'Encryption'],
      results: '100,000+ downloads, 4.8 star rating'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'ai', label: 'AI & ML' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="page">
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Showcasing Our Success Stories</p>
        </div>
      </section>

      <section className="portfolio-intro">
        <div className="container">
          <h2>Delivering Excellence Across Industries</h2>
          <p>
            We've partnered with leading organizations across various industries to deliver 
            innovative technology solutions. Each project represents our commitment to excellence, 
            innovation, and client success. Browse through our portfolio to see how we've helped 
            businesses transform and grow.
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-overlay">
                    <span className="category-badge">{project.category.toUpperCase()}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="client">Client: {project.client}</p>
                  <p className="description">{project.description}</p>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="results">
                    <strong>Results:</strong> {project.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container">
          <h2>Our Track Record</h2>
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">500+</div>
              <div className="stat-text">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">😊</div>
              <div className="stat-value">98%</div>
              <div className="stat-text">Client Satisfaction</div>
            </div>
            {/* <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-value">50+</div>
              <div className="stat-text">Industry Awards</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🌍</div>
              <div className="stat-value">25+</div>
              <div className="stat-text">Countr ies Served</div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote">
                "TechSolutions transformed our entire IT infrastructure. Their expertise and 
                dedication made the complex migration seamless and successful."
              </p>
              <div className="author">
                <strong>David Miller</strong>
                <span>CTO, Global Manufacturing Inc</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                "The mobile app they developed exceeded our expectations. User engagement 
                increased dramatically, and the feedback has been overwhelmingly positive."
              </p>
              <div className="author">
                <strong>Lisa Thompson</strong>
                <span>VP of Digital, RetailCo</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                "Working with TechSolutions was a game-changer. Their security implementation 
                gave us peace of mind and helped us achieve compliance."
              </p>
              <div className="author">
                <strong>Robert Chang</strong>
                <span>CISO, Banking Corp</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio