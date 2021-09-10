import React from "react";

// components
import MovieNavbar from "../Components/Navbar/movienavbar.component";


const MovieLayout = (props) => {  // we can direct export the functions
    return(
    <>
    <MovieNavbar />
    
    {props.children}
    
    </>
    );
};

export default MovieLayout;