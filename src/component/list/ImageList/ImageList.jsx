import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";

import ImageModal from "../../modal/ImageModal/ImageModal";
import { getSingleImage } from "../../../state/actions/imageAction";
import "./index.scss";

const ImageList = memo((props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { image, id } = props;

  const openModal = () => {
    setOpen(true);
    dispatch(getSingleImage(id));
  };

  const closeModal = () => setOpen(false);
  return (
    <div>
      <div
        data-testid="test_id"
        className="imageList"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={openModal}
      ></div>
      <ImageModal open={open} onClose={closeModal} />
    </div>
  );
});

export default ImageList;
