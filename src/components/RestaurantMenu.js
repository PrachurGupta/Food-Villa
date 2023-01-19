import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const { resId } = params;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=" +
        resId
    );
    const json = await data.json();
    // console.log(resId);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>{restaurant.name}</h2>
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
      {/* <div>
        <h1>Menu</h1>
        {restaurant?.menu?.items !== undefined
          ? Object.values(restaurant?.menu?.items).map(function (item) {
              return <li key={item.id}>{item.name}</li>;
            })
          : []}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
