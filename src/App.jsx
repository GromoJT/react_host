import React,{useRef,useEffect, useState} from "react";
import "./index.scss";

import { System } from "./utils/System";
import TwNavbar from "./components/TwNavbar";




const App = () => {

  const [dogsComp,setDogsComp] = useState({});
  const [counterComp,setCounterComp] = useState({});

  function setDogs(){
    setDogsComp({
      remote: 'react_q2_dogs',
      url:'https://dip-d9e82.web.app/remoteEntry.js',
      module:'./Dog',
    });
  }

  function setCounter(){
    setCounterComp({
      remote: 'angularQ2Counter',
      url:'http://localhost:4200/remoteEntry.js',
      module:'./Component',
    });
  }

  useEffect(()=>{
    setDogs();
    setCounter();
  },[]);

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
     
    <hr/>
      <div>
        <System system={dogsComp} />
      </div>
    </div >
    
  </>
  );
  
  
};
export default App;

