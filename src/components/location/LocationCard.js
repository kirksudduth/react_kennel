import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card-location">
      <div className="card-content">
        <h3>Address: {props.location.street}</h3>
        <p>
          {props.location.city}, {props.location.state}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
