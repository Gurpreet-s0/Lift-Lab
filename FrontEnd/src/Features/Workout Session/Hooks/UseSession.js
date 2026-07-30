import { useContext } from "react";
import { SessionContext } from "../Context/session.context";
import { startSession } from "../session.services";


const UseSession = () => {
    const {sessionId,setsessionId,sessionLoad,setsessionLoad} = useContext(SessionContext)

    function startSessionHandler({workoutName, workoutSplit}){
        setsessionLoad(true)
        return startSession({workoutName,workoutSplit})
        .then((res)=>setsessionId(res.sessionId))
        .finally(()=>setsessionLoad(false))
    }
  return {sessionId,startSessionHandler,sessionLoad}
}

export default UseSession