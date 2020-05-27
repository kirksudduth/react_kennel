import React, { useState, useEffect } from "react";
// import components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = () => {
  // create initial state of an empty array called
  //   locations and a function for updating array called setLocations
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    //   After the data comes back from the API, we
    //   use the setLocations function to update state
    return LocationManager.getAll().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  //   got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  //   Finally we use map() to "loop over" the locations array to show a list
  //   of location cards
  return (
    <div className="container-cards">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
