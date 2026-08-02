import React, { useContext } from 'react'
import { AuthContext } from '../Features/Auth/Context/auth-context'
import { Navigate } from 'react-router'
import Loading from '../Features/Auth/components/Loading'

const PublicRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <Loading />
  }

  if(user){
    return <Navigate to="/" replace />
  }
  
  return (
    children
  )
}

export default PublicRoutes
