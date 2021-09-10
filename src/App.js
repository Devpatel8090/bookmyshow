import { Route } from "react-router-dom";

//Pages

import HomePage from "./pages/home.page";
import Movie from "./pages/Movie.page";

// Hoc

import DefaultHOC from "./HOC/Default.HOC";

//movieHoc
import MovieHOC from "./HOC/Movie.Hoc";

// Component




// import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






function App() {
 
  //make sure path should be in small letter 
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id"  exact component={Movie}  />
    
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
