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
                <p className="text-sm ">{items.category}</p>
                <p className="">${items.price}</p>
              </div>
              <div className='w-[90%] h-[15%] tab:mt-3  lap:hidden lap:group-hover:flex flex justify-between'>
                <IoBagAddSharp className="tab:h-6 tab:w-6 h-4 w-4 text-gray-600 cursor-pointer" onClick={()=>
                  {
                    addToCart(items);
                    navigator.vibrate(100);
                  }
                  } />
                <FaHeart className={`tab:h-6 tab:w-6 h-4 w-4 ml-2 cursor-pointer ${favourites.some((favItem) => favItem.id === items.id) ? 'text-red-500' : 'text-gray-600'}`} onClick={()=>
                {
                  favouritings(items);
                 navigator.vibrate(100);  
                }}/>
              </div>
  </div>
  )
}

export default Products
