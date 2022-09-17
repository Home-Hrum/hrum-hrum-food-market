import React from 'react';
import {Button, Card} from "react-bootstrap";
import "../css/App.css"

const ProductCard = ({name, weight, price}) => {
    return (
        <div>
            <Card className="rounded box mb-4">
                <Card.Img src={require('../img/1.png')} alt={"Picture of " + name + " doesn't load."} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{`${weight} г.`}</Card.Text>
                    <Button className="w-100" variant="primary">{`${price} ₽`}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;