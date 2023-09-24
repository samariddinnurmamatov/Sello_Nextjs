"use client"

import { useDispatch, useSelector } from "react-redux";
import {
  clearCartData,
  removeFromCart,
  updateQuantity,
} from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { Contact } from "@/utils/components";
import Image from "next/image";

const Savat = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  // const totalProductPrice = useSelector(
  //   (state: RootState) => state.cart.totalProductPrice
  // );

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };


  const handleClearCart = () => {
    if (cartData.length > 0) {
      dispatch(clearCartData());
    }
  };

  let totalQuantity = 0;
  let totalPrice = 0;

  cartData.forEach((item: any) => {
    totalQuantity += item.quantity;
    if (typeof item.price === "string") {
      const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      totalPrice += itemPrice * item.quantity;
    } else if (typeof item.price === "number") {
      totalPrice += item.price * item.quantity;
    } else {
      console.error(`Invalid price data for item with ID ${item.id}`);
    }
  });
  


  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex space-x-1 items-center container py-4 px-3">
          <Link href="/" className="text-[16px] text-gray-500">
            Home |
          </Link>
          <span className="text-[16px]" style={{ color: "rgb(0, 156, 146)" }}>
            {" "}
            Savat
          </span>
        </div>
      </div>
      <div className="container p-3">
        {cartData.length === 0 ? (
          <div className="laptop:flex justify-around">
            <Image
              src="https://sello.uz/images/fixed/empty-card.svg"
              alt="Your cart is empty"
              width={100}
              height={100}
              className="object-contain w-[43%]"
            />
            <div className="py-14">
              <h2 className="font-[500] text-[21px]">Корзина 0</h2>
              <p className="pt-2 mb-[15px] text-gray-400">
                Прошу прощения! Ваша корзина на данный момент пуста
              </p>
              <p className="py-3 text-gray-400">
                Нажмите на кнопку ниже, чтобы начать делать покупки
              </p>
              <Link
                href="/"
                className="py-2 px-10 rounded-[8px] text-white"
                style={{ backgroundColor: "rgb(0, 156, 146)" }}
              >
                Начать покупки
              </Link>
            </div>
          </div>
        ) : (
          <div className="laptop:flex gap-[12px] items-baseline">
            <div className="border border-gray-200 p-4 mb-5 rounded-[8px] laptop:w-[100%]">
              <div className="flex items-center gap-[10px] justify-between">
                <h2 className="text-[25px] font-[600]">Savat</h2>
                <p
                  style={{ backgroundColor: "rgba(80,219,207,.08)" }}
                  className="p-2 rounded-[8px] laptop:text-[15px] tablet:text-[10px] mobi2:text-[10px] mobile:text-[10px] cursor-pointer"
                  onClick={handleClearCart}
                >
                  O'chirish hammasini
                </p>
              </div>
              {cartData.map((item: any) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-[6px] p-4 mt-8 flex justify-between items-center gap-[15px]"
                >
                  <span className="w-[150px] bg-gray-500">
                    <img
                      src={`https://static.sello.uz/unsafe/x180/https://static.sello.uz${item.imageURL}`}
                      alt="img"
                      className="w-[100%]"
                    />
                  </span>
                  <div className="flex flex-col gap-[10px] w-[80%]">
                    <span>{item.slug}</span>
                    <span>{item.price}</span>
                    <span
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 cursor-pointer w-[50px]"
                    >
                      O'chirish
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          handleUpdateQuantity(item.id, item.quantity - 1);
                        }
                      }}
                      disabled={item.quantity <= 1}
                      className="border border-gray-500 rounded-[6px] px-2"
                    >
                      -
                    </button>{" "}
                    {item.quantity}{" "}
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="border border-gray-500 rounded-[6px] px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-gray-200 py-7 px-5 rounded-[8px] laptop:w-[40%]">
              <h3 className="font-[500]">Сумма заказа</h3>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-gray-500">
                    Количество товаров:{" "}
                  </p>
                  <span>{totalQuantity}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[13px] text-gray-500">Доставка: </p>
                  <span>{0}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-[13px] text-gray-500">
                    Общая сумма к оплате :{" "}
                  </p>
                  <span>{totalPrice} UZS</span>
                </div>
                <div className="py-3">
                  <button
                    className="w-[100%] py-1 text-white rounded-[8px]"
                    style={{ backgroundColor: "#00b3a8" }}
                  >
                    Перейти к оформлению
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-100">
        <Contact />
      </div>
    </div>
  );
};

export default Savat;
