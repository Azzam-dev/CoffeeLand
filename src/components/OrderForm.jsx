import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button, Row, Col } from "react-bootstrap";

const OrderForm = ({ handleSubmit }) => {
  const { t } = useTranslation();

  const indexNames = ["First", "Second", "Third", "Fourth", "Fifth"];
  const [tableNumber, setTableNumber] = useState("");
  const [orderItemsList, setOrderItemsList] = useState([""]);

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

  return (
    <div className="form-container">
      <Form
        className="p-2 w-100"
        onSubmit={(event) => handleSubmit(event, tableNumber, orderItemsList)}
      >
        <Form.Group className="mb-3 ">
          <Form.Label data-testid="formLabel">{t("table_number")}</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="20"
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
  );
};

export default OrderForm;
