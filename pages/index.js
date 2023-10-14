import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body";
import ScrollToTopBtn from "../components/Body/ScrollToTopBtn";
import classes from "../styles/index.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>OLX Website</title>
        <meta name="description" content="OLX is a top e-commerce website that you find every thing that you like it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.body}>
        <Navbar />
        <img src={"/images/banner.JPG"} className={classes.image}></img>
        <h1 className={classes.recommendationLabel}>Fresh recommendations</h1>
        <Body />
        <ScrollToTopBtn></ScrollToTopBtn>
      </div>
    </Fragment>
  );
}
