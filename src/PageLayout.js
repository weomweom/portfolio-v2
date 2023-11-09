//components
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

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
