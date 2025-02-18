// import React from "react";
// import './style.css';
// import Logo from './assets/Logo.jpg';
// import { Link } from 'react-router-dom';
// import Cursor from "./cursor";
// import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';

// function App() { 
//   // Typewriter effect for ABOUT
//   const [aboutText] = useTypewriter({
//     words: ['ABOUT'],
//     loop: true,
//     typeSpeed: 200,
//     deleteSpeed: 100,
//     delaySpeed: 1500,
//   });

//   // Typewriter effect for WORK
//   const [workText] = useTypewriter({
//     words: ['WORK'],
//     loop: true,
//     typeSpeed: 200,
//     deleteSpeed: 100,
//     delaySpeed: 1500,
//   });

//   return ( 
//     <>
//       <Cursor />
//       <div className="Background">
//         <div className="Logo">
//           <img src={Logo} alt="logo" />
//         </div>
        
//         <div className="About">
//           <Link to="/about" className="aboutstyle">
//             {aboutText}
//             <TypewriterCursor />
//           </Link>
//         </div>

//         <div className="work">
//           <Link to="/work" className="workstyle">
//             {workText}
//             <TypewriterCursor />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import './style.css';
// import Logo from './assets/Logo.jpg';
// import { Link } from 'react-router-dom';
// import Cursor from "./cursor";
// import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';
// import { motion } from "framer-motion";

// function App() { 
//   // Typewriter effect for ABOUT
//   const [aboutText] = useTypewriter({
//     words: ['ABOUT', 'WHO WE ARE', 'INFO'],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 1500,
//   });

//   // Typewriter effect for WORK
//   const [workText] = useTypewriter({
//     words: ['WORK', 'PROJECTS', 'CREATIONS'],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 1500,
//   });

//   return ( 
//     <>
//       <Cursor />
//       <div className="Background">
//         <div className="Logo">
//           <img src={Logo} alt="logo" />
//         </div>
        
//         {/* About Button - Slides from Right to Left */}
//         <motion.div 
//           className="About"
//           initial={{ x: 100, opacity: 0 }}  // Start position
//           animate={{ x: 0, opacity: 1 }}   // End position
//           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
//         >
//           <Link to="/about" className="aboutstyle">
//             {aboutText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>

//         {/* Work Button - Slides from Left to Right */}
//         <motion.div 
//           className="work"
//           initial={{ x: -100, opacity: 0 }} // Start position
//           animate={{ x: 0, opacity: 1 }}   // End position
//           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
//         >
//           <Link to="/work" className="workstyle">
//             {workText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import './style.css';
// import Logo from './assets/Logo.jpg';
// import { Link } from 'react-router-dom';
// import Cursor from "./cursor";
// import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';
// import { motion } from "framer-motion";

// function App() { 
//   // Typewriter effect for ABOUT
//   const [aboutText] = useTypewriter({
//     words: ['ABOUT', 'WHO WE ARE', 'INFO'],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 1500,
//   });

//   // Typewriter effect for WORK
//   const [workText] = useTypewriter({
//     words: ['WORK', 'PROJECTS', 'CREATIONS'],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 1500,
//   });

//   return ( 
//     <>
//       <Cursor />
//       <div className="Background">
//         <div className="Logo">
//           <img src={Logo} alt="logo" />
//         </div>
        
//         {/* About Button - Slides from FAR Right to Left */}
//         <motion.div 
//           className="About"
//           initial={{ x: "100vw", opacity: 0 }}  // Starts completely off-screen (right)
//           animate={{ x: 0, opacity: 1 }}       // Ends at normal position
//           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
//         >
//           <Link to="/about" className="aboutstyle">
//             {aboutText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>

//         {/* Work Button - Slides from FAR Left to Right */}
//         <motion.div 
//           className="work"
//           initial={{ x: "-100vw", opacity: 0 }} // Starts completely off-screen (left)
//           animate={{ x: 0, opacity: 1 }}       // Ends at normal position
//           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
//         >
//           <Link to="/work" className="workstyle">
//             {workText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default App;


// import React from "react";
// import './style.css';
// import Logo from './assets/Logo.jpg';
// import { Link } from 'react-router-dom';
// import Cursor from "./cursor";
// import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';
// import { motion } from "framer-motion";
// import Two from './assets/two.png'
// import Three from './assets/three.png'

// function App() { 
//   // Typewriter effect for ABOUT
//   const [aboutText] = useTypewriter({
//     words: ['ABOUT'],
//     loop: true,
//     typeSpeed: 200,
//     deleteSpeed: 100,
//     delaySpeed: 1500,
//   });

//   // Typewriter effect for WORK
//   const [workText] = useTypewriter({
//     words: ['WORK'],
//     loop: true,
//     typeSpeed: 200,
//     deleteSpeed: 100,
//     delaySpeed: 1500,
//   });

//   return ( 
//     <>
//       <Cursor />
//       <div className="Background">
//         <div className="design">
//         <img src={Three} alt="" srcset="" />
//         </div>
//         <div className="Logo">
//           <img src={Logo} alt="logo" />
//         </div>
        
//         {/* About Button - Slowly slides in from FAR Right */}
//         <motion.div 
//           className="About"
//           initial={{ x: "100vw", opacity: 0 }}  // Start completely off-screen (right)
//           animate={{ x: 0, opacity: 1 }}       // Move to normal position
//           transition={{ 
//             duration: 2.5,  // Slower movement (2.5s)
//             ease: "easeInOut"  // Smooth easing
//           }}
//         >
//           <Link to="/about" className="aboutstyle">
//             {aboutText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>

//         {/* Work Button - Slowly slides in from FAR Left */}
//         <motion.div 
//           className="work"
//           initial={{ x: "-100vw", opacity: 0 }} // Start completely off-screen (left)
//           animate={{ x: 0, opacity: 1 }}       // Move to normal position
//           transition={{ 
//             duration: 2.5,  // Slower movement (2.5s)
//             ease: "easeInOut"  // Smooth easing
//           }}
//         >
//           <Link to="/work" className="workstyle">
//             {workText}
//             <TypewriterCursor />
//           </Link>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default App;


import React from "react";
import './style.css';
import Logo from './assets/Logo.jpg';
import { Link } from 'react-router-dom';
import Cursor from "./cursor";
import { useTypewriter, Cursor as TypewriterCursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import Two from './assets/two.png'
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