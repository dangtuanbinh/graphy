import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
import ImageList from "../../list/ImageList/ImageList";
import ImageModal from "../../modal/ImageModal/ImageModal";
import { getImageList } from "../../../state/actions/imageAction";

const ImageView = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageList());
  }, []);

  const imageList = useSelector((state) => state.imageReducer.imageList);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const renderImageList = () => {
    if (!imageList) return null;
    return imageList?.map((i) => 
      (
        <div key={i.id} onClick={openModal}>
          <ImageList image={i.urls.full} />
        </div>
    ));
  };

  return (
    <div className="imageContainer">
      {renderImageList()}
      <ImageModal open={open} onClose={closeModal} />
    </div>
  );
};

export default ImageView;
