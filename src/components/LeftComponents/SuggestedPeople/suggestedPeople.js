/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import a1 from "../../../assets/5.jpg";
import a2 from "../../../assets/6.jpg";
import a3 from "../../../assets/7.jpg";
import a4 from "../../../assets/8.jpg";
import "./style.css";

const SuggestedPeople = () => {
  const [user, setuser] = useState([
    { image: a1, name: "Shrashti Singh", follow: "4.4M" },
    { image: a2, name: "Preeti Zinta", follow: "4.4M" },
    { image: a3, name: "Shah Rukh Khan", follow: "4.4M" },
    { image: a4, name: "Shrashti Singh", follow: "4.4M" },
  ]);
  return (
    <>
      <div>
        <div className="row">
          <div className="col-6">Suggested Place</div>
          <div className="col-6 text-end textColor">See More</div>
        </div>
        <br />

        {user.map((user, i) => (
          <div className="row paddingStyle" key={i}>
            <div className="col-2">
              {" "}
              <img src={user.image} height={56} className="AvatarsRadius" />
            </div>
            <div className="col-7 ">
              <div className="textStyle">{user.name}</div>
              <div className="followStyle">{user.follow}</div>
            </div>
            <div className="col-3 text-end">
              <button className="buttonStyle">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SuggestedPeople;
