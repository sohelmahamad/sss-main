import React, { useState } from 'react'
import './Navigation.css'
import ssstechimage from '../images/sss_technologies_logo.png'

function Navigation({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"><img src={ssstechimage} alt='sss-technologies' /> </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-menu ${ menuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={currentPage === 'services' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={currentPage === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#who-we-are" 
              className={currentPage === 'who-we-are' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'who-we-are')}
            >
              Who We Are
            </a>
          </li>
          {/* <li>
            <a 
              href="#portfolio" 
              className={currentPage === 'portfolio' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'portfolio')}
            >
              Portfolio
            </a>
          </li> */}
          <li>
            <a 
              href="#career" 
              className={currentPage === 'career' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'career')}
            >
              Career
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation