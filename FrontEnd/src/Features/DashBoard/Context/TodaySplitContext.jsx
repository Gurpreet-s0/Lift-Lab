import { useState } from "react";
import { TodaySplitContext } from "./todaysplit";

const TodaySplitContextProvider = ({children}) => {
    const [todaysplit, settodaysplit] = useState(null)


  return (
    <TodaySplitContext.Provider value={{todaysplit,settodaysplit}}>
        {children}
    </TodaySplitContext.Provider>
  )
}

export default TodaySplitContextProvider