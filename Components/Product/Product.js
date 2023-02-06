import React from "react";
import styles from "./product.module.css";
import { urlFor } from "../../lib/client";
import Link from "next/link";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`product/${slug.current}`} className={styles.Product__Link}>
        <div className={styles.Product_card}>
         <div className={styles.Product__image__container}>
         <img
         src={urlFor(image && image[0])}
         alt=""
         width={250}
         height={250}
         className={styles.Product__image}
       /></div>
        </div>
        <p className={styles.Product__name}>{name}</p>
        <p className={styles.Product__price}>₹ {price}</p>
      </Link>
    </div>
  );
};

export default Product;
