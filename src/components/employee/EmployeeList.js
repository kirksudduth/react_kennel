import React, { useState, useEffect } from "react";
// import components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = (props) => {
  // create initial state of an empty array called
  //   employees and a function for updating array called setEmployees
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    //   After the data comes back from the API, we
    //   use the setEmployees function to update state
    return EmployeeManager.getAll().then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };

  const deleteEmployee = (id) => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployees)
    );
  };

  //   got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  //   Finally we use map() to "loop over" the employees array to show a list
  //   of employee cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
