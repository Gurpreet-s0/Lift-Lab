import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function getTodaySplit() {
    try {
        const res = await api.get("/api/exercise/getTodaySplit")
        return res.data

    } catch (err) {
        throw err.response?.data || err;
    }
}

export async function getPreviousSession({ workoutName }) {
    try {
        const res = await api.get(`/api/session/previousSession/${workoutName}`)
        return res.data
    } catch (err) {
        throw err.response?.data || err;
    }
}   
