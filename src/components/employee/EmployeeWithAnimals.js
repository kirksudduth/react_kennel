import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";

const EmployeeWithAnimals = (props) => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
      (APIResult) => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      }
    );
  };
  useEffect(() => {
    getAnimals();
  }, []);

  // const handleDelete = (id) => {
  //   AnimalManager.delete(id).then(() =>
  //     EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
  //       (APIResult) => {
  //         setEmployee(APIResult);
  //         setAnimals(APIResult.animals);
  //       }
  //     )
  //   );
  // };
  console.log(props);
  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map((animal) => (
        <AnimalCard
          getAnimals={getAnimals}
          deleteAnimal={props.deleteAnimal}
          key={animal.id}
          animal={animal}
          {...props}
        />
      ))}
    </div>
  );
};

export default EmployeeWithAnimals;
