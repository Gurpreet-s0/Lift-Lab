import React, { useState } from 'react'
import UseSession from '../Hooks/UseSession'
import UseTodaySplit from '../../DashBoard/Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'

const Workout = () => {
    const { sessionId } = UseSession()
    const { todaysplit } = UseTodaySplit()
    const [totalSets, settotalSets] = useState(0)
    const [setsData, setsetsData] = useState(
        Array.from({ length: totalSets }).map(() => ({
            reps : null,
            weight : null,
        }))
    )



    if (!todaysplit) {
        return <Loading />;
    }

    return (
        <div className='min-h-dvh px-4 pb-24 pt-4 lg:py-6 lg:pl-58  flex-col justify-center lg:pr-6'>
            <div className='flex flex-col items-center'>
                <div>Start time</div>
                <div>{todaysplit.workoutName} Day</div>
                <div>
                    <h1>
                        Progress
                    </h1>
                </div>
            </div>
            <hr className='w-full' />
            <div>
                {
                    todaysplit.exercises[0].exercise.Name

                }
                <div>
                    <h1>Sets</h1>
                    {
                        Array.from({ length: totalSets }).map(() => {
                            return <div>
                                hello
                            </div>
                        })
                    }
                    <button onClick={() => {
                        settotalSets(totalSets - 1)
                    }}>Add Set</button>
                </div>
            </div>
        </div>
    )
}

export default Workout