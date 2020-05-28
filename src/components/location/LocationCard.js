import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
