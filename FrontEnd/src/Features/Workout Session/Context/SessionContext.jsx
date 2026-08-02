import { useEffect, useState } from "react";
import { SessionContext } from "./session.context";
import { activeSession } from "../session.services";

const SessionContextProvider = ({children}) => {
    const [sessionId, setsessionId] = useState(null)
    const [sessionLoad, setsessionLoad] = useState(false)
    const [finishedData, setfinishedData] = useState(null)

    useEffect(()=>{
      setsessionLoad(true)
      activeSession()
      .then((res)=>setsessionId(res.sessionId))
      .finally(()=>setsessionLoad(false))
    },[])

  return (
    <SessionContext.Provider value={{sessionId,setsessionId,sessionLoad,setsessionLoad,finishedData, setfinishedData}}>
        {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider