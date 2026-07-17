import React from 'react'
import {Route, Routes} from 'react-router'
import Login from '../Features/Auth/pages/Login'
import Register from '../Features/Auth/pages/Register'
import Profile from '../Features/UserProfile/Pages/Profile'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>}/>
        <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>}/>
        <Route path='/' element={<ProtectedRoutes><h1 className='text-text'>hey </h1></ProtectedRoutes>} />
        <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
    </Routes>
  )
}

export default Approutes