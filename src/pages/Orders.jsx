import React from "react";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import "./Orders.css";

const Orders = () => {
  const [ordersList, setOrdersList] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );

  const handleRemoveOrder = (tableNumber) => {
    const newOrdersList = { ...ordersList };
    delete newOrdersList[tableNumber];
    setOrdersList(newOrdersList);
    localStorage.setItem("orders", JSON.stringify(ordersList));
  };

  useEffect(() => {
    console.log(ordersList);
  }, []);

  return (
    <div className="main">
      <h1>Orders</h1>
      {Object.keys(ordersList).map((tableNumber) => (
        <div key={tableNumber} className="order-container">
          <h3>this order is for table: {tableNumber}</h3>
          {ordersList[tableNumber].map((item, index) => (
            <h4>{item}</h4>
          ))}
          <Row>
            <Button
              variant="danger"
              onClick={() => handleRemoveOrder(tableNumber)}
            >
              remove
            </Button>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Orders;
