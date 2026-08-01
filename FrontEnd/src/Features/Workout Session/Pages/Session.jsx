import React from 'react'
import UseSession from '../Hooks/UseSession'
import UseTodaySplit from '../../DashBoard/Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'
import { useNavigate } from 'react-router'


const Session = () => {
  const { sessionId, startSessionHandler, sessionLoad } = UseSession()
  const { todaysplit, splitId } = UseTodaySplit()
  const navigate = useNavigate()

  return (
    sessionLoad ? <Loading /> :
      <div>
        <div className='bg-card lg:w-300  gap-4 w-90 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 '>
          <h1 className='text-3xl mt-4'>Your Todays Exercises</h1>
          {
            todaysplit.exercises.map((e, idx) => {
              return <div key={idx} className="w-80 bg-background border border-border rounded-xl p-3 flex items-center justify-between hover:border-primary transition">
                <div className="flex items-center gap-9">
                  <img
                    src={e.exercise.image}
                    alt={e.exercise.Name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">
                      {e.exercise.Name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {e.exercise.muscleGroup}
                    </p>
                  </div>
                </div>
              </div>
            })
          }
          <button onClick={() => {
            startSessionHandler({ workoutName: todaysplit.workoutName, workoutSplit: splitId })
            navigate("/workout")
          }} className=' bg-primary text-white  hover:opacity-90 transition py-3 w-80 rounded-2xl '>Start Session</button>
        </div>

      </div>
  )
}

export default Session