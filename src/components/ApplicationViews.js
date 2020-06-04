import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import Login from "./auth/Login";
import AnimalManager from "../modules/AnimalManager";

const ApplicationViews = (props) => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (hasUser) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
          // props.hasUser ? <AnimalList {...props} /> : <Redirect to="/login" />
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          if (hasUser) {
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={(props) => {
          if (hasUser) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationList hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={(props) => {
          if (hasUser) {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return (
              <LocationEditForm
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/new"
        render={(props) => {
          if (hasUser) {
            return <LocationForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (hasUser) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          if (hasUser) {
            return (
              <EmployeeWithAnimals
                deleteAnimal={AnimalManager.delete}
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          if (hasUser) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          if (hasUser) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owners/new"
        render={(props) => {
          if (hasUser) {
            return <OwnerForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
