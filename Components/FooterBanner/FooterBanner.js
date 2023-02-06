import React from "react";
import styles from "./FooterBanner.module.css";
import { urlFor } from "../../lib/client";
import Link from "next/link";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className={styles.Banner}>
      <div className={styles.temp_container}>
        <div className={styles.text_Container}>
          <p className={styles.Banner_smallText}>Hurry Up<span style={{fontWeight:"bold", fontSize:19}}> {footerBanner.discount}</span></p>
          <h3 className={styles.Banner_midText}>{footerBanner.saleTime} </h3>
          <h1 className={styles.Banner_largeText_1}>
            {footerBanner.largeText2}{" "}
          </h1>
        </div>
        <div className={styles.Banner_button_container}>
          <h5 className={styles.Banner_largeText_2}>
            {footerBanner.largeText}
          </h5>
          <Link href={`product/${footerBanner.product}`}>
            <button className={styles.Banner__button}>
              {footerBanner.buttonText}
            </button>
          </Link>
        </div>
      </div>
        <div className={styles.image__desc__Container}>
      <img src={urlFor(footerBanner.image)} className={styles.Banner__image} />
        <p>{footerBanner.desc}</p>
        </div>
      
    </div>
  );
};

export default FooterBanner;
