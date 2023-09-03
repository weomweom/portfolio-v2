function Nav() {
  return (
    <div className="w-full bg-[#190036] mono flex justify-between items-cetner fixed right-0 text-base">
        <div></div>
        <div className='flex items-center h-20'>
            <ol>
                <li><a href='./#about'>About</a></li>
                <li><a href='portfolio-v2/#projects'>Projects</a></li>
                <li><a href='portfolio-v2/#experience'>Experience</a></li>
                <li><a href='portfolio-v2/#contact'>Contact</a></li>
            </ol>
            <button className='mr-12 rounded border border-solid border-[#b78aff] w-20 h-8'>Resume</button>
        </div>
    </div>
  );
}

export default Nav;
