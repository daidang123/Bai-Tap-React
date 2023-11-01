import React, { useState } from "react";
import Popup from "./Popup";


const Modal = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="modal">
       <button className="modal-btn" onClick={handleButtonClick}>
      Launch demo modal
    </button>
      {showPopup && <Popup onCloseClick={handleClosePopup}></Popup>}
    </div>
  );
};

export default Modal;
