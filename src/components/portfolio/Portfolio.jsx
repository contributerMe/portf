import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Face-Time Tracker",
    img: "https://img.freepik.com/free-vector/appointment-booking-with-woman-checking-smartphone_23-2148558795.jpg?w=740&t=st=1714408226~exp=1714408826~hmac=be1b2590394779029e2c3c18235d08ada448f445cacb30681aae29b6b17cbdd6",
    desc: " Attendance marking and tracking application that tracks attendance and makes use of computer vision libraries to record attendance accurately and seamlessly.",
  },
  {
    id: 2,
    title: "Qpapers",
    img: "https://img.freepik.com/free-vector/realistic-test-paper-composition-with-pencil-stack-students-paperwork-with-marks-correct-answers_1284-54249.jpg?size=626&ext=jpg&ga=GA1.1.597715059.1711172181&semt=ais",
    desc: "A full stack application that provides a centralized data-store of all previous year questions for IIITN Students",
  },
  {
    id: 3,
    title: "ChatMate",
    img: "https://img.freepik.com/premium-vector/young-woman-man-standing-near-screen-phone-chatting-online_187411-79.jpg?w=996",
    desc: "Social media platform using React that redefines online interaction. This dynamic application provides users with a comprehensive suite of features to connect, share, and engage with others in a virtual community",
  },
  {
    id: 4,
    title: "Summariser",
    img: "https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?t=st=1714409524~exp=1714413124~hmac=53cf8a153bbd4eb47ea5e589505a073d741471b90f464a1e27d0eeea88b7526e&w=1060",
    desc: "Text summarizer leveraging the SOTA Fine-Tuned Pegasus model, revolutionizing the way information is condensed and communicated. This advanced system not only summarizes textual content but also processes audio inputs, making it invaluable for meeting summaries and beyond",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img style={{width:600}}src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Source Code</button>
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