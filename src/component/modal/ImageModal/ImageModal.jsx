import React from "react";
import Modal from "@mui/material/Modal";

import "./index.scss";

const ImageModal = (props) => {
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
