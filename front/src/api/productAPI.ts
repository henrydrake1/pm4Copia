import { IProduct } from "@/interfaces/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<IProduct[]> {

    try {
        const res = await fetch(`${APIURL}/products`, {
            next: { revalidate: 600 },
        });
        const products = await res.json();
        return products;
    } catch (error) {
        throw new Error(`Error obtenido de producto: ${error}`)
    }
    }


export async function getProductById(id:string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProducts()
        const productFiltered = products.find(
            (product) => product.id.toString() === id
        )
        if(!productFiltered) throw new Error("El producto no se encontro")
            return productFiltered;
    } catch (error) {
        throw new Error(`Error obtenido de producto: ${error}`)
    }
}


