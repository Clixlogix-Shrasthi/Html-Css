import React from "react";
import "./style.css";
import Image from "../../../assets/minions.jpg";

const MyItinerary = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>My Itinerary</h3>
        </div>
        <div className="col-6 text-end textColor">See More</div>
      </div>
      <br />
      <div className="row">
        <div className="col-1 border col1border">
          <input type="file" id="image_uploads" hidden />
          <label className="labelSize" for="image_uploads">
            +
          </label>
        </div>
        <div className="col-2  imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2  imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2  imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2  imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
        <div className="col-2  imgContainer">
          <img src={Image} height={120} width={120} className="borderRadius" />
          <label className="centered">Minions</label>
        </div>
      </div>
    </>
  );
};

export default MyItinerary;
