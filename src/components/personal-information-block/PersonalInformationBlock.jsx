import Link from '../link/Link'
import './PersonalInformationBlock.styles.css'

const PersonalInformationBlock = ({ title, text1, list1, text2, list2, button1, button2 }) => {
  return (
    <div className='personal-information'>
      <h3 className='personal-information-title'>{title}</h3>
      <div className='personal-information-content'>
        <p className='personal-information-text'>{text1}</p>
        {list1 && (
          <ul>
            {list1.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        )}
        <p className='personal-information-text'>{text2}</p>
        {list2 && (
          <ul>
            {list2.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        )}
        <div className='personal-information-button-container'>
          {button1 && (
            <Link 
              to={button1.to} 
              href={button1.href} 
              className='button-link'
            >
              {button1.label}
            </Link>
          )}
          {button2 && (
            <Link 
              to={button2.to} 
              href={button2.href} 
              className='button-link'
            >
              {button2.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationBlock


