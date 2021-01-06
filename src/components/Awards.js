import React from "react";
import movieState from "./movieState";

const Awards = ({ title, description }) => {
  return (
    <div className="awards">
      <div>
        <h3 className="awardsTitle">{title}</h3>
        <div className="rule"></div>
        <p className="awardsDescription">{description}</p>
      </div>
    </div>
  );
};

export default Awards;
