import React, { useEffect } from "react";
import styles from "./MainBanner.module.css";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import { runFireworks } from "../../lib/utils";
import toast from 'react-hot-toast'

const MainBanner = ({ mainBanner }) => {

  return (
    <div className={styles.Banner}>
    
      <div className={styles.text_Container}>
        <p className={styles.Banner_smallText}>{mainBanner.smallText} </p>
        <h3 className={styles.Banner_midText}>{mainBanner.midText} </h3>
        <h1 className={styles.Banner_largeText_1}>{mainBanner.largeText2} </h1>
      </div>

      <img src={urlFor(mainBanner.image)} className={styles.Banner__image} />

      <div className={styles.Banner_button_container}>
        <h5 className={styles.Banner_largeText_2}>{mainBanner.largeText}</h5>
        <Link href={`product/${mainBanner.product}`}>
          <button className={styles.Banner__button}>
            {mainBanner.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
