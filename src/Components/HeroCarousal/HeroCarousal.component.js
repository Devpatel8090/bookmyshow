import React , {useState , useEffect}from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Component
import { NextArrow,PrevArrow } from "./Arrows.component";
// import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const [images , setImages] = useState([]);


    useEffect(() => {
        const requestNowPlayingMovies = async() => {
        const getImages = await axios.get("/movie/now_playing");
        console.log(getImages);
    };
    requestNowPlayingMovies();
}, []);


    const settingsLg = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding:"300px",
        infinite:true,
        nextArrow:<NextArrow  />,
        prevArrow:<PrevArrow/>
    }
var settings = {
    arrows:true, 
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 
    
   return (
       <>
    <div className="lg:hidden">

       <HeroSlider {...settings}>
       {
           images.map((image) => (
               <div className="w-full h-64 md:h-80 py-3">
                   <img src={image} alt="testing" className="w-full h-full rounded-md" />
               </div>

           ))
       }
      </HeroSlider>

    </div>

    <div className="hidden lg:block"  >

       <HeroSlider {...settingsLg}>
       {
           images.map((image) => (
               <div className="w-full h-96 px-2 py-3 ">
                   <img src={image} alt="testing" className="w-full h-full rounded-md" />
               </div>

           ))
       }
      </HeroSlider>

    </div>







 
       </>
   );



};
export default HeroCarousal;
