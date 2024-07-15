import './Link.styles.css'

const Link = ({ href, children }) => {
  return (
    <a
      className='accordion-link'
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Link