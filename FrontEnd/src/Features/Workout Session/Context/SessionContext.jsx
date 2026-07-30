import { useState } from "react";
import { SessionContext } from "./session.context";

const SessionContextProvider = ({children}) => {
    const [sessionId, setsessionId] = useState(null)
    const [sessionLoad, setsessionLoad] = useState(false)

  return (
    <SessionContext.Provider value={{sessionId,setsessionId,sessionLoad,setsessionLoad}}>
        {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider