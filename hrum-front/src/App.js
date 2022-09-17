import "./css/App.css";
import ProductCard from "./components/ProductCard";
import GridCardSystem from "./components/GridCardSystem";
import NavBar from "./components/NavBar";
import {useState} from "react";

function App() {
    const products = [
        {id: 1, name: "Цезарь", weight: 450, price: 799, photo: require("./img/1.png") },
        {id: 2, name: "Фаршированные перцы", weight: 450, price: 799, photo: require("./img/2.png"),},
        {id: 3, name: "Папоротник с мясом", weight: 450, price: 799, photo: require("./img/3.png"),},
        { id: 4, name: "Жульен", weight: 450, price: 799, photo: require("./img/4.png") },
        { id: 5, name: "Фарши", weight: 450, price: 799, photo: require("./img/5.png") },
        {id: 6, name: "Картошечка", weight: 450, price: 799, photo: require("./img/6.png"),},
    ];

    const [binStatus, setBinStatus] = useState(true);

    const addProductToBin = (id) => {
        setBinStatus(false)
        console.log(id)
        console.log(binStatus)
    }

    return (
        <div className="App">
            <NavBar binIsEmpty={binStatus}/>

            <GridCardSystem colCount={2} xs={12} sm={12} md={6} lg={6}>
                {products.map((p) =>
                    <ProductCard
                        id={p.id}
                        name={p.name}
                        weight={p.weight}
                        price={p.price}
                        photo={p.photo}
                        callback={addProductToBin}
                    />
                )}
            </GridCardSystem>


        </div>
    );
}

export default App;
