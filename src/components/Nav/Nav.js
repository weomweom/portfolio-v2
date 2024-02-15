//components
import NavSideBar from './NavSideBar.js';

//img
import logo from '../../img/logo.png';

//data
import { navLinks } from '../../config.js';

//styles
import './Nav.css';

function Nav() {
  return (
    <>
      <div className='w-full h-[--navHeight] bg-[--dark-purple] mono justify-between sticky top-0 px-8 z-10 hidden md:flex'>
          <div className='lg:ml-10 self-center'>
            <a href='./#'><img className='h-[calc(var(--navHeight)-30px)]' src={logo} alt='K logo'/></a>
          </div>
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
