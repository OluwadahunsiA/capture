import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I start?">
          <div className="question">
            <div className="answer">
              <p>Thank you for visiting this site</p>
              <p>Thank you for visiting this site</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="question">
            <div className="answer">
              <p>Thank you for visiting this site</p>
              <p>Thank you for visiting this site</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="question">
            <div className="answer">
              <p>Thank you for visiting this site</p>
              <p>Thank you for visiting this site</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="question">
            <div className="answer">
              <p>Thank you for visiting this site</p>
              <p>Thank you for visiting this site</p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </div>
  );
};

export default FaqSection;
