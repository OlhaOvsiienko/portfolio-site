import skillsData from '../skill-data/SkillsData'

const SkillsContent = ({ skillType }) => {
  const { title, skills } = skillsData[skillType]

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsContent