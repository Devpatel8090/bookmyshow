import React from "react";

export const NextArrow = (props) =>{
   // const {className, style, onclick} = props;
   return (
       <>
       <div 
       className={props.className}
       style={{ ...props.style,backgroundColor:"black",opacity:0.3,borderRadius:5,width:25,height:25,}}
       onclick={props.onclick}
       />

      
       </>
   )

};



export const PrevArrow = (props) =>{

    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style,backgroundColor:"black",opacity:0.3,borderRadius:5,width:25,height:25,}}
       onclick={props.onclick} />
 
       
        </>
    )
 
};