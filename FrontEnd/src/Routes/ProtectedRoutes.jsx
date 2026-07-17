import React, { useContext } from 'react'
import { AuthContext } from '../Features/Auth/Context/AuthContext'
import {Navigate} from 'react-router'
import Loading from '../Features/Auth/components/Loading'

const ProtectedRoutes = ({children}) => {
const {user,loading} = useContext(AuthContext)


if(!user){
  return <Navigate to="/login" replace />
}


if(loading){
  return <Loading />
}

  return (
    children
  )
}

export default ProtectedRoutes