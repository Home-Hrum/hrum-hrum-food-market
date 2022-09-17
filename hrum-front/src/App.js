import "./css/App.css";
import ProductCard from "./components/ProductCard";
import GridCardSystem from "./components/GridCardSystem";

function App() {
    const products = [
        { name: "Цезарь", weight: 450, price: 799, photo: require("./img/1.png") },
        {
            name: "Фаршированные перцы",
            weight: 450,
            price: 799,
            photo: require("./img/2.png"),
        },
        {
            name: "Папоротник с мясом",
            weight: 450,
            price: 799,
            photo: require("./img/3.png"),
        },
        { name: "Жульен", weight: 450, price: 799, photo: require("./img/4.png") },
        { name: "Фарши", weight: 450, price: 799, photo: require("./img/5.png") },
        {
            name: "Картошечка",
            weight: 450,
            price: 799,
            photo: require("./img/6.png"),
        },
    ];

    return (
        <div className="App">
            <GridCardSystem colCount={3} xs={6} sm={6} md={6} lg={4}>
                {products.map((p, i) =>
                    <ProductCard
                        key={i}
                        name={p.name}
                        weight={p.weight}
                        price={p.price}
                        photo={p.photo}
                    />
                )}
            </GridCardSystem>
        </div>
    );
}

export default App;
