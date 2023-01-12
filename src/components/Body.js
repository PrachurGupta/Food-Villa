import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData1 = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
  return filterData1;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  //*1
  const [searchText, setSearchText] = useState(""); //*2

  return (
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
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
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
