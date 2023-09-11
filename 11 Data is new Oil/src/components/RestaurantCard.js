import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg p-4 m-4 bg-slate-200 border-2 hover:border-black border-transparent ">
      <img
        className="res-img w-full rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="">
        <h3 className="font-bold text-xl mb-2 mt-2">{name}</h3>
        <h4>{avgRating}⭐</h4>
        <p className="text-gray-700 text-base">{cuisines.join(", ")}</p>
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Averge {costForTwo}
        </span>
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ETA {sla.slaString}{" "}
        </span>
      </div>
    </div>
  );
};

//Higer Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
