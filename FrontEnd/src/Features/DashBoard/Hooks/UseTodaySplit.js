import { useContext } from "react";

import { TodaySplitContext } from "../Context/todaysplit";

const UseTodaySplit = ()=>{
    const {todaysplit,splitId} = useContext(TodaySplitContext)


    return ({todaysplit,splitId})
}

export default UseTodaySplit