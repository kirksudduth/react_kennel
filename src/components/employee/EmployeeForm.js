import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
// import "./EmployeeForm.css"

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({ name: "", hireYear: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = (evt) => {
    evt.preventDefault();
    if (employee.name === "" || employee.hireYear === parseInt("")) {
      window.alert("Please input an employee name and a hire year.");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee).then(() =>
        props.history.push("/employees")
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
              id="name"
              placeholder="Employee Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="number"
              min="2008"
              max="2020"
              required
              onChange={handleFieldChange}
              id="hireYear"
              placeholder="Hire Year"
            />
            <label htmlFor="hireYear">Hire Year</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
