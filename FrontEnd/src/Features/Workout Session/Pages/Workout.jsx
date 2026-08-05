import React, { useEffect, useState } from 'react'
import UseSession from '../Hooks/UseSession'
import UseTodaySplit from '../../DashBoard/Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'
import { useNavigate } from 'react-router'

const Workout = () => {

    const { sessionId, sessionLoad, logExerciseHandler, finishSessionHandler } = UseSession()
    const { todaysplit ,getTodaySplitHandler } = UseTodaySplit()
    const [setsData, setsetsData] = useState([{
        weight: "",
        reps: "",
        note: ""
    }])
    const [currentEx, setcurrentEx] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        getTodaySplitHandler()
    },[])

    if (!todaysplit) {
        return <Loading />;
    }

    async function handleSave() {
        const isInvalid = setsData.some(
            (set) =>
                Number(set.weight) <= 0 ||
                Number(set.reps) <= 0
        );

        if (isInvalid) {
            alert("Weight and reps must be greater than 0.");
            return;
        }

        await logExerciseHandler({
            sessionId,
            exercise: todaysplit.exercises[currentEx].exercise._id,
            sets: setsData
        });

        setcurrentEx(currentEx + 1)

        if (currentEx === todaysplit.exercises.length - 1) {

            await finishSessionHandler({ sessionId });

            navigate("/finishWorkout");

            return;
        }


        setsetsData([
            {
                weight: "",
                reps: "",
                note: ""
            }
        ]);
    }


    return (sessionLoad ? <Loading /> :
        <div className="min-h-dvh bg-background text-text px-4 pb-28 pt-6 lg:pl-58 lg:pr-6">

            <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-400 text-sm">
                                Workout Session
                            </p>

                            <h1 className="text-3xl font-bold mt-1">
                                {todaysplit.workoutName} Day
                            </h1>
                        </div>
{/* 
                        <div className="bg-primary/20 px-4 py-2 rounded-xl border border-primary/30">
                            🕒 Start Time
                        </div> */}
                    </div>

                    <div className="mt-6">
                        <div className="flex justify-between text-sm mb-2 text-gray-400">
                            <span>Progress</span>

                            <span>
                                {currentEx}/{todaysplit.exercises.length}
                            </span>
                        </div>

                        <progress
                            value={currentEx}
                            max={todaysplit.exercises.length}
                            className="w-full h-3 rounded-full"
                        />
                    </div>

                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8">

                <div className="bg-card border border-border rounded-3xl overflow-hidden">

                    <img
                        src={todaysplit.exercises[currentEx].exercise.image}
                        className="w-full h-72 object-cover lg:h-full"
                    />

                    <div className="p-6">

                        <h1 className="text-3xl font-bold">
                            {todaysplit.exercises[currentEx].exercise.Name}
                        </h1>

                        <p className="text-gray-400 mt-1">
                            Log every set carefully. Future you will either thank you or ignore the data completely.
                        </p>

                        <h2 className="mt-8 text-xl font-semibold">
                            Sets
                        </h2>

                        <div className="space-y-4 mt-4">

                            {setsData.map((e, idx) => (

                                <div
                                    key={idx}
                                    className="bg-background border border-border rounded-2xl p-4"
                                >

                                    <div className="font-semibold mb-3">
                                        Set {idx + 1}
                                    </div>

                                    <div className="grid lg:grid-cols-3 gap-4">

                                        <input required
                                            value={e.weight}
                                            onChange={(e) => {
                                                const updated = [...setsData]
                                                updated[idx].weight = e.target.value
                                                setsetsData(updated)
                                            }}
                                            id={`weight${idx + 1}`}
                                            type="number"
                                            placeholder="Weight (kg)"
                                            className="bg-card border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
                                        />

                                        <input required
                                            value={e.reps}
                                            onChange={(e) => {
                                                const updated = [...setsData]
                                                updated[idx].reps = e.target.value
                                                setsetsData(updated)
                                            }}
                                            id={`reps${idx + 1}`}
                                            type="number"
                                            placeholder="Reps"
                                            className="bg-card border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
                                        />

                                        <input
                                            value={e.note}
                                            onChange={(e) => {
                                                const updated = [...setsData]
                                                updated[idx].note = e.target.value
                                                setsetsData(updated)
                                            }}
                                            id={`note${idx + 1}`}
                                            placeholder="Notes"
                                            className="bg-card border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="flex gap-3 mt-6">

                            <button
                                onClick={() => {
                                    setsetsData((prev) => [
                                        ...prev,
                                        {
                                            weight: "",
                                            reps: ""
                                        }
                                    ])
                                }}
                                className="flex-1 bg-primary text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
                            >
                                + Add Set
                            </button>

                            <button
                                onClick={() => {
                                    const updated = [...setsData]
                                    if (setsData.length == 1) return
                                    updated.pop()
                                    setsetsData(updated)
                                }}
                                className="flex-1 bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition"
                            >
                                Remove Set
                            </button>

                        </div>

                        <button
                            type='submit'
                            onClick={() => {
                                handleSave()
                                
                            }}
                            className="w-full mt-6 bg-primary text-black font-bold py-4 rounded-xl text-lg hover:scale-[1.01] transition"
                        >
                            Save Exercise →
                        </button>

                    </div>

                </div>

                {/* Exercise Timeline */}

                <div className="bg-card border border-border rounded-3xl mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Workout Progress
                    </h2>

                    <div className="space-y-3">

                        {todaysplit.exercises.map((e, idx) => (

                            <div
                                key={e.exercise._id}
                                className={`flex items-center justify-between rounded-xl p-4 border transition-all ${idx < currentEx
                                    ? "bg-green-500/20 border-green-500"
                                    : idx === currentEx
                                        ? "bg-primary/15 border-primary"
                                        : "bg-background border-border"
                                    }`}
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${idx < currentEx
                                            ? "bg-green-500 text-black"
                                            : idx === currentEx
                                                ? "bg-primary text-black"
                                                : "bg-card border border-border"
                                            }`}
                                    >
                                        {idx + 1}
                                    </div>

                                    <div>

                                        <div className="font-semibold">
                                            {e.exercise.Name}
                                        </div>

                                        <div className="text-sm text-gray-400">
                                            {e.exercise.muscleGroup}
                                        </div>

                                    </div>

                                </div>

                                <div className="text-2xl">

                                    {idx < currentEx && "✅"}
                                    {idx === currentEx && "🏋️"}
                                    {idx > currentEx && "⏳"}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div >

        </div>
    )
}

export default Workout