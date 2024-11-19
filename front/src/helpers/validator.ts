import { IUserData } from "@/interfaces/types";

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

export const validatePassword = (password: string): boolean => {
    return password.length >= 6;
    };

    export const validateLoginForm = (userData: IUserData) => {
        const errors: { email?: string; password?: string } = {};
    
        if (!userData.email.trim()) {
            errors.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            errors.email = "El correo electrónico no es válido.";
        }
    
        if (!userData.password.trim()) {
            errors.password = "La contraseña es obligatoria.";
        } else if (userData.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }
    
        return {
            valid: Object.keys(errors).length === 0,
            errors,
        };
    };
    
