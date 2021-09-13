import React from "react";
import Slider from "react-slick";

// import settings from config file
import settings from "../../config/CastCarousal.config"

// component
import CastCard from "./CastCard.component";

// images

import CastImage from "../../config/TempCast.component";

export const Cast = () => {
    
   
        
    
    
    return (
        <>
        
        <Slider {...settings}>
        {CastImage.map((image) =>
            (<CastCard {...image} />))
        }

        </Slider>

        </>
    );
};

export default Cast;