import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} /> */}
    </div>
  );
};

export default Body;