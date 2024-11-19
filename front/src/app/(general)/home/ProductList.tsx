"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/types";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/api/productAPI";

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");


    const fetchProductsFromAPI = async () => {
        try {
            const productsData = await getProducts();
            setProducts(productsData);
            setLoading(false);
        } catch (error) {
            setError((error as Error).message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsFromAPI();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="back-general">
            <h2 className="text-[#23344E] mb-6 text-center">Lista de productos:</h2>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
