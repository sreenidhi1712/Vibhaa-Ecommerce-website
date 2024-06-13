import React, { useContext, useEffect, useRef } from "react";
import './Style.css';
import { FaRegCompass, FaCode } from "react-icons/fa";
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
    isOpen,
    setIsOpen,
    Toggle,
  } = useContext(Context);

  const resultContainerRef = useRef(null);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  // useEffect(() => {
  //   if (resultContainerRef.current) {
  //     resultContainerRef.current.scrollTop = resultContainerRef.current.scrollHeight ;
  //   }
  // }, [resultData, loading]);

  return (
    <>
      <div className={`w-auto ${Toggle ? 'bg-white' : 'bg-gray-900'} ${showResults ? 'mb-[4.5rem] tab:mb-[3.5rem]' : 'h-screen'}`} onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}>
        {!showResults ? (
          <>
            <div className="mt-14 w-5/6 ml-3">
              <p className="text-4xl bg-gradient-text">Hello Sreenidhi</p>
              <p className="text-4xl text-slate-400">How can I help you today?</p>
            </div>
            <div className="flex overflow-x-scroll py-10 hide-scrollbar mt-18 lapl:justify-center lapl:gap-2">
              <div onClick={() => handleCardClick("Best Places to visit in Karnataka in monsoon season")} className={`h-40 w-60 ${Toggle ? 'bg-slate-400' : 'bg-gray-700'} mt-10 ml-3 flex-shrink-0 rounded-xl`}>
                <p className={`m-2 ${Toggle ? 'text-white' : 'text-gray-300'}`}>Best Places to visit in Karnataka in monsoon season</p>
                <FaRegCompass className={`${Toggle ? 'text-white' : 'text-gray-300'} mt-20 ml-52`} />
              </div>
              <div onClick={() => handleCardClick("Look up a Linux shell command for a specific task")} className={`h-40 w-60 ${Toggle ? 'bg-slate-400' : 'bg-gray-700'} mt-10 ml-3 flex-shrink-0 rounded-xl`}>
                <p className={`m-2 ${Toggle ? 'text-white' : 'text-gray-300'}`}>Look up a Linux shell command for a specific task</p>
                <FaCode className={`${Toggle ? 'text-white' : 'text-gray-300'} mt-20 ml-52`} />
              </div>
              <div onClick={() => handleCardClick("How not to join SAIT college")} className={`h-40 w-60 ${Toggle ? 'bg-slate-400' : 'bg-gray-700'} mt-10 ml-3 flex-shrink-0 rounded-xl`}>
                <p className={`m-2 ${Toggle ? 'text-white' : 'text-gray-300'}`}>How not to join SAIT college</p>
                <PiNotePencilFill className={`${Toggle ? 'text-white' : 'text-gray-300'} mt-24 ml-52`} />
              </div>
              <div onClick={() => handleCardClick("How to get job without skills")} className={`h-40 w-60 ${Toggle ? 'bg-slate-400' : 'bg-gray-700'} mt-10 ml-3 flex-shrink-0 rounded-xl`}>
                <p className={`m-2 ${Toggle ? 'text-white' : 'text-gray-300'}`}>How to get job without skills</p>
                <PiNotePencilFill className={`${Toggle ? 'text-white' : 'text-gray-300'} mt-24 ml-52`} />
              </div>
            </div>
          </>
        ) : (
          <div className={`${loading ? 'h-screen' : 'h-screen overflow-y-scroll'} w-[100%] ${Toggle ? 'bg-white' : 'bg-gray-900'} mt-14`} ref={resultContainerRef}>
            <div className="">
              <HiUserCircle className={`h-8 w-8 ${Toggle ? 'text-black' : 'text-gray-300'} mx-3`} />
              <p className={`${Toggle ? 'text-black' : 'text-gray-300'} mx-3 mt-2`}>{recentPrompt}</p>
            </div>
            <div className="mt-5 text-white">
              {loading ? (
                <div>
                  <SiGooglegemini className={`${Toggle ? 'text-black' : 'text-gray-300'} h-8 w-8 mx-3`} />
                </div>
              ) : (
                <>
                  <SiGooglegemini className={`${Toggle ? 'text-black' : 'text-gray-300'} h-8 w-8 mx-3 rotate[360] duration-1000 transition-all`} />
                  <p dangerouslySetInnerHTML={{ __html: resultData }} className={`mx-3 mt-3 text-justify ${Toggle ? 'text-black' : 'text-gray-300'}`}></p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Maincontent;
