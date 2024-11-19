import { IProduct } from "@/interfaces/types";
import React from "react";
import { Card } from "./Card";


interface productLisProps{
    products: IProduct[];
}

const ProductList: React.FC<productLisProps> = ({products}) => {
    return(
        <div>
            <h2 className="text-2xl font-semibold mb-4">Productos</h2>
            <div className="flex flex-wrap gap-4"> 
                {products.map((product) => (
                    <Card key={product.id} product={product} /> 
                ))}

            </div>
            

        
        </div>
    )
}

export default ProductList