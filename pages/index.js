import Head from "next/head";
import Image from "next/image";
import axios from 'axios'
import { client } from "../lib/client";
import React, { useEffect, useState } from "react";
import MainBanner from "../Components/MainBanner/MainBanner";
import Product from "../Components/Product/Product";
import FooterBanner from "../Components/FooterBanner/FooterBanner";
import ProductHover from '../Components/ProductHover/ProductHover'
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const index = ({ products, banners }) => {
  return (
    <div className="home">
      <React.Fragment><MainBanner mainBanner={banners.length && banners[0]} />
          <ProductHover products={products} />
          <ProductHover products={products} />
          <ProductHover products={products} />
          <ProductHover products={products} />
          <ProductHover products={products} />
          <FooterBanner footerBanner={banners.length && banners[0]} /></React.Fragment>
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {

  const productQuery = '*[_type=="product"]';
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type=="banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};
