import React from "react";
import { PopularProducts } from "../../components/Popularproducts/PopularProducts";

const productspromise = fetch("phserver-nine.vercel.app/products").then((res) =>
  res.json()
);

export default function Home() {
  return (
    <>
      <PopularProducts productspromise={productspromise}></PopularProducts>
    </>
  );
}
