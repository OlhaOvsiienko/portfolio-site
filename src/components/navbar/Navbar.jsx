import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdown-menu/DropdownMenu'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.styles.css'

const Navbar = ({ closeMenu, className, buttonClass, isFooter }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  const togglePortfolioMenu = () => {
    setIsPortfolioOpen(!isPortfolioOpen)
  }

  const handleMenuItemClick = () => {
    setIsPortfolioOpen(false)
    if (closeMenu) closeMenu()
  }

  return (
    <nav className={`navbar ${className}`}>
      <Link className={`nav-button ${buttonClass}`} to='/' onClick={handleMenuItemClick}>Home</Link>
      <Link className={`nav-button ${buttonClass}`} to='/certificates' onClick={handleMenuItemClick}>Certificates</Link>
      
      <div className='portfolio-dropdown-container'>
        <div className={`nav-button ${buttonClass} portfolio-button`}>  
          <Link to='/portfolio' onClick={handleMenuItemClick} className="portfolio-button-text">
            Portfolio
          </Link>
          {!isFooter && (
            <>
              {isPortfolioOpen ? 
                <ExpandLessIcon className='navbar-icon' onClick={togglePortfolioMenu} /> : 
                <ExpandMoreIcon className='navbar-icon' onClick={togglePortfolioMenu} />
              }
            </>
          )}
        </div>
        {!isFooter && (
          <div>
            {isPortfolioOpen && (
              <DropdownMenu closeMenu={handleMenuItemClick} />
            )}
          </div>
        )}
      </div>

      <Link className={`nav-button ${buttonClass}`} to='/contacts' onClick={handleMenuItemClick}>Contacts</Link>
    </nav>
  )
}

export default Navbar  

//=================With decoration nav-buttons according to location=================
/*import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.styles.css';

const Navbar = ({ closeMenu, className, buttonClass, isFooter }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const location = useLocation();

  const togglePortfolioMenu = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const handleMenuItemClick = () => {
    setIsPortfolioOpen(false);
    if (closeMenu) closeMenu();
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${className}`}>
      <Link className={`nav-button ${buttonClass} ${isActive('/')}`} to='/' onClick={handleMenuItemClick}>Home</Link>
      <Link className={`nav-button ${buttonClass} ${isActive('/certificates')}`} to='/certificates' onClick={handleMenuItemClick}>Certificates</Link>
      
      <div className='portfolio-dropdown-container'>
        <div className={`nav-button ${buttonClass} portfolio-button ${isActive('/portfolio')}`}>
          <Link to='/portfolio' onClick={handleMenuItemClick} className="portfolio-button-text">
            Portfolio
          </Link>
          {!isFooter && (
            <>
              {isPortfolioOpen ? 
                <ExpandLessIcon className='navbar-icon' onClick={togglePortfolioMenu} /> : 
                <ExpandMoreIcon className='navbar-icon' onClick={togglePortfolioMenu} />
              }
            </>
          )}
        </div>
        {!isFooter && (
          <div>
            {isPortfolioOpen && (
              <DropdownMenu closeMenu={handleMenuItemClick} />
            )}
          </div>
        )}
      </div>

      <Link className={`nav-button ${buttonClass} ${isActive('/contacts')}`} to='/contacts' onClick={handleMenuItemClick}>Contacts</Link>
    </nav>
  );
};

export default Navbar;*/










