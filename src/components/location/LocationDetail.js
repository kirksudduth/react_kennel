import React, { useEffect, useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ street: "", city: "", state: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        street: location.street,
        city: location.city,
        state: location.state,
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    //   invoke the delete function in LoationManager and
    //   re-direct to the location list
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="location_card-content">
        <h3>
          <span className="address">{location.street}</span>
        </h3>
        <p>
          {location.city}, {location.state}
        </p>
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Store Closed
      </button>
    </div>
  );
};

export default LocationDetail;
