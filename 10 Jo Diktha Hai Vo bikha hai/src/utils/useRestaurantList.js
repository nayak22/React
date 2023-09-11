import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [copiedListofRestaurants, setCopiedListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setCopiedListofRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return {
    listofRestaurants,
    copiedListofRestaurants,
    setCopiedListofRestaurants,
  };
};

export default useRestaurantList;
