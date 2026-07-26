import { useEffect, useState } from "react"
import { getMe } from "../Auth.services"
import { AuthContext } from "./auth-context"

function AuthContextProvider({children}){
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const [exercises, setexercises] = useState(null)
    const [selectedSplit, setSelectedSplit] = useState("");

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

    return <AuthContext.Provider value={{user,setuser,loading,setloading,exercises,setexercises,selectedSplit, setSelectedSplit}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider
