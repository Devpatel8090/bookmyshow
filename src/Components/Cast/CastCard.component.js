
import React from "react";


const CastCard = (props) => {
    return(
        <>
        <div className="flex flex-col gap-5 mt-3  ">
            <div className=" h-24 w-24  item-center justify-center">
                <img src={props.src}  alt ={props.name} className="w-full h-full rounded-full"/>
            </div>
            <div className="container p-2">
                <h3 className="font-bold"> {props.name}</h3>
                <p className="text-bold">{props.roll}</p>

            </div>
        </div>
        </>
    );
};
export default CastCard;