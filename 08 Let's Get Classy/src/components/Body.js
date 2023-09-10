import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [copiedListofRestaurants, setCopiedListofRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setCopiedListofRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
              console.log(searchText);
              console.log(listofRestaurants);
              const searchFiltered = listofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                // res.info.name.includes(searchText);
              });
              console.log(searchFiltered);
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
              setListofRestaurants(filteredListofRestaurants);
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
