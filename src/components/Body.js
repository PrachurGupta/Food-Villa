import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  // const filterData =
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  // return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  //*1
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //*2

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>No Restaurants Found!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} /> */}
      </div>
    </>
  );
};

export default Body;

//*1
// const searchText = "KFC"; ---> In JavaScript making local variable
// ⇓⇓⇓⇓

//*2
// --> In react making local variable, useState returns = [variable name, function to update the variable]
//Its destructuring only like if
//const searchVar = useState();
// const [searchText, setSearchText] = searchVar;
//Line 8 is same as in Line 9 & 10.
