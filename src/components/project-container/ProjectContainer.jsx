import { Link } from 'react-router-dom'
import React from "react"
import ProjectCard from "../project-card/ProjectCard.jsx"
import ProjectCardContent from "../project-card-content/ProjectCardContent.js"
import './ProjectContainer.styles.css'

const ProjectContainer = () => {
   

    return (
        <>
        <div className='projects-container-title'>
            <h3>Portfolio</h3>
            <p>Some of my practical worts which has been done during my studing at SoftServeAcademy are presented here. 
            <br />
            I'll appreciate any comments. Please, feel free to contact me.
            </p>
        </div>
        <div className="project-container">
            {ProjectCardContent.map((project, index) => (
                <Link key={index} to={`/portfolio/${project.label}`} className="project-link">
                <ProjectCard
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    title={project.title}
                    abstract={project.abstract}
                    variant="portfolio"
                    showDescription={false}
                />
            </Link>
            ))}
        </div>
        </>
    )
}

export default ProjectContainer