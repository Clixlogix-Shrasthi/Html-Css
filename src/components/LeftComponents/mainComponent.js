import React from "react";
import NearByPlaces from "./NearByPlaces/nearByPlaces";
import SuggestedPeople from "./SuggestedPeople/suggestedPeople";

const LeftMainComponent = () => {
  return (
    <>
      <div className="row">
        <NearByPlaces />
      </div>
      <br />
      <div className="row">
        {" "}
        <SuggestedPeople />{" "}
      </div>
    </>
  );
};

export default LeftMainComponent;
