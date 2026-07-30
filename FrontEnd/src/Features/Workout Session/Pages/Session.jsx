import React from 'react'
import UseSession from '../Hooks/UseSession'
import UseTodaySplit from '../../DashBoard/Hooks/UseTodaySplit'

const Session = () => {
  const {sessionId,startSessionHandler,sessionLoad} = UseSession()
  const {todaysplit,splitId} = UseTodaySplit()


  return (
    <div>
      <button onClick={()=>{
        startSessionHandler({workoutName:todaysplit.workoutName,workoutSplit:splitId})
      }}>
        
        Start Session 
      </button>
    </div>
  )
}

export default Session