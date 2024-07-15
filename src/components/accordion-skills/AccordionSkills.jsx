import Accordion from '../accordion/Accordion'
import SkillsContentHtmlCssJs from '../skills-content-html-css-js/SkillsContentHtmlCssJs'
import SkillsContentJS from '../skills-content-js/SkillsContentJS'
import SkillsContentDB from '../skills-content-db/SkillsContentDB'
import SkillsContentDevops from '../skills-content-devops/SkillsContentDevops'
import SkillsContentReact from '../skills-content-react/SkillsContentReact'
import './AccordionSkills.styles.css'

const accordionItems = [
  { title: "Html Css JS", component: <SkillsContentHtmlCssJs /> },
  { title: "JS", component: <SkillsContentJS /> },
  { title: "DataBase", component: <SkillsContentDB /> },
  { title: "Devops", component: <SkillsContentDevops /> },
  { title: "React", component: <SkillsContentReact /> }
]

const AccordionSkills = () => {
  return (
    <div className='accordion-skills'>
      {accordionItems.map((item, index) => (
        <Accordion key={index} title={item.title}>
          {item.component}
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionSkills
