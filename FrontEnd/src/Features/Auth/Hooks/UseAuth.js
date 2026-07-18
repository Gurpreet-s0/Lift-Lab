import { useContext } from "react"
import { register, login, getMe, logout } from "../Auth.services"
import { AuthContext } from "../Context/auth-context"

function UseAuth(){

const { user, setuser, loading, setloading } = useContext(AuthContext)

function registerHandler({
    username,
    email,
    password,
    age,
    gender,
    height,
    weight,
    goal,
    experience,
}) {
    setloading(true)
    return register({
        username,
        email,
        password,
        age,
        gender,
        height,
        weight,
        goal,
        experience,
    }).then((res)=>setuser(res.user))
    .finally(()=>setloading(false))
}

function loginHandler({username,email,password}){
    setloading(true)
    return login({username,email,password})
    .then((res)=>setuser(res.user))
    .finally(()=>setloading(false))
}

function getMeHandler(){
    return getMe()
    .then((res)=>setuser(res.user))
}

function logOutHandler(){
    setloading(true);

    return logout()
        .then(()=>{
            setuser(null);
        })
        .finally(()=>{
            setloading(false);
        });
}
    
return {user,loading,registerHandler,loginHandler,getMeHandler,logOutHandler}
}

export default UseAuth;
