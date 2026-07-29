import { useState } from "react"

import { SplitContext } from "./SplitContext"


function SplitContextProvider({ children }) {

     const [exercises, setexercises] = useState([])
     const [selectedSplit, setSelectedSplit] = useState(null);
     const [loading, setloading] = useState(false)
     const [split, setsplit] = useState(undefined)

     return <SplitContext.Provider value={{ exercises, setexercises, selectedSplit, setSelectedSplit, loading, setloading,split,setsplit }}>
          {children}
     </SplitContext.Provider>
}

export default SplitContextProvider
