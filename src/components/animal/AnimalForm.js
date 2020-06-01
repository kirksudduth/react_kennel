import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
// import EmployeeOption from "../../components/employee/EmployeeOption";
import "./AnimalForm.css";

const AnimalForm = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    let targetValue = evt.target.value;
    if (/^\d+$/.test(targetValue)) {
      targetValue = parseInt(targetValue);
    }
    // bracket notation on OBJECT -- evt.target.id refers to name and breed at line 6
    stateToChange[evt.target.id] = targetValue;
    setAnimal(stateToChange);
  };

  const getEmployees = () => {
    return EmployeeManager.getAll().then((employees) => {
      setEmployees(employees);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  //   Local method for validation, set loadingStatus, create animal
  //   Object, invoke the AnimalManager post method and redirect to the
  //   full animal list
  const constructNewAnimal = (evt) => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
      window.alert("Please input an animal name, breed and caretaker.");
    } else {
      setIsLoading(true);
      //   Create the animal and redirect the user to animal list
      AnimalManager.post(animal).then(() => props.history.push("/animals"));
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
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <label htmlFor="caretakers">Choose a caretaker:</label>
            <select
              type="option"
              id="employeeId"
              required
              onChange={handleFieldChange}
            >
              <option>Choose wisely...</option>
              {employees.map((employee) => (
                <option key={employee.id} value={parseInt(employee.id, 10)}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm;
