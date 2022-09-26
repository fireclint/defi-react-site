import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span> Communications Protocol
        </h1>
        <p>Secure trading communications on a private network.</p>
        <div className="btn-group">
          <button className="btn">Connect</button>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        {/* <h2>Total Volume Secured: $42,104,783,662.47</h2> */}
      </div>
    </div>
  );
};

export default hero;
