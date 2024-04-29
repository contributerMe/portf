import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
 
  const currentDate = new Date();
  const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const timeString = `${hours}:${minutes}`;
const timenNow = currentDate.getTime()
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar></Sidebar>
      <div className="wrapper">
        
      <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         {timeString + " | "+ dateString}
        </motion.span>

        <div className="social">
          <a href="https://github.com/contributerMe" > <img src="/public/github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/nimesh-maslekar-7700b4158/" > <img src="/public/linkedin.png" alt="" /></a>
          <a href="#" > <img src="/facebook.png" alt="" /></a>
          <a href="https://www.instagram.com/techno_flash77/" > <img src="/instagram.png" alt="" /></a>
     
        </div>
      </div>
    </div>
  )
}
