import { useNavigate } from 'react-router'
import UseSession from '../Hooks/UseSession'

const FinishWorkout = () => {
    const { finishedData } = UseSession()
    const navigate = useNavigate()

    return (
        <div className="min-h-dvh bg-background flex items-center justify-center px-4">

    <div className="bg-card border border-border rounded-3xl shadow-xl p-8 w-full max-w-2xl">


        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary">
                🎉 Workout Completed
            </h1>

            <p className="text-gray-400 mt-2">
                Great work! Every workout makes you stronger.
            </p>
        </div>


        <div className="grid grid-cols-2 gap-5">

            <div className="bg-background border border-border rounded-2xl p-5 text-center">
                <p className="text-gray-400 text-sm">
                    Duration
                </p>

                <h2 className="text-3xl font-bold mt-2 text-primary">
                    {finishedData.duration} min
                </h2>
            </div>

            <div className="bg-background border border-border rounded-2xl p-5 text-center">
                <p className="text-gray-400 text-sm">
                    Exercises
                </p>

                <h2 className="text-3xl font-bold mt-2">
                    {finishedData.exercisesDone.length}
                </h2>
            </div>

            <div className="bg-background border border-border rounded-2xl p-5 text-center">
                <p className="text-gray-400 text-sm">
                    Total Sets
                </p>

                <h2 className="text-3xl font-bold mt-2">
                    {finishedData.totalSets}
                </h2>
            </div>

            <div className="bg-background border border-border rounded-2xl p-5 text-center">
                <p className="text-gray-400 text-sm">
                    Volume
                </p>

                <h2 className="text-3xl font-bold mt-2 text-primary">
                    {finishedData.volume} kg
                </h2>
            </div>

        </div>


        <div className="my-8 border-t border-border"></div>


        <button
            onClick={()=>{
                navigate('/')
            }}
            className="w-full bg-primary text-black font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02]"
        >
            ← Back To Dashboard
        </button>

    </div>

</div>
    )
}

export default FinishWorkout