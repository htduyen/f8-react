import React, { useState, useMemo, useRef } from "react";

function App() {
    const [name, setName] = useState("");
    const nameRef = useRef();
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handlerAddProduct = () => {
        console.log(products);
        setProducts([
            ...products,
            {
                name,
                price: +price,
            },
        ]);
        setName("");
        setPrice('');
        nameRef.current.focus();
    };
    const total = useMemo(() => {
        console.log("Tinh toan lai ....");
        const total = products.reduce((result, product) => {
            return result + product.price;
        }, 0);
        return total;
    }, [products]);

    return (
        <div>
            <input
                type="text"
                value={name}
				ref={nameRef}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handlerAddProduct}>Add</button>
            <p>Total: {total}</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        Name: {product.name} - Price: {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
