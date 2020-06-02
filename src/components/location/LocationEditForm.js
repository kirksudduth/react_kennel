import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";

const LocationEditForm = (props) => {
  const [storeLocation, setStoreLocation] = useState({
    street: "",
    city: "",
    state: "",
    id: "",
  });
  const [isLoading, setIsLoading] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...storeLocation };
    stateToChange[evt.target.id] = evt.target.value;
    setStoreLocation(stateToChange);
  };

  const updateExistingLocation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedLocation = {
      street: storeLocation.street,
      city: storeLocation.city,
      state: storeLocation.state,
      id: storeLocation.id,
    };

    LocationManager.update(editedLocation).then(() =>
      props.history.push("/locations")
    );
  };
  useEffect(() => {
    LocationManager.get(props.match.params.locationId).then((location) => {
      setStoreLocation(location);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="street"
              value={storeLocation.street}
            />
            <label htmlFor="street">Street: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="city"
              value={storeLocation.city}
            />
            <label htmlFor="city">City: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="state"
              value={storeLocation.state}
            />
            <label htmlFor="state">State: </label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationEditForm;
