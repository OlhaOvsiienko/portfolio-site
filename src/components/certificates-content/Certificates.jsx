import './Certificates.styles.css'
import certificateHtmlCssJs from '../../images/Certificate_HTML_CSS_JS.jpg'
import certificateJs from '../../images/Certificate_JS.jpg'
import certificateDB from '../../images/Certificate_DB.jpg'
import certificateDevOps from '../../images/Certificate_DevOps.jpg'
import certificateReact from '../../images/Certificate_React.jpg'
import certificateProjectBasedLearning from '../../images/Certificate_Project_Based_Learning.jpg'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const Certificates = () => {
  const certificates = [
    certificateHtmlCssJs,
    certificateJs,
    certificateDB,
    certificateDevOps,
    certificateReact,
    certificateProjectBasedLearning
  ]

  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  };

  const closeCertificate = () => {
    setSelectedCertificate(null)
  };

  return (
    <div className="certificates">
      
        <h3>Certificates</h3>
        <p>I graduated WebUI course in SoftServe Academy.</p>
        <p>To view details, click on certificate, please.</p>
     
      <div className="certificates-images">
        {certificates.map((certificate, index) => (
          <img
            key={index}
            src={certificate}
            alt={`Certificate ${index + 1}`}
            onClick={() => openCertificate(certificate)}
            className="item-certificate"
          />
        ))}
      </div>

      {selectedCertificate && (
        <div className="popup-certificate">
            <button className="close-button" onClick={closeCertificate}>
              <CloseIcon />
            </button>
          <div className="popup-certificate-content">
            <img src={selectedCertificate} alt="Selected Certificate" className="selected-certificate" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Certificates
