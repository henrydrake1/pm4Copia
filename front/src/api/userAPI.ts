import { IUserCreateData, IUserData } from "@/interfaces/types";


const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(formData: IUserCreateData) {
    try {
        const res = await fetch(`${APIURL}/users/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if(!res.ok){

            throw new Error(`Error ${res.status}: ${res.statusText}`)
        }else{
            
            return res.json()
        }
    } catch (error) {
        console.log(error);

        
    }
}


export async function login(formData: IUserData) {
    try {
        const res = await fetch(`${APIURL}/users/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if(!res.ok){

            throw new Error(`Error ${res.status}: ${res.statusText}`)
        }else{

            return res.json()
        }
    } catch (error) {
        console.log(error);

        
    }
}