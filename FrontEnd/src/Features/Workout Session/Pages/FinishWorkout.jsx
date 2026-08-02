import React, { useEffect } from 'react'
import UseSession from '../Hooks/UseSession'

const FinishWorkout = () => {
    const {finishedData} = UseSession()
    console.log(finishedData);
    
  return (
    <div>
        finihed
    </div>
  )
}

export default FinishWorkout