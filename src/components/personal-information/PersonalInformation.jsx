import PdfViewerWindow from '../pdf-viewer-window/PdfViewerWindow'
import pdfCV from '../../images/OvsiienkoCV.pdf'
import PersonalInformationBlock from '../personal-information-block/PersonalInformationBlock'
import CVData from '../personal-information-data/CVData'
import './PersonalInformation.styles.css'

const PersonalInformation = () => {
  return (
    <div>
        <PdfViewerWindow pdfCV={pdfCV} /> 
      {CVData.map((block, index) => (
        <PersonalInformationBlock
          key={index}
          title={block.title}
          text1={block.text1}
          list1={block.list1}
          text2={block.text2}
          list2={block.list2}
          button1={block.button1}
          button2={block.button2}
        />
      ))}
      
    </div>
  )
}

export default PersonalInformation
