import React from 'react'
import './Header.styles.css'
import useDeviceType from '../../hooks/use-device-type.jsx'
import Menu from '../menu/Menu.jsx'
import HeaderTitle from '../header-title/HeaderTitle.jsx'


const Header = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType()

  return (
    <header className="header-container">
      {(isMobile) && (
        <>
          <Menu />
          <HeaderTitle />
        </>
      )}
      {(isDesktop || isTablet) && (
        <>
          <HeaderTitle />
          <Menu />
        </>
      )}
    </header>
  );
};

export default Header  