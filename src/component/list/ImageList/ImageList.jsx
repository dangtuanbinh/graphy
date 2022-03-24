import React from "react";

import "./index.scss";

const ImageList = (props) => {
  const { image } = props;
  console.log(image);

  return (
    <div
      className="imageList"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default ImageList;
