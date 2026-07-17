import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})

export async function register({
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
    try {
        const res = await api.post("/api/auth/register", {
            username,
            email,
            password,
            age,
            gender,
            height,
            weight,
            goal,
            experience,
        })
        return res.data
    }
    catch(err){
    throw err.response?.data || err;
}
  }

export async function login({username,email,password}){
    try{
        const res = await api.post("/api/auth/login",{
            email:email,
            username:username,
            password:password
        })
        return res.data
    }
    catch(err){
    throw err.response?.data || err;
}
}

export async function getMe(){
    try{
        const res = await api.get("/api/auth/getMe")
        return res.data
    }
    catch(err){
    throw err.response?.data || err;
}
}

export async function logout(){
     try{
        const res = await api.get("/api/auth/logout")
        return res.data
    }
    catch(err){
    throw err.response?.data || err;
}
}