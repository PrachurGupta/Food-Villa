import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext.js"

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {

  const {user} = useContext(UserContext);
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50 rounded-lg">
      <img className="rounded-sm" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold text-sm">{user.name} {user.email}</h5>
    </div>
  );
};

export default RestaurantCard;
