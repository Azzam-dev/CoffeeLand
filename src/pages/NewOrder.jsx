import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./NewOrder.css";

const NewOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexNames = ["First", "Second", "Third", "Fourth", "Fifth"];
  const [tableNumber, setTableNumber] = useState("");
  const [orderItemsList, setOrderItemsList] = useState([""]);

  const ordersList = (() => {
    const list = localStorage.getItem("orders");
    return list === null ? {} : JSON.parse(list);
  })();

  const handleChangeItem = (item, index) => {
    const list = [...orderItemsList];
    list[index] = item;
    setOrderItemsList(list);
  };

  const handleRemoveItem = (index) => {
    const list = [...orderItemsList];
    list.splice(index, 1);
    setOrderItemsList(list);
  };

  const handleAddItem = () => {
    setOrderItemsList([...orderItemsList, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tableNumber > 0) {
      ordersList[tableNumber] = orderItemsList;
      localStorage.setItem("orders", JSON.stringify(ordersList));
      navigate("/orders");
    }
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("orders")));
  }, []);

  return (
    <div className="main">
      <h1>{t("new_order")}</h1>
      <div className="form-container">
        <Form className="p-2 w-100" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 ">
            <Form.Label>{t("table_number")}</Form.Label>
            <Form.Control
              type="number"
              required
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <Form.Text className="text-muted">
              {t("table_number_description")}
            </Form.Text>
          </Form.Group>

          {orderItemsList.map((item, index) => (
            <Form.Group key={index} className="mb-3 form-group">
              <Row>
                <Form.Label>{indexNames[index]} item</Form.Label>
                <Col className="mb-3">
                  <Form.Control
                    placeholder="Latte"
                    value={item}
                    onChange={(e) => handleChangeItem(e.target.value, index)}
                    required
                  />
                </Col>

                {orderItemsList.length !== 1 && (
                  <Col lg={4}>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <span> {t("remove")} </span>
                    </Button>
                  </Col>
                )}
              </Row>
              <div className="add-itemBTN d-grid">
                {orderItemsList.length - 1 === index &&
                  orderItemsList.length < 5 && (
                    <Button variant="secondary" onClick={handleAddItem}>
                      <span>{t("add_item")}</span>
                    </Button>
                  )}
              </div>
            </Form.Group>
          ))}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="dark" type="submit">
              {t("save_order")}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewOrder;
