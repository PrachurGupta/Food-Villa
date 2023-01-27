import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantData = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }

  //return restaurant Data
  return restaurant;
};

export default useRestaurantData;
