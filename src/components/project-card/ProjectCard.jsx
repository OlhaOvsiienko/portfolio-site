import GitHubIcon from '@mui/icons-material/GitHub'

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  abstract,
  description,
  tryLink,
  btnTryText,
  gitHubLink,
  btnGitHubText,
  variant,
  showDescription,
  showGitHubButton
}) => {
  
  return (
    
    <div className={`project-card ${variant}`}>
        
        <div className={`project-img-frame ${variant}`}>
          <img src={imgSrc} alt={imgAlt} className={`responsive-image ${variant}`} />
        </div>
        
        <div className={`card-project-text-button-box ${variant}`}>
          <div className={`card-project-title-box ${variant}`}>
            <h3 className={`card-project-text ${variant}`}>{title}</h3>
            <p className={`card-project-text ${variant}`}>{abstract}</p>
          </div>

          {showDescription && (
            <div className={`card-project-description-box ${variant}`}>
              <p className={`card-project-description-text ${variant}`}>{description}</p>
              
              <div className={`card-project-button-box ${variant}`}>
                <a href={tryLink} target="_blank" rel="noopener noreferrer">
                  <button className={`card-project-button-try ${variant}`}>
                    {btnTryText}
                  </button>
                </a>
                {showGitHubButton && (
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                  <button className={`card-project-button-gitHub ${variant}`}>
                    <GitHubIcon />
                    {btnGitHubText}
                  </button>
                </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default ProjectCard




