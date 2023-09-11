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
      <div className="filter mt-4 flex items-center">
        <div className="search-container my-4 py-4 ml-4 pl-4">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn  bg-gray-800 text-white mx-4 px-4 rounded-lg"
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
        <div className="filter-container  my-4 py-4">
          <button
            className="filter-btn  bg-gray-800 text-white mx-4 px-4 rounded-lg"
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
      <div className="res-container flex flex-wrap">
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
