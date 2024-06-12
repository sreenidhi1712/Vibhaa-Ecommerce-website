import React from "react";
import { useContext } from "react";
import { IoMdSend } from "react-icons/io";
import { Context } from "./Context/Context";

function FooterPart() {
  const {
		onSent,
		setInput,
		input,
	} = useContext(Context);
  
  return (
    <div className="h-auto w-[100%] bottom-0 fixed  flex-col bg-white ">
      <div className="flex ml-2">
        <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        type="text"
          placeholder="Enter the Prompt Here"
          className="h-auto w-[80%]  bg-slate-400 placeholder:text-white  text-white rounded-l-2xl text-center border-none focus:outline-none"
        ></input>
        <div className="w-[18%]  h-10 bg-slate-400  rounded-r-2xl">
          <IoMdSend  onClick={() => {onSent()}} className="h-10 w-6 ml-6  text-white" />
        </div>
      </div>
      <div>
        <p className="text-justify text-xs mx-3">kelu may display inaccurate info, including about people,ao double-check its response. </p>
      </div>
    </div>
  );
}

export default FooterPart;
