import React from "react";
import { useStateContext } from "../../context/StateContext";
import styles from "./Cart.module.css";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import toast from "react-hot-toast";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import getStripe from "../../lib/getStripe";

const Cart = () => {
  const {
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    // if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting to Payment...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={styles.CartWrapper}>
      <div className={styles.CartContainer}>
        <button
          className={styles.CartHeading}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={styles.Heading}>YourCart</span>
          <span className={styles.cartNumItems}> ({totalQuantities})</span>
        </button>
        {cartItems.length < 1 && (
          <div className={styles.emptyCart}>
            <AiOutlineShopping />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className={styles.CartButton}
              >
                ContinueShopping
              </button>
            </Link>
          </div>
        )}

        <div className={styles.ProductContainer}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={styles.product} key={item._id}>
                <img
                  src={urlFor(item.image[0])}
                  alt=""
                  className={styles.CartProductImage}
                />
                <div className={styles.itemsDesc}>
                  <div className={styles.descTop}>
                    <h5>{item.name}</h5>
                    <h4>₹{item.price}</h4>
                  </div>
                  <div className={styles.descBottom}>
                    <span
                      className={styles.Minus}
                      onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className={styles.TotalQuantity}>
                      {item.quantity}
                    </span>
                    <span
                      className={styles.Plus}
                      onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    className={styles.RemoveItem}
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles.cartBottonContianer}>
            <div className={styles.TotalContianer}>
              <h3>
                Subtotal:<span>₹{totalPrice}</span>
              </h3>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.PayButton} onClick={handleCheckout}>
                Go To Payments
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
