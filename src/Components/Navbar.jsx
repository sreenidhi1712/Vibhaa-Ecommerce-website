import React, { useContext} from "react";
import { CiMenuFries } from "react-icons/ci";
import {Context} from "./Context/Context";
import { HiUserCircle } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate,useLocation  } from "react-router-dom";
import Loader from "../Loader";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const currentlocation = useLocation();
  const CartItems = useSelector(state=>state.cart)

  const { isOpen, setIsOpen, loading} = useContext(Context);
  const Navigate = useNavigate();
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    {loading ? <Loader/> :
    <nav className={` bg-white w-screen h-14 fixed top-0 left-0  z-10 bg-opacity-50`}>
      <div className="h-full w-full flex items-center justify-between "   onClick={()=>{
    if(isOpen){
      setIsOpen(false);
    }
    
  }}>
        <div className="flex items-center">
        
        <p className={`ml-2 font-bold text-black text-3xl z-20`}>VIBHAA</p> 

        </div>
        <div className=" hidden lap:flex  lap:gap-8 ">
          <p className="text-lg font-bold">EVERYTHING</p>
          <p className="text-lg font-bold">WOMEN</p>
          <p className="text-lg font-bold">MEN</p>
          <p className="text-lg font-bold">ACCESSORIES</p>

        </div>
        <div className="flex">
        {currentlocation.pathname === '/favourite' ? <FaHome className="text-black h-6 w-6 mr-2 lap:mr-6" onClick={()=>{Navigate('/')}}/>:  <FaHeart className={`text-black h-6 w-6 mr-2 lap:mr-6`} onClick={()=>{Navigate('/favourite')}}/>}
          {currentlocation.pathname === '/cart' ? <FaHome className="text-black h-6 w-6 mr-2 lap:mr-6" onClick={()=>{Navigate('/')}}/>:<div className="relative">
                  <FaShoppingCart className="text-black h-6 w-6 mr-2 lap:mr-6" onClick={() => { Navigate('/cart'); }} />
                  {CartItems.length > 0 && (
                    <span className="absolute -top-2 right-0 lap:right-2 h-5 w-5 bg-slate-300 text-black rounded-full flex items-center justify-center text-xs">
                      {CartItems.length}
                    </span>
                  )}
                </div>}

          <CiMenuFries  className={`text-black h-6 w-10 z-20 lap:hidden`} onClick={toggleMenu}/>
        </div>
          
      </div>
      {/* Side bar starts here */}
      <div className={`w-[90%] h-screen absolute  right-0 top-0 tab:w-[45%] ml:w-[60%] bg-white flex-col transition-all duration-300 ease-linear ${isOpen?`translate-x-0`:`translate-x-[110%]`}`}>
      <HiUserCircle className={`text-black mt-20 ml-5 h-7 w-7 `}/> 
        <div className="flex-col h-auto "> 
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14 mt-3 "><p className="ml-5 text-black">Everything</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-black">Women</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-black">Men</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-black">Childrens</p></div>
        </div>
        <div className="flex-col mt-14 "> 
        <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-black">About</p></div>
        <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14 "><p className="ml-5 text-black">Contact</p></div>
        </div>
      </div>
            
      
    </nav>
    }
    </>
  );
};

export default Navbar;
