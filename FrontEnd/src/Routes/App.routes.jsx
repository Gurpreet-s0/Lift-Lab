import React from 'react'
import {Route, Routes} from 'react-router'
import Login from '../Features/Auth/pages/Login'
import Register from '../Features/Auth/pages/Register'
import Profile from '../Features/UserProfile/Pages/Profile'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import EnterSplit from '../Features/Auth/pages/EnterSplit'
import ConfigureSplit from '../Features/Auth/pages/ConfigureSplit'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>}/>
        <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>}/>
        <Route path='/register/enterSplit' element={<PublicRoutes><EnterSplit/></PublicRoutes>} />
        <Route path='/register/configureSplit' element={<PublicRoutes><ConfigureSplit /></PublicRoutes>} />
        <Route path='/' element={<ProtectedRoutes><h1 className='text-text'>hey </h1></ProtectedRoutes>} />
        <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
    </Routes>
  )
}

export default Approutes