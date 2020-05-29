import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>Phone: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          No More Biz
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
