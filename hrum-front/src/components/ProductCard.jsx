import React from 'react';
import {Button, Card} from "react-bootstrap";
import "../css/App.css"

const ProductCard = ({id, name, weight, price, photo, callback}) => {
    return (
        <div>
            <Card className="rounded box mb-4">
                <Card.Img src={photo} alt={`Picture of ${name} doesn't load.`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{`${weight} г.`}</Card.Text>
                    <Button onClick={() => callback(id)} className="w-100" variant="primary">{`${price} ₽`}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;