import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col, Card } from "react-bootstrap";
const Item = ({ title, price, stock, image , description }) => {
    return (
        
      <Row xs={1} md={2} lg={4} className="g-4">
        
          <Col>
            <Card className="card">
            <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image} className="img" />
              <Card.Body>                
                <Card.Text>
                  {description}
                </Card.Text>
                ${price}

            <ItemCount stock={stock} initial={1} ItemName={title} />
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
};

export default Item;