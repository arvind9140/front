import React from 'react'
import './Footer.css'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
    <div>
      <Typography variant="h5">About Me</Typography>
      <Typography>
        Hey, My name is Arvind Kumar Maurya. I am a Full-Stack Developer .
      </Typography>

      <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
      </Link>
    </div>
     <div>
     <Typography variant="h6">Social Media</Typography>
     <a href="https://github.com/arvind9140" target="black">
       <BsGithub />
     </a>
     
     
     <a href="https://www.instagram.com/ar789_maurya/" target="black">
       <BsInstagram />
     </a>
     <a href="https://www.linkedin.com/in/arvind-maurya-b96492216/" target="black">
       <BsLinkedin />
     </a>
   </div>
   </div>
  )
}

export default Footer