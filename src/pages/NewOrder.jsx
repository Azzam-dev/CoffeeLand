import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./NewOrder.css";

const NewOrder = () => {
  const indexNames = ["First", "Second", "Third", "Fourth", "Fifth"];
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
    <div className="main">
      <h1>Form</h1>
      <div className="form-container">
        <Form className="p-2 w-100">
          <Form.Group className="mb-3 ">
            <Form.Label>Table number</Form.Label>
            <Form.Control required />
            <Form.Text className="text-muted">
              You can find the number on your table.
            </Form.Text>
          </Form.Group>

          {orderItemsList.map((item, index) => (
            <Form.Group key={index} className="mb-3 form-group">
              <Row className="item-row">
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
                      <span> remove </span>
                    </Button>
                  </Col>
                )}
              </Row>
              <div className="add-itemBTN d-grid">
                {orderItemsList.length - 1 === index &&
                  orderItemsList.length < 5 && (
                    <Button variant="secondary" onClick={handleAddItem}>
                      <span>add item</span>
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
              Save Order
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewOrder;
