import React from "react";
import { PopularProducts } from "../../components/Popularproducts/PopularProducts";

const productspromise = fetch("http://localhost:3000/products").then((res) =>
  res.json()
);

export default function Home() {
  return (
    <>
      <PopularProducts productspromise={productspromise}></PopularProducts>
    </>
  );
}
