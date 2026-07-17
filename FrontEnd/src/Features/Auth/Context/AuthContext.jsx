import { useEffect, useState } from "react"
import { createContext } from "react"
import UseAuth from "../Hooks/UseAuth"
import { getMe } from "../Auth.services"

export const AuthContext = createContext()

function AuthContextProvider({children}){
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
  setloading(true);

  getMe()
    .then((res) => {
      setuser(res.user);
    })
    .catch(() => {
      setuser(null);
    })
    .finally(() => {
      setloading(false);
    });
}, []);

    return <AuthContext.Provider value={{user,setuser,loading,setloading}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider