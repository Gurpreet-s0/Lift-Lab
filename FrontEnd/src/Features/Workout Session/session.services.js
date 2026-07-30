import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function startSession({workoutName, workoutSplit}){
    try {
        const res = await api.post("/api/session/startSession",{
            workoutName,workoutSplit
        })
        return res.data
    } catch (err) {
        console.log(err);
        
    }
}