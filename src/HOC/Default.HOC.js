//HOC -> transforms  the component into another component
// Adding additional functionality to the existing components


import React from "react";
import { Route } from "react-router-dom";

// layouts
import DefaultLayout from "../Layouts/Default.layout";
// component alias the Component to each other 
const DefaultHOC = ({ component: Component ,  ...rest })=> {
    // components
    // props => path exact 
    return (
        <>
        <Route  
        {...rest } // To ensure that all property are in spreaded form 
        
        component = {(props) => ( // here we write components so we write the bracket
        
            <DefaultLayout>
                <Component { ...props} /> 
            </DefaultLayout>
        
        )
    }
        />
        </>
    )
};

export default DefaultHOC;