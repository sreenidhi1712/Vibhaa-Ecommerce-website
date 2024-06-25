import React from 'react'
import Navbar from '../Components/Navbar'
import Maincontent from '../Components/Maincontent'
import { Routes,Route } from 'react-router-dom'
import Cart from "../Components/Cart"
import FavouriteItem from '../Components/FavouriteItem'

function Mainpage() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Maincontent/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favourite' element={<FavouriteItem/>}/>
        </Routes>
     
    </div>
  )
}

export default Mainpage
