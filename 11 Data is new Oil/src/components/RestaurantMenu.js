import React, { useState, useEffect } from "react";
import MenuShimmer from "./MenuShimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <MenuShimmer />;
  }

  let { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[0]?.card?.card?.info;

  let { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .itemCards == undefined
      ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card;

  let { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(resInfo?.cards[0]?.card?.card?.info);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-sm">{cuisines.join(", ")}</p>
      <div className="border-b-2">
        <span className="mx-8 text-sm">{costForTwoMessage}</span>
        <span className="mx-8 text-sm">
          {sla.deliveryTime}
          {" MINS"}
        </span>

        {categories.map((category, index) => (
          // console.log(category);

          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
