import React from "react";
import { useGlobalContext } from "../context";
import { Card } from "./Card";

export const ProductsList = () => {
  const { products } = useGlobalContext();

  return (
    <div>
      <p>Product List</p>
      {products.map((item) => {
        return <Card key={item._id} {...item} />;
      })}
    </div>
  );
};
