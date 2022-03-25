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
    <div className="searchBarContainer">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search for Images"
          value={search}
          onChange={handleSearch}
        />
      </form>

      <div className="icon" onClick={onSubmit}>
        <AiOutlineSearch size={35} />
      </div>
    </div>
  );
};

export default SearchBar;
