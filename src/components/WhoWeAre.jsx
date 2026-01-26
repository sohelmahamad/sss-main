import React from 'react'
import './WhoWeAre.css'

function WhoWeAre() {
  return (
    <div className="page">
      <section className="whoweare-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p>Meet the Team Behind TechSolutions</p>
        </div>
      </section>

      <section className="team-intro">
        <div className="container">
          <h2>A Diverse Team of Experts</h2>
          <p>
            Our strength lies in our people. We are a diverse team of technology enthusiasts, 
            problem solvers, and innovators who are passionate about helping businesses succeed. 
            With expertise spanning multiple domains and industries, we bring a wealth of knowledge 
            and experience to every project.
          </p>
        </div>
      </section>

      {/* <section className="leadership-team">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Anderson</h3>
              <p className="member-title">Chief Executive Officer</p>
              <p className="member-bio">
                With over 20 years in the tech industry, John leads our strategic vision and 
                drives innovation across all our services.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sarah Chen</h3>
              <p className="member-title">Chief Technology Officer</p>
              <p className="member-bio">
                Sarah oversees our technical operations and ensures we stay at the forefront 
                of emerging technologies.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Michael Roberts</h3>
              <p className="member-title">Chief Operating Officer</p>
              <p className="member-bio">
                Michael manages our day-to-day operations and ensures seamless delivery of 
                services to our clients.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Emily Johnson</h3>
              <p className="member-title">Head of Client Relations</p>
              <p className="member-bio">
                Emily leads our client success team, ensuring every client receives exceptional 
                support and service.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="departments">
        <div className="container">
          <h2>Our Departments</h2>
          <div className="dept-grid">
            <div className="dept-card">
              <div className="dept-icon">💻</div>
              <h3>Development Team</h3>
              <p>
                E-commerce specialists delivering Shopify, Shopify Plus, WordPress, and React development with expert maintenance and support.
              </p>
            </div>

            <div className="dept-card">
              <div className="dept-icon">🎨</div>
              <h3>Design Team</h3>
              <p>
                UX/UI designers creating intuitive, beautiful interfaces that users love to 
                interact with.
              </p>
            </div>

            <div className="dept-card">
              <div className="dept-icon">🔒</div>
              <h3>Security Team</h3>
              <p>
                Cybersecurity experts protecting our clients' data and infrastructure from 
                emerging threats.
              </p>
            </div>
{/* 
            <div className="dept-card">
              <div className="dept-icon">☁️</div>
              <h3>Cloud Infrastructure</h3>
              <p>
                Cloud architects and DevOps engineers managing scalable, reliable cloud 
                infrastructure.
              </p>
            </div> */}

            {/* <div className="dept-card">
              <div className="dept-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>
                Data scientists and analysts transforming raw data into actionable business 
                insights.
              </p>
            </div> */}

            {/* <div className="dept-card">
              <div className="dept-icon">🎯</div>
              <h3>Project Management</h3>
              <p>
                Experienced project managers ensuring timely delivery and effective communication 
                throughout projects.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="culture">
        <div className="container">
          <h2>Our Culture</h2>
          <div className="culture-content">
            <div className="culture-item">
              <h3>🌱 Growth Mindset</h3>
              <p>
                We encourage continuous learning and professional development. Every team member 
                has access to training resources and opportunities to expand their skills.
              </p>
            </div>

            <div className="culture-item">
              <h3>🤝 Collaboration</h3>
              <p>
                We believe in open communication and teamwork. Our collaborative environment 
                fosters innovation and creative problem-solving.
              </p>
            </div>

            <div className="culture-item">
              <h3>⚖️ Work-Life Balance</h3>
              <p>
                We respect our team's personal time and promote a healthy work-life balance 
                through flexible arrangements and supportive policies.
              </p>
            </div>

            <div className="culture-item">
              <h3>🌍 Diversity & Inclusion</h3>
              <p>
                We celebrate diversity and create an inclusive environment where everyone feels 
                valued and empowered to contribute their unique perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre