"use client";

import React, { Fragment } from "react";
import { CategoryTypes } from "@/types";
import Product from "../Card";

const Mahsulotlar = ({
  id,
  slug,
  imageURL,
  price,
  discount,
  discounted_price,
}: CategoryTypes) => {
  return (
    <Fragment>
      
      <Product
        id={id}
        slug={slug}
        imageURL={imageURL}
        discount={discount}
        discounted_price={discounted_price}
        price={price}
      />
      
    </Fragment>
  );
};

export default Mahsulotlar;
