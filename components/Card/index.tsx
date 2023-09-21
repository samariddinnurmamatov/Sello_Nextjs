"use client"

import React, { Fragment, useEffect, useState } from "react";
import { CategoryTypes } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/redux/slice/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/slice/favoriteSlice";
import { RootState } from "@/redux/store/store";
import { toast } from "react-toastify";

const Product: React.FC<CategoryTypes> = ({
  id,
  slug,
  imageURL,
  discount,
  price,
  quantity,
  discounted_price,
}) => {
  const formatPrice = (price: any) => {
    // Convert the price to a number (if it's not already)
    const numericPrice = parseFloat(price);

    // Check if the price is valid
    if (isNaN(numericPrice)) {
      return "Invalid Price";
    }

    // Divide the price by 100000 to convert it to the desired format
    const formattedPrice = (numericPrice / 100000).toFixed(0);

    // Use Intl.NumberFormat to format the number with commas
    return new Intl.NumberFormat("uz-UZ", {
      style: "currency",
      currency: "UZS",
      minimumFractionDigits: 3,
    }).format(parseFloat(formattedPrice));
  };

  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  const displayPrice =
    discounted_price !== null
      ? formatPrice(discounted_price)
      : formatPrice(price);


  const discountText = discount !== null ? `-${discount}%` : null;

  const dispatch = useDispatch(); // Redux'dan dispatch olish

  const favorites = useSelector((state: RootState) => state.favorite.favorites); // favorites holatini to'g'ri olish
  const isFavorite = favorites.some((item) => item.id === id);

  const [isLiked, setIsLiked] = useState(isFavorite);
  const [productQuantity, setProductQuantity] = useState(
    cartData.find((item) => item.id === id)?.quantity || 0
  );

  useEffect(() => {
    setProductQuantity(cartData.find((item) => item.id === id)?.quantity || 0);
  }, [cartData, id]);

  const handleAddToCart = () => {
    // Mahsulot ma'lumotlari bilan addToCart action'ini dispatch qilish
    dispatch(
      addToCart({ id, slug, imageURL, price: displayPrice, quantity: 1 })
    );
    setProductQuantity(productQuantity + 1);
    toast.success("Product added to cart");
  };

  const handleToggleFavorite = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id,
          slug,
          imageURL,
          price,
          discounted_price,
          discount,
        })
      );
    }
    setIsLiked(!isLiked);
    toast.info(isLiked ? "Product unliked" : "Product liked");
  };

  return (
    <Fragment>
      <div>
        <div style={{ position: "relative" }}>
          <div
            className="position-relative"
            style={{
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f3f3",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
                inset: "0px",
              }}
            >
              <img
                className="img"
                src={`https://static.sello.uz/unsafe/x180/https://static.sello.uz${imageURL}`}
                alt="Image"
                style={{
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "medium",
                  margin: "auto",
                  display: "block",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </span>
          </div>
          <button
            onClick={handleToggleFavorite}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              backgroundColor: "white",
              borderRadius: "40px",
              width: "33px",
              padding: "6px",
            }}
          >
            {isLiked ? (
              <img
                src="https://sello.uz/images/icn/heart.svg"
                alt="Unlike"
                style={{ width: "100px" }}
              />
            ) : (
              <img
                src="https://sello.uz/images/icn/heart-primary.svg "
                alt="Like"
                style={{ width: "100px" }}
              />
            )}
          </button>
        </div>
        <p
          style={{
            paddingTop: "10px",
            textTransform: "capitalize",
          }}
          className="text-gray-800 px-1 text-[13px] t-truncate-3 leading-[1.3] font-[500]"
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#009090";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "black"; // Hover sonrası rengi varsayılan renge geri döndürür
          }}
        >
          {slug}
        </p>
      </div>
      <div>
        <div className="flex justify-between px-1">
          <del className="text-gray-600 text-[12px]">{price}</del>
          <p>
            {discount === null || discount === "" ? (
              ""
            ) : (
              <p className="bg-red-600 text-white px-2 py-1 text-[11px] rounded-[18px]">
                {discountText}
              </p>
            )}
          </p>
        </div>
        <h2 className="pb-3 px-1 font-[600] text-[15px]">{displayPrice}</h2>
        <button
          className="rounded-[6px] overflow-hidden text-white text-[14px] px-1"
          style={{
            width: "100%",
            backgroundColor: "#008385",
            padding: "3px 0px",
          }}
          onClick={handleAddToCart}
        >
          <span className="flex items-center justify-center">
            Savatchaga
            {productQuantity > 0 && <Fragment> [{productQuantity}]</Fragment>}
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default Product;