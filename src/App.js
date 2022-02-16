
import './App.css';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';


function App() {
  return (
    <div className="App">
      <div className='section'>
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>

    </div>
  );
}

export default App;
