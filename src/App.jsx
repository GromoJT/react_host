import React,{useRef,useEffect, useState} from "react";
import "./index.scss";
import {loadComponent} from './utils/loadComponent';

import TwNavbar from "./components/TwNavbar";

import WrapedCounter from "./components/WrapedCounter";


function System(props) {
  const {
    system,
    system: { remote, url, module },
  } = props;

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = React.lazy(loadComponent(remote, 'default', module, url));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

const App = () => {

  const [dogsComp,setDogsComp] = useState({});

  function setDogs(){
    setDogsComp({
      remote: 'react_q2_dogs',
      url:'https://dip-d9e82.web.app/remoteEntry.js',
      module:'./Dog',
    });
  }

  useEffect(()=>{
    setDogs()
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
      <WrapedCounter>
        
      </WrapedCounter>
     
    <hr/>
      <div>
        <System system={dogsComp} />
      </div>
    </div >
    
  </>
  );
  
  
};
export default App;

