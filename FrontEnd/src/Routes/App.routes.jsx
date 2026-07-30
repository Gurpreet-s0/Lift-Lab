import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Features/Auth/pages/Login'
import Register from '../Features/Auth/pages/Register'
import Profile from '../Features/UserProfile/Pages/Profile'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import EnterSplit from '../Features/Setup Split/Pages/EnterSplit'
import ConfigureSplit from '../Features/Setup Split/Pages/ConfigureSplit'
import SplitGuard from './SplitGuard'
import DashBoard from '../Features/DashBoard/Pages/DashBoard'
import Session from '../Features/Workout Session/Pages/Session'

const Approutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
      <Route path='/register' element={<PublicRoutes><Register /></PublicRoutes>} />
      <Route path='/enterSplit' element={<ProtectedRoutes><EnterSplit /></ProtectedRoutes>} />
      <Route path='/configureSplit' element={<ProtectedRoutes><ConfigureSplit /></ProtectedRoutes>} />
      <Route path='/dashboard' element={<ProtectedRoutes><SplitGuard><DashBoard/></SplitGuard></ProtectedRoutes>} />
      <Route path='/session' element={<ProtectedRoutes><SplitGuard><Session/></SplitGuard></ProtectedRoutes>} />
      <Route path='/profile' element={<ProtectedRoutes><SplitGuard><Profile /></SplitGuard></ProtectedRoutes>} />
    </Routes>
  )
}

export default Approutes