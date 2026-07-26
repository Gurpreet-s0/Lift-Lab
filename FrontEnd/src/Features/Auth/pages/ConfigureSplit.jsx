import React, { useEffect, useState } from 'react'
import UseAuth from '../Hooks/UseAuth'

const ConfigureSplit = () => {
    const {exercises,getExercisesHandler} = UseAuth()
    const [selectedExercises, setselectedExercises] = useState([])

    useEffect(()=>{
          getExercisesHandler()
    },[])

    const days = [
        {
            day:"Monday"
        },
        {
            day:"TuesDay"
        },
        {
            day:"Wednesday"
        },
        {
            day:"Thursday"
        },
        {
            day:"Friday"
        },
        {
            day:"Saturday"
        },
        {
            day:"Sunday"
        }
    ]
    return (

        <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-4xl text-3xl font-bold mt-5 text-center">
                Let's set up your Exercises
            </h1>

            <div className="bg-card lg:w-300  w-100 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 ">
                <form>
                    {
                        days.map(({day})=>{
                           return <div>
                                
                           </div>
                           
                        })
                    }
                </form>
            </div>
        </div>

    )
}

export default ConfigureSplit