import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import Contact from '../pages/Contact'
import AboutUs from '../pages/Aboutpage'
const Navigation = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div >
  )
}

export default Navigation
