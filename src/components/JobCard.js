function JobCard() {
    return (
        <div className="w-full h-min flex items-center title mono text-xl mb-10">
            <div className="mr-6">
                {text}
            </div>
            <span className="w-full h-[.5px] bg-[#fff]"></span>
        </div>
    );
}

export default JobCard;
