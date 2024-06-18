import React ,{ useContext} from 'react'
import { Context } from "./Context/Context";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { BsFillBagPlusFill } from "react-icons/bs";



function Cart() {
    const {
        cart,
        setCart,
      } = useContext(Context);

      const navigate = useNavigate();

      const increment = (item) => {
        setCart((prevCart) => {
          const findIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
          if (findIndex >= 0) {
            const newCart = [...prevCart];
            newCart[findIndex] = {
              ...newCart[findIndex],
              rating: {
                ...newCart[findIndex].rating,
                count: newCart[findIndex].rating.count + 1,
              },
            };
            return newCart;
          }
          return prevCart;
        });
      };
    
    
      const decrement = (item) => {
        setCart((prevCart) => {
          const findIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
          if (findIndex >= 0) {
            const newCart = [...prevCart];
            if (newCart[findIndex].rating.count > 1) {
              newCart[findIndex] = {
                ...newCart[findIndex],
                rating: {
                  ...newCart[findIndex].rating,
                  count: newCart[findIndex].rating.count - 1,
                },
              };
            } else {
              newCart.splice(findIndex, 1);
            }
            return newCart;
          }
          return prevCart;
        });
      };

      const RemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
      };

  return (
    <div className='h-auto w-screen'>
      <div className='flex h-50  w-full items-center justify-center mt-20' >
        <h1 className='text-4xl font-semibold tab:text-5xl lapl:text-7xl  py-5' onClick={()=>navigate('/')}>Cart</h1>
      </div>
      <div className="flex flex-col items-center bg-slate-100 w-full" >
      <div className='hidden  lap:flex w-[95%] ' >
      {cart.length > 0 && (
        <div className={`flex flex-col w-full mt-10 lap:flex lap:flex-row`}>
          {/* Your cart item headers */}
          <div className='h-14 w-full flex items-center justify-end'></div>
          <div className='h-auto py-5 w-full flex justify-center'></div>
          <div className='h-14 w-full flex justify-center'><p>Products</p></div>
          <div className='h-14 w-full flex justify-center'><p>Price</p></div>
          <div className='h-14 w-full flex justify-center'><p>Quantity</p></div>
          <div className='h-14 w-full border-b-slate-200 flex justify-center'><p>SubTotal</p></div>
        </div>
      )}
      </div>
        {cart.map((items) => (
           <CartItem  key={items.id} items={items} RemoveItem={RemoveItem} increment={increment} decrement={decrement} />
        ))}
        </div>
        {cart.length > 0 ? 
        <div className='flex flex-col w-full items-center my-10 lap:items-end ' >
             <div className='w-[80%] flex justify-center border-[0.5px] lap:w-[30%] lap:mr-20'>
               <p className='py-5'>CartTotals</p>
             </div>
             <div className='w-[80%] flex flex-col items-center border-[0.5px] lap:w-[30%] lap:mr-20'>
                <div className='flex justify-between w-[90%] py-5 border-b-[0.5px]'>
                   <p>Subtotal</p>
                   <p>0</p>
                </div>
                <div className='flex justify-between w-[90%] py-5 border-b-[0.5px]'>
                   <p>Total</p>
                   <p>0</p>
                </div>
                <button className='w-[90%] h-10 bg-blue-600 mt-5 mb-5'>Checkout</button>
             </div>
        </div> : <div className='flex  flex-col items-center mt-20'> <BsFillBagPlusFill className='h-28 w-28 '/><p className='text-4xl  mt-10'>Your Cart is Empty</p></div> } 
    </div>
  )
}

export default Cart


const CartItem = ({items,RemoveItem,increment,decrement})=>{
  return(
       <>
         
             <div className='flex flex-col w-[80%] mt-10 lap:mt-0 lap:flex lap:flex-row lap:w-[95%]'>
           <div className=' h-14 w-full  border-t-[0.5px] flex items-center justify-end lap:justify-center lap:py-5' ><MdOutlineCancel onClick={()=>{RemoveItem(items.id)}} className='h-5 w-5'/></div>
           <div className=' h-auto py-5  w-full  border-t-[0.5px] flex justify-center lap:items-center lap:py-5'> <img src={items.image} alt="" className="h-14 w-14 object-cover "/></div>
           <div className=' h-14 w-full  border-t-[0.5px] flex justify-between lap:justify-center lap:items-center lap:py-5' ><p className='lap:hidden'>Products</p><p className='font-bold'>{items.title.slice(0,10)}</p></div>
           <div className=' h-14 w-full border-t-[0.5px] flex justify-between lap:justify-center lap:items-center lap:py-5'><p className='lap:hidden'>Price</p><p className='font-bold'>{items.price}</p></div>
           <div className=' h-14 w-full  border-t-[0.5px] flex justify-between lap:justify-center lap:items-center lap:py-5'><p className='lap:hidden'>Quantity</p>
           <div className='flex gap-5 items-center lap:justify-center lap:py-5'>
            <button className='font-bold' onClick={()=>increment(items)}><CiCirclePlus/></button>
            <p className='font-bold' >{items.rating.count}</p>
            <button className='font-bold' onClick={()=>decrement(items)}><CiCircleMinus/></button>
            </div>
            </div>
           <div className=' h-14 w-full  border-t-[0.5px] border-b-slate-200 flex justify-between lap:justify-center lap:items-center lap:py-5'><p className='lap:hidden'>SubTotal</p><p className='font-bold'>{items.rating.count*items.price}</p></div>
      </div>
           {/* <div className="h-[55%] bg-slate-600">
            
           </div>
           <div>
             <p className="mt-2 ml-1 font-semibold"></p>
             <p className="text-sm ml-1">{items.category}</p>
             <p className="ml-1">$</p>
             <p className='text-lg ml-1'>{items}</p>
           </div> */}
      
       </>
  );
}