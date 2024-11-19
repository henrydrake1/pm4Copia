import { IProductDetailProps } from "@/interfaces/types";
import Link from "next/link";
import React from "react";
import { getProductById } from "@/api/productAPI";
import AddToCart from "@/components/AddToCart";

export const ProductDetail: React.FC <IProductDetailProps> = async ({ params }) => {
  const productId =  params.id;
  const product = await getProductById(productId);
  
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", height: "auto" }}
        />
        <p>{product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
      </div>
      <div>
        <Link href="/home">Ir a Home</Link>
        <Link href="/dashboard">Ir a Dashboard</Link>
        <AddToCart product={product}/> 
      </div>
    </div>
  );
};

export default ProductDetail;
