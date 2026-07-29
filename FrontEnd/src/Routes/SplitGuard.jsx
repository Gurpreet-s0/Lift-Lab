import React, { Children, useEffect } from 'react'
import UseSplit from '../Features/Setup Split/Hooks/UseSplit'
import Loading from '../Features/Auth/components/Loading'
import { Navigate } from 'react-router'

const SplitGuard = ({ children }) => {
    const { split, getSplitHandler } = UseSplit()


    useEffect(() => {
        getSplitHandler()
    }, [])


    if (split === undefined) {
        return <Loading />
    }

    if (split === null) {
        return <Navigate to="/enterSplit" replace />
    }
    return (
        children
    )
}

export default SplitGuard