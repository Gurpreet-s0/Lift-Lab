import { useContext } from "react";
import { TodaySplitContext } from "../Context/todaysplit";
import { getTodaySplit } from "../dashboard.services";

const UseTodaySplit = ()=>{
    const {todaysplit,splitId,settodaysplit,setsplitId} = useContext(TodaySplitContext)

    function getTodaySplitHandler(){

       return getTodaySplit()
        .then((res)=>{
            settodaysplit(res.todayExercises)
            setsplitId(res.id)
        })
    }

    return ({todaysplit,splitId,getTodaySplitHandler})
}

export default UseTodaySplit