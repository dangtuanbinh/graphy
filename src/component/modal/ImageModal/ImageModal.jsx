import React from "react";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

import "./index.scss";

const ImageModal = (props) => {
  const singleImage = useSelector((state) => state.imageReducer.singleImage)
  console.log(singleImage)

  const { open, onClose } = props;

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className="modalContent">
          <h1>This is modal</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
