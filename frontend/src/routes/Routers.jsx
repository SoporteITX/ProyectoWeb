import React from 'react'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Error from '../pages/Error'
import { Routes, Route } from 'react-router-dom'
import Developers from '../pages/Developers'
import DevelopersDetails from '../pages/DevelopersDetails'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Services />} />
    <Route path="/developers" element={<Developers />} />
    <Route path="/developers/:id" element={<DevelopersDetails />} />
    <Route path="/*" element={<Error />} />
  </Routes>
}

export default Routers