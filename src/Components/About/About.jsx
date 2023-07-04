import React from 'react'
import './About.css';
import FrontendDev from '../../img/FrontendDev.jpeg'
import SoftDev from '../../img/SoftDev.png';
import Card from '../../Components/Card/Card';
import Resume from "./Amaan's Resume.pdf";
import { motion } from 'framer-motion';

const About = () => {

  return (
    <div className='about' id='About'>
      {/* left side */}
      <div className="about-me" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <span>About</span>
        <span>Me</span>
        <span>
          Hello, I'm Amaan,a passionate and motivated frontend developer. As a recent graduate with a strong foundation in web development,
          <br />
          I am eager to contribute my skills and creativity to create engaging user experiences on the web.
        </span>
        <motion.a href={Resume} download={Resume}>
          <button className="button a-button">Download Resume</button>
        </motion.a>
      </div>
      {/* right side */}
      <div className="card"></div>
      <motion.div whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 1 }}>
        <Card
          image={FrontendDev}
          heading={'Frontend Developer'}
          detail={"HTML,CSS,BOOTSTRAP,REACTJS"}
        />
        <div>
          <Card
            image={SoftDev}
            heading={'Software Developer'}
            detail={"Python,JavaScript,Java,DSA,Web Technologies,Database,Git & Github"}
          />
        </div>


      </motion.div>
    </div>
  )
}

export default About