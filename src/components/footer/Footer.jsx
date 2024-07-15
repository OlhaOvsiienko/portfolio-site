import Navbar from '../navbar/Navbar.jsx'
import useDeviceType from '../../hooks/use-device-type.jsx'
import './Footer.styles.css'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TelegramIcon from '@mui/icons-material/Telegram'



const Footer = () => {
  const { isTablet, isDesktop } = useDeviceType()

    return (
      <footer className='footer-container'>
       
      {(isTablet || isDesktop) && (
        <>
          <div className="footer">
            <Navbar className="footer-navbar" buttonClass="footer-nav-button" isFooter={true} />
          </div>
          
          <div className='footer-contacts'>
            <h4>Contacts</h4>
              <div className='footer-email'>
                < MailOutlineIcon className='footer-icon'/>
                <a href='mailto:o.v.ovsiyenko@gmail.com' className='footer-link-email'>o.v.ovsiyenko@gmail.com</a>
              </div>
              <div className='footer-email'>
                < TelegramIcon className='footer-icon'/>
                <a href='https://t.me/OlhaOvsiienko' className='footer-link-email'>@OlhaOvsiienko</a>
              </div>
              
          </div>
        </>
      )}
              
       <div className='footer-thanks'>
        
          <SentimentSatisfiedAltIcon className='footer-smile-icon'/>
          <h4 >Thanks for your attention!</h4>
          
       </div>
        
      </footer>
    )
  }
  
  export default Footer  