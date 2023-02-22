import {
  useDispatch,
  useSelector,
} from "react-redux";
import FoodItem from "./FoodItems";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(
    (store) => store.cart.items
  );

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const store = useSelector((store) => store);

  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">
        Cart Items - {cartItems.length}
      </h1>
      <button
        className="bg-red-300 rounded-lg p-2 m-5"
        onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      {/* <FoodItem {...cartItems[0]} /> ---> working for just one item, MAP to make it work for all.*/}
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
