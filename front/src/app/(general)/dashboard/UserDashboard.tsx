"use client"

import Cookies from "js-cookie";
import { IUserSession } from "@/interfaces/types";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import React from "react";
import OrderList from "@/components/OrderList";

export const UserDashboard: React.FC = () => {
    const userData : IUserSession = JSON.parse(Cookies.get("userData") || "{}")
    const router = useRouter()



    const handleLogout = async() =>{
        Cookies.remove("userData");
        Swal.fire({
            title: "Exito",
            text: "Tu sesion ha sido cerrada",
            icon: "success"
            });
            router.push("/home")
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-[#23344E] mb-6">Dashboard de Usuario</h1>

                {/* Perfil Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-medium text-[#23344E] mb-4">Perfil</h3>
                    <p><strong>Nombre:</strong> {userData?.user.name}</p>
                    <p><strong>Email:</strong> {userData?.user.email}</p>
                    <p><strong>Direccion:</strong> {userData?.user.address}</p>
                </div>
                <div>
                    <div>
                        <h1>Mis ordenes</h1>
                        <OrderList userToken = {userData?.token}/>

                    </div>
                    <div className="flex space-x-4">
                        <button onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
