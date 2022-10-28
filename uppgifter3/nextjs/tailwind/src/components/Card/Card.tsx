import Image from 'next/image'
import React from 'react'
//import useCartStore from "../useCartStore/useCartStore";

type CardProps = {
    id: number,
    title: string,
    img: string,
    description?: string
    price: number
};
type CartProps = {
    id: number,
    amount: number
};

const Card = ({id, title, img, description, price}: CardProps) => {

    //const cart = useCartStore();
  
    const addToCart = (id: number) => {
        let rawCart: string|null = localStorage.getItem("cart");
        if (rawCart === null || rawCart[0] !== "[") rawCart = "[]";

        let cart: CartProps[] = JSON.parse(rawCart);
        

        let added: boolean = false;
        cart.forEach((item) => {
            if(item.id === id) {
                item.amount += 1;
                added = true;
            }
        });
        if(!added){
            cart.push({id: id, amount: 1});
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };
  
  return (
    <div className="m-4 flex flex-col shadow-xl rounded bg-white min-w-[300px] max-w-[400px] p-8 space-y-2">
        <h3 className="text-2xl self-center my-4">{title}</h3>
        <Image 
        src={img} 
        width={"100"} 
        height={"100"}
        layout={"responsive"}
        />
        <p>{description}</p>
        <p>{price} €</p>
        <button className="bg-purple-600 rounded text-white p-2 hover:bg-purple-500"
        onClick={() => addToCart(id)}>
            Add to Cart
        </button>
    </div>
  )
}

export default Card