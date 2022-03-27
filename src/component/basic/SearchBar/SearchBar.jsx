import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import queryString from "query-string";

import "./index.scss";
import { searchImageList } from "../../../state/actions/imageAction";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 9,
    query: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    setFilters({
      ...filters,
      query: search,
    });
    const searchParams = queryString.stringify(filters);
    dispatch(searchImageList(searchParams));
  };

  return (
    <div className="searchBarContainer" data-testid="search">
      <input
        className="input"
        type="text"
        placeholder="Search for Images (E.g.office,car,cat...)"
        value={search}
        onChange={handleSearch}
        onSubmit={onSubmit}
      />

      <div className="icon">
        <button type="submit" onClick={onSubmit} className="submitButton">
          <AiOutlineSearch size={35} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
