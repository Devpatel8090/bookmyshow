import React from "react";

// components
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {  // we can direct export the functions
    return(
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    
    </>
    );
};

export default DefaultLayout;