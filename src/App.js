import { Route } from "react-router-dom";

import axios from "axios";

//Pages

import HomePage from "./pages/home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page"
// Hoc

import DefaultHOC from "./HOC/Default.HOC";

//movieHoc
import MovieHOC from "./HOC/Movie.Hoc";

// Component
import Play from "./pages/Plays.page";




// import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// axios default settings 

axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api key"] = process.env.REACT_APP_API_KEY ;



function App() {
 
  //make sure path should be in small letter 
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id"  exact component={Movie}  />
    <DefaultHOC path ="/play"   exact component={Play} />
    
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
