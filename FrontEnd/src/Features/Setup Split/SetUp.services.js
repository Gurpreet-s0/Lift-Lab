import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})

export async function uploadSplit({ splitName, workoutDays }) {
    try {
        const res = await api.post("api/exercise/upload_split", {
            splitName, workoutDays
        })
        return res.data
    } catch (err) {
        throw err.response?.data || err;
    }
}

export async function getExercises() {
    try {
        const res = await api.get("api/exercise/getExercises")
        return res.data
    } catch (err) {
        throw err.response?.data || err;
    }
}


export async function getSplit() {
    try {
        const res = await api.get("api/exercise/getSplit")
        return res.data
    } catch (err) {
        throw err.response?.data || err;

    }
}

export async function getTodaySplit(){
    try {
        const res = await api.get("api/exercise/getTodaySplit")
        return res.data
    } catch (err) {
        throw err.response?.data || err;
    }
}