import ProjectCardContent from "../project-card-content/ProjectCardContent.js"
import ProjectCard from "../project-card/ProjectCard.jsx"
import './SelectedCard.styles.css'

const SelectedCard = ({ label }) => {
    
  const selectedProject = ProjectCardContent.find(project => project.label === label)
    
  return (
    <div className="page-container">
      <ProjectCard
        imgSrc={selectedProject.imgSrc}
        imgAlt={selectedProject.imgAlt}
        title={selectedProject.title}
        abstract={selectedProject.abstract}
        description={selectedProject.description}
        variant="page"
        tryLink={selectedProject.tryLink}
        btnTryText={selectedProject.btnTryText}
        gitHubLink={selectedProject.gitHubLink}
        btnGitHubText={selectedProject.btnGitHubText}
        showDescription={true}
        showGitHubButton={label !== 'Space2Study'}
      />
    </div>
  );
};

export default SelectedCard




