import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Lang from '../../img/Lang.jpeg';
import Devlop from '../../img/Devlop.jpeg';

const Intro = () => {

  return (
    <div className="intro">
      <div className="i-left">
        <motion.div className="i-name" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
          <span>Hi! I am</span>
          <span>Amaan Shaikh</span>
          <span> As a Frontend Developer
            Creating seamless user interactions with elegant and responsive designs.</span>
        </motion.div>
        <motion.button className="button i-button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          Hire Me
        </motion.button>
        <div className="i-icon">
          <div style={{ color: 'purple' }}>
            <a href="https://github.com/amaans2329"> <GitHubIcon /></a>
            <a href="https://www.instagram.com/heyamaan_"> <InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/amaan-shaikh-aa7695232/"> <LinkedInIcon /></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div>
          <FloatingDiv image={Lang} txt1="Web" txt2="Developer" />
        </div>
        <div>
          <FloatingDiv image={Devlop} txt1="UI" txt2="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
