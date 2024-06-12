import React, { useState ,useContext} from "react";
import { CiMenuFries } from "react-icons/ci";
import {Context} from "./Context/Context";
import { CiChat1 } from "react-icons/ci";
import { HiUserCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);
  const [Toggle,setToggle] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
};

  return (
    <nav className="bg-slate-400 w-screen h-14 fixed top-0 z-10">
      <div className="h-full w-full flex items-center ">
      <CiMenuFries  className="text-white mr-1 h-6 w-10 z-20" onClick={toggleMenu}/>
          <p className="ml-2 text-white text-3xl z-20" >KELU</p> 
          <HiUserCircle className="text-white h-10 w-10 ml-40"/>
      </div>
      <div className={`w-[90%] h-screen absolute top-0 bg-slate-400 flex-col transition-all duration-300 ease-linear ${isOpen?`-translate-x-0`:`-translate-x-full`}`}>
        <p className="mt-16 ml-2 text-white">Recent</p>
        <div className="flex-col h-[60%] overflow-y-scroll ">
        {prevPrompts.map((item, index) => {
							return (
								<div onClick={()=>{
                                    loadPreviousPrompt(item)
                                }} className="">
									 <div className="flex items-center w-[90%] h-10  ml-3 mt-3 rounded-md" >
                                     <CiChat1 className="ml-3 h-5 w-5 text-white"/>
                                        <p className="ml-3 text-white">{item.slice(0, 18)}</p>
                                     </div>
									
								</div>
							);
						})}
                
        </div>
        <div className="flex-col mt-2"> 
            <div className="flex items-center mt-3">
                     <IoIosHelpCircleOutline className="h-5 w-5  text-white"/>
                     <p className="text-white ml-3">Help</p>
            </div>
            <div className="flex items-center mt-3">
                <GiBackwardTime className="h-5 w-5  text-white"/>
                <p className="text-white ml-3">Activity</p>
                
            </div>
            <div className="flex items-center mt-3">
                <IoSettingsOutline className="h-5 w-5  text-white"/>
                <p className="text-white ml-3"> Settings</p>
            </div>
            <div className="flex items-center mt-3">
            <div className={`flex h-4 w-10 rounded-lg ml-1  transition-all ease-in duration-700 ${Toggle?` bg-black`:`bg-white`}`} onClick={()=>{
					setToggle(!Toggle)
				}}>
				<div className={`h-4 w-4 rounded-full transition-all ease-in duration-500 ${Toggle?`bg-white ml-0 `:`bg-black ml-6`}`}  ></div>
			</div>
            <p className="text-white ml-3">{Toggle?`Light-mode`:`Dark-Mode`}</p>
			</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
