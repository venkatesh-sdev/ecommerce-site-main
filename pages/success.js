import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Success.module.css";

import { runFireworks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.successContainer}>
        <p className={styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <Link href="/">
          <button type="button" style={{ width: 300 }} className={styles.button}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
