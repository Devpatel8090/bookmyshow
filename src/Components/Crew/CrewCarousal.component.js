import React from "react";
import Slider from "react-slick";

// image sources 

import CrewImages from "../../config/TempCrew.config";

// Card sources 

import CrewCard from "../Cast/CastCard.component";


// import setting from the config 
import settings from "../../config/CastCarousal.config";

const Crew = () => {
    return(
         <>
         <Slider {...settings}>
            { CrewImages.map((image) => (<CrewCard {...image} />))
            }
         </Slider>
    
        </>
    );
};
export default Crew;