import React from "react";
import { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [ordersList, setOrdersList] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );

  const handleRemoveOrder = (tableNumber) => {
    const newOrdersList = { ...ordersList };
    delete newOrdersList[tableNumber];
    setOrdersList(newOrdersList);
    localStorage.setItem("orders", JSON.stringify(newOrdersList));
  };

  useEffect(() => {
    console.log(ordersList);
  }, []);

  return (
    <div className="main">
      <h1>Orders</h1>
      <div className="">
        {Object.keys(ordersList).map((tableNumber) => (
          <OrderCard
            orderItems={ordersList[tableNumber]}
            tableNumber={tableNumber}
            handleRemoveOrder={handleRemoveOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
