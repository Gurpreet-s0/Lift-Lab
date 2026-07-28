import React, { useEffect, useState } from 'react'
import UseAuth from '../Hooks/UseAuth'

const ConfigureSplit = () => {
    const { exercises, getExercisesHandler, selectedSplit, uploadSplitHandler } = UseAuth()

    const days = [
        {
            day: "Monday",
            dayNum: 1
        },
        {
            day: "Tuesday",
            dayNum: 2
        },
        {
            day: "Wednesday",
            dayNum: 3
        },
        {
            day: "Thursday",
            dayNum: 4
        },
        {
            day: "Friday",
            dayNum: 5
        },
        {
            day: "Saturday",
            dayNum: 6
        },
        {
            day: "Sunday",
            dayNum: 7
        }
    ]


    const [workoutDays, setworkoutDays] = useState(
        days.map((e) => ({
            day: e.dayNum,
            workoutName: "",
            exercises: []
        }))
    )



    const [selectedDay, setselectedDay] = useState(null)


    const [searchExercise, setsearchExercise] = useState(true)
    const [userSearch, setuserSearch] = useState('')

    useEffect(() => {
        getExercisesHandler()

    }, [])

    const filteredExercises = exercises.filter((e) => {
        const search = userSearch.toLowerCase();

        return (

            e.Name.toLowerCase().includes(search) ||
            e.muscleGroup.toLowerCase().includes(search) ||
            e.equipment.toLowerCase().includes(search) ||
            e.difficulty.toLowerCase().includes(search)

        );
    })

    async function formHandler(e) {
        e.preventDefault()

        // uploadSplitHandler({splitName:workoutName,workoutDays})

    }

    function removeExercise(exId,selectedDay){
        const dubArr = [...workoutDays]
        console.log(dubArr);
        
        const updated = dubArr[selectedDay].exercises.filter((item)=>{
            return item.exercise == exId
        })

        console.log(updated);
        
    }

    return (

        <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex flex-col items-center gap-2 ${searchExercise ? "gap-2" : "blur-lg"}`}>

                <h1 className="lg:text-4xl text-3xl w-90 font-bold mt-5 text-center">
                    Let's set up your Exercises
                </h1>

                <div className="bg-card lg:w-300  w-90 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 ">
                    <form onSubmit={(e) => formHandler(e)}>
                        {
                            days.map(({ day, dayNum }) => {

                                return <div key={dayNum} className='flex flex-col gap-3 w-80'>
                                    <h1 className='text-2xl mt-3'>{day}</h1>
                                    <input onChange={(e) => {
                                        const updated = [...workoutDays]
                                        updated[dayNum - 1].workoutName = e.target.value
                                        setworkoutDays(updated)
                                        setselectedDay(dayNum - 1)
                                    }}

                                        value={workoutDays[dayNum - 1].workoutName} className='py-3 px-6 border-border border-2 rounded-2xl mr-2 ' type="text" placeholder='Workout Name eg: Push, Pull, Upper ....' />

                                    <div>
                                        {
                                            workoutDays[dayNum - 1]?.exercises.map((exercise) => {
                                                const selectedExercise = exercises.find((ex) => {
                                                    return ex._id == exercise.exercise
                                                })

                                                return (
                                                    <div
                                                        key={exercise.exercise}
                                                        className="bg-background border border-border rounded-xl p-3 flex items-center justify-between hover:border-primary transition"
                                                    >

                                                        <div className="flex items-center gap-3">
                                                            <img
                                                                src={selectedExercise.image}
                                                                alt={selectedExercise.Name}
                                                                className="w-14 h-14 rounded-lg object-cover"
                                                            />
                                                            <div>
                                                                <h2 className="font-semibold">
                                                                    {selectedExercise.Name}
                                                                </h2>
                                                                <p className="text-sm text-gray-400">
                                                                    {selectedExercise.muscleGroup}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                        onClick={()=>{
                                                            removeExercise(selectedExercise._id,selectedDay)
                                                        }}
                                                            type="button"
                                                            className="text-red-500 hover:text-red-600 text-xl"
                                                        >
                                                           ✕
                                                        </button>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>

                                    <button onClick={() => {
                                        setsearchExercise(!searchExercise)
                                        setselectedDay(dayNum - 1)
                                    }} className='mt-4 bg-primary text-white p-3 rounded-2xl hover:opacity-90 transition'>Add Exercise</button>
                                    <button className='mt-4 bg-primary text-white p-3 rounded-2xl hover:opacity-90 transition'>Save </button>
                                </div>

                            })
                        }

                    </form>

                </div>

            </div>
            <div
                className={`${searchExercise ? "hidden" : "fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start pt-10 z-50"
                    }`}
            >
                <div className="bg-card border border-border rounded-2xl w-[90%] lg:w-[70%] max-h-[85vh] overflow-y-auto p-6">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">
                            Select Exercise
                        </h1>

                        <button
                            onClick={() => setsearchExercise(true)}
                            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                    </div>

                    {/* Search */}
                    <input
                        type="text"
                        value={userSearch}
                        onChange={(e) => setuserSearch(e.target.value)}
                        placeholder="Search exercise, equipment, muscleGroup..."
                        className="w-full mb-6 px-4 py-3 rounded-xl bg-background border border-border outline-none focus:ring-2 focus:ring-primary"
                    />

                    {/* Exercise Cards */}
                    <div className="grid lg:grid-cols-2 gap-5">
                        {filteredExercises.map((e) => (
                            <div
                                key={e._id}
                                className="bg-background border border-border rounded-xl p-4 hover:border-primary hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="flex gap-4">

                                    <img
                                        src={e.image}
                                        alt={e.Name}
                                        className="w-28 h-28 rounded-xl object-cover"
                                    />

                                    <div className="flex flex-col justify-between flex-1">

                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {e.Name}
                                            </h2>

                                            <p className="text-sm text-gray-400 mt-1">
                                                {e.muscleGroup}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-3">

                                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                                                🏋 {e.equipment}
                                            </span>

                                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                                                💪 {e.difficulty}
                                            </span>

                                        </div>

                                        <button
                                            onClick={() => {
                                                const updated = [...workoutDays]
                                                updated[selectedDay].exercises.push({ "exercise": e._id })
                                                setworkoutDays(updated)
                                            }}
                                            className="mt-4 bg-primary text-white py-2 rounded-lg hover:opacity-90 transition"
                                        >
                                            Add Exercise
                                        </button>


                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ConfigureSplit