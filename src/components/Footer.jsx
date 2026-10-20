import React from 'react'
import './Footer.css'
import ssstechimage from '../images/sss__new__image.png'
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaCog,
  FaInfoCircle,
  FaUsers,
  FaBriefcase,
  FaRegFileAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRegCopyright
} from 'react-icons/fa'

const quickLinks = [
  { page: 'home', label: 'Home', icon: FaHome },
  { page: 'services', label: 'Services', icon: FaCog },
  { page: 'about', label: 'About Us', icon: FaInfoCircle },
  { page: 'who-we-are', label: 'Who We Are', icon: FaUsers },
  { page: 'career', label: 'Career', icon: FaBriefcase }
]

const morePages = [
  { page: 'gallery', label: 'Gallery', icon: FaRegFileAlt },
  { page: 'contact', label: 'Contact', icon: FaPhoneAlt }
]

const socials = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'Facebook', icon: FaFacebookF, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'YouTube', icon: FaYoutube, href: '#' }
]

function Footer({ setCurrentPage }) {
  const handleNavClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderLinks = (links) =>
    links.map(({ page, label, icon: Icon }) => (
      <li key={page}>
        <a href={`#${page}`} onClick={(e) => handleNavClick(e, page)}>
          <Icon className="link-icon" />
          <span className="link-label">{label}</span>
          <FaChevronRight className="link-arrow" />
        </a>
      </li>
    ))

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Bottom-left orange wave */}
        <svg
          className="wave wave-left"
          viewBox="0 0 160 70"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orangeL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ffb21f" />
              <stop offset="1" stopColor="#f26a1b" />
            </linearGradient>
          </defs>
          <path d="M0,0 C50,12 95,52 160,70 L0,70 Z" fill="#0b3f95" />
          <path d="M0,34 C40,44 80,62 140,70 L0,70 Z" fill="url(#orangeL)" />
        </svg>

        <div className="footer-container footer-content">
          {/* Brand */}
          <div className="footer-section footer-brand-section">
            <img src={ssstechimage} alt="SSS Technologies" className="logo-img-footer" />
            <p className="footer-tagline">
              Your Trusted IT Partner for Digital Transformation
            </p>
            <div className="footer-social">
              {socials.map(({ name, icon: Icon, href }) => (
                <a key={name} href={href} className="social-link" aria-label={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">{renderLinks(quickLinks)}</ul>
          </div>

          {/* More Pages */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links">{renderLinks(morePages)}</ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <address>
                  1-1-404,
                  Beside First Cry,
                  White Field,
                  <br />
                  Bangalore - 560066
                 </address>
              </li>
              <li>
                <span className="contact-icon">
                  <FaRegEnvelope />
                </span>
                <a href="mailto:ssstechnologies.in@gmail.com">
                  ssstechnologies@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-icon">
                  <FaPhoneAlt />
                </span>
                <a href="tel:+919035907748">+91 9493507748</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Bottom-right orange wave */}
        <svg
          className="wave wave-right"
          viewBox="0 0 220 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orangeR" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#f26a1b" />
              <stop offset="1" stopColor="#ffb21f" />
            </linearGradient>
          </defs>
          <path d="M220,0 C190,45 120,78 40,90 L220,90 Z" fill="#0b3f95" />
          <path d="M220,22 C195,55 150,78 90,90 L220,90 Z" fill="url(#orangeR)" />
        </svg>

        <div className="footer-container footer-bottom-inner">
          <p className="footer-copyright">
            <FaRegCopyright className="copyright-icon" />
            {new Date().getFullYear()} SSS Technologies. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer