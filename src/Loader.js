import React from 'react'
import "./App.css";


const Loader = (props) => {
  return(
    <div className="loader-wrapper"> 
       <div className="loader"></div>
       <h2>{props.text}</h2>
     </div>
   )
}

export default Loader;

