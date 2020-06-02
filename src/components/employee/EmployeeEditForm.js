import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeEditForm = (props) => {
  const [employee, setEmployee] = useState({ name: "", hireYear: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      hireYear: employee.hireYear,
    };

    EmployeeManager.update(editedEmployee).then(() => {
      props.history.push("/employees");
    });
  };
  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then((employee) => {
      setEmployee(employee);
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
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="hireYear"
              value={employee.hireYear}
            />
            <label htmlFor="name">Kennel Caretaker Since</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
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

export default EmployeeEditForm;
