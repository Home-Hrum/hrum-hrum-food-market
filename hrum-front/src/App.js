import "./css/App.css";
import ProductCard from "./components/ProductCard";
import { Col, Row } from "react-bootstrap";

function App() {
    const products = [
        {name: "Цезарь", weight: 450, price: 799, photo: require("img/1.png")},
        {name: "Фаршированные перцы", weight: 450, price: 799, photo: require("img/2.png")},
        {name: "Папоротник с мясом", weight: 450, price: 799, photo: require("img/3.png")},
        {name: "Жульен", weight: 450, price: 799, photo: require("img/4.png")},
        {name: "Фарши", weight: 450, price: 799, photo: require("img/5.png")},
        {name: "Картошечка", weight: 450, price: 799, photo: require("img/6.png")},
    ]

    return (
        <div className="App">
            <div className="w-50 mx-auto grid w-50">
                <Row>
                    <Col md={12} lg={6}>
                        <ProductCard name={"Цезарь"} weight={735} price={399} />
                    </Col>
                    <Col md={12} lg={6}>
                        <ProductCard name={"Цезарь"} weight={735} price={399} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6}>
                        <ProductCard name={"Цезарь"} weight={735} price={399} />
                    </Col>
                    <Col md={12} lg={6}>
                        <ProductCard name={"Цезарь"} weight={735} price={399} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6}>
                        <ProductCard name={"Цезарь"} weight={735} price={399} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
