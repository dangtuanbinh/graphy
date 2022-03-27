import React, { useState, useEffect } from "react";

import "./index.scss";
import ImageList from "../../list/ImageList/ImageList";
import FilterBar from "../../basic/FilterBar/FilterBar";
import Pagination from "../../basic/Pagination/Pagination";
import SearchBar from "../../basic/SearchBar/SearchBar";

const ImageView = (props) => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    setFilterList(props.data)
  }, [props.data])
  
  const {data,searchData, handlePageChange, pagination} = props

  const sortByLikes = () => {
    const filterList = data
      .map((i) => i)
      .sort((a, b) => b.likes - a.likes);
    setFilterList(filterList);
  };

  const sortByDate = () => {
    console.log("sort by dates");
  };

  const all = () => {
    setFilterList(data);
  };

  const renderImageList = () => {
    if (!data) return null;

    if (searchData.length === 0)
      return filterList && filterList?.map((i) => (
        <div key={i.id} className="imageItem">
          <ImageList image={i.urls.full} id={i.id} data={i} />
        </div>
      ));
    return searchData?.map((s) => (
      <div key={s.id} className="imageItem">
        <ImageList image={s.urls.full} id={s.id} data={s} />
      </div>
    ));
  };

  const renderFilterBar = () => {
    const actions = [
      {
        name: "All",
        action: () => all(),
      },
      {
        name: "Most Liked",
        action: () => sortByLikes(),
      },
      {
        name: "New",
        action: () => sortByDate(),
      },
    ];
    return <FilterBar actions={actions} />;
  };

  return (
    <div className="viewContainer">
      <div className="imageConfig">
        {renderFilterBar()}
        <SearchBar />
      </div>

      <div className="imageContainer">{renderImageList()}</div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default ImageView;
