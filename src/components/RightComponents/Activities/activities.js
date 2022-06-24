import React from "react";
import "./style.css";
import Image from "../../../assets/minions.jpg";

const Activities = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Activities</h3>
        </div>
        <div className="col-6 text-end textColor">See More</div>
      </div>
      <br />
      <div className="row">
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2 imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
      </div>
    </>
  );
};

export default Activities;
