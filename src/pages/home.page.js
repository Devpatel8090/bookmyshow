import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard.component";

// import Premier from "../Components/Premier/premier.component";


import PosterSlider from "../Components/PosterSlider/PosterSlider.component";

import TempPosters from "../config/TempPosters.config"



const HomePage = () => {
    return (

        <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
        <h1 className="text-2x1 font-bold text-gray-800">
        The Best Of Entertainment</h1>
        <EntertainmentCardSlider  />
        
        
        </div>

    <div className="bg-navCol-200 py-16">
        <div className="container mx-auto px-4">
        <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay" className="w-full h-full" />

        </div>
       
          <PosterSlider images={TempPosters} title="Primere"  subtitle="Brand new Release Every day" isDark/>
        </div>
    </div>
    </div>

    <div className="container mx-auto">
        <PosterSlider
        images ={TempPosters}
        title="Online Streaming Events"
        isDark={false} />
    </div>

        </>
    );
};

export default HomePage;