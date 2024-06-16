import React ,{ useContext} from 'react'
import { Context } from "./Context/Context";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        Cart,
        setCart,
      } = useContext(Context);

      const Navigate = useNavigate();

      const increment = (item) => {
        setCart(prevCart => {
          const findIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
          if (findIndex >= 0) {
            const newCart = [...prevCart];
            newCart[findIndex].rating.count += 1;
            return newCart;
          }
          return prevCart;
        });
      };
    
      const decrement = (item) => {
        setCart(prevCart => {
          const findIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
          if (findIndex >= 0) {
            const newCart = [...prevCart];
            if (newCart[findIndex].rating.count > 1) {
              newCart[findIndex].rating.count -= 1;
            } else {
              newCart.splice(findIndex, 1);
            }
            return newCart;
          }
          return prevCart;
        });
      };

      const RemoveItem = (id) => {
        setCart(Cart.filter(item => item.id !== id));
      };

  return (
    <div className='h-auto w-screen'>
      <div className='flex h-50 bg-slate-300 w-full items-center justify-center mt-20' >
        <h1 className='text-4xl font-semibold  py-5' onClick={()=>Navigate('/')}>Cart</h1>
      </div>
        {Cart.map((items) => (
           <div className="flex flex-col items-center bg-slate-100" key={items.id}>
             <div className='flex flex-col w-[80%] mt-10'>
           <div className=' h-14 w-full border-2 border-t-slate-500 flex items-center justify-end' ><MdOutlineCancel onClick={()=>{RemoveItem(items.id)}} className='h-5 w-5'/></div>
           <div className=' h-auto py-5 w-full border-2 border-t-slate-500 flex justify-center'> <img src={items.image} alt="" className="h-14 w-14 object-cover "/></div>
           <div className=' h-14 w-full border-2 border-t-slate-500'>{items.title}</div>
           <div className=' h-14 w-full border-2 border-t-slate-500'>{items.price}</div>
           <div className=' h-14 w-full border-2 border-t-slate-500'>{items.rating.count}</div>
           <div className=' h-14 w-full border-2 border-t-slate-500 border-b-slate-500'>{items.rating.count*items.price}</div>
      </div>
           {/* <div className="h-[55%] bg-slate-600">
            
           </div>
           <div>
             <p className="mt-2 ml-1 font-semibold"></p>
             <p className="text-sm ml-1">{items.category}</p>
             <p className="ml-1">$</p>
             <p className='text-lg ml-1'>{items}</p>
           </div> */}
         </div> 
        ))}
    </div>
  )
}

export default Cart
