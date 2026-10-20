import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import AboutUs from './components/AboutUs'
import WhoWeAre from './components/WhoWeAre'
import Contact from './components/Contact'
import Career from './components/Career'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'services':
        return <ServicesPage />
      case 'about':
        return <AboutUs />
      case 'who-we-are':
        return <WhoWeAre />
      case 'contact':
        return <Contact />
      case 'career':
        return <Career />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
     <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App