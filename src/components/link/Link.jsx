import { Link as RouterLink } from 'react-router-dom';
import './Link.styles.css';

const Link = ({ to, href, children, ...props }) => {
  
  const isExternal = href && !to;
  const isInternal = to && !href;

  if (isExternal) {
    return (
      <a
        className='accordion-link'
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  if (isInternal) {
    return (
      <RouterLink
        className='accordion-link'
        to={to}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  return null;
};

export default Link;
