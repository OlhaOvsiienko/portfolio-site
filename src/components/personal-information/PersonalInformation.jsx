import PdfViewerWindow from '../pdf-viewer-window/PdfViewerWindow'
import pdfCV from '../../images/OvsiienkoCV.pdf'
import PersonalInformationBlock from '../personal-information-block/PersonalInformationBlock'
import CVData from '../personal-information-data/CVData'
import './PersonalInformation.styles.css'

const PersonalInformation = () => {
  return (
    <div>
        <div className='view-cv'>
         <PdfViewerWindow pdfCV={pdfCV} /> 
        </div>
        
      {CVData.map((block, index) => (
        <PersonalInformationBlock
          key={index}
          title={block.title}
          text1={block.text1}
          list1={block.list1}
          text2={block.text2}
          list2={block.list2}
          description={block.description}
        />
      ))}
      
    </div>
  )
}

export default PersonalInformation
