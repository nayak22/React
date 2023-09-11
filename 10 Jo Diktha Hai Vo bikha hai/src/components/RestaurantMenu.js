import React, { useState, useEffect } from "react";
import MenuShimmer from "./MenuShimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <MenuShimmer />;
  }

  let { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  let { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .itemCards == undefined
      ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card;

  let { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="menu w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-bold leading-none text-gray-900 dark:text-white my-4">
        {name}
      </h1>
      <p className="text-base  leading-none text-gray-900 dark:text-white my-4">
        {cuisines.join(", ")}
      </p>
      <p className="text-base leading-none text-gray-900 dark:text-white my-4">
        {costForTwoMessage}
      </p>
      <h2 className="text-2xl font-bold leading-none text-gray-900 dark:text-white my-4">
        Menu
      </h2>

      <ul>
        {cards.map((ele) => (
          <>
            {ele.card.card.title ? (
              <>
                <li className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                  {ele.card.card.title}
                </li>

                <div className="flow-root">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    {itemCards.map((ele) => (
                      <li className="item-container py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-32 h-32 rounded-full"
                              src={CDN_URL + ele.card.info.imageId}
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {ele.card.info.name}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {"  Rs."}
                            {ele.card.info.price / 100 ||
                              ele.card.info.defaultPrice / 100}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
