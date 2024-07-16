import './HeaderTitle.styles.css'
import useDeviceType from '../../hooks/use-device-type.jsx'
import Avatar from '../../images/avatar.png'

const HeaderTitle = () => {
    const { isTablet, isDesktop } = useDeviceType()
  
    return (
      <div className="header-title-container">
        
        {(isDesktop || isTablet) && (
            <div className="header-avatar">
                <img src={Avatar} alt="Avatar" className="avatar" />
            </div>
         
        )}

        <h4 className="header-text">
            Olha Ovsiienko 
            <br />
            Trainee FrontEnd Developer
        </h4>
            
        
      </div>
    )
  }
  
  export default HeaderTitle  

/*import './HeaderTitle.styles.css'
import Avatar from '../../images/avatar.png'

const HeaderTitle = () => {
    
  
    return (
      <div className="header-title-container">
        <div className="header-avatar">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>
        <h4 className="header-text">
            Olha Ovsiienko 
            <br />
            Trainee FrontEnd Developer
        </h4>
      </div>
    )
  }
  
  export default HeaderTitle  */