import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import "./index.scss";
import ImageList from "../../list/ImageList/ImageList";
import FilterBar from "../../basic/FilterBar/FilterBar";
import { getImageList } from "../../../state/actions/imageAction";
import Pagination from "../../basic/Pagination/Pagination";
import SearchBar from "../../basic/SearchBar/SearchBar";

const ImageView = () => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 30,
    total: 100,
  });
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 30,
  });

  const imageList = useSelector((state) => state.imageReducer.imageList);
  const searchList = useSelector((state) => state.imageReducer.searchList);

  console.log(imageList)

  useEffect(() => {
    const paginationParams = queryString.stringify(filters);
    dispatch(getImageList(paginationParams));
  }, [filters, dispatch]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  const sortByLikes = () => {
    console.log("sort by likes");
  };

  const sortByDate = () => {
    console.log("sort by dates");
  };

  const renderImageList = () => {
    if (!imageList) return null;

    if (searchList.length === 0)
      return imageList?.map((i) => (
        <div key={i.id} className="imageItem">
          <ImageList image={i.urls.full} id={i.id} data={i} />
        </div>
      ));
    return searchList?.map((s) => (
      <div key={s.id} className="imageItem">
        <ImageList image={s.urls.full} id={s.id} data={s} />
      </div>
    ));
  };

  const renderFilterBar = () => {
    const actions = [
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
