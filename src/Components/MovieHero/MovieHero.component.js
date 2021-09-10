import React from "react";

const MovieHero = () => {

    return(
        <>
        {/* 180vw means the calculate the full width of the screen */}
        <div className="md:hidden" style={{height:"calc(180vw)"}} >
            <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="Poster" />



        </div>
        <div className="hidden md:block  lg:hidden" >


        </div>
        <div className="hidden lg:block">

        </div>
        </>
    );
};

export default MovieHero;