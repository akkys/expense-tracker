import React from "react";
import "./Modal.css";
import AddForm from "../AddForm/AddForm";

const Modal = (props) => {
  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <div className="modal-heading ">
          <h3>Add Expense</h3>
          <span className="close" onClick={props.closeModal}>
            &times;
          </span>
        </div>
        <AddForm />
      </div>
    </div>
  );
};

export default Modal;
