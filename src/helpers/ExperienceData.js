const experienceData = [
    {
        date: "aug 2023 - present",
        position: "Junior Frontend developer",
        firm: "Neo-Vinci",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore odio. Nesciunt libero dolores corporis. Animi minima deserunt nostrum? Minima illum dolorum ipsam tempore nemo aut labore sapiente fugit voluptatem!",
        technologie: ["React", "JavaScript", "Tailwind", "Postman", "TypeScript", "HTML", "CSS"]
    },
    {
        date: "aug 2023 - aug 2026",
        position: "Junior Frontend developer",
        firm: "Neo-Vinci",
        opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore odio. Nesciunt libero dolores corporis. Animi minima deserunt nostrum? Minima illum dolorum ipsam tempore nemo aut labore sapiente fugit voluptatem!",
        technologie: ["React", "JavaScript", "Tailwind", "Postman", "TypeScript", "HTML", "CSS",  "JavaScript", "TypeScript", "HTML", "CSS"]
    }
]

function ExperienceData() {
    return (
        <div className="w-full px-12">
            {experienceData.map((item, index) => {
                return(
                    <div className="flex justify-center w-full mb-12" key={`experience-${index}`}>
                        <div className="min-w-[180px] text-right mr-6 text-[#b78aff]">
                            {item.date}
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg mb-4">
                                <span className="mono font-normal">{item.position}</span> • <span className="text-[#b78aff] font-semibold">{item.firm}</span>
                            </div>
                            <p className="mb-5">{item.opis}</p>
                            <div className="flex flex-wrap">
                                {item.technologie.map((tech, index) => {
                                    return(
                                        <div className="bg-[#210048] text-[#b78aff] rounded-full py-1 px-3 mr-1 my-0.5" key={`tech-${index}`}>{tech}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ExperienceData;
