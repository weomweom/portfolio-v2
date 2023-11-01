import { useState, useEffect } from 'react';
import { navLinks } from '../../config.js';
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
    <div className='w-full mono flex flex-col items-cetner fixed z-10 md:hidden'>
        <div className='h-[var(--navHeight)] w-full flex justify-end items-center bg-[#190036] px-8 z-[2]'>
          <button onClick={() => toggleMenu()}>
            <div className="hamburger">
              {hamburger.map((item, index) => (
                <div className={`${isMenuOpen ? 'active' + (index+1) : ''} line`} key={index}></div>
              ))}
            </div>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'expanded' : 'closed'} h-[calc(100dvh-var(--navHeight))] bg-[#190036]`}>
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
