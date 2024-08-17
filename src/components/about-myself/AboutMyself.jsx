import AccordionSkills from '../accordion-skills/AccordionSkills'
import PdfViewerWindow from '../pdf-viewer-window/PdfViewerWindow'
import Photo from '../../images/OlhaOvsiienkoPhoto.jpg'
import pdfCV from '../../images/OvsiienkoCV.pdf'
import './AboutMyself.styles.css'


const AboutMyself = () => {
      
    return (
        <div >
            
            <div className='about-myself-container'>
                <div className='photo'>
                    <img src={Photo} alt='Olha' />
                </div>
            
                <div className='about-myself-text'>
                    <h4>
                        Hello! 
                        <br/>
                        I'm Olha Ovsiienko.
                    </h4>
                    <p>
                        I'm looking for a job as a front-end developer. I chose this direction because when you see the result of work in the browser, it inspires. I also like solving logic problems. 
                        <br />
                        <br />
                        My previous activity is related to analytical and teaching work (PhD Economics, I've been teaching at the university for more than 20 years). I can effectively plan my work time and always complete assigned tasks on time.
                    </p>
            
                    <PdfViewerWindow pdfCV={pdfCV} />
                </div>
            </div>
            
            <div>
                <AccordionSkills />
            </div>

        </div>
    )
  }
  
  export default AboutMyself 