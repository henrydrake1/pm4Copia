"use client";

import { IProduct, IUserSession } from "@/interfaces/types";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { create } from "domain";
import { createOrder } from "@/api/orderAPI";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const OrderSummary: React.FC = () => {
    const [userSession, setUserSession] = useState<IUserSession | null>(null);
    const router = useRouter()

    useEffect(() => {
        const dataCookie = Cookies.get("userData");
        if (dataCookie) {
        const parsedData: IUserSession = JSON.parse(dataCookie);
        setUserSession(parsedData);
        } else {
        setUserSession(null);
        }
    }, []);


    const Cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const totalPrice = Cart.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    const shippingPrice = 12;
    const taxPrice = Math.round((totalPrice + shippingPrice) * 0.16);

    const handleBuy = async() => {
        if(!userSession?.token) {
            Swal.fire("Tines que inciar sesion");
            {return router.push("/login")}
        }

            

        const productIds: number[] = Cart?.map((product) => product.id)
        await createOrder(productIds, userSession?.token)
        localStorage.removeItem("cart")
        router.push("/dashboard")
        
    };

    return (
        <>
            {Cart.length === 0 ? (
                <div className="">
                    <p className="">Tu carrito está vacío</p>
                    <div className="">
                        <Link
                            href="/home"
                            title=""
                            className=""
                        >
                            Seguir Comprando
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="">
                    <div>
                        <p className="">Resumen de compra</p>
                        <div className="">
                            <div className="">
                                <dl>
                                    <dt className="">Precio Inicial</dt>
                                    <dd className="">${totalPrice.toFixed(2)}</dd>
                                </dl>
                                <dl className="">
                                    <dt className="">Envío</dt>
                                    <dd className="">${shippingPrice.toFixed(2)}</dd>
                                </dl>
                                <dl className="">
                                    <dt className="">Impuestos</dt>
                                    <dd className="">${taxPrice.toFixed(2)}</dd>
                                </dl>
                            </div>

                            <dl className="">
                                <dt className="">Total</dt>
                                <dd className="">${(totalPrice + taxPrice + shippingPrice).toFixed(2)}</dd>
                            </dl>
                        </div>
                        <button
                            onClick={handleBuy}
                            className=""
                        >
                            Finalizar Compra
                        </button>
                        <div className="">
                            <span className=""> o </span>
                            <Link
                                href="/home"
                                title=""
                                className=""
                            >
                                Seguir Comprando
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderSummary;
