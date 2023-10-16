import { navLinks } from '../../config.js';
import NavSideBar from './NavSideBar.tsx';
import './Nav.css';

function Nav() {
  return (
    <>
      <div className='w-full h-[var(--navHeight)] bg-[#190036] mono justify-between items-cetner fixed px-8 z-10 hidden md:flex'>
          <div className='flex items-center'>pipus</div>
          <ol className='h-full flex items-center justify-center flex-row'>
            {navLinks.map((item, i) => {
              return(
                <li key={i}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ol>
      </div>
      <NavSideBar/>
    </>
  );
}

export default Nav;
