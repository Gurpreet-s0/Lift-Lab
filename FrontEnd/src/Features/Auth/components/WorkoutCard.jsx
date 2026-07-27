import React, { useState } from 'react'

const WorkoutCard = ({day,searchExercise,setsearchExercise}) => {

    const [workoutName, setworkoutName] = useState("")
    
    return (
        <div className='flex flex-col gap-3 w-80'>
            <h1 className='text-2xl mt-3'>{day}</h1>
            <input onChange={(e) => { setworkoutName(e.target.value) }} className='py-3 px-6 border-border border-2 rounded-2xl mr-2 ' value={workoutName} type="text" placeholder='Workout Name eg: Push, Pull, Upper ....' />
            <button onClick={() => {
                setsearchExercise(!searchExercise)
            }} className='mt-4 bg-primary text-white p-3 rounded-2xl hover:opacity-90 transition'>Add Exercise</button>
            <button className='mt-4 bg-primary text-white p-3 rounded-2xl hover:opacity-90 transition'>Save </button>
        </div>
    )
}

export default WorkoutCard