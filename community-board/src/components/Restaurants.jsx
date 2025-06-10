import React from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantData from "./restaurantsData";

function Restaurants() {
  return (
    <div className="restaurant-grid">
      {RestaurantData.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          image={restaurant.image}
          description={restaurant.description}
        />
      ))}
    </div>
  );
}


export default Restaurants;