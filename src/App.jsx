import { useState } from 'react'
import Sidebar from './Components/Common/Sidebar'
import { Route, Routes } from 'react-router-dom'
import StudentPage from './Components/DashboardPages/StudentPage'
import UserPage from './Components/DashboardPages/UserPage'
import Teacherpage from './Components/DashboardPages/Teacherpage'
import FeePage from './Components/DashboardPages/FeePage'
import DashboardHeadePage from './Components/DashboardPages/DashboardHeadePage'
function App() {
  return (
    <>
      <div>
      <Sidebar />
          <Routes>
            <Route path="/students" element={<StudentPage/>} />
            <Route path="/users" element={<UserPage/>} />
            <Route path="/teachers" element={<Teacherpage/>} />
            <Route path="/fees" element={<FeePage/>} />
            <Route path="/dashboard" element={<DashboardHeadePage/>} />
          </Routes>
      </div>
     
    </>
  )
}

export default App
