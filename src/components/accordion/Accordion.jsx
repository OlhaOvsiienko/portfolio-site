import { useState } from 'react'
import './Accordion.styles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleToggle = () => {
      setIsOpen(!isOpen)
    };
  
    return (
      <div className="accordion">
        <div className={`accordion-header ${isOpen ? 'open' : ''}`}  onClick={handleToggle}>
          <div className="accordion-title">{title}</div>
          <span>{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            {children}
          </div>
        )}
      </div>
    )
  }
  
  export default Accordion  