import Link from "next/link";
import React from "react";


export const ProductList: React.FC = ()=>{
    return(
        <>
            <div>
                <h3>Detalles de cada producto</h3>
            </div>
            <div>
                <Link href="/home">Ir a Home</Link>
                <Link href="/dashboard">Ir a Dashboard</Link>
            </div>
        </>
    )
}

export default ProductList