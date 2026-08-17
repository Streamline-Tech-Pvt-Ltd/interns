import React from "react";

function Card({ property }) {
  return (
    <div className="property-card">

      <div className="property-image-wrapper">

        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />

        <span className="property-badge pg">
          PG
        </span>

        <button className="favorite-button">
          ♡
        </button>

      </div>


      <div className="property-content">

        <div className="owner">

          <img
            src={property.ownerImage}
            className="owner-image"
            alt={property.owner}
          />

          <div className="owner-info">

            <span className="owner-name">
              Owner: {property.owner}
            </span>

            <span className="owner-rating">
              ★ {property.rating}
            </span>

          </div>

        </div>


        <div className="property-type">
          {property.type}
        </div>


        <h2 className="property-title">
          {property.title}
        </h2>


        <div className="property-location">
          📍 {property.location}
        </div>


        <div className="property-price">

          <span className="price">
            ₹{property.price}
          </span>

          <span className="price-period">
            / month
          </span>

        </div>


        <div className="property-details">

          <div className="detail">
            <strong>{property.beds}</strong>
            Beds
          </div>

          <div className="detail">
            <strong>{property.baths}</strong>
            Baths
          </div>

          <div className="detail">
            <strong>{property.area}</strong>
            sq.ft
          </div>

        </div>


        <div className="payment-section">

          <div className="payment-title">
            Payment Options
          </div>

          <div className="payment-options">

            <span className="payment-option">
              UPI
            </span>

            <span className="payment-option">
              Card
            </span>

            <span className="payment-option">
              Cash
            </span>

            <span className="payment-option">
              Net Banking
            </span>

          </div>

        </div>


        <div className="card-actions">

          <button className="view-button">
            View Details
          </button>

          <button className="contact-button">
            Contact Owner
          </button>

        </div>

      </div>

    </div>
  );
}

export default Card;