"use client";


import { IUserSession } from "@/interfaces/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


const SessionButtons: React.FC =()  =>{
    const[userSession, setUserSession] = useState<IUserSession | null>(null);
    const pathname = usePathname();

    useEffect(()=>{
        const dataCookie = Cookies.get("userData")
        if(dataCookie) {
            const parsedData: IUserSession = JSON.parse(dataCookie)
            setUserSession(parsedData)
        } else{
            setUserSession(null)
        }
    },[pathname])
    return(
        <div className="flex gap-4 items-end font-semibold text-xl">
            {!userSession ?(
                <>
                    <Link href={"/login"}> Iniciar Session</Link>
                    <Link href={"/register"}> Crear Cuenta</Link>
                </>
            ):(
            <>
            <Link href={"/dashboard"}>Mi perfil</Link>
            <Link href={"/cart"}>Mi carrito</Link>
            </>
            )}
        </div>
    )
}

export default SessionButtons
