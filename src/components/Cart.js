import { useState } from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex">
      {cartItems.map((item) => (
        <FoodItem key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default Cart;
