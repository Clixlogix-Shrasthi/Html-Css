import React from "react";
import LeftMainComponent from "./LeftComponents/mainComponent";
import Filters from "./MainFilter/filters";
import MainComponent from "./RightComponents/mainComponent";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Filters />
        </div>
        <br></br>
        <div className="row">
          <div className="col-7 m-1">
            <MainComponent />
          </div>
          <div className="col-4 m-1">
            <div>
              <LeftMainComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
