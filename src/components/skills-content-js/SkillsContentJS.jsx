import Link from '../link/Link'
import SkillsContent from '../skills-content/SkillsContent'

const SkillsContentJS = () => {
  return (
    <div>
      <SkillsContent skillType='js' />
      <p>
        The example of my work can be seen{' '}
        <Link href='https://minesweeper-js-game.netlify.app'>
          here
        </Link>{' '}
        (this is MineSweeper game).
      </p>
    </div>
  )
}

export default SkillsContentJS