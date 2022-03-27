import React,{ useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import Header from "../../component/basic/Header/Header";
import ImageView from "../../component/view/ImageView/ImageView";
import { getImageList } from "../../state/actions/imageAction";
import "./index.scss";

const Home = () => {
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
    console.log("test");
  };

  return (
    <div className="homeContainer">
      <Header />
      <Divider />
      <ImageView handlePageChange={handlePageChange} data={imageList} searchData={searchList} pagination={pagination} />
    </div>
  );
};

export default Home;
