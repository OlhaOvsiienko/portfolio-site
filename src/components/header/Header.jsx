import './Header.styles.js'
import { Link } from 'react-router-dom'

const Header = () => {
    
  
    return (
      <nav>
        Header
        <ul>
          <li>
            <Link to='/'>About Myself</Link>
          </li>
          <li>
            <Link to='/certificates'>Certificates</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Header
