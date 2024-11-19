"use client";

import React, { useState } from "react";
import { IUserCreateData } from "@/interfaces/types";
import { register } from "@/api/userAPI";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";



const initialState: IUserCreateData = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
};

const Register: React.FC = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<IUserCreateData>(initialState);
    const [message, setMessage] = useState<string>("")

    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = await register(userData);
        
        if (data) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Creacion del usuario exitoso "
            });
            router.push("/login");
        } else {
            Swal.fire({
                icon: "error",
                title: "Error al ingresar los datos",
                text: "Verifica los campos",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Crear Cuenta</h2>
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md">
                        Enviar
                    </button>

                    <div>
                        <p>
                            Ya tienes cuenta? <Link href={"/login"}>Inicia sesion aqui</Link>
                        </p>
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-red-600">{message}</p>}
            </div>
        </div>
    );
};

export default Register;