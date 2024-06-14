import React, { useContext} from "react";
import { CiMenuFries } from "react-icons/ci";
import {Context} from "./Context/Context";
import { CiChat1 } from "react-icons/ci";
import { HiUserCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

  const { onSent, prevPrompts, setRecentPrompt,isOpen, setIsOpen,Toggle,setToggle } = useContext(Context);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
};

  return (
    <>
    <nav className={`${Toggle?` bg-slate-400`:`bg-gray-800`} w-screen h-14 fixed top-0 z-10`}>
      <div className="h-full w-full flex items-center justify-between"  onClick={()=>{
    if(isOpen){
      setIsOpen(false);
    }
    
  }}>
        <div className="flex items-center">
        
        <p className={`ml-2 ${Toggle?`text-white`:`text-gray-300`} text-3xl z-20`} >VIBHAA</p> 

        </div>
        <div className="flex">
          <FaShoppingCart className={`${Toggle?`text-white`:`text-gray-300`} h-6 w-6 mr-2`}/>
          <CiMenuFries  className={`${Toggle?`text-white`:`text-gray-300`} mr-1 h-6 w-10 z-20 lap:hidden`} onClick={toggleMenu}/>
        </div>
          
      </div>
      {/* Side bar starts here */}
      <div className={`w-[90%] h-screen absolute top-0 tab:w-[45%] ml:w-[60%] lap:w-[25%] lapl:w-[20%] ${Toggle?`bg-slate-400`:`bg-gray-800`} flex-col transition-all duration-300 ease-linear ${isOpen?`-translate-x-0`:`-translate-x-full`}`}>
      <HiUserCircle className={`${Toggle?`text-white`:`text-gray-300`} mt-20 ml-5 h-7 w-7 `}/> 
        <div className="flex-col h-auto "> 
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14 mt-3 "><p className="ml-5 text-white">Everything</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-white">Women</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-white">Men</p></div>
               <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-white">Childrens</p></div>
        </div>
        <div className="flex-col mt-14 "> 
        <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14  "><p className="ml-5 text-white">About</p></div>
        <div className="flex justify-start items-center border-b-[0.5px] border-black w-full h-14 "><p className="ml-5 text-white">Contact</p></div>
        </div>
        <div className="flex items-center mt-3">
            <div className={`flex h-4 w-10 rounded-lg ml-1  transition-all ease-in duration-700 ${Toggle?` bg-gray-900`:`bg-slate-400`}`} onClick={()=>{
					setToggle(!Toggle)
				}}>
				<div className={`h-4 w-4 rounded-full transition-all ease-in duration-500 ${Toggle?`bg-white ml-0 `:`bg-black ml-6`}`}  ></div>
			</div>
            <p className={`${Toggle?`text-white`:`text-gray-300`} ml-3`}>{Toggle?`Light-mode`:`Dark-Mode`}</p>
			</div>
      </div>
            
      
    </nav>
    </>
  );
};

export default Navbar;
