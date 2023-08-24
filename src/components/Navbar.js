import React, { useState } from 'react'
import logo from './logo.jpg'

const Navbar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  //   // console.log("ayush heyy")
  // };
  return (
    <>
   <div className="flex bg-black w-[100%vh] p-[15px] h-[80px] items-center">
    <div>
      <img src={logo} className='h-[70px] w-[90px]' alt="" />
    </div>

    <div className='ml-[400px]  '>
      <input placeholder='Search' className='w-[500px] px-[10px] h-[35px] ' type="text" />
    </div>

    <div className=' ml-[100px] text-white '>
      <button className='px-[10px] py-[8px] bg-zinc-500'>
        Log In
      </button>
    </div>
    
    <div className=' ml-[30px] text-white '>
      <button className='px-[10px] py-[8px] bg-zinc-500'>
        Sign Up
      </button>
    </div>

    <div className='ml-[20px]  border-1 bg-pink-500'>
      {/* <button onClick={toggleSidebar} open={isOpen} className=' p-2 px-4' >
        Cart
      </button> */}
    </div>

   </div>
    </>
  )
}

export default Navbar
