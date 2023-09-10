import React, { useState, useEffect } from "react";
import MenuShimmer from "./MenuShimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

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
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>

      <ul>
        {cards.map((ele) => (
          <>
            {ele.card.card.title ? (
              <>
                <li>{ele.card.card.title}</li>

                <ul>
                  {itemCards.map((ele) => (
                    <li className="item-container">
                      <div>
                        {ele.card.info.name}.{"  Rs."}
                        {ele.card.info.price / 100 ||
                          ele.card.info.defaultPrice / 100}
                      </div>

                      {
                        <div className="food-img-container">
                          <img
                            className="res-img"
                            src={CDN_URL + ele.card.info.imageId}
                            alt=""
                          />
                        </div>
                      }
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
