import React from "react";
import "./style.css";
import d1 from "../../../assets/dd.jpg";
import d2 from "../../../assets/dd0.jpg";
import d3 from "../../../assets/dd1.jpg";
import d4 from "../../../assets/dd3.jpg";

const FeatureItinerary = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Feature Itinerary</h3>
        </div>
        <div className="col-6 text-end textColor">See More</div>
      </div>
      <br />
      <div className="row">
        <div className="col imgContainer">
          <img src={d1} height={200} width={160} className="borderRadius" />
          <label className="bottomLeft">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Dog
          </label>
        </div>
        <div className="col imgContainer">
          <img src={d2} height={200} width={160} className="borderRadius" />
          <label className="bottomLeft">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Dog
          </label>
        </div>
        <div className="col imgContainer">
          <img src={d3} height={200} width={160} className="borderRadius" />
          <label className="bottomLeft">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Dog
          </label>
        </div>
        <div className="col imgContainer">
          <img src={d4} height={200} width={160} className="borderRadius" />
          <label className="bottomLeft">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Dog
          </label>
        </div>
      </div>
    </>
  );
};

export default FeatureItinerary;
