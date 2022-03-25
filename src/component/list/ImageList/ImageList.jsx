import React, {memo} from "react";

import "./index.scss";

const ImageList = memo((props) => {
  
  const { image } = props;

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
});

export default ImageList;
