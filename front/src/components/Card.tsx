import { ICardProps } from "@/interfaces/types";
import Link from "next/link";


export const Card: React.FC<ICardProps> = ({product }) => {
    
    return(
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-72 text-center">
        <Link href={`/products/${product.id}`}>
            <img
                src={product.image}
                alt="Imagen del producto"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-2">Descripcion: {product.description}</p>
            <p className="text-lg font-semibold mt-2">Precio: ${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock} unidades</p>
            </Link>
        </div>
        );
        };