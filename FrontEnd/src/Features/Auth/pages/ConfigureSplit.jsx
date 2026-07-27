import React, { useEffect, useState } from 'react'
import UseAuth from '../Hooks/UseAuth'
import WorkoutCard from '../components/WorkoutCard'

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


    const [workoutDays, setworkoutDays] = useState([
        days.map((e)=>({
            day:e.dayNum,
            workoutName:"",
            exercises:[]
        }))
    ])
    
    //dayNum
    const [Exercises, setExercises] = useState([])
    

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


    return (

        <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex flex-col items-center gap-2 ${searchExercise ? "gap-2" : "blur-lg"}`}>

                <h1 className="lg:text-4xl text-3xl w-90 font-bold mt-5 text-center">
                    Let's set up your Exercises
                </h1>

                <div className="bg-card lg:w-300  w-90 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 ">
                    <form onSubmit={(e) => formHandler(e)}>
                        {
                            days.map(({ day }) => {
                                return <WorkoutCard day={day} searchExercise={searchExercise} setsearchExercise={setsearchExercise}  />

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
                                                setExercises([...Exercises, { "exercise": e._id }])
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