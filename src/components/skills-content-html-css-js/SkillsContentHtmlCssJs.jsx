import React from 'react'
import Link from '../link/Link'
import SkillsContent from '../skills-content/SkillsContent'


const SkillsContentHtmlCssJs = () => {
  return (
    <div>
      <SkillsContent skillType="htmlCssJs" />
            
      <p>
      The example of my work can be seen{' '}
        <Link to={`/portfolio/DentalClinic`}>
          here
        </Link>
      .
      </p>
      
    
    </div>
  )
}

export default SkillsContentHtmlCssJs