import React,{useRef,useEffect} from "react";
import CounterWraper from "solidjs_counter/CounterWraper";



const WrapedCounter = () => {

  const divRef = useRef(null);

  useEffect(()=>{
    CounterWraper(divRef.current)
  },[]);

  return (
    <div className="mt-4" ref={divRef}></div>
  )
}

export default WrapedCounter