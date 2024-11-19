import CarList from "@/components/CartList"
import OrderSummary from "@/components/OrderSummary"

const Cart = () => {
    return(
    <section>
        <div>
            <h2>
                Carrito de Compras
            </h2>
            <div>
                <CarList/>

                <OrderSummary/>
            </div>
        </div>
    </section>

    )
}

export default Cart