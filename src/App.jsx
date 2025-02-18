
import React from "react";
import './style.css';
import Logo from './assets/logo.jpg';
import { Link } from 'react-router-dom';
import Cursor from "./cursor";
import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
// import Two from './assets/two.png'
import Three from './assets/three.png'

function App() { 
  // Typewriter effect for ABOUT
  const [aboutText] = useTypewriter({
    words: ['ABOUT'],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });

  // Typewriter effect for WORK
  const [workText] = useTypewriter({
    words: ['WORK'],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });

  return ( 
    <>
      <Cursor />
      <div className="Background">
        <div className="design">
          {/* Updated image with rotation animation */}
          <motion.img 
            src={Three} 
            alt="Decorative rotating element"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 15,          // Adjust duration for rotation speed
              repeat: Infinity,     // Infinite loop
              ease: "linear"        // Smooth consistent rotation
            }}
          /> 
        </div>
        <div className="Logo">
          <img src={Logo} alt="logo" />
        </div>
        
        {/* About Button - Slowly slides in from FAR Right */}
        <motion.div 
          className="About"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut"
          }}
        >
          <Link to="/about" className="aboutstyle">
            {aboutText}
            <TypewriterCursor />
          </Link>
        </motion.div>

        {/* Work Button - Slowly slides in from FAR Left */}
        <motion.div 
          className="work"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut"
          }}
        >
          <Link to="/work" className="workstyle">
            {workText}
            <TypewriterCursor />
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default App;