import React from 'react'
function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>College:</strong> {props.college}
      </p>

      <button>View Profile</button>
    </div>
  );
}

export default Card;