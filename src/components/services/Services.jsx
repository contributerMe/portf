import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
     whileInView="animate"
     
    >
    
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b style={{color:"orange"}}>About</motion.b> Me
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
       
        <h2>
          <motion.span whileHover={{color:"orange"}} > </motion.span>
        I'm an computer science student in my prefinal year at IIIT Nagpur. I'm skilled in  <motion.span whileHover={{color:"orange"}} > MERN stack web development </motion.span>. I have a strong background in both frontend and backend technologies, having solved over  <motion.span whileHover={{color:"orange"}} > 500</motion.span> coding problems on a variety of coding platforms. My practical background in developing dependable web application is evidence of my commitment to creating effective solutions. With my creative thinking and dedication to quality, I'm ready to contribute significantly to the team and am eager to keep learning about and experimenting with new technologies.
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default Services;