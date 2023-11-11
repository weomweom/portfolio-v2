//hooks
import { useState, useEffect } from 'react';

//img
import logo from '../../img/logo.png';

//data
import { navLinks } from '../../config.js';

//styles
import './Nav.css';

function NavSideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const hamburger = Array(3).fill(null);

  return (
    <div className={`w-full mono flex flex-col items-cetner sticky top-0 md:hidden`}>
        <div className='h-[--navHeight] w-full flex justify-between bg-[--dark-purple] px-8 z-[2]'>
          <div className='lg:ml-10 self-center'>
            <a href='./#'><img className='h-[calc(var(--navHeight)-30px)]' src={logo}/></a>
          </div>
          <button onClick={() => toggleMenu()}>
            <div className="hamburger">
              {hamburger.map((item, index) => (
                <div className={`${isMenuOpen ? 'active' + (index+1) : ''} line`} key={index}></div>
              ))}
            </div>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'expanded' : 'closed'} w-full h-[calc(100dvh-var(--navHeight))] bg-[--dark-purple]`}>
            <ol className='flex flex-col h-full items-center justify-center'>
                {navLinks.map((item, i) => {
                return(
                    <li key={i} className='py-4'>
                    <a href={item.link} onClick={() => toggleMenu()}>{item.name}</a>
                    </li>
                )
                })}
            </ol>
        </div>
    </div>
  );
}

export default NavSideBar;
