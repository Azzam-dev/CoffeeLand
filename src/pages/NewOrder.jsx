import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OrderForm } from "../components";

import "./NewOrder.css";

const NewOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ordersList = (() => {
    const list = localStorage.getItem("orders");
    return list === null ? {} : JSON.parse(list);
  })();

  const handleSubmit = (event, tableNumber, orderItemsList) => {
    event.preventDefault();
    if (tableNumber > 0 && tableNumber <= 20) {
      ordersList[tableNumber] = orderItemsList;
      localStorage.setItem("orders", JSON.stringify(ordersList));
      navigate("/orders");
    }
  };

  return (
    <div className="main">
      <h1>{t("new_order")}</h1>
      <OrderForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewOrder;
