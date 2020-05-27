import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card-employee">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Kennel Caretaker Since {props.employee.hireYear}</p>
        <button
          type="button"
          onclick={() => {
            props.deleteEmployee(props.employee.id);
          }}
        >
          U F'd
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
