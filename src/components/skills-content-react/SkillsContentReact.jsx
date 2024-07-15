import Link from '../link/Link'
import SkillsContent from '../skills-content/SkillsContent'

const SkillsContentReact = () => {
  return (
    <div>
      <SkillsContent skillType='react' />
      <p>
        The example of my work can be seen{' '}
        <Link href='https://mine-sweeper-game-js.netlify.app/'>
          here
        </Link>{' '}
        (this is TODO List).
      </p>
    </div>
  )
}

export default SkillsContentReact