import React from "react";
import { Form, Button } from "react-bootstrap";
import "./NewOrder.css";

const NewOrder = () => {
  return (
    <div className="main">
      <h1>Form</h1>
      <div className="form-container">
        <Form className="p-2 w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Table number</Form.Label>
            <Form.Control />
            <Form.Text className="text-muted">
              You can find the number on your table.
            </Form.Text>
          </Form.Group>
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
