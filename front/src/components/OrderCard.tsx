import { IUserOrder } from "@/interfaces/types"

interface IOrderListProps{
    order: IUserOrder
}


const OrderCard: React.FC <IOrderListProps> = ({order}) =>{
    return (
            <div>
                <p>Id de compra: {order.id}</p>
                <p>Estado: {order.status.toLocaleUpperCase()}</p>
                <p>{new Date(order.date)?.toLocaleDateString()}</p>
                <p>{order.products.length} {" "}
                    {order.products.length===1?"producto": "productos"}
                    </p>

            </div>
    )
}

export default OrderCard
