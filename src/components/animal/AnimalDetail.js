import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalDetail.css";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employee: {} });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AnimalManager.getWithEmployee(props.animalId).then((animal) => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        employee: {
          name: animal.employee.name,
        },
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //   invoke the delete function in AnimalManager and
    // re-direct to the animal list
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };
  console.log({ ...props });

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <p>Caretaker: {animal.employee.name}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
