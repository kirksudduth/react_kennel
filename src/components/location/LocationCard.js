import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card-location">
      <div className="card-content">
        <h3>Address: {props.location.street}</h3>
        <p>
          {props.location.city}, {props.location.state}
        </p>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close Store
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
