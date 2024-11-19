"use client";

import { login } from "@/api/userAPI";
import { IUserData } from "@/interfaces/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { validateLoginForm } from "@/helpers/validator";
import Swal from "sweetalert2";
import Link from "next/link";

const initIalState: IUserData = {
    email: "",
    password: "",
};

const Login: React.FC = () => {
    const [loginErrors, setLoginErrors] = useState<{ email?: string; password?: string }>({});
    const router = useRouter();
    const [userData, setUserData] = useState<IUserData>(initIalState);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { valid, errors } = validateLoginForm(userData);

        if (!valid) {
            setLoginErrors(errors);
            alert(
                `Error de Validación:\n${Object.values(errors)
                    .filter((msg) => msg)
                    .join("\n")}`
            );
            return;
        }

        setLoginErrors({});
        setIsLoading(true);

        try {
            const response = await login(userData);
            const { token, user } = response;

            Cookies.set("userData", JSON.stringify({ token, user }), { expires: 1 });

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
                    title: "Signed in successfully"
                });

            router.push("/");
        } catch (err) {
            setError("Correo o contraseña incorrecta");
            console.error("Error en el login", err);
            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesion",
                text: "Revisa los datos ingresados",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Iniciar Sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                    <div>
                        <label
                            className="block text-center text-sm font-medium text-gray-600"
                            htmlFor="email"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            className="w-full p-2 mt-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Introduce tu e-mail"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                        {loginErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{loginErrors.email}</p>
                        )}
                    </div>

                    <div>
                        <label
                            className="block text-center text-sm font-medium text-gray-600"
                            htmlFor="password"
                        >
                            Ingresa tu contraseña
                        </label>
                        <input
                            className="w-full p-2 mt-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                        {loginErrors.password && (
                            <p className="text-red-500 text-sm mt-1">{loginErrors.password}</p>
                        )}
                    </div>

                    <button
                        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            <div>
                <p>No tienes cuenta? <Link href="/register">Registrate aqui</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Login;
