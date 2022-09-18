import React,{useRef,useEffect, useState} from "react";
import {loadComponent} from '../utils/loadComponent';



function System(props) {
  const {
    system,
    system: { remote, url, module },
  } = props;

  const divRef = useRef(null);

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = React.lazy(loadComponent(remote, 'default', module, url));
  console.log(Component)
  //Component(divRef.current)

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );

}


const WrapedCounter = () => {
  
  const [counterComp,setCounterComp] = useState({})

  function setCounter(){
    setCounterComp({
      remote: 'solidjs_q2_counter',
      url:'http://localhost:4001/remoteEntry.js',
      module:'./CounterWraper',
    });
  }

  

  useEffect(()=>{
    setCounter();
    
  },[]);

  return (
    <System system={counterComp}/>
  )
  
}

export default WrapedCounter