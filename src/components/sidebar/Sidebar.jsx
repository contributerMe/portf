import { useState } from "react"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"
import "./sidebar.scss"

const varients = {
  open:{
    clipPath: "circle(1200px at 50px 50px)",
    transition:{
      type :"spring",
      stiffness:20,
    }
  },
  closed:{
    clipPath: "circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type :"spring",
      stiffness:400,
      damping:40,
    },
  },
};
export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  )
}
