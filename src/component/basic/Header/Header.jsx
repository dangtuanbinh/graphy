import React from "react";

import "./index.scss";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="title">
        <h1>Graphy.</h1>
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
