import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";

const OwnerForm = (props) => {
  const [owner, setOwner] = useState({ phoneNumber: "", name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = (evt) => {
    evt.preventDefault();
    if (owner.phoneNumber === "" || owner.name === "") {
      window.alert("Please enter a phone number and name.");
    } else {
      setIsLoading(true);
      OwnerManager.post(owner).then(() => props.history.push("/owners"));
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
              id="name"
              placeholder="Owner Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="888-888-8888"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
