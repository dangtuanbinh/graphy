import React from "react";
import "./index.scss"

const filterButton = [
  {
    title: "All",
  },
  {
    title: "Tags",
  },
  {
    title: "Dinosaur",
  },
  {
    title: "Car",
  },
];

const FilterBar = () => {
  return (
    <div className="filterBarContainer">
      {filterButton.map((f) => (
        <button className="button">
          {f.title}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
