import React from "react";

const EmployeeOption = (props) => {
  return <option id="employeeId">{props.employee.name}</option>;
};

export default EmployeeOption;
