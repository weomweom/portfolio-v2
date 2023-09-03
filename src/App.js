//components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Title from './helpers/Title';

//styles
import './App.css';

function App() {
  return (
    <div className="App flex justify-center">
      <Nav/>
      <div className='w-[1000px]'>
        <section>
          <Home/>
        </section>
        <section id='about' className='pt-32'>
          <Title text='About'/>
          <About/>
        </section>
        <section id='projects' className='pt-32'>
          <Title text='Projects'/>
          <Projects/>
        </section>
        <section id='experience'>
          <Title text='Experience'/>
          <Experience/>
        </section>
        <section id='contacts'>
          <Title text='Contacts'/>
        </section>
      </div>
    </div>
  );
}

export default App;
