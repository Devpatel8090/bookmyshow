import React from "react";
import {BiChevronRight,BiMenu,BiSearch ,BiChevronDown ,BsChevronLeft,BiShareAlt}  from "react-icons/bi";

const NavSm = () => {

    return(
        <>
        <div className = "text-white flex items-center justify-between">
            <div >
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
               
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"  />
            </div>
        </div>
        </>
    )
};

const NavLg = () => {
    return(
        <>
        <div className="container mx-auto px-4 flex item-center justify-between ">
        <div className="flex item-center w-1/2">
        <div className="w-30 h-12">
            <img src="https://www.vhv.rs/dpng/f/422-4222380_50-off-png.png" alt="bookmyshow logo" className="w-full h-full" />

        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md" >
         <BiShareAlt />
          <input type="serch" className="w-full focus:outline-none" placeholder="Serch for Movies, events , plays , sports and activities " />
         </div>
         </div>
        
        <div className = " flex items-center gap-3">
            
                <span className="text-gray-400 text-xs flex item-center hover:text-white cursor-pointer">
                    Ahmedabad<BiChevronDown />
                </span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
       
    </div>
    
        </>
    )

};

const MovieNavbar = () => {
    
    return(

        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2 ">
            <div className = "md:hidden">
                { /*mobile view */} 
                <NavSm />
            </div>

            <div className = "hidden lg:hidden md:block ">
                { /*Tablet view */ }
            <NavSm />
            </div>

            <div className = "hidden lg:flex">
                { /*largeScreen view */ }
                <NavLg />
            </div>
        </nav>
        </>
    )

};

export default MovieNavbar;