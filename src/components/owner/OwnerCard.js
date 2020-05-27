import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card-owner">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>Phone: {props.owner.phoneNumber}</p>
      </div>
    </div>
  );
};

export default OwnerCard;
