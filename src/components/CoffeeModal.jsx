import React from "react";
import "./CoffeeModal.css";

const CoffeeModal = ({ coffee, setOpenModal }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-image">
          <img src={coffee.image} alt={coffee.title} />
        </div>
        <div className="modal-closeBTN">
          <button onClick={handleClose}>X</button>
        </div>
        <div className="modal-title">
          <h1>{coffee.title}</h1>
        </div>
        <div className="modal-body">
          <p>{coffee.description}</p>
        </div>
        <div className="modal-footer">
          <p>Ingredients:</p>
          <p>{coffee.ingredients.join(", ")}</p>
        </div>
      </div>
      <div className="modal-overlay" onClick={handleClose}></div>
    </div>
  );
};

export default CoffeeModal;
