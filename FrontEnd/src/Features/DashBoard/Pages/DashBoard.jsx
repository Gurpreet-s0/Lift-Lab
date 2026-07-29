import React, { useEffect } from 'react'
import UseTodaySplit from '../Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'

const DashBoard = () => {

    const {todaysplit,getTodaySplitHandler} = UseTodaySplit()

    useEffect(()=>{
        getTodaySplitHandler()
    },[])


    if (!todaysplit) {
    return <Loading/>;
}

    
  return (
    <div>
        <h1>Your Todays Exercises</h1>
        <div>
            {
                todaysplit.exercises.map((e)=>{
                    return <div>{e.exercise.Name}</div>
                })
            }
        </div>
    </div>
  )
}

export default DashBoard