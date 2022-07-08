import React from "react";
import { Button, Image, Card, Row, Col } from "react-bootstrap";
import "./OrderCard.css";

const OrderCard = ({ tableNumber, orderItems, handleRemoveOrder }) => {
  return (
    <div key={tableNumber} className="order-container">
      <h4>Order For Table: {tableNumber}</h4>
      {orderItems.map((item, index) => (
        <Card className="my-3" key={index}>
          <Row>
            <Col>
              <div className="item-image">
                <Image
                  height={80}
                  width={100}
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg"
                  rounded
                />
              </div>
            </Col>
            <Col>
              <h4>{item}</h4>
              <p>{item}</p>
            </Col>
          </Row>
        </Card>
      ))}
      <Row>
        <Button variant="danger" onClick={() => handleRemoveOrder(tableNumber)}>
          Cancel Order
        </Button>
      </Row>
    </div>
  );
};

export default OrderCard;
