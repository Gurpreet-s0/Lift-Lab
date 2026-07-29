import { useContext } from "react";
import { getTodaySplit } from "../dashboard.services";
import { TodaySplitContext } from "../Context/todaysplit";

const UseTodaySplit = ()=>{
    const {todaysplit,settodaysplit} = useContext(TodaySplitContext)

    function getTodaySplitHandler(){
        return getTodaySplit()
        .then((res)=>settodaysplit(res.todayExercises))
    }

    return ({getTodaySplitHandler,todaysplit})
}

export default UseTodaySplit