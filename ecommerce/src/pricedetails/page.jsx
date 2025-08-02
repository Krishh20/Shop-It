import React from "react";
import { useCart } from "../context/CartContext";
import { getTotalCartAmount } from "../utils/getTotalCartAmount.js";
function PriceDetails() {
  const { cartState } = useCart();
  const cart = cartState.cart;
    const totalCartAmount=getTotalCartAmount(cart)
  const deliveryCharge=49;
  return (
    <div className="w-[400px] bg-[#fafafa] !p-4">
      <p className="text-2xl border-b  border-gray-300 ">Price Details</p>
      <div className="flex flex-col gap-5 border-b  border-gray-300 !p-2">
        <div className="flex">
          <p> Price {cart.length} items</p>
          <p className="!ml-auto">Rs.{totalCartAmount}</p>
        </div>
        <div className="flex ">
          <p>Delivery charge</p>
          <p className="!ml-auto">Rs.{deliveryCharge}</p>
        </div>
      </div>
      <div className="flex border-b  border-gray-300 !p-2">
        <p>Total Amount</p>
        <p className="!ml-auto">Rs.{totalCartAmount+deliveryCharge}</p>
      </div>
      <div className="!p-2">
        <button className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default PriceDetails;
