import React from "react";
import Activity from "./Activities/activities";
import FeatureItinerary from "./FeaturedItinerary/featuredItinerary";
import Filter from "./Filter/filter";
import MyItinerary from "./MyItinerary/myItinerary";

const MainComponent = () => {
  return (
    <>
      <Filter />
      <br />
      <MyItinerary />
      <br />
      <FeatureItinerary />
      <br />
      <Activity />
    </>
  );
};

export default MainComponent;
