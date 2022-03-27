import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

import "./index.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="title">
        <h1>Graphy.</h1>
      </div>

      <div className="iconContainer">
        <button className="iconItem">
          <AiOutlineMessage size={26} />
        </button>
        <button  className="iconItem">
          <FaRegUserCircle size={26} />
        </button>
      </div>
    </div>
  );
};

export default Header;
