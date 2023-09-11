import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showitems, setShowItems] = useState(false);
  const handleTitleClick = () => {
    setShowItems(!showitems);
  };
  return (
    <div>
      <div className="w-6/12   bg-grey-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="font-bold text-lg flex justify-between cursor-pointer "
          onClick={handleTitleClick}
        >
          <span>
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>{"🔽"} </span>
        </div>
        <div>{showitems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
