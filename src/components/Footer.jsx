import React from 'react'
import './Footer.css'

function Footer({ setCurrentPage }) {
  const handleNavClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SSS Technologies</h3>
            <p>Your Trusted IT Partner for Digital Transformation</p>
            <div className="footer-social">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#who-we-are" onClick={(e) => handleNavClick(e, 'who-we-are')}>
                  Who We Are
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>More Pages</h4>
            <ul className="footer-links">
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#career" onClick={(e) => handleNavClick(e, 'career')}>
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>📍 1-1-04 Beside First cry, <br/>
                White feild <br/>Bangalore.</li>
              <li> </li>
              <li>📧 ssstechnologies@gmail.com</li>
              <li>📞 +91 9493507748</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SSS Technologies. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer