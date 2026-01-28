import React, { useState, useEffect } from 'react'
import './Navigation.css'
import ssstechimage from '../images/new--sss--logo.png'

function Navigation({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    setMenuOpen(false)
    
    // Scroll to top first
    scrollToTop()
    
    // If the page has a corresponding section (not home), scroll to it after a delay
    if (page !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(page)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300) // Delay to allow scroll to top to complete
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img 
            src={ssstechimage} 
            alt="SSS Technologies" 
            className="logo-img"
            onClick={() => {
              setCurrentPage('home')
              scrollToTop()
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a 
                href={`#${item.id}`}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
                <span className="link-underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation