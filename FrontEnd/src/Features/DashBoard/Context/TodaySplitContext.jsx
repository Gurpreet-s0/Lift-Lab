import { useEffect, useState } from "react";
import { TodaySplitContext } from "./todaysplit";
import UseTodaySplit from "../Hooks/UseTodaySplit";
import { getTodaySplit } from "../dashboard.services";

const TodaySplitContextProvider = ({children}) => {
    const [todaysplit, settodaysplit] = useState(null)
    const [splitId, setsplitId] = useState(null)

    useEffect(()=>{
     getTodaySplit()
        .then((res)=>{
            settodaysplit(res.todayExercises)
            setsplitId(res.id)
        })
    },[])

  return (
    <TodaySplitContext.Provider value={{todaysplit,settodaysplit,splitId,setsplitId}}>
        {children}
    </TodaySplitContext.Provider>
  )
}

export default TodaySplitContextProvider