import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

const AnimalEditForm = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    let targetValue = evt.target.value;
    if (/^\d+$/.test(targetValue)) {
      targetValue = parseInt(targetValue);
    }
    stateToChange[evt.target.id] = targetValue;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: animal.employeeId,
    };

    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };

  const getEmployees = () => {
    return EmployeeManager.getAll().then((employees) => {
      setEmployees(employees);
    });
  };
  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId).then((animal) => {
      setAnimal(animal);
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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <label htmlFor="caretakers">Caretaker</label>
            <select
              type="option"
              required
              className="form-control"
              id="employeeId"
              onChange={handleFieldChange}
              value={animal.employeeId}
            >
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
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

export default AnimalEditForm;
