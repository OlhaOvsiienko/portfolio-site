import React, { useState } from 'react'
import './Menu.styles.css'
import useDeviceType from '../../hooks/use-device-type.jsx'
import Navbar from '../navbar/Navbar.jsx'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Menu = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="menu-container">
      {!isMenuOpen && isMobile && (
        <button onClick={openMenu} className="menu-button">
          <MenuIcon />
        </button>
      )}
    
      <div className="desktop-menu">
        {(isDesktop || isTablet) && <Navbar closeMenu={closeMenu} />}
      </div>

      {isMenuOpen && isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={closeMenu} className="close-button-menu">
            <CloseIcon />
          </button>
          <Navbar closeMenu={closeMenu} />
        </div>
      )}
    </div>
  )
}

export default Menu





