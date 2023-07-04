import React from 'react';
import './Skill.css';
import bootstrap from '../../assets/bootstrap.png';
import react from '../../assets/react.png';
import css from '../../assets/css.png';
import dsa from '../../assets/dsa.png';
import git from '../../assets/git.png';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import mu5 from '../../assets/mu5.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png'
import sql from '../../assets/sql.png';
import { motion } from 'framer-motion';

const Skill = () => {
  return (
    <div className='works' id='Skill' >
      <div className='about-me'>
        <span>My</span>
        <span>Skills</span>
        <span>
          Empowering businesses through intuitive interfaces
          <br />
          Designing the future of user experiences
        </span>
      </div>

      {/* right side */}
      <motion.div className='s-right' whileInView={{ y: [100, 70, 0], opacity: [0, 0, 1] }} transition={{ duration: 1 }}>
        <div className='mainCircle'>
          <div className='secCircle'>
            <img src={bootstrap} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={react} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={javascript} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={mu5} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={html} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={css} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={python} alt='NA' />
          </div >
          <div className='secCircle'>
            <img src={java} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={sql} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={git} alt='NA' />
          </div>
          <div className='secCircle'>
            <img src={dsa} alt='NA' />
          </div>
        </div>


      </motion.div>

    </div>
  )
}

export default Skill