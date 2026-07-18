import React, { useContext } from 'react'
import { AuthContext } from '../Features/Auth/Context/auth-context'
import { Navigate } from 'react-router'
import Loading from '../Features/Auth/components/Loading'
import SideBar from '../Components/SideBar'

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className='min-h-dvh bg-background'>
      <SideBar />
      <main className='min-h-dvh px-4 pb-24 pt-4 lg:py-6 lg:pl-58 flex justify-center lg:pr-6'>
        {children}
      </main>
    </div>
  )
}

export default ProtectedRoutes
