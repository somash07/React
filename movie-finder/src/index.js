import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from './components/App'
import './index.css'
// import StarRating from "./components/StarRating";
import {useState} from 'react'

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App/>
    {/* <StarRating maxRating={4} messages={["terrible", "Bad", "okay", "good"]} />
    <StarRating size={24} className="test" defaultRating={3} />
    <Test/> */}
  </StrictMode>
);
