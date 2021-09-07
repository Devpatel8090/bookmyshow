import React from "react";
import Slider from "react-slick";

// import settings from config file
import settings from "../../config/PosterCarousal.config";

// component
import Poster from "../Poster/poster.component";

// images

import PremierImages from "../../config/TempPosters.config"

export const Premier = () => {
    
   
        
    
    
    return (
        <>
        <div className="flex flex-col items-start py-4 ">
            <h3 className="text-white text-xl font-bold">Premiere</h3>
            <p className="text-white text-sm">Brand new release every friday</p>
        </div>
        <Slider {...settings}>
        {PremierImages.map((image) =>
            (<Poster {...image} isDark/>))
        }

        </Slider>

        </>
    );
};

export default Premier;