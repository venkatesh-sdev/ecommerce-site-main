import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Shop | V</title>
      </Head>
      <header>
        {" "}
        <Navbar />{" "}
      </header>
      <main className={styles.mainContainer}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
