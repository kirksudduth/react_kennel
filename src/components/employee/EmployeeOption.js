import React from "react";

const EmployeeOption = (props) => {
  return (
    <option id="employeeId" value={props.employee.id}>
      {props.employee.name}
    </option>
  );
};

export default EmployeeOption;
