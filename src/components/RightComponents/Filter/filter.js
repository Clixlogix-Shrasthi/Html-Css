import React from "react";
import "./style.css";

const Filter = () => {
  return (
    <>
      <br />
      <div className="row border rowFilter">
        <div className="col-3">
          <label className="lableStyle">Filter by Type</label>
          <select className="selectStyle">
            <option></option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className="col-3 verticalLine">
          <label className="lableStyle">Filter by Type</label>
          <select className="selectStyle">
            <option></option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className="col-3 verticalLine">
          <label className="lableStyle">Filter by Type</label>
          <select className="selectStyle">
            <option></option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className="col-3 verticalLine">
          <label className="lableStyle">Filter by Type</label>
          <select className="selectStyle">
            <option></option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
