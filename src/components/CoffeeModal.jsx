import React from "react";
import "./CoffeeModal.css";

const CoffeeModal = ({ coffee, setOpenModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <img src={coffee.image} alt={coffee.title} />
        <div className="modal-closeBTN">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-title">
          <h1>{coffee.title}</h1>
        </div>
        <div className="modal-body">
          <p>{coffee.description}</p>
        </div>
        <div className="modal-footer">
          <h2>Coffee Ingredients</h2>
          <h3>{coffee.ingredients.join(", ")}</h3>
        </div>
      </div>
    </div>
  );
};

export default CoffeeModal;
