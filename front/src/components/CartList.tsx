"use client"

import { IProduct } from "@/interfaces/types"
import CartItem from "./CartItem"

const CarList: React.FC = () => {
    const Cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")

    return (
        <div>
            {Cart.map((item, index) =>(
                <CartItem product = {item} key={`{item.id} ${index}`}/>
            ))}
        </div>
    )
}



export default CarList