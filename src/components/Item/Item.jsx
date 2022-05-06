import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ title, price, stock, image , description, id }) => {
    return (
        
      <Row xs={1} md={2} lg={4} className="g-4">
        
          <Col>
            <Card className="card">
            
              <Card.Img variant="top" src={image} className="img" />
              <Card.Title>{title}</Card.Title>
              <Card.Body>                
                <Card.Text>
                  {description}
                </Card.Text>
                ${price}
              </Card.Body>
              <Link to={'/item/' + id} className="detalle">Ver Detalle</Link>
            </Card>
          </Col>
      </Row>
    );
};

export default Item;