import {  configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"
import Favourites from "./Favourite"

export const CartStore = configureStore({
    reducer:{
        cart:CartReducer,
        favouriteItem:Favourites
    }

});