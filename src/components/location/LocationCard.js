import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  const EmployeesArray = props.storeLocation.employees;
  return (
    <div className="card">
      <div className="card-content">
        <h3>Address: {props.storeLocation.street}</h3>
        <p>
          {props.storeLocation.city}, {props.storeLocation.state}
        </p>
        <h5>Staff</h5>
        <div className="staff">
          {EmployeesArray.map((employee) => (
            <p key={employee.id}>{employee.name}</p>
          ))}
        </div>
        {!props.hasUser ? null : (
          <>
            <button
              type="button"
              onClick={() => props.deleteLocation(props.storeLocation.id)}
            >
              Close Store
            </button>
            <button
              type="button"
              onClick={() =>
                props.history.push(`locations/${props.storeLocation.id}/edit`)
              }
            >
              Edit
            </button>
            <Link to={`/locations/${props.storeLocation.id}`}>
              <button>Details</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
