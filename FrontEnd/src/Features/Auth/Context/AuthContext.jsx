import { useEffect, useState } from "react"
import { getMe } from "../Auth.services"
import { AuthContext } from "./auth-context"

function AuthContextProvider({children}){
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
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
