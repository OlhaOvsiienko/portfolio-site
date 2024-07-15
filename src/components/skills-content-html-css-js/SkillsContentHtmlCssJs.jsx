import React from 'react'
import Link from '../link/Link'
import SkillsContent from '../skills-content/SkillsContent'


const SkillsContentHtmlCssJs = () => {
  return (
    <div>
      <SkillsContent skillType="htmlCssJs" />
            
      <p>
      The example of my work can be seen{' '}
        <Link href='https://koldovsky.github.io/1038-team-03/schedule.html#'>
          here
        </Link>{' '}
        (my part of the team project is the entire page except the header and the footer).
      </p>
      
    
    </div>
  )
}

export default SkillsContentHtmlCssJs