import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Steps from './pages/Steps'
import Sleep from './pages/Sleep'
import Nutrition from './pages/Nutrition'
import Vitals from './pages/Vitals'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/vitals" element={<Vitals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
