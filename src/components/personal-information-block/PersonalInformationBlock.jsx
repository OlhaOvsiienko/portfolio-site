import './PersonalInformationBlock.styles.css'

const PersonalInformationBlock = ({ title, text1, list1, text2, list2, description }) => {
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
        <div className='personal-information-description'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationBlock



