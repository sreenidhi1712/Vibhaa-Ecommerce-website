import React, { useContext} from "react";
import { CiMenuFries } from "react-icons/ci";
import {Context} from "./Context/Context";
import { HiUserCircle } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

  const { isOpen, setIsOpen,Toggle,setToggle } = useContext(Context);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <nav className={`${Toggle?` bg-white`:`bg-gray-800`} w-screen h-14 fixed top-0 left-0  z-10 bg-opacity-50`}>
      <div className="h-full w-full flex items-center justify-between "   onClick={()=>{
    if(isOpen){
      setIsOpen(false);
    }
    
  }}>
        <div className="flex items-center">
        
        <p className={`ml-2 font-bold ${Toggle?`text-black`:`text-gray-300`} text-3xl z-20`} >VIBHAA</p> 

        </div>
        <div className=" hidden lap:flex  lap:gap-8 ">
          <p className="text-lg font-bold">EVERYTHING</p>
          <p className="text-lg font-bold">WOMEN</p>
          <p className="text-lg font-bold">MEN</p>
          <p className="text-lg font-bold">ACCESSORIES</p>

        </div>
        <div className="flex">
          <FaShoppingCart className={`${Toggle?`text-black`:`text-gray-300`} h-6 w-6 mr-2`}/>
          <CiMenuFries  className={`${Toggle?`text-black`:`text-gray-300`}  h-6 w-10 z-20 lap:hidden`} onClick={toggleMenu}/>
        </div>
          
      </div>
      {/* Side bar starts here */}
      <div className={`w-[90%] h-screen absolute  right-0 top-0 tab:w-[45%] ml:w-[60%]  ${Toggle?`bg-slate-400`:`bg-gray-800`} flex-col transition-all duration-300 ease-linear ${isOpen?`translate-x-0`:`translate-x-[110%]`}`}>
      <HiUserCircle className={`${Toggle?`text-black`:`text-gray-300`} mt-20 ml-5 h-7 w-7 `}/> 
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
        <div className="flex items-center mt-3">
            <div className={`flex h-4 w-10 rounded-lg ml-1  transition-all ease-in duration-700 ${Toggle?` bg-gray-900`:`bg-slate-400`}`} onClick={()=>{
					setToggle(!Toggle)
				}}>
				<div className={`h-4 w-4 rounded-full transition-all ease-in duration-500 ${Toggle?`bg-white ml-0 `:`bg-black ml-6`}`}  ></div>
			</div>
            <p className={`${Toggle?`text-black`:`text-gray-300`} ml-3`}>{Toggle?`Light-mode`:`Dark-Mode`}</p>
			</div>
      </div>
            
      
    </nav>
    </>
  );
};

export default Navbar;
