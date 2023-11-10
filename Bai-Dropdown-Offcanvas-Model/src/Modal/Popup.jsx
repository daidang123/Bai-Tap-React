import React from "react";
const Popup = ({onCloseClick}) => {
    
  return (
    <div className="modal-main animate-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Modal title</h1>
            <button className="close" onClick={onCloseClick}>
             X
            </button>
          </div>
          <div className="modal-body">
            Woo-hoo, you're reading this text in a modal!
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCloseClick}>Close</button>
            <button className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;