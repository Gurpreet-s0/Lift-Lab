import React, { useContext } from 'react'
import { AuthContext } from '../Features/Auth/Context/AuthContext'
import { Navigate } from 'react-router'
import Loading from '../Features/Auth/components/Loading'

const PublicRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext)


  if(user){
    return <Navigate to="/" replace />
  }


  if(loading){
    return <Loading />
  }
  
  return (
    children
  )
}

export default PublicRoutes