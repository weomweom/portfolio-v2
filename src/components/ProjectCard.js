function ProjectCard({data}) {
    return (
        <a target="_blank" rel="noreferrer" href={data.link ? data.link : data.githubRepo} className="flex flex-col w-[290px] bg-[--projectBg] rounded-lg p-5 transition hover:scale-105">
            <h6 className='uppercase font-bold mono'>{data.name}</h6>
            {data.technologies && 
                <ul className="flex flex-wrap mono py-2">
                        {data.technologies.map((tech, index) => {
                            return(
                                <li className="bg-[#734ead] text-[--dark-purple] text-xs rounded-full py-1 px-3 mr-1 my-1" key={`tech-${index}`}>{tech}</li>
                            )
                        })}
                </ul>
            }
            <p className='text-sm text-[--dark-purple]'>{data.description}</p>
        </a>
    );
}

export default ProjectCard;
