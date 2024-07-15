import './ContactsContent.styles.css'
import Link from '../link/Link'

const contactDetails = [
  {
    title: 'Location',
    value: 'Ukraine, Kyiv'
  },
  {
    title: 'Telegram',
    value: <a href='https://t.me/OlhaOvsiienko' className='link-contacts'>@OlhaOvsiienko</a>
  },
  {
    title: 'Email',
    value: <a href='mailto:o.v.ovsiyenko@gmail.com' className='link-contacts'>o.v.ovsiyenko@gmail.com</a>
  }
]

const ContactsContent = () => {
  return (
<div>
    <div className='contacts-content-container'>
      <h2>Contacts</h2>
      {contactDetails.map((detail, index) => (
        <div key={index}>
          <h3>{detail.title}</h3>
          <p>{detail.value}</p>
        </div>
      ))}
    </div>
    </div> 
  )
}

export default ContactsContent  


/*import React from 'react';
import './ContactsContent.styles.css';

const contactDetails = [
  {
    title: 'Location',
    value: 'Ukraine, Kyiv'
  },
  {
    title: 'Telegram / Viber',
    value: [
      <a key="telegram" href='tel:+380666605841' className='phone-link'>+380666605841 (Telegram)</a>,
      <br key="br" />,
      <a key="viber" href='tel:+380666605841' className='phone-link'>+380666605841 (Viber)</a>
    ]
  },
  {
    title: 'Email',
    value: <a href='mailto:o.v.ovsiyenko@gmail.com' className='email-link-contacts'>o.v.ovsiyenko@gmail.com</a>
  }
];

const ContactsContent = () => {
  return (
    <div className='contacts-content-container'>
      <h2>Contacts</h2>
      {contactDetails.map((detail, index) => (
        <div key={index}>
          <h3>{detail.title}</h3>
          <p>{detail.value}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactsContent;*/
