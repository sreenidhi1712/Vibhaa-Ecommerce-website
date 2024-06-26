import React from 'react'
import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
           <div>
           <FaSpinner className='h-10 w-10 animate-spin' />
           </div>
    </div>
  )
}

export default Loader
