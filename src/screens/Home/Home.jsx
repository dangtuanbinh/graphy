import React from "react";
import Divider from "@mui/material/Divider";

import Header from "../../component/basic/Header/Header";
import ImageView from "../../component/view/ImageView/ImageView";
import "./index.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Divider />
      <ImageView />
    </div>
  );
};

export default Home;
