import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <nav className="navigation">
        <Link to="/">
          <h1 className="cap">Capture</h1>
        </Link>

        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Our Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
