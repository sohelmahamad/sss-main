import React from 'react'
import './Footer.css'
import ssstechimage from '../images/new--sss--logo.png'
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaGithub,
  FaHome,
  FaCogs,
  FaInfoCircle,
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

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
            <div className="footer-brand">
              <h3 className="footer-logo logo"> <img 
                          src={ssstechimage} 
                          alt="SSS Technologies" 
                          className="logo-img"
                        /></h3>
              <p className="footer-tagline">Your Trusted IT Partner for Digital Transformation</p>
            </div>
            <div className="footer-social">
             <a href="#" className="social-link linkedin" aria-label="LinkedIn">
  <i className="fab fa-linkedin social-icon"></i>
  <span className="social-text">LinkedIn</span>
</a>
<a href="#" className="social-link twitter" aria-label="Twitter">
  <i className="fab fa-twitter social-icon"></i>
  <span className="social-text">Twitter</span>
</a>
<a href="#" className="social-link facebook" aria-label="Facebook">
  <i className="fab fa-facebook-f social-icon"></i>
  <span className="social-text">Facebook</span>
</a>
             
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  <FaHome className="link-icon" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  <FaCogs className="link-icon" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  <FaInfoCircle className="link-icon" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#who-we-are" onClick={(e) => handleNavClick(e, 'who-we-are')}>
                  <FaUsers className="link-icon" />
                  <span>Who We Are</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">More Pages</h4>
            <ul className="footer-links">
              <li>
                <a href="#career" onClick={(e) => handleNavClick(e, 'career')}>
                  <FaRocket className="link-icon" />
                  <span>Career</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  <FaPhone className="link-icon" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  1-1-04 Beside First cry, <br/>
                  White field, <br/>
                  Bangalore.
                </div>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:ssstechnologies@gmail.com">ssstechnologies@gmail.com</a>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+919493507748">+91 9493507748</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 SSS Technologies. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
            <span className="divider">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer