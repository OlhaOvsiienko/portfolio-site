import './PersonalInformationBlock.styles.css'

const PersonalInformationBlock = ({ title, text, button1, button2 }) => {
  return (
    <div className='personal-information'>
      <h3 className='personal-information-title'>{title}</h3>
      <div className='personal-information-content'>
        <p className='personal-information-text'>{text}</p>
        <div className='personal-information-button-container'>
          {button1 && <button onClick={button1.onClick}>{button1.label}</button>}
          {button2 && <button onClick={button2.onClick}>{button2.label}</button>}
        </div>
      </div>
      

    </div>
  )
}

export default PersonalInformationBlock
