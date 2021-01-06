import React from "react";
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
import { useChange } from "./changeView";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [controls, element] = useChange();
  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      initial="hidden"
      animate={controls}
      className="services"
    >
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>
              Thank you for checking<br></br> up this site.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Thank you for checking <br></br> up this site.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diagphram</h3>
            </div>
            <p>
              Thank you for checking <br></br> up this site.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>
              Thank you for checking <br></br> up this site.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home" />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
