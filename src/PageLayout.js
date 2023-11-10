//components
import Nav from './components/Nav/Nav';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';

//styles
import './index.css';
import Note from './components/Note';

function PageLayout() {
  return (
    <div>
      <Nav/>
      <div className='max-w-[1000px] my-0 mx-auto'>
        {/*<Home/>*/}
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
      <Note/>
    </div>
  );
}

export default PageLayout;
