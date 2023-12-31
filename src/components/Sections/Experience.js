//components
import Title from '../Title';

//data
import { experienceData } from '../../config';

function Experience() {
    return (
        <div className="section" id='experience'>
            <Title text='Experience'/>
            <div className="w-full px-12">
                {experienceData.map((item, index) => {
                    return(
                        <div className={`${index !== experienceData.length - 1 ? "mb-7" : ""} flex justify-center w-full flex-col md:flex-row`} key={`experience-${index}`}>
                            <p className="mono min-w-[200px] text-left mr-6 pb-3 text-[--light-purple] md:text-right md:pb-0">
                                {item.date}
                            </p>
                            <div className="flex flex-col">
                                <p className="text-lg mb-4">
                                    <span className="mono font-normal">{item.position}</span> • <span className="text-[--purple] font-semibold">{item.firm}</span>
                                </p>
                                <p className="mb-5">{item.description}</p>
                                <ul className="flex flex-wrap mono">
                                    {item.technologies.map((tech, index) => {
                                        return(
                                            <li className="bg-[#210048] text-[--light-purple] rounded-full py-1 px-3 mr-1 my-1" key={`tech-${index}`}>{tech}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Experience;
