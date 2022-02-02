import "./intro.scss"
import Typical from 'react-typical'
import { useRef,useEffect } from "react";
import { init } from 'ityped'

const Intro = () => {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:false,
      strings:["Design","Developer"],
      backDelay:2500,
      backSpeed:60
    
    })
  },[])
  return <div className="intro" id="intro" >
  <div className="intro__left">
    <div className="left__imgContainer">
      <img src="assets/man.png" alt="man"  />
    </div>
  </div>
  <div className="intro__right">
    <div className="right__Container">
      <h2>
      Hi,I'm 
      </h2>
       <h1>
       Genius Bishop
       </h1>            
      <h3>
      <span>Languages</span>
      <Typical steps={["Node Js",3000,"React Js",3000,"Express Js",3000,"JavaScript",3000]} 
      loop={Infinity}
      wrapper="p"
      />
      </h3>
      <h3>
      <span>Freelance</span>
     <span className="freelance__text" ref={textRef}></span>
      </h3>
    </div>
    <a className="introDownArrow" href="#portfolio">
      <img src="assets/down.png" alt="" />
    </a>
  </div>
  </div>;
};

export default Intro;
