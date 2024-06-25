import React, { useContext, useEffect ,useState} from "react";
import './Style.css';
import { Context } from "./Context/Context";
import FooterPart from "./FooterPart";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TbBrandSentry } from "react-icons/tb";
import { TbBrandSnapseed } from "react-icons/tb";
import { TbBrandStocktwits } from "react-icons/tb";
import { TbBrandSublimeText } from "react-icons/tb";
import { IoBagAddSharp } from "react-icons/io5";
import axios from 'axios';
import { addtocart } from "../Store-For-Redux/CartSlice";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import {favouriting} from "../Store-For-Redux/Favourite";
import { useSelector } from "react-redux";

function Maincontent() {

 const Dispatch = useDispatch();
 const favourites = useSelector(state=>state.favourite);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=50'); // Replace '/endpoint' with your API endpoint
        const jsonData = response.data; // Assuming response.data is already JSON
        setData(jsonData);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  
  
  const settings = {
    dots: false,
    infinite: true,  // This makes the carousel loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 2561, // max-width for desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1441, // max-width for desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // max-width for desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // max-width for tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // max-width for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const {
    isOpen,
    setIsOpen,
  } = useContext(Context);

  
  const addToCart = (item) => {
    Dispatch(addtocart(item));
  };

  const addtofavourites = (item)=>{
    Dispatch(favouriting(item));
  }

  return (
    <>
      <div className={`h-screen w-auto mt-14 lap:mt-0 overflow-x-hidden bg-white`} onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}>
        <div className="w-full h-2/3 bg-gradient-text flex flex-col tab:items-start bg-[url('https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?cs=tinysrgb')] bg-cover bg-center">
          {/* First Card */}
          <div className="flex flex-col h-[58%] w-full tab:w-[60%] tab:ml-10">
            <p className="text-3xl text-white text-center mt-16 font-extrabold tab:text-left tab:text-5xl tab:font-semibold">Raining Offers for this Monsoon!</p>
            <p className="text-2xl text-white mt-5 text-center font-bold  tab:text-left tab:mt-3">25% OFF On All Products</p>
          </div>
          <div className="flex flex-col items-center h-[42%] w-full tab:flex-row tab:gap-5 tab:ml-10" >
            <button className="mt-3 h-10 w-5/6 bg-white tab:w-28 tab:mt-0 " >SHOP NOW</button>
            <button className="mt-5 h-10 w-5/6 tab:w-28 tab:mt-0 text-white bg-transparent border-[1px] border-white">FIND MORE</button>
          </div>
        </div>
        {/* Carousel effect */}
        <div className="my-10 overflow-hidden">
        <Slider {...settings} className="">
          <div className="w-full flex flex-wrap ">
            <TbBrandSentry className=" mx-40 mm:mx-48 ml:mx-52 tab:mx-56 lap:mx-60 lapl:mx-64"/>
            <p className="mx-36 mm:mx-44 ml:mx-48 tab:mx-52 lap:mx-56 lapl:mx-60">JOHN</p>
            </div>
          <div className="w-full flex">
            <TbBrandSnapseed className="mx-40 mm:mx-48 ml:mx-52 tab:mx-56 lap:mx-60 lapl:mx-64"/>
            <p className="mx-36 mm:mx-44 ml:mx-48 tab:mx-52 lap:mx-56 lapl:mx-60">RASH</p>
            </div>
          <div className="w-full flex">
            <TbBrandStocktwits className="mx-40 mm:mx-48 ml:mx-52 tab:mx-56 lap:mx-60 lapl:mx-64"/>
            <p className="mx-36 mm:mx-44 ml:mx-48 tab:mx-52 lap:mx-56 lapl:mx-60">ALLAM</p>
            </div>
          <div className="w-full flex">
            <TbBrandSublimeText className="mx-40 mm:mx-48 ml:mx-52 tab:mx-56 lap:mx-60 lapl:mx-64"/>
            <p className="mx-36 mm:mx-44 ml:mx-48 tab:mx-52 lap:mx-56 lapl:mx-60">YEPPA</p>
            </div>
        </Slider>
        </div>
        {/* Secondary cards start here */}
        <div className="w-full h-auto flex flex-col items-center tab:flex-row tab:justify-evenly">
          <div className="w-[90%] tab:w-[30%]  h-96  bg-slate-500 flex flex-col items-center tab:justify-end bg-[url('https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?cs=tinysrgb')] bg-cover bg-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2 text-white font-bold">20% Off on Tank Tops</p>
              <p className="pl-2 text-white font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6  tab:mb-3 bg-white font-semibold">SHOP NOW</button>
          </div>
          <div className="w-[90%] tab:w-[30%]  h-96 bg-slate-500 mt-5 tab:mt-0 flex flex-col  tab:justify-end items-center bg-[url('https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?cs=tinysrgb')] bg-cover bg-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2 font-bold text-white">20% Off on Tank Tops</p>
              <p className="pl-2 font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6  tab:mb-3 bg-white font-semibold">SHOP NOW</button>
          </div>
          <div className="w-[90%] tab:w-[30%]  h-96 bg-slate-500 mt-5 tab:mt-0 flex flex-col  tab:justify-end items-center bg-[url('https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?cs=tinysrgb')] bg-cover bg-center">
            <div className="h-2/3 w-full flex flex-col justify-end">
              <p className="pl-2 font-bold text-white">20% Off on Tank Tops</p>
              <p className="pl-2 font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, necessitatibus!</p>
            </div>
            <button className="mt-3 h-10 w-5/6 tab:mb-3 bg-white font-semibold" >SHOP NOW</button>
          </div>
        </div>
        {/* Products Container */}
        <div className="flex flex-col items-center mt-14  w-full">
          <p className="w-5/6 mt-10 h-12 text-black font-bold text-center text-3xl border-b-2 border-blue-700">Featured Products</p>
         
          <div className="mt-10 flex w-[95%] flex-wrap flex-shrink-0 justify-evenly tab:w-[85%]">
            {/* Products start here */}
            {data.map((items)=>{
              return <Productitems key={items.id} items={items} addToCart={addToCart} favouriting={addtofavourites} favourites={favourites}/>
            {/* {items.category === "women's clothing" ? */}
              {/* :""}*/}
             
                })}
          </div>
        </div>
        <div className="mt-14 w-[90%] h-[65%] bg-gradient-text flex flex-col tab:items-start mx-auto bg-[url('https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?cs=tinysrgb')] bg-cover  bg-center">
          <div className="flex flex-col h-[78%] w-full tab:w-[60%]">
            <p className="text-2xl text-white text-center tab:text-start tab:ml-10 mt-10 font-bold tab:text-3xl">Limited Time Offer</p>
            <p className="text-2xl text-white mt-2 text-center font-bold tab:text-start tab:ml-10 tab:text-3xl ">Special Edition</p>
            <p className="text-white mt-2 text-justify px-7 font-bold tab:text-start tab:ml-3 tab:mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, incidunt!</p>
            <p className="text-xl text-white mt-2 text-justify mx-4 font-bold tab:text-start tab:ml-10 tab:mt-5">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
          </div>
          <div className="flex justify-center items-start h-[22%] w-full tab:w-[60%] tab:justify-start tab:ml-10">
            <button className="h-10 w-5/6 tab:w-[30%] bg-white">SHOP NOW</button>
          </div>
        </div>
        <FooterPart/>
      </div>
    </>
  );
}

export default Maincontent;


const Productitems = ({items,addToCart,favouriting,favourites})=>{
  return (
    <>
 <div  className="flex flex-col w-[40%] tab:w-[30%] items-center lap:w-[15%] h-52 tab:h-72 mx-2 my-5 bg-slate-100 group" key={items.id} >
              <div className="h-[55%] bg-slate-600">
                <img src={items.image} alt="" className="h-full w-full object-cover"/>
              </div>
              <div>
                <p className="mt-2 h-[30%] w-[100%] ml-1  font-semibold">{items.title.slice(0,10)}</p>
                <p className="text-sm ml-1">{items.category}</p>
                <p className="ml-1">${items.price}</p>
              </div>
              <div className='w-[90%] h-[15%] mt-3 invisible group-hover:visible flex justify-between'>
                <IoBagAddSharp className="h-6 w-6 text-gray-600" onClick={()=>{addToCart(items)}} />
                <FaHeart className={`h-6 w-6 ml-2 ${favourites.some((favItem) => favItem.id === items.id) ? 'text-red-500' : 'text-gray-600'}`} onClick={()=>favouriting(items)}/>
              </div>
  </div>
    </>
  );
}