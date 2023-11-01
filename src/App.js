//components
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

//styles
import './index.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='max-w-[1000px] my-0 mx-auto'>
        <Home/>
        <About/>
        {/*<Section id='projects'>
          <Title text='Projects'/>
          <Projects/>
        </Section>*/}
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
