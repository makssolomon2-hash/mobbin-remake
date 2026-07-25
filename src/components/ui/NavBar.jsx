import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 2k:w-170 w-[680px] font-sans  h-150px bg-gray-200/50 backdrop-blur-xl border-gray-200/60 rounded-full p-10px mt-7 font-semibold z-999">
      <nav className=" z-2 flex items-center justify-between px-8 py-5">
        <span className="text-xl  font-semibold text-black cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="none" overflow="visible">
            <path 
              d="M 12.309 16.843 L 21.554 16.843 L 25.327 12.737 L 25.327 16.843 L 35.518 16.843 L 35.518 7.01 L 29.793 7.01 L 29.793 0.201 L 21.129 0.201 L 17.234 4.341 L 17.234 0.201 L 7.234 0.201 L 0 7.989 L 0 16.839 L 8.322 16.843 L 12.309 12.504 Z"
              fill="rgb(20,20,20)"
            />
          </svg>
        </span>
        <ul className="flex gap-8 text-base text-black ">
          <li><a href="#" >Pricing</a></li>
          <li><a href="#" >Awards</a></li>
          <li><a href="#" >Log in</a></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar
