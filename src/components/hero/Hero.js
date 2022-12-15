import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero">
      <video 
      autoPlay 
      loop muted id="video">
        <source 
        src={MainVideo} 
        type="video/mp4"/>
      </video>     
      <div className="hero-text">
      <img src="https://i.imgur.com/9TwiW05.png" width="700" height="700">  
      </img>             
       {/* <h1>PRIVATE</h1>*/}
       {/* <h1>*/}
       {/*   <span className="blue">TRADING COMMUNITY</span>*/}
      {/*  </h1>*/}
        <div className="btn-group">
        <a className='btn' href="https://discord.gg/gjCAj72kFT">CONNECT</a>
          {/* <button className="btn btn-outline">Documentation</button> */}
          {/* <button className="btn btn-outline">FAQ</button> */}
        </div>
        {/*<button className="btn"> ???</button>*/}
      </div>
      <div className="bottom-text">
        {/* <button className="btn"> Total Volume Secured: $42,104,783,662.47</button>*/}
      </div>
    </div>
  );
};

export default hero;
