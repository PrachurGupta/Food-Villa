import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer.js";
import useRestaurantData from "../Utils/useRestaurantData";
import { addItem } from "../Utils/cartSlice.js";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantData(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
      <div className="p-5">
        <h1>Menu</h1>
        {Object.values(restaurant?.menu?.items).map(function (item) {
          return (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="font-black bg-green-100 py-1.5 px-3 m-2 rounded-full"
                onClick={() => addFoodItem(item)}
              >
                +
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

{
  /* <div>
  <h1>Menu</h1>
  {restaurant?.menu?.items !== undefined
    ? Object.values(restaurant?.menu?.items).map(function (item) {
        return <li key={item.id}>{item.name}</li>;
      })
    : []}
</div>  */
}
