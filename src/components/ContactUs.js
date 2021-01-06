import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

//for particles
import Back from "./particle";
const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="contact"
    >
      <Back />
      <motion.h1 style={{ color: "#23d997" }} variants={titleAnim}>
        Get in touch
      </motion.h1>
      <div className="contactList" variants={titleAnim}>
        <p>Telephone: +7 (999) xxx-xx-xx </p>
        <p>Email: xxxxx@gmail.com</p>
        <p>Address: 79th ultimate street, 110923, City. </p>
      </div>
    </motion.div>
  );
};

export default ContactUs;
