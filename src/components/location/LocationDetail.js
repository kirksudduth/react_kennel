import React, { useEffect, useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ street: "", city: "", state: "" });

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        street: location.street,
        city: location.city,
        state: location.state,
      });
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="location_card-content">
        <h3>
          <span>{location.street}</span>
        </h3>
        <p>
          {location.city}, {location.state}
        </p>
      </div>
    </div>
  );
};

export default LocationDetail;
