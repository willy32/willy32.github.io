import { useState } from "react";

type CartProps = {
    id: number,
    amount: number
};

const useCartStore = () => {
    const [items, setItems] = useState([]);

    let rawCart: string|null = localStorage.getItem("cart");
    if (rawCart === null || rawCart[0] !== "[") rawCart = "[]";

    setItems(JSON.parse(rawCart));
    
    const addItem = (id: number) => {
        console.log(items);
    }

    const removeItem = (id: number) => {

    }

    return (
        {items, addItem, removeItem}
    );
};

export default useCartStore;