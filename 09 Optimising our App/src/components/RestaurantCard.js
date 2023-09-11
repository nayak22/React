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
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{avgRating}⭐</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Averge {costForTwo}</h4>
      <h4>ETA {sla.slaString} </h4>
    </div>
  );
};

export default RestaurantCard;
