import Link from '../link/Link'
import SkillsContent from '../skills-content/SkillsContent'

const SkillsContentReact = () => {
  return (
    <div>
      <SkillsContent skillType='react' />
      <p>
      This site is written in React. See{' '}
        <Link href='https://github.com/OlhaOvsiienko/portfolio-site'>
          GitHub repo
        </Link>
      . 
      </p>
    </div>
  )
}

export default SkillsContentReact