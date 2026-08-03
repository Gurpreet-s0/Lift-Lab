import React, { useEffect, useState } from 'react'
import UseTodaySplit from '../Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'
import { ChevronDown, ChevronRight } from "lucide-react"
const DashBoard = () => {

    const { todaysplit, previousSession, getPreviousSessionHandler, dashLoad, getTodaySplitHandler } = UseTodaySplit()
    console.log(todaysplit?.workoutName);
    const [openExercise, setOpenExercise] = useState(null)
    useEffect(() => {
        getTodaySplitHandler()
        getPreviousSessionHandler({ workoutName: todaysplit?.workoutName })
    }, [])

    console.log(previousSession);

    return (
        dashLoad ? <Loading /> :

            <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm text-gray-400">
                            Previous Workout
                        </p>

                        <h2 className="text-3xl font-bold text-text mt-1">
                            💪 {previousSession?.workoutName}
                        </h2>
                    </div>

                    <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-xl">
                        ✅ Completed
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="bg-background border border-border rounded-2xl p-4 text-center">
                        <p className="text-gray-400 text-sm">
                            Duration
                        </p>

                        <h3 className="text-2xl font-bold mt-2 text-primary">
                            {previousSession?.duration} min
                        </h3>
                    </div>

                    <div className="bg-background border border-border rounded-2xl p-4 text-center">
                        <p className="text-gray-400 text-sm">
                            Exercises
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            {previousSession?.exercisesDone.length}
                        </h3>
                    </div>

                    <div className="bg-background border border-border rounded-2xl p-4 text-center">
                        <p className="text-gray-400 text-sm">
                            Sets
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            {previousSession?.totalSets}
                        </h3>
                    </div>

                    <div className="bg-background border border-border rounded-2xl p-4 text-center">
                        <p className="text-gray-400 text-sm">
                            Volume
                        </p>

                        <h3 className="text-2xl font-bold mt-2 text-primary">
                            {previousSession?.volume} kg
                        </h3>
                    </div>

                </div>



                <div className="mt-8">

                    <h3 className="text-xl font-semibold mb-4">
                        Exercises Performed
                    </h3>

                    <div className="space-y-3">

                        {
                            previousSession?.exercisesDone.map((exercise, idx) => (

                                <div
                                    key={exercise.exercise._id}
                                    className="bg-background border border-border rounded-2xl mb-4 overflow-hidden"
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenExercise(
                                                openExercise === idx ? null : idx
                                            )
                                        }
                                        className="w-full flex justify-between items-center p-5 hover:bg-card transition"
                                    >

                                        <div className="text-left">

                                            <h3 className="font-semibold text-lg">
                                                {exercise.exercise.Name}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {exercise.exercise.muscleGroup} • {exercise.sets.length} Sets
                                            </p>

                                        </div>

                                        <span className="text-2xl">
                                            {openExercise === idx ? <ChevronDown /> : <ChevronRight />}
                                        </span>

                                    </button>

                                    {
                                        openExercise === idx && (

                                            <div className="border-t border-border p-4 space-y-3">

                                                {
                                                    exercise.sets.map((set, setIdx) => (

                                                        <div
                                                            key={setIdx}
                                                            className="bg-background border border-border rounded-2xl p-4 mb-3"
                                                        >

                                                            <div className="flex items-center justify-between">

                                                                <h3 className="font-semibold text-lg">
                                                                    Set {setIdx + 1}
                                                                </h3>

                                                                <div className="flex flex-wrap gap-2">

                                                                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm font-medium">
                                                                        🏋 {set.weight} kg
                                                                    </span>

                                                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium">
                                                                        🔁 {set.reps} reps
                                                                    </span>

                                                                </div>

                                                            </div>

                                                            {set.note && (
                                                                <div className="mt-3 border-t border-border pt-3">
                                                                    <p className="text-sm text-gray-400">
                                                                        <span className="font-medium text-text">📝 Note:</span>{" "}
                                                                        {set.note}
                                                                    </p>
                                                                </div>
                                                            )}

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        )
                                    }

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>
    )
}

export default DashBoard