import { useEffect, useState } from "react";
import { TodaySplitContext } from "./todaysplit";
import UseTodaySplit from "../Hooks/UseTodaySplit";
import { getTodaySplit } from "../dashboard.services";

const TodaySplitContextProvider = ({ children }) => {
  const [dashLoad, setdashLoad] = useState(false)
  const [todaysplit, settodaysplit] = useState(null)
  const [splitId, setsplitId] = useState(null)
  const [previousSession, setpreviousSession] = useState(null)

  useEffect(() => {
    setdashLoad(true)
    getTodaySplit()
      .then((res) => {
        settodaysplit(res.todayExercises)
        setsplitId(res.id)
      })
      .finally(() => {
        setdashLoad(false)
      })
  },[])

  return (
    <TodaySplitContext.Provider value={{ todaysplit, settodaysplit, splitId, setsplitId, previousSession, setpreviousSession, dashLoad, setdashLoad }}>
      {children}
    </TodaySplitContext.Provider>
  )
}

export default TodaySplitContextProvider