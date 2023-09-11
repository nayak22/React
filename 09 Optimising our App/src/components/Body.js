import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    listofRestaurants,
    copiedListofRestaurants,
    setCopiedListofRestaurants,
  } = useRestaurantList();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <Shimmer />;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchFiltered = listofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setCopiedListofRestaurants(searchFiltered);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredListofRestaurants = listofRestaurants.filter(
                (elements) => elements.info.avgRating > 4
              );
              setCopiedListofRestaurants(filteredListofRestaurants);
            }}
          >
            Top rated Button
          </button>
        </div>
      </div>
      <div className="res-container">
        {copiedListofRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
