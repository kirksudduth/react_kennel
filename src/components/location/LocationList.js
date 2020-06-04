import React, { useState, useEffect } from "react";
// import components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = (props) => {
  const hasUser = props.hasUser;
  // create initial state of an empty array called
  //   locations and a function for updating array called setLocations
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    //   After the data comes back from the API, we
    //   use the setLocations function to update state
    return LocationManager.getAllWithEmployees().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  const deleteLocation = (id) => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAllWithEmployees().then(setLocations)
    );
  };

  //   got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  //   Finally we use map() to "loop over" the locations array to show a list
  //   of location cards
  return (
    <>
      {!props.hasUser ? null : (
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => props.history.push("/locations/new")}
          >
            Expanding the Biz
          </button>
        </section>
      )}
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            hasUser={hasUser}
            key={location.id}
            storeLocation={location}
            deleteLocation={deleteLocation}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default LocationList;
