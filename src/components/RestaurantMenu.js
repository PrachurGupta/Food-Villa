import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer.js";
import useRestaurantData from "../Utils/useRestaurantData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  const restaurant = useRestaurantData(resId)
  
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {/* <h1>Restaurant Id: {resId}</h1> */}
        <h1>Speacial Offer: {restaurant.aggregatedDiscountInfo?.header}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div className="menu-list">
        <h1>Menu</h1>
        {Object.values(restaurant?.menu?.items).map(function (item) {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

{/* <div>
  <h1>Menu</h1>
  {restaurant?.menu?.items !== undefined
    ? Object.values(restaurant?.menu?.items).map(function (item) {
        return <li key={item.id}>{item.name}</li>;
      })
    : []}
</div>  */}