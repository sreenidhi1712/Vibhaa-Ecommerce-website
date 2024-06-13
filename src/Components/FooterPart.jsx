import React, { useContext, useRef, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { Context } from "./Context/Context";

function FooterPart() {
  const {
    onSent,
    setInput,
    input,
    setIsOpen,
    isOpen,
    Toggle,
  } = useContext(Context);
  
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [input]);

  return (
    <div className={`w-[100%] bottom-0 fixed flex-col ${Toggle ? `bg-white` : `bg-gray-900`} `} onClick={() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }}>
      <div className="flex justify-center">
        <textarea
          ref={textareaRef}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Enter the Prompt Here"
          className={`w-[80%] ${Toggle ? `bg-slate-400` : `bg-gray-700`} ${Toggle ? 'placeholder:text-white' : 'placeholder:text-gray-300'} placeholder:p-2 text-white rounded-l-2xl pl-4 border-none focus:outline-none resize-none overflow-hidden`}
          rows={1}
          style={{ minHeight: '2.5rem' }}
        ></textarea>
        <div className={`w-[18%] h-auto ${Toggle ? `bg-slate-400` : `bg-gray-700`} flex justify-end rounded-r-2xl items-center`}>
          <IoMdSend onClick={() => { onSent() }} className={`h-10 w-6 mr-2 ${Toggle ? `text-white` : `text-gray-300`}`} />
        </div>
      </div>
      <div className="flex lap:justify-center justify-start">
        <p className={`text-justify text-xs mx-3 ${Toggle ? `text-black` : `text-gray-300`} `}>kelu may display inaccurate info, including about people, so double-check its response.</p>
      </div>
    </div>
  );
}

export default FooterPart;
