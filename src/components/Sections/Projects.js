//components
import Title from "../Title";
import ProjectCard from '../ProjectCard';

//data
import { projectsData } from '../../config.js'

function Projects() {
    return (
        <div className="section" id='projects'>
            <Title text='Projects'/>
            {projectsData && 
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 gap-3">
                    {projectsData.map((projectData, i) => (
                        <ProjectCard data={projectData} key={i}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default Projects;
