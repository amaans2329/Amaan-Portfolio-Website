import './App.css';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skill from './Components/Skills/Skill';
import { useContext } from "react";
import { themeContext } from '../src/Context';
import Contact from '../src/Components/Contact/Contact';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar/>
      <Intro/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      
    </div>
  );
}

export default App;
