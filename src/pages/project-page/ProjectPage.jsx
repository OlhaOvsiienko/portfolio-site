import { useParams } from "react-router-dom"
import SelectedCard from "../../components/selected-card/SelectedCard"

const ProjectPage = () => {
    const { label } = useParams()

  return (
    <>
      <SelectedCard label={label} /> 
    </>
  )
}

export default ProjectPage