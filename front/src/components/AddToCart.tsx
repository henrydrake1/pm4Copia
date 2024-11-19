"use client"

import { IProduct, IUserSession } from "@/interfaces/types";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface IAddToCartProps {
    product: IProduct;  
}

const AddToCart: React.FC<IAddToCartProps> = ({ product }) => {
    const [userSession, setUserSession] = useState<IUserSession | null>(null);
    const router = useRouter();

    useEffect(() => {
        const dataCookie = Cookies.get("userData");
        if (dataCookie) {
        const parsedData: IUserSession = JSON.parse(dataCookie);
        setUserSession(parsedData);
        } else {
        setUserSession(null);
        }
    }, []);

    const handleAdd = () => {
        if (userSession) {
        const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Producto agregado correctamente");
        router.push("/cart");
        } else {
            Swal.fire({
                title: "Necesitas inicar sesion",
                text: "No puedes comprar al menos que tengas cuenta",
                icon: "warning"
            });
        router.push("/login");
        }
    };

    return (
        <button onClick={handleAdd} className="">
        Agregar al carrito
        </button>
    );
    };

export default AddToCart;