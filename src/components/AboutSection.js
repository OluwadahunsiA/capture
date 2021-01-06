import React from "react";
import home1 from "../images/home1.png";
import { motion } from "framer-motion";
import Wave from "./wave";
import Back from "./particle";
import { Link } from "react-router-dom";

import { pageAnimation, titleAnim, pictureAnim, fade } from "../animation";

const AboutSection = () => {
  return (
    <motion.div variants={pageAnimation} className="welcomePage">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          Contact us for your best pictures and you will not regret doing so.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </div>
      <div className="image">
        <motion.img
          variants={pictureAnim}
          src={home1}
          alt="a man with camera"
        ></motion.img>
      </div>
      <Wave />
    </motion.div>
  );
};

export default AboutSection;
