import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GENESIS",
    img: "src/components/portfolio/11.png",
    desc: "GENESIS is a multi-agent AI system engineered to identify, evaluate, and operationalize GenAI use cases tailored to specific industries and enterprises. Designed for scalability and adaptability, GENESIS is built on modern generative AI frameworks and supports seamless deployment in enterprise environments.",
    github: "https://github.com/contributerMe/GENESIS",
    tags: ["Generative AI", "Multi-Agent System", "Web scrapping", "Retrival-Augmented Generation"]
  },
  {
    id: 2,
    title: "Face-Time Tracker",
    img: "src/components/portfolio/3.png",
    desc: "FaceTime Tracker is an intelligent attendance management system that leverages advanced computer vision and facial recognition algorithms to automate and streamline the attendance process. The system integrates with a user-friendly web application that displays and manages attendance data, offering seamless access to real-time records and historical tracking analytics.",
    github: "https://github.com/contributerMe/Face-Time-Track",
    tags: ["Computer Vision", "OpenCV", "Face recognition", ]
  },
  {
    id: 3,
    title: "Multi-Label Email Classification",
    img: "src/components/portfolio/6537364.jpg",
    desc: "Multi-label email classification system built using Meta LLaMA 3.1 (8B), fine-tuned with PEFT. Given the subject and body, the model predicts one or more relevant categories from a set of 10. Deployed via Gradio on Hugging Face Spaces for interactive use.",
    github: "https://github.com/contributerMe/multi-label-email-classifier",
    tags: ["LLaMA 3", "Natural Language Processing", "Fine-tuning", "Email Classification"]
  },
  {
    id: 4,
    title: "Multi-Class DDoS Detection",
    img: "src/components/portfolio/4.png",
    desc: "End-to-end cybersecurity solution built from scratch for multi-class DDoS attack detection using LSTM autoencoder and deep neural networks. The system performs real-time network traffic analysis, accurately identifying various types of DDoS attacks with high precision and low false-positive rates. Designed for scalability and robustness, it demonstrates deep learning-based threat detection tailored for modern network environments.",
    github: "https://github.com/Multi-Class-DDoS-Detection/Multi-Class-DDoS-Detection-using-LSTM-Autoencoder",
    tags: ["DNN", "Autoencoder", "Cybersecurity", "DDoS Detection", "LSTM", "Deep Learning"]
  }  
  
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleSourceCode = () => {
    if (item.github) {
      window.open(item.github, '_blank');
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img style={{width: 600}} src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.tags && (
              <div className="tags">
                {item.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
            <button onClick={handleSourceCode}>
              {item.github ? 'View Source Code' : 'Source Code'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;