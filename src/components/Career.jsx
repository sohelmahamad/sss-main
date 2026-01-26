import React, { useState } from 'react'
import './Career.css'

function Career() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team. You will work on cutting-edge projects and collaborate with a talented team.',
      requirements: [
        '5+ years of experience in web development',
        'Proficiency in React, Node.js, and databases',
        'Strong problem-solving skills',
        'Experience with cloud platforms (AWS/Azure)',
        'Excellent communication skills'
      ]
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our DevOps team to build and maintain scalable infrastructure. You will work with modern tools and technologies to ensure smooth deployments.',
      requirements: [
        '3+ years of DevOps experience',
        'Experience with Docker, Kubernetes',
        'Knowledge of CI/CD pipelines',
        'Scripting skills (Python, Bash)',
        'Cloud platform expertise'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences. Work closely with product and engineering teams to deliver exceptional designs.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe XD',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design',
        'Ability to create wireframes and prototypes'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Washington, DC',
      type: 'Full-time',
      description: 'Protect our clients\' systems and data. Monitor security threats and implement robust security measures.',
      requirements: [
        '4+ years in cybersecurity',
        'Knowledge of security frameworks',
        'Experience with penetration testing',
        'Security certifications (CISSP, CEH)',
        'Analytical and problem-solving skills'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Turn data into insights. Build machine learning models and help clients make data-driven decisions.',
      requirements: [
        'MS/PhD in Computer Science or related field',
        'Strong Python and R skills',
        'Experience with ML frameworks',
        'Statistical analysis expertise',
        'Excellent communication skills'
      ]
    },
    {
      id: 6,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Lead complex IT projects from inception to completion. Coordinate with teams and ensure successful delivery.',
      requirements: [
        '5+ years of project management experience',
        'PMP or similar certification',
        'Excellent organizational skills',
        'Experience with Agile methodologies',
        'Strong leadership abilities'
      ]
    }
  ]

  return (
    <div className="page">
      <section className="career-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build Your Career with TechSolutions</p>
        </div>
      </section>

      <section className="why-join">
        <div className="container">
          <h2>Why Work With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Salary</h3>
              <p>Industry-leading compensation packages with performance bonuses</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h3>Health Benefits</h3>
              <p>Comprehensive health, dental, and vision insurance for you and your family</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏖️</div>
              <h3>Flexible Time Off</h3>
              <p>Generous PTO policy including vacation days and sick leave</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learning Budget</h3>
              <p>Annual budget for courses, conferences, and professional development</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Remote Options</h3>
              <p>Flexible work arrangements including remote and hybrid options</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Career Growth</h3>
              <p>Clear career paths with mentorship and advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="jobs-list">
            {jobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-badge">{job.department}</span>
                      <span className="job-badge">{job.location}</span>
                      <span className="job-badge">{job.type}</span>
                    </div>
                  </div>
                  <button 
                    className="view-btn"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
                
                {selectedJob === job.id && (
                  <div className="job-details">
                    <h4>Description</h4>
                    <p>{job.description}</p>
                    
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                    
                    <button className="apply-btn">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recruitment-process">
        <div className="container">
          <h2>Our Recruitment Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Application</h3>
              <p>Submit your resume and cover letter through our portal</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Initial Screening</h3>
              <p>Our HR team reviews your application and conducts a phone screen</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Technical Interview</h3>
              <p>Meet with the team to discuss your skills and experience</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Final Interview</h3>
              <p>Meet leadership team and discuss role expectations</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Offer</h3>
              <p>Receive your offer and join the TechSolutions family!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career