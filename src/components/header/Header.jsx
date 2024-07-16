import Menu from '../menu/Menu.jsx'
import HeaderTitle from '../header-title/HeaderTitle.jsx'
import './Header.styles.css'

const Header = () => {

  return (
    <header className="header-container">
        <>
          <HeaderTitle />
          <Menu />
        </>
    </header>
  )
}

export default Header 