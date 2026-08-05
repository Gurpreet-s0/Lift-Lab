import React, { useEffect } from 'react'
import UseSession from '../Hooks/UseSession'
import UseTodaySplit from '../../DashBoard/Hooks/UseTodaySplit'
import Loading from '../../Auth/components/Loading'
import { useNavigate } from 'react-router'


const Session = () => {
  const { startSessionHandler, sessionLoad } = UseSession()
  const { todaysplit, splitId, getTodaySplitHandler } = UseTodaySplit()
  const navigate = useNavigate()

  useEffect(() => {
    getTodaySplitHandler()
  }, [])
  return (
    sessionLoad ? <Loading /> :
      (
        todaysplit.restDay ?

          <div className="flex items-center justify-center py-16">
            <div className="bg-card border border-border rounded-3xl p-10 text-center max-w-md w-full shadow-lg">
              <div className="text-6xl mb-4">😴</div>

              <h1 className="text-3xl font-bold text-text">
                Today is a Rest Day
              </h1>

              <p className="mt-3 text-text-secondary">
                Recovery is part of the process. Relax, eat well, stay hydrated, and come back stronger tomorrow. 💪
              </p>
            </div>
          </div> :

          <div>
            <div className='bg-card lg:w-300  gap-4 w-90 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 '>
              <h1 className='text-3xl mt-4'>Your Todays Exercises</h1>
              {
                todaysplit?.exercises.map((e, idx) => {
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
  )
}

export default Session