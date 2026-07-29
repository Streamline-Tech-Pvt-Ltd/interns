import React from "react";
function Card() {
  return (

    <div className="card-container">

      <div className="info-card dark-card">
        <h1>124</h1>
        <p>Total Schools</p>
      </div>

      <div className="info-card blue-card">
        <h1>42,500+</h1>
        <p>Total Students</p>
      </div>

      <div className="info-card light-card">
        <h1>1,850</h1>
        <p>Total Teachers</p>
      </div>

      <div className="info-card light-card">
        <h1>92%</h1>
        <p>Active Today</p>
      </div>

    </div>
  );
}

export default Card;