import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListofRestaurants = listofRestaurants.filter(
              (elements) => elements.data.avgRating > 4
            );
            setListofRestaurants(filteredListofRestaurants);
          }}
        >
          Top rated Button
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
