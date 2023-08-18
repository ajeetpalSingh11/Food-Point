import { useState } from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <div className="m-2 p-5 text-xl">The cart is Empty</div>
  ) : (
    <div className="flex">
      {cartItems.map((item) => (
        <FoodItem key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default Cart;
