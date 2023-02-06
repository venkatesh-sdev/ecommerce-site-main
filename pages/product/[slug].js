import React, { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { urlFor } from "../../lib/client";
import styles from "./productStyels/product.module.css";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import ProductHover from "../../Components/ProductHover/ProductHover";
import Login from "../../Components/Login/Login";


const Products = ({ product, products }) => {
  const { image, name, price, details } = product;
  const {
    decQty,
    incQty,
    qty,
    onAdd,
    setShowCart,
    isLogin,
  } = useStateContext();

  const [index, setIndex] = useState(0);
  const handleBuy = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  return isLogin ? (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img src={urlFor(image[index])} alt="" />
          <div className={styles.smallImageContainer}>
            {image.map((item, id) => (
              <div
                className={
                  id === index
                    ? styles.smallImageContainerContainSelected
                    : styles.smallImageContainerContain
                }
                key={id}
              >
                <img
                  src={urlFor(item)}
                  alt=""
                  onMouseOver={() => setIndex(id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Product__details__Container}>
          <h1>{name}</h1>
          <div className={styles.reviews}>
            <div className={styles.starContainer}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <span>(20)</span>
            </div>
            <div className={styles.details}>
              <h1>Details</h1>
              <p>{details}</p>
              <h3>₹{price}</h3>
              <div className={styles.quanity}>
                <h3>Quantity</h3>
                <p className={styles.quanity_desc}>
                  <span
                    className={styles.minus_symbol}
                    onClick={() => {
                      decQty();
                    }}
                  >
                    <AiOutlineMinus />
                  </span>
                  <span className={styles.counter}>{qty}</span>
                  <span
                    className={styles.plus_symbol}
                    onClick={() => {
                      incQty();
                    }}
                  >
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className={styles.buttonContianer}>
                <button onClick={handleBuy}>₹ Buy Now</button>
                <button
                  onClick={() => {
                    onAdd(product, qty);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductHover products={products} />
      <ProductHover products={products} />
      <ProductHover products={products} />
      <ProductHover products={products} />
      <ProductHover products={products} />
    </div>
  ) : (
    <Login />
  );
};



export const getStaticPaths = async () => {
  const querys = `*[_type=="product"]{slug{current}}`;
  const products = await client.fetch(querys);
  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug.current,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
    revalidate: 5,
  };
};

export default Products;
