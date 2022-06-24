import React from "react";
import "./style.css";

const Filters = () => {
  return (
    <>
      <div className="row border rowBorder">
        <div className="col-4 ">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <label>Place</label>
          <br />
          <input placeholder="Any Where" />
        </div>

        <div className="col-4 verticalLine">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <label>Dates</label>
          <br />
          <input placeholder="Anytime" />
        </div>
        <div className="col-3 verticalLine">
          <i className="fa fa-list" aria-hidden="true"></i>
          <label>Others</label>
          <br />
          <input placeholder="Anything" />
        </div>
        <div className="col-1 col1">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default Filters;
