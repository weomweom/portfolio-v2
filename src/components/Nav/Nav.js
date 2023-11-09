//components
import NavSideBar from './NavSideBar.js';

//data
import { navLinks } from '../../config.js';

//styles
import './Nav.css';

function Nav() {
  return (
    <>
      <div className='w-full h-[--navHeight] bg-[--dark-purple] mono justify-end items-cetner fixed px-8 z-10 hidden md:flex'>
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
