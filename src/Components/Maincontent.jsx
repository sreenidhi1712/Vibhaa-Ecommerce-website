import React from "react";
import { useContext } from "react";
import './Style.css';
import { FaRegCompass } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { PiNotePencilFill } from "react-icons/pi";
import { Context } from "./Context/Context";
import { HiUserCircle } from "react-icons/hi2";
import { SiGooglegemini } from "react-icons/si";


function Maincontent() {
  const {
		recentPrompt,
		showResults,
		loading,
		resultData,	
    setInput,
	} = useContext(Context);
  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return <>
  <div className="h-auto w-screen bg-white mb-24">
  {!showResults? (
    <>
        <div className="mt-20 w-5/6 ml-3">
        <p className="text-4xl text bg-gradient-text">Hello Sreenidhi </p>
        <p className="text-4xl text-slate-400">How can i Help You today?</p>
    </div>
     
      <div className="flex overflow-x-scroll py-10 hide-scrollbar mt-18" >
      <div onClick={() =>handleCardClick("Suggest Some Place To Visit In Kerala")} className="h-40 w-60 bg-slate-400 mt-10 ml-3 flex-shrink-0 rounded-xl" >
        <p className="m-2 text-white">Best Places to visit in karnataka in mansoon season</p>
        <FaRegCompass  className="text-white mt-20 ml-52"/>
      </div>
      <div onClick={() =>handleCardClick("Look up a Linux shell command for a specific task")} className="h-40 w-60 bg-slate-400 mt-10 ml-3 flex-shrink-0 rounded-xl" >
      <p className="m-2 text-white">Look up a Linux shell command for a specific task</p>
      <FaCode className="text-white mt-20 ml-52"/>
      </div>
      <div onClick={() =>handleCardClick("How not to join SAIT college")}  className="h-40 w-60 bg-slate-400 mt-10 ml-3 flex-shrink-0 rounded-xl">
      <p className="m-2 text-white">How not to join SAIT college</p>
      <PiNotePencilFill className="text-white mt-24 ml-52"/>
      </div>
      <div onClick={() =>handleCardClick("How to get job without skills")} className="h-40 w-60 bg-slate-400 mt-10 ml-3 mr-3 flex-shrink-0 rounded-xl">
      <p className="m-2 text-white">How to get job without skills</p>
      <PiNotePencilFill  className="text-white mt-24 ml-52"/>
      </div>
      </div>
    </>
  ):(
    <div className="h-[90%] w-[100%] bg-white mt-20">
						<div className=" ">
            <HiUserCircle className="h-8 w-8 text-black mx-3"/>
							<p className="text-black mx-3 mt-2">{recentPrompt}</p>
						</div>
						<div className="mt-5  text-white">
						
							{loading ? (
							<div >
                <SiGooglegemini  className="text-black h-8 w-8 mx-3"/>
              </div>
							) : (
                <>
                <SiGooglegemini  className="text-black h-8 w-8 mx-3 rotate[360] duration-1000 transition-all "/>
								<p dangerouslySetInnerHTML={{ __html: resultData }} className="mx-3 mt-3 text-justify text-black"></p>
                </>
							)}
						</div>
					</div>
  )} 
  


      
    
    
  </div>
  
  </>;
}

export default Maincontent;
