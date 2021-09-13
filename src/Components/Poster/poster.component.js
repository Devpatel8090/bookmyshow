import React from "react";
  // props -> src , title , subtitle , boolean
const Poster = (props) => {
    return(
        <>
        <div className="flex flex-col item-start gap-2 px-3 py-10">
            <div className="h-80 ">
            <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
            </div>
            <div className="container p-5">
                <h3 
                className={ `text-lg font-bold 
                ${props.isdark? "text-white":"text-grey-700"}`}>
                    {props.title}
                </h3>
                <p className={ `text-lg font-bold 
                ${props.isdark? "text-white":"text-grey-700"}`}>
                    {props.subtitle}</p>
            </div>
        </div>

        </>
    )
};
export default Poster;