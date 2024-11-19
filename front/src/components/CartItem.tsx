import { IProduct } from "@/interfaces/types"
import Link from "next/link"


interface ICartItemProps{
    product: IProduct
}

const CartItem: React.FC <ICartItemProps>= ({product}) => {
    return(
    <div>
        <div>
            <div>
                <div>
                    <Link  href={`/product/${product.id}`}>
                    <img src={product.image} alt="" />

                    </Link>
                <div>
                    <p>
                        {product.name}
                    </p>
                    <p>
                        {product.description}
                    </p>
                    <div>
                        <p>
                            ${product.price}
                        </p>
                        <button>
                            Eliminar
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>


    ) 
}

export default CartItem