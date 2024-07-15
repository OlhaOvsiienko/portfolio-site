import { Link } from 'react-router-dom'
import './DropdownMenu.styles.css'

const DropdownMenu = ({ closeMenu }) => {
  const portfolioItems = [
    { label: 'Dental Clinic', path: '/portfolio/DentalClinic' },
    { label: 'Minesweeper', path: '/portfolio/Minesweeper' },
    { label: 'To Do List', path: '/portfolio/ToDoList' },
    { label: 'Form Validation', path: '/portfolio/FormValidation' },
    { label: 'Space2Study', path: '/portfolio/Space2Study' },
  ]

  return (
    <div className="portfolio-dropdown">
      {portfolioItems.map((item, index) => (
        <Link
          key={index}
          className='dropdown-button'
          to={item.path}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default DropdownMenu  







