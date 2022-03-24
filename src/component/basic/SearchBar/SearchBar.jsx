import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./index.scss";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input className="input" type="text" placeholder="Search for Images"/>

      <div className="icon">
        <AiOutlineSearch size={35} />
      </div>
    </div>
  );
};

export default SearchBar;
