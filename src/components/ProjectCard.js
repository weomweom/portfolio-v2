//components
import GitHubIcon from './Icons/GitHubIcon';
import ExternalLink from './Icons/ExternalLink';

function ProjectCard({data}) {
    return (
        <div className="flex flex-col w-[290px] bg-[--projectBg] rounded-lg p-5 m-2">
            <div className="flex justify-between">
                <span className='uppercase font-bold mono'>{data.name}</span>
                <div className="flex">
                    {data.githubRepo && <a href={data.githubRepo} target='_blank'><GitHubIcon/></a>}
                    {data.link && <a href={data.link} className='pl-1' target='_blank'><ExternalLink/></a>}
                </div>
            </div>
            {data.technologies && 
                <div className="flex flex-wrap mono py-2">
                        {data.technologies.map((tech, index) => {
                            return(
                                <div className="bg-[#734ead] text-[--dark-purple] text-xs rounded-full py-1 px-3 mr-1 my-1" key={`tech-${index}`}>{tech}</div>
                            )
                        })}
                </div>
            }
            <p className='text-sm text-[--dark-purple]'>{data.description}</p>
        </div>
    );
}

export default ProjectCard;
