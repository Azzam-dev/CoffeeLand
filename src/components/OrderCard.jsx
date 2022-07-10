import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Image, Card, Row, Col } from "react-bootstrap";
import "./OrderCard.css";

const OrderCard = ({ tableNumber, orderItems, handleRemoveOrder }) => {
  const { t } = useTranslation();

  return (
    <div key={tableNumber} className="order-container">
      <h4>
        {t("order_for_table")} {tableNumber}
      </h4>
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
          {t("cancel_order")}
        </Button>
      </Row>
    </div>
  );
};

export default OrderCard;
