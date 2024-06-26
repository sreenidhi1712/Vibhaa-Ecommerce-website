import React from 'react'
import Products from './Products'
import { addtocart } from "../Store-For-Redux/CartSlice";
import { useDispatch } from "react-redux";
import {favouriting} from "../Store-For-Redux/Favourite";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";



function FavouriteItem() {
 
 
    const Dispatch = useDispatch();
 const favouritelist = useSelector(state=>state.favouriteItem);

 const addToCart = (item) => {
    Dispatch(addtocart(item));
  };

  const removefavourites = (item)=>{
    Dispatch(favouriting(item));
  }
 

  return (
   <div className='mt-10 flex flex-col items-center'>
   <div>
    <p className='mt-10 text-black text-7xl '>Favourites</p>
   </div>
{favouritelist.length === 0 && <div className='flex  flex-col items-center mt-20'> <CiHeart  className='h-28 w-28 '/><p className='text-4xl  mt-10'>No favourites,please add some</p></div> }

    <div className="mt-10 flex w-[95%] flex-wrap flex-shrink-0 justify-evenly  tab:w-[85%]">
   {favouritelist.map((items)=>{
           return <Products key={items.id} items={items} addToCart={addToCart} favouritings={removefavourites} favourites={favouritelist}/>  
                })}
                
             </div> 
   </div>
  )
}

export default FavouriteItem
