import React, { useContext, useRef, useEffect } from "react";
import { Context } from "./Context/Context";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { CiLock } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function FooterPart() {
  const {} = useContext(Context);
  
  
  return (
    <div className="h-auto w-full mt-20 flex flex-col items-center bg-white" >
      <div className="flex flex-col w-full items-center tab:flex-row flex-wrap tab:justify-center flex-shrink-0">

      
            <div className="flex flex-col items-center w-[90%] mt-10 tab:w-[45%]">
                    <BsGlobeCentralSouthAsia  className="h-20 w-20"/>
                    <p className="text-lg mt-2">Worldwide Shipping</p>
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center w-[90%] mt-10 tab:w-[45%]">
                    <CiDiscount1  className="h-20 w-20"/>
                    <p className="text-lg mt-2">Worldwide Shipping</p>
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center w-[90%] mt-10 tab:w-[45%]">
                    <GiDress  className="h-20 w-20"/>
                    <p className="text-lg mt-2">Worldwide Shipping</p>
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center w-[90%] mt-10 mb-10 tab:w-[45%]">
                    <CiLock  className="h-20 w-20"/>
                    <p className="text-lg mt-2">Worldwide Shipping</p>
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
      </div>
            <div className="h-32 w-full  flex items-center justify-center border-t-[1px] border-b-[1px] border-black">
                      <p className="text-xl text-center font-bold"> SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS</p>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col w-full tab:flex-row tab:mt-10 tab:justify-evenly ">
                <div className="flex flex-col items-center tab:w-[20%] lap:w-[30%]">
                <p className="text-2xl mt-10 tab:mt-0  text-justify tab:font-extrabold" >VIBHAA</p>
                <p className="text-lg mt-5 tab:font-semibold" >The Best Look anytime,anywhere</p>
                </div>
                <div className="mt-14 tab:mt-0 tab:w-[20%] ">
                  <p className="text-xl text-center ">For Her</p>
                  <p className="text-center mt-3">Women Jeans</p>
                  <p className="text-center">Tops and Shirts</p>
                  <p className="text-center">Women Jackets</p>
                  <p className="text-center">Heals and Flats</p>
                  <p className="text-center text-blue-700">Women Accessories</p>
                </div>
                <div className="mt-10 tab:mt-0 tab:w-[20%]" >
                  <p className="text-xl text-center">For Him</p>
                  <p className="text-center mt-3">Men Jeans</p>
                  <p className="text-center">Men Shirts</p>
                  <p className="text-center">Men Shoes</p>
                  <p className="text-center">Men Jackets</p>
                  <p className="text-center text-blue-700">Men Accessories</p>
                </div>
                <div className="mt-10 tab:mt-0 w-full flex flex-col items-center tab:w-[25%] lap:w-[20%]">
                  <p className="text-2xl">Subscribe</p>
                  <input placeholder="Your Email Address... " className="h-10 w-[90%] tab:w-[100%] lapl:w-[75%] bg-slate-400 mt-5 placeholder:text-black placeholder:text-center"/>
                  <button className="h-8 w-[50%] bg-blue-700 text-white mt-5 tab:w-[70%] lapl:w-[60%]">SUBSCRIBE </button>
                </div>
                </div>
                <div className="mt-20 border-t-[1px] border-black tab:w-full flex flex-col items-center"> 
                      <p className="mt-6">Copyright 2024 Vibha, Powered by Sreenidhi</p>
                      <div className="flex mt-7 gap-10 justify-center mb-10">
                             <FaFacebookF />
                             <FaYoutube />
                             <FaTwitter />
                             <FaInstagram />
                             <FaGoogle />
                      </div>
                </div>
            </div>
    </div>
  );
}

export default FooterPart;
