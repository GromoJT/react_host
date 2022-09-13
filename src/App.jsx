import React,{useRef,useEffect} from "react";
import ReactDOM, { render } from "react-dom";

import "./index.scss";

import TwNavbar from "./components/TwNavbar";

import WrapedCounter from "./components/WrapedCounter";


const App = () => {



  return(
    <>
    <TwNavbar />
    <div className="container mt-5 mx-auto bg-gray-700 text-2xl px-12 pt-5 pb-5">
    <div className="mb-2">
      <div>Name: react_host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    
    <hr/>
      <WrapedCounter />
    </div >
    
    
  </>
  );
  
  
};
ReactDOM.render(<App />, document.getElementById("app"));
