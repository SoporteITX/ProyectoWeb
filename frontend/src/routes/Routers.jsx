import React from 'react'
import Home from '../pages/Home'
import Optimmizacion from '../pages/optimizacion'
import Administracion from '../pages/administracion'
import Error from '../pages/Error'
import { Routes, Route } from 'react-router-dom'
import Infraestructura from '../pages/infraestuctura'
import Transformacion from '../pages/transformacion'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/optimizacion" element={<Optimmizacion />} />
    <Route path="/administracion" element={<Administracion />} />
    <Route path="/infraestructura" element={<Infraestructura />} />
    <Route path="/transformacion" element={<Transformacion />} />
    <Route path="/*" element={<Error />} />
  </Routes>
}

export default Routers