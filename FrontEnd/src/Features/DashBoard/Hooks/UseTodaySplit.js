import { useContext } from "react";
import { getTodaySplit } from "../dashboard.services";
import { TodaySplitContext } from "../Context/todaysplit";

const UseTodaySplit = ()=>{
    const {todaysplit,settodaysplit,splitId,setsplitId} = useContext(TodaySplitContext)

    function getTodaySplitHandler(){
        return getTodaySplit()
        .then((res)=>{
            settodaysplit(res.todayExercises)
            setsplitId(res.id)
        })
    }

    return ({getTodaySplitHandler,todaysplit,splitId})
}

export default UseTodaySplit