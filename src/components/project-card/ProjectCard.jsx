import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '../link/Link'
import './ProjectCard.styles.css'

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
  showGitHubButton,
  showViewButton
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
              {showViewButton && (
                <Link href={tryLink} className='project-link'>
                  <button className={`card-project-button-try ${variant}`}>
                    {btnTryText}
                  </button>
                </Link>
              )}
                {showGitHubButton && (
                <Link href={gitHubLink} className='project-link'>
                  <button className={`card-project-button-gitHub ${variant}`}>
                    <GitHubIcon />
                    {btnGitHubText}
                  </button>
                </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default ProjectCard




