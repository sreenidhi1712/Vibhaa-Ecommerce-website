import React, { useContext, useRef } from "react";
import './Style.css';
import { FaRegCompass, FaCode } from "react-icons/fa";
import { PiNotePencilFill } from "react-icons/pi";
import { Context } from "./Context/Context";
import { HiUserCircle } from "react-icons/hi2";
import { SiGooglegemini } from "react-icons/si";
import FooterPart from "./FooterPart";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TbBrandSentry } from "react-icons/tb";
import { TbBrandSnapseed } from "react-icons/tb";
import { TbBrandStocktwits } from "react-icons/tb";
import { TbBrandSublimeText } from "react-icons/tb";

function Maincontent() {
  const settings = {
    dots: false,
    infinite: true,  // This makes the carousel loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 400
  };

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

  return (
    <>
      <div className={`h-screen w-auto ${Toggle ? 'bg-white' : 'bg-gray-900'}`} onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}>
        <div className="mt-14 w-full h-2/3 bg-gradient-text flex flex-col">
          {/* First Card */}
          <div className="flex flex-col h-[58%] w-full">
            <p className="text-3xl text-white text-center mt-16">Raining Offers for this Monsoon!</p>
            <p className="text-2xl text-white mt-5 text-center">25% OFF On All Products</p>
          </div>
          <div className="flex flex-col items-center h-[42%] w-full">
            <button className="mt-3 h-10 w-5/6 bg-white">SHOP NOW</button>
            <button className="mt-5 h-10 w-5/6 text-white bg-transparent border-[1px] border-white">FIND MORE</button>
          </div>
        </div>
        {/* Carousel effect */}
        <div className="my-10 ">
        <Slider {...settings} className="">
          <div className="w-full flex">
            <TbBrandSentry className=" mx-40"/>
            <p className="mx-36">JOHN</p>
            </div>
          <div className="w-full flex">
            <TbBrandSnapseed className="mx-40"/>
            <p className="mx-36">RASH</p>
            </div>
          <div className="w-full flex">
            <TbBrandStocktwits className="mx-40"/>
            <p className="mx-36">ALLAM</p>
            </div>
          <div className="w-full flex">
            <TbBrandSublimeText className="mx-40"/>
            <p className="mx-36">YEPPA</p>
            </div>
        </Slider>
        </div>
        {/* Secondary cards start here */}
        <div className="w-full h-auto flex flex-col items-center">
          <div className="w-[90%] h-56 bg-slate-500 flex flex-col items-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2">20% Off on Tank Tops</p>
              <p className="pl-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6 bg-white">SHOP NOW</button>
          </div>
          <div className="w-[90%] h-56 bg-slate-500 mt-5 flex flex-col items-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2">20% Off on Tank Tops</p>
              <p className="pl-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6 bg-white">SHOP NOW</button>
          </div>
          <div className="w-[90%] h-56 bg-slate-500 mt-5 flex flex-col items-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2">20% Off on Tank Tops</p>
              <p className="pl-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6 bg-white">SHOP NOW</button>
          </div>
        </div>
        {/* Products Container */}
        <div className="flex flex-col items-center mt-14 bg-orange-300 w-full">
          <p className="w-5/6 mt-10 h-12 text-white text-center text-3xl border-b-2 border-blue-700">Featured Products</p>
          <div className="mt-10 flex w-full flex-wrap flex-shrink-0 justify-between">
            {/* Products start here */}
            <div className="flex flex-col w-[45%] h-52 mx-2 my-2 bg-white">
              <div className="h-[55%] bg-slate-600"></div>
              <div>
                <p className="mt-2 ml-1">Dark Brown Jeans</p>
                <p className="text-sm ml-1">Men</p>
                <p className="ml-1">1500Rs</p>
              </div>
            </div>
            <div className="flex flex-col w-[45%] h-52 mx-2 my-2 bg-white">
              <div className="h-[55%] bg-slate-600"></div>
              <div>
                <p className="mt-2 ml-1">Dark Brown Jeans</p>
                <p className="text-sm ml-1">Men</p>
                <p className="ml-1">1500Rs</p>
              </div>
            </div>
            <div className="flex flex-col w-[45%] h-52 mx-2 my-2 bg-white">
              <div className="h-[55%] bg-slate-600"></div>
              <div>
                <p className="mt-2 ml-1">Dark Brown Jeans</p>
                <p className="text-sm ml-1">Men</p>
                <p className="ml-1">1500Rs</p>
              </div>
            </div>
            <div className="flex flex-col w-[45%] h-52 mx-2 my-2 bg-white">
              <div className="h-[55%] bg-slate-600"></div>
              <div>
                <p className="mt-2 ml-1">Dark Brown Jeans</p>
                <p className="text-sm ml-1">Men</p>
                <p className="ml-1">1500Rs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-[90%] h-[65%] bg-gradient-text flex flex-col mx-auto">
          <div className="flex flex-col h-[78%] w-full">
            <p className="text-2xl text-white text-center mt-10">Limited Time Offer</p>
            <p className="text-2xl text-white mt-2 text-center">Special Edition</p>
            <p className="text-white mt-2 text-justify px-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, incidunt!</p>
            <p className="text-xl text-white mt-2 text-justify mx-4">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
          </div>
          <div className="flex justify-center items-start h-[22%] w-full">
            <button className="h-10 w-5/6 bg-white">SHOP NOW</button>
          </div>
        </div>
        <FooterPart/>
      </div>
    </>
  );
}

export default Maincontent;
