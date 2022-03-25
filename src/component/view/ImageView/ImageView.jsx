import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import "./index.scss";
import ImageList from "../../list/ImageList/ImageList";
import ImageModal from "../../modal/ImageModal/ImageModal";
import FilterBar from "../../basic/FilterBar/FilterBar";
import { getImageList } from "../../../state/actions/imageAction";
import Pagination from "../../basic/Pagination/Pagination";
import SearchBar from "../../basic/SearchBar/SearchBar";

const ImageView = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 9,
    total: 100,
  });
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 9,
  });

  const imageList = useSelector((state) => state.imageReducer.imageList);
  const searchList = useSelector((state) => state.imageReducer.searchList);
  console.log({ searchList, imageList });
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

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const renderImageList = () => {
    if (!imageList) return null;

    if (searchList.length === 0)
      return imageList?.map((i) => (
        <div key={i.id} onClick={openModal}>
          <ImageList image={i.urls.full} />
        </div>
      ));
    return searchList?.map((s) => (
      <div key={s.id} onClick={openModal}>
        <ImageList image={s.urls.full} />
      </div>
    ));
  };

  return (
    <div className="viewContainer">
      <div className="imageConfig">
        <FilterBar />
        <SearchBar />
      </div>

      <div className="imageContainer">{renderImageList()}</div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <ImageModal open={open} onClose={closeModal} />
    </div>
  );
};

export default ImageView;
