"use client"

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { Contact } from "@/utils/components";
import Product from "@/components/Card";
import { clearFavorites } from "@/redux/slice/favoriteSlice";

const Izbroj = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);

  const handleClearCart = () => {
    if (favorites.length > 0) {
      dispatch(clearFavorites());
    }
  };


  return (
    <div>
      <div className="container py-7 px-5">
        <div className="flex gap-[12px]">
          <div className="border border-gray-200 p-5 rounded-[8px] w-[100%]">
            <div className="flex items-center justify-between">
              <h2 className="text-[25px] font-[600]">Sevimlilar</h2>
              {favorites.length > 0 && (
                <p
                  style={{ backgroundColor: "rgba(80,219,207,.08)" }}
                  className="p-2 rounded-[8px] text-[15px] cursor-pointer"
                  onClick={handleClearCart}
                >
                  O'chirish Hammasini
                </p>
              )}
            </div>
            {favorites.length === 0 ? (
              <div className="flex justify-between">
                <div className="py-1">
                  <p className="pt-2 mb-[15px] text-gray-400">
                    Извините, здесь пока нет любимых товаров
                  </p>
                  <Link
                    href="/"
                    className="py-2 px-10 rounded-[8px] text-white"
                    style={{ backgroundColor: "rgb(0, 156, 146)" }}
                  >
                    Начать покупки
                  </Link>
                </div>
                <img
                  src="https://sello.uz/images/fixed/empty-card.svg"
                  alt="Ваша корзина пуста"
                  style={{ width: "50%" }}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  justifyItems: "space-between",
                }}
                className="grid mobile:grid-cols-2 mobi2:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-6 py-3"
              >
                {favorites.map((favorite) => (
                  <div
                    key={favorite.id}
                    className="cursor-pointer border border-gray-200 overflow-hidden p-2"
                    style={{
                      width: "100%",
                      borderRadius: "9px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Product
                      id={favorite.id}
                      slug={favorite.slug}
                      imageURL={favorite.imageURL}
                      discount={favorite.discount}
                      discounted_price={favorite.discounted_price}
                      price={favorite.price}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <Contact />
      </div>
    </div>
  );
};

export default Izbroj;
