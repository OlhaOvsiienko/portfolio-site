import PdfViewerWindow from '../pdf-viewer-window/PdfViewerWindow'
import pdfCV from '../../images/OvsiienkoCV.pdf'
import PersonalInformationBlock from '../personal-information-block/PersonalInformationBlock'
import CVData from '../personal-information-data/CVData'
import './PersonalInformation.styles.css'

const PersonalInformation = () => {
      
    return (
        <div>
            {CVData.map((block, index) => (
                <PersonalInformationBlock
                    key={index}
                    title={block.title}
                    text={block.text}
                    button1={block.button1}
                    button2={block.button2}
                />
            ))}
        
            <PdfViewerWindow pdfCV={pdfCV} /> 
        </div>
      
    )
  }
  
  export default PersonalInformation