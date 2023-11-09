//components
import Title from "./Title";
import ProjectCard from './ProjectCard';

//data
import { projectsData } from '../config.js'

function Projects() {
    return (
        <div className="section" id='projects'>
            <Title text='Projects'/>
            {projectsData && 
                <div className="flex flex-wrap justify-center">
                    {projectsData.map((projectData, i) => (
                        <ProjectCard data={projectData} key={i}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default Projects;
