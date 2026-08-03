import { useContext } from "react";
import { SplitContext } from "../Context/splitContext";
import { getExercises, getSplit, uploadSplit } from "../SetUp.services";
import UseAuth from "../../Auth/Hooks/UseAuth";

function UseSplit() {

    const {loading, setloading, exercises, setexercises, selectedSplit, setSelectedSplit ,split,setsplit } = useContext(SplitContext)
    const {getMeHandler} = UseAuth()
       
function uploadSplitHandler({splitName, workoutDays}){
    setloading(true)
    return uploadSplit({splitName,workoutDays})
    .then(async ()=>{
       await getMeHandler()
       await getSplitHandler()
    })
    .finally(()=>setloading(false))
}

function getExercisesHandler(){
    getExercises()
    .then((res)=>setexercises(res.exercises))
}

function getSplitHandler(){
    setloading(true)
    return getSplit()
    .then((res)=>setsplit(res.split))
    .finally(()=>setloading(false))

}


return {uploadSplitHandler,getExercisesHandler,loading,exercises,selectedSplit,setSelectedSplit,getSplitHandler,split}
}

export default UseSplit