import React from 'react'
import { IoBagAddSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Products({items,addToCart,favouritings,favourites}) {
  return (
    <div  className="flex flex-col w-[40%] tab:w-[30%] items-center lap:w-[15%] h-52 tab:h-72 mx-2 my-5 bg-slate-100 group" key={items.id} >
              <div className="h-[55%] bg-slate-600">
                <img src={items.image} alt="" className="h-full w-full object-cover"/>
              </div>
              <div>
                <p className="mt-2 h-[30%] w-[100%] ml-1  font-semibold">{items.title.slice(0,10)}</p>
                <p className="text-sm ml-1">{items.category}</p>
                <p className="ml-1">${items.price}</p>
              </div>
              <div className='w-[90%] h-[15%] mt-3 invisible group-hover:visible flex justify-between'>
                <IoBagAddSharp className="h-6 w-6 text-gray-600" onClick={()=>{addToCart(items)}} />
                <FaHeart className={`h-6 w-6 ml-2 ${favourites.some((favItem) => favItem.id === items.id) ? 'text-red-500' : 'text-gray-600'}`} onClick={()=>favouritings(items)}/>
              </div>
  </div>
  )
}

export default Products
