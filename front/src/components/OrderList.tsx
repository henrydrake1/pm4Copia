"use client"

import { getOrders } from "@/api/orderAPI";
import { IUserOrder } from "@/interfaces/types";
import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";


interface IOrderListProps{
    userToken: string;
}

const OrderList: React.FC<IOrderListProps> = ({userToken}) => {
    const[userOrders, setUserOrders] = useState<IUserOrder[]>([])

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders(userToken);
            setUserOrders(orders)
        }
        fetchOrders()

    }, [userToken])

    return(
        <div>
            {userOrders.length === 0?(
                <p>Tu hostorial de ordenes esta vacio</p>
            ): (
                userOrders.map((order) =>{
                    return <OrderCard key={order.id} order={order} />
                    
                })
            )
        }
        </div>
    )

        
} 

export default OrderList