import api from '../Axios/Axios'

export async function startSession({ workoutName, workoutSplit }) {
    try {
        const res = await api.post("/api/session/startSession", {
            workoutName, workoutSplit
        })
        return res.data
    } catch (err) {
        console.log(err);

    }
}

export async function logExercise({ sessionId, exercise, sets }) {
    try {
        const res = await api.patch(`/api/session/logExercise/${sessionId}`, {
            exercise,
            sets
        })
        return res.data
    } catch (err) {
        console.log(err);

    }
}

export async function activeSession(){
    try {
        const res = await api.get("/api/session/activeSession")
        return res.data
    } catch (err) {
        console.log(err);
        
    }
}

export async function finishSession({sessionId}){
    try {
        const res = await api.patch(`/api/session/finish/${sessionId}`)
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export async function cancelSession({sessionId}) {
    try {
        const res = await api.delete(`/api/session/cancel/${sessionId}`)
        return res.data
    } catch (err) {
        console.log(err);
        
    }
}