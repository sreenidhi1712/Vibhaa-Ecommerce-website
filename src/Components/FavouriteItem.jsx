import React from 'react'
import Products from './Products'
import { addtocart } from "../Store-For-Redux/CartSlice";
import { useDispatch } from "react-redux";
import {favouriting} from "../Store-For-Redux/Favourite";
import { useSelector } from "react-redux";

function FavouriteItem() {

    const Dispatch = useDispatch();
 const favourites = useSelector(state=>state.favourite);

 const addToCart = (item) => {
    Dispatch(addtocart(item));
  };

  const removefavourites = (item)=>{
    Dispatch(favouriting(item));
  }

  return (
   <>
   {favourites.length === 0 ? <>
   {favourites.map((items)=>{
              return <Products key={items.id} items={items} addToCart={addToCart} favouriting={removefavourites} favourites={favourites}/>   
                })}
                </>
            : <h1>
                ADD Your Favourites
                </h1>}
   </>
  )
}

export default FavouriteItem
