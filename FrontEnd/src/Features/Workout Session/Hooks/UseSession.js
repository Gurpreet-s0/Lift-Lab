import { useContext } from "react";
import { SessionContext } from "../Context/session.context";
import { startSession,logExercise,finishSession, cancelSession } from "../session.services";


const UseSession = () => {
    const {sessionId,setsessionId,sessionLoad,setsessionLoad,finishedData, setfinishedData} = useContext(SessionContext)

    function startSessionHandler({workoutName, workoutSplit}){
        setsessionLoad(true)
        return startSession({workoutName,workoutSplit})
        .then((res)=>{
          setsessionId(res.sessionId)
        })
        .finally(()=>setsessionLoad(false))
    }

  function logExerciseHandler({sessionId,exercise,sets}){
    setsessionLoad(true)
    return logExercise({sessionId,exercise,sets})
    .finally(()=>setsessionLoad(false))
  } 

  function finishSessionHandler({sessionId}){
    setsessionLoad(true)
    return finishSession({sessionId})
    .then((res)=> {
        setfinishedData(res.session)
    })
    .finally(()=>setsessionLoad(false))
  }

  function cancelSessionHandler({sessionId}){
    setsessionLoad(true)
    return cancelSession({sessionId})
    .finally(()=>setsessionLoad(false))
  }


  return {sessionId,startSessionHandler,sessionLoad,logExerciseHandler,finishSessionHandler,finishedData,cancelSessionHandler}
}

export default UseSession