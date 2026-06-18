import type { User } from "@neondatabase/neon-js/auth/types";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { authClient } from "../lib/auth";

interface AuthContextType {
  user: User|null;
}
const AuthContext = createContext<AuthContextType | null>(null);
export default function AuthProvider({children}:{children:ReactNode}){
    const [neonUser,setNeonUser]=useState<any>(null);
    useEffect(()=>{
        async function loadUser() {
            try{
                const result = await authClient.getSession():
                if(result && result.data?.user){
                    setNeonUser(result.data.user)
                }
                else{
                    setNeonUser(null);
                }
            }catch(err){
                setNeonUser(null);
            }
        }
        loadUser();
    },[]);
    return <AuthContext.Provider value={{user:neonUser}}>
        {children}
        </AuthContext.Provider>
}