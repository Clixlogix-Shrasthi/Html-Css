/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import d2 from "../../../assets/dd0.jpg";
import d3 from "../../../assets/dd1.jpg";
import d4 from "../../../assets/dd3.jpg";

const NearByPlaces = () => {
  return (
    <>
      <div>
        <div className="row">
          <h3>Around Me</h3>
        </div>
        <div className="row">
          <div className="col-6">Near By Place</div>
          <div className="col-6 text-end textColor">See More</div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 imgContainer">
            <img src={d2} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d4} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d3} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 imgContainer">
            <img src={d2} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d4} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d3} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 imgContainer">
            <img src={d2} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d4} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
          <div className="col-4 imgContainer">
            <img src={d3} height={114} width={114} className="borderRadius" />
            <label className="centered">Minions</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearByPlaces;
