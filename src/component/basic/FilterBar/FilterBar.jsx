import React from "react";
import "./index.scss"

const FilterBar = (props) => {

  const {actions} = props

  return (
    <div className="filterBarContainer">
      {actions.map((a, index) => (
        <button key={index} className="filterButton" onClick={a.action}>
          {a.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
