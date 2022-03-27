import React, { memo } from "react";
import { Avatar } from "@mui/material";
import moment from "moment";
import { AiOutlineCloudDownload, AiOutlineLike } from "react-icons/ai";

import "./index.scss";

const ImageList = memo((props) => {
  const { image, data } = props;
  const { name, profile_image } = data.user;

  return (
    <div data-testid="test_id" className="imageListContainer">
      <div
        className="imageList"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="imageLayer">
          <div className="imageTitle">
            <Avatar alt={name} src={profile_image.medium} />

            <div className="imageText">
              <span className="name">{name}</span>
              <span className="date">
                {moment(data.created_at).format("MMMM Do YYYY, h:mm a")}
              </span>
            </div>
          </div>

          <div className="imageContent">
            <div className="imageLike">
              <span>{data.likes}</span>
              <AiOutlineLike size={25} color="white" />
            </div>

            <div className="imageIcon">
              <AiOutlineCloudDownload size={35} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImageList;
