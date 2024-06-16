import React ,{ useContext} from 'react'
import { Context } from "./Context/Context";

function Cart() {
    const {
        Cart,
        setCart,
      } = useContext(Context);

      const increment = (item) => {
        setCart(prevCart => {
          const findIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
          if (findIndex >= 0) {
            const newCart = [...prevCart];
            newCart[findIndex].rating.quantity += 1;
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
            if (newCart[findIndex].rating.quantity > 1) {
              newCart[findIndex].rating.quantity -= 1;
            } else {
              newCart.splice(findIndex, 1);
            }
            return newCart;
          }
          return prevCart;
        });
      };

  return (
    <div className='mt-10 flex w-[95%] flex-wrap flex-shrink-0 justify-evenly tab:w-[85%]'>
        {Cart.map((items) => (
           <div className="flex flex-col w-[40%] tab:w-[30%] lap:w-[15%] h-52 tab:h-72 mx-2 my-5 bg-slate-100" key={items.id}>
           <div className="h-[55%] bg-slate-600">
             <img src={items.image} alt="" className="h-full w-full object-cover"/>
           </div>
           <div>
             <p className="mt-2 ml-1 font-semibold">{items.title.slice(0,10)}</p>
             <p className="text-sm ml-1">{items.category}</p>
             <p className="ml-1">${items.price}</p>
           </div>
         </div> 
        ))}
    </div>
  )
}

export default Cart
