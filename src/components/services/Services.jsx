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
       
        {/* <h2>
          <motion.span style={{color:"orange"}} > </motion.span>
        I'm an computer science student in my prefinal year at IIIT Nagpur. I'm skilled in  <motion.span whileHover={{color:"orange"}} > MERN stack web development </motion.span>. I have a strong background in both frontend and backend technologies, having solved over  <motion.span whileHover={{color:"orange"}} > 500</motion.span> problems on a variety of coding platforms. My practical background in developing dependable web application is evidence of my commitment to creating effective solutions. With my creative thinking and dedication to quality, I'm ready to contribute significantly to the team and am eager to keep learning about and experimenting with new technologies.
        </h2> */}

          <h2
  style={{
    textAlign: "justify",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    padding: "20px",
    fontSize: "20px",
  }}
>
  I am a computer science graduate from IIIT Nagpur with a strong foundation in core computer science principles and hands-on experience in building scalable software solutions. My expertise lies in{" "}
  <motion.span whileHover={{ color: "orange" }}>
    Generative AI, Natural Language Processing (NLP), and Deep Learning
  </motion.span>
  , along with{" "}
  <motion.span whileHover={{ color: "orange" }}>
    full-stack web development using the MERN stack
  </motion.span>
  .

  <br />
  <br />
  I have solved over{" "}
  <motion.span whileHover={{ color: "orange" }}>
    900 problems
  </motion.span>{" "}
  across competitive programming and coding platforms, which has enhanced my algorithmic thinking and problem-solving abilities. My experience includes developing{" "}
  <motion.span whileHover={{ color: "orange" }}>
    robust, efficient, and production-ready web applications
  </motion.span>
  . I am a quick learner, a collaborative team player, and consistently strive to stay updated with emerging technologies to build impactful and reliable software systems.
</h2>


      </motion.div>
    </motion.div>
  );
};

export default Services;