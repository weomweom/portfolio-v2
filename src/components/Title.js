function Title({text}) {
    return (
        <div className="w-full h-min px-2.5 flex items-center title mono text-xl mb-16">
            <div className="mr-6">
                {text}
            </div>
            <span className="w-full h-[.5px] bg-[#fff]"></span>
        </div>
    );
}

export default Title;
