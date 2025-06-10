import React from "react";
import '../App.css';

const RestaurantCard = ({ name, cuisine, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p>{description}</p>
    </div>
  );
};

export default RestaurantCard;