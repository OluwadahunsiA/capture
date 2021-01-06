import React from "react";
import athlete from "../images/athlete-small.png";
import goodtimes from "../images/goodtimes-small.png";
import theracer from "../images/theracer-small.png";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

import {
  pageAnimation,
  slider,
  sliderContainer,
  lineAnim,
  fade,
  pictureAnim,
} from "../animation";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="ourwork"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="slide one"></motion.div>
        <motion.div variants={slider} className="slide two"></motion.div>
        <motion.div variants={slider} className="slide three"></motion.div>
        <motion.div variants={slider} className="slide four"></motion.div>
      </motion.div>

      <motion.h2 variants={fade}>The Athlete</motion.h2>
      <motion.div variants={lineAnim} className="rule"></motion.div>
      <Link to="work/the-athlete">
        <motion.img
          variants={pictureAnim}
          className="picture"
          src={athlete}
          alt="an athlete"
        ></motion.img>
      </Link>
      <h2>Goodtimes</h2>
      <div className="rule"></div>
      <Link to="work/good-times">
        <img className="picture" src={goodtimes} alt="good times"></img>
      </Link>
      <h2>The Racer</h2>
      <div className="rule"></div>
      <Link to="work/the-racer">
        <img className="picture" src={theracer} alt="the racer"></img>
      </Link>
    </motion.div>
  );
};

export default OurWork;
