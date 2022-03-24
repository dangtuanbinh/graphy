import React from "react";
import Divider from "@mui/material/Divider";

import Header from "../../component/basic/Header/Header";
import FilterBar from "../../component/basic/FilterBar/FilterBar"
import ImageView from "../../component/view/ImageView/ImageView"
import "./index.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Divider />
      <FilterBar />
      <ImageView />
    </div>
  );
};

export default Home;
