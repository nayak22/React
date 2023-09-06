import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{avgRating}⭐</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Averge {costForTwoString}</h4>
      <h4>ETA {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
