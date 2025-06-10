import "./hero.scss";
import React from "react";
import { motion } from "framer-motion";
import Typed from 'typed.js';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
 
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['  Web developer', ' Programmar', 'AI engineer', 'GenAI developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 500,
      loop:true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (


    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Nimesh Maslekar</motion.h2>
          <motion.h1 variants={textVariants}>
           I am a <span className="spantag" style ={{color:"orange"}}ref={el} />
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://github.com/contributerMe">See Projects</a>
            </motion.button>
            <motion.button variants={textVariants}><a href={`#Contact`}>Contact Me</a></motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
      Machine Learning &nbsp;  Web Dev &nbsp; Problem Solving
      </motion.div>
      <div className="imageContainer">
        <img src='/hero-img.webp' alt="" />
      </div>
    </div>
  );
};

export default Hero;