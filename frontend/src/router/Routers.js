import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Home'
import ToursDetails from '../pages/Home'
import Login from '../pages/Home'
import Signup from '../pages/Home'
import Search from '../pages/Home'
function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/tours/:id' element={<ToursDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/singup' element={<Signup/>}/>
    <Route path='/tours/search' element={<Search/>}/>
   </Routes>
  )
}

export default Routers