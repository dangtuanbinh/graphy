import React, {useState} from "react";

import "./index.scss";
import ImageList from "../../list/ImageList/ImageList";
import ImageModal from "../../modal/ImageModal/ImageModal";

const ImageView = () => {
  const [open,setOpen] = useState(false)


  const openModal = () => {
    setOpen(true)
    console.log("Test")
  }

  const closeModal = () => setOpen(false)

  return (
    <div className="imageContainer">
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <div className="imageList" onClick={openModal}>
        <ImageList />
      </div>
      <ImageModal open={open} onClose={closeModal} />
    </div>
  );
};

export default ImageView;
