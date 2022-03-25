import React from "react";
import "./index.scss"

const filterButton = [
  {
    title: "Most liked",
  },
  {
    title: "New",
  },
];

const FilterBar = () => {
  return (
    <div className="filterBarContainer">
      {filterButton.map((f, index) => (
        <button key={index} className="filterButton">
          {f.title}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
