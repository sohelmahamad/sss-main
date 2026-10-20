import React, { useState, useEffect, useRef } from 'react'
import './Navigation.css'
import ssstechimage from '../images/sss__new__image.png'

/* ---------- Inline SVG icons (no extra packages needed) ---------- */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const HomeIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    <path d="M12 2.6 1.8 11.4a1 1 0 0 0 .65 1.76H4V20a1.5 1.5 0 0 0 1.5 1.5H9.5v-6h5v6h4A1.5 1.5 0 0 0 20 20v-6.84h1.55a1 1 0 0 0 .65-1.76L12 2.6Z" />
  </svg>
)

const GearIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.62.8 1.03 1.46 1.03H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
  </svg>
)

const UsersIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 20.5v-1.2a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1.2" />
    <path d="M3 11.5a2.6 2.6 0 0 1 2.2-4.1" />
    <path d="M21 11.5a2.6 2.6 0 0 0-2.2-4.1" />
  </svg>
)

const BuildingIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="3" width="10" height="18" rx="1" />
    <path d="M15 9h3a1 1 0 0 1 1 1v11h-4" />
    <path d="M8.5 7h3M8.5 11h3M8.5 15h3M3 21h18" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 13h18" />
    <path d="M10.5 13v1.5h3V13" />
  </svg>
)

const HeadsetIcon = () => (
  <svg {...iconProps}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
    <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
  </svg>
)

const ChevronIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

/* ---------- Navigation items ---------- */
const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  {
    id: 'services',
    label: 'Services',
    icon: <GearIcon />,
    // Edit / replace these sub-items with your real service pages
    children: [
      { id: 'services', label: 'All Services' },
      { id: 'web-development', label: 'Web Development' },
      { id: 'app-development', label: 'App Development' },
      { id: 'it-consulting', label: 'IT Consulting' },
    ],
  },
  { id: 'about', label: 'About Us', icon: <UsersIcon /> },
  { id: 'who-we-are', label: 'Who We Are', icon: <BuildingIcon /> },
  { id: 'career', label: 'Career', icon: <BriefcaseIcon /> },
  { id: 'contact', label: 'Contact', icon: <HeadsetIcon />, cta: true },
]

function Navigation({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    setMenuOpen(false)
    setDropdownOpen(false)

    scrollToTop()

    if (page !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(page)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }
  }

  const isActive = (item) =>
    currentPage === item.id ||
    (item.children && item.children.some((c) => c.id === currentPage))

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img
            src={ssstechimage}
            alt="SSS Technologies"
            className="logo-img"
            onClick={() => {
              setCurrentPage('home')
              setMenuOpen(false)
              scrollToTop()
            }}
          />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children)

            return (
              <li
                key={item.id}
                className={`nav-item ${item.cta ? 'nav-item-cta' : ''} ${
                  hasChildren ? 'has-dropdown' : ''
                } ${hasChildren && dropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => hasChildren && setDropdownOpen(true)}
                onMouseLeave={() => hasChildren && setDropdownOpen(false)}
              >
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${item.cta ? 'nav-cta' : ''} ${
                    isActive(item) ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    // On mobile, the Services link toggles its submenu instead of navigating
                    if (hasChildren && window.innerWidth <= 768) {
                      e.preventDefault()
                      setDropdownOpen((prev) => !prev)
                      return
                    }
                    handleNavClick(e, item.id)
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">
                    {item.label}
                    {hasChildren && (
                      <span className="chevron">
                        <ChevronIcon />
                      </span>
                    )}
                  </span>
                  {!item.cta && <span className="link-underline"></span>}
                </a>

                {hasChildren && (
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`dropdown-link ${
                            currentPage === child.id ? 'active' : ''
                          }`}
                          onClick={(e) => handleNavClick(e, child.id)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation