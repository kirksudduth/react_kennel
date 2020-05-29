import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";

const LocationForm = (props) => {
  const [location, setLocation] = useState({ street: "", city: "", state: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const constructNewLocation = (evt) => {
    evt.preventDefault();
    if (
      location.street === "" ||
      location.city === "" ||
      location.state === ""
    ) {
      window.alert("Please fill out address, city and state inputs.");
    } else {
      setIsLoading(true);
      LocationManager.post(location).then(() =>
        props.history.push("/locations")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="street"
              placeholder="Address"
            />
            <label htmlFor="street">Address</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="city"
              placeholder="City"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="state"
              placeholder="State"
            />
            <label htmlFor="state">State</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
