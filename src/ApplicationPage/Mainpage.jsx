import React from 'react'
import Navbar from '../Components/Navbar'
import Maincontent from '../Components/Maincontent'
import { Routes,Route } from 'react-router-dom'
import Cart from "../Components/Cart"

function Mainpage() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Maincontent/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
     
    </div>
  )
}

export default Mainpage
