import { Route } from "react-router-dom";

//Pages

import HomePage from "./pages/home.page";

// Hoc

import DefaultHOC from "./HOC/Default.HOC";

// Component



// import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






function App() {
 
  //make sure path should be in small letter 
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    
    
    </>
  );
}
//   / , movies
export default App;


// const dev = {
//   name:"dev",
//   dob:"5-9-2001"
// };
// const  student = dev;
// student.goodStudent = true;

// Spread operator
// const dev = {
//   name:"dev",
//   dob:"5-9-2001"
// };

// const student = {...dev,goodStudent=true};
