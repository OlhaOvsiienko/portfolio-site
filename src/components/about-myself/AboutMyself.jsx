import AccordionSkills from '../accordion-skills/AccordionSkills'
import './AboutMyself.styles.css'
import Photo from '../../images/OlhaOvsiienkoPhoto.jpg'
import pdfCV from '../../images/OvsiienkoCV.pdf'


const AboutMyself = () => {
    
    const openCV = () => {
        const pdfWindowCV = window.open()
    
        pdfWindowCV.document.write(`
            <html>
                <head>
                    <title>PDF Viewer</title>
                     <style>
                    
                    .download-close-button-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #8ea69b;
                        gap: 20px;
                    }
                    
                    .download-close-button {
                        color: white;
                        background-color: transparent;
                        padding: 10px 20px;
                        border: none;
                        text-align: center;
                        text-decoration: none;
                        font-size: 16px;
                    }

                    .download-close-button:hover {
                        color: black;
                    }
                </style>
                </head>
                <body>
                    <div class="download-close-button-container">
                        <button class="download-close-button"> <a href='${pdfCV}' download class="download-close-button">Download PDF </a></button>
                        <button class="download-close-button" onclick='window.close()'>Close</button> 
                    </div>   
                    <embed src='${pdfCV}' width='100%' height='100%' type='application/pdf'>
                    <br>
                    
                </body>
            </html>
            `)
    }
  
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
            
                    <div className='button-CV-container'>
                        <button onClick={openCV} className='button-CV'>View CV</button>
                    </div>
                </div>
            </div>
            
            <div>
                <AccordionSkills />
            </div>

        </div>
    )
  }
  
  export default AboutMyself 