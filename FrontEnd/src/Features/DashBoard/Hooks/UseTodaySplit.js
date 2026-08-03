import { useContext, useEffect } from "react";
import { TodaySplitContext } from "../Context/todaysplit";
import { getTodaySplit, getPreviousSession } from "../dashboard.services";

const UseTodaySplit = () => {
    const { todaysplit, splitId, settodaysplit, setsplitId, previousSession, setpreviousSession, dashLoad, setdashLoad } = useContext(TodaySplitContext)

    function getTodaySplitHandler() {
        setdashLoad(true)
        return getTodaySplit()
            .then((res) => {
                settodaysplit(res.todayExercises)
                setsplitId(res.id)
            })
            .finally(()=>{
                setdashLoad(false)
            })
    }

    function getPreviousSessionHandler({ workoutName }) {
        setdashLoad(true)
        return getPreviousSession({ workoutName })
            .then((res) => setpreviousSession(res.previousSession))
            .finally(() => setdashLoad(false))
    }

    useEffect(()=>{
        getTodaySplitHandler()
    },[])
    return ({ todaysplit, splitId, getTodaySplitHandler, previousSession, getPreviousSessionHandler, dashLoad })
}

export default UseTodaySplit