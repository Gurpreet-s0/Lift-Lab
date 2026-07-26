import { useContext } from "react"
import { register, login, getMe, logout, uploadSplit, getExercises } from "../Auth.services"
import { AuthContext } from "../Context/auth-context"

function UseAuth(){

const { user, setuser, loading, setloading, exercises, setexercises, selectedSplit, setSelectedSplit } = useContext(AuthContext)

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
    
function uploadSplitHandler({splitName, workoutDays}){
    setloading(true)
    return uploadSplit({splitName,workoutDays})
    .then(()=>getMeHandler())
    .finally(()=>setloading(false))
}

function getExercisesHandler(){
    getExercises()
    .then((res)=>setexercises(res.exercises))
}

return {user,loading,registerHandler,loginHandler,getMeHandler,logOutHandler,uploadSplitHandler,getExercisesHandler,exercises, selectedSplit, setSelectedSplit}
}

export default UseAuth;
