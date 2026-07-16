import React from 'react'
import {Route, Routes} from 'react-router'
import Login from '../Features/Auth/pages/Login'
import Register from '../Features/Auth/pages/Register'
import Profile from '../Features/UserProfile/Pages/Profile'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default Approutes