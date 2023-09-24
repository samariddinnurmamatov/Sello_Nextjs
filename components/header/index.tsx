"use client";

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/redux/store/store";
import { HeaderNavItemProps } from "@/types";

import home from "../../assets/navbar/home-active.svg";
import logo from "../../assets/navbar/logo.svg";
import menu from "../../assets/navbar/menu.svg";
import search from "../../assets/navbar/search.svg";
import heart from "../../assets/navbar/heart.svg";
import shopping from "../../assets/navbar/shopping-cart.svg";
import person from "../../assets/navbar/person.svg";

// import { deleteCookie } from "cookies-next";
// import { logout } from "@/redux/slice/authSlice";
// import { useRouter } from "next/navigation";

// HeaderLogo component for rendering the logo
const HeaderLogo: React.FC = () => (
  <Link href="/">
    <Image src={logo} alt="Logo" style={{height: "45px"}} />
  </Link>
);

// HeaderSearch component for rendering the search input
const HeaderSearch: React.FC = () => (
  <div className="hidden laptop:block w-[47%]">
    <div
      className="flex border border-gray-100 rounded-lg overflow-hidden w-[100%]"
    >
      <input
        style={{ width: "100%", fontSize: "15px" }}
        className="p-2 px-3 outline-none placeholder-gray-300 w-[100%] text-[15px]"
        type="text"
        placeholder="Mahsulotlar bo'yicha qidirish"
      />
      <div style={{ backgroundColor: "#008385" }} className="p-2 px-4">
        <Image src={search} alt="Search" width={24} height={24} />
      </div>
    </div>
  </div>
);

// HeaderNavItem component for rendering individual navigation items
const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  icon,
  text,
  href,
  count = 0,
}) => (
  <div className="flex items-center flex-col cursor-pointer">
    <Link
      href={href}
      className="flex items-center flex-col cursor-pointer"
      style={{ position: "relative" }}
    >
      <Image src={icon} alt={text} width={23} height={23} />
      <span
        onMouseOver={(e) => {
          e.currentTarget.style.color = "#009090";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = "black";
        }}
        style={{ fontSize: "14px" }}
        className="text-gray-500 text-[14px]"
      >
        {text}
      </span>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            fontSize: "10px",
            borderRadius: "7px",
            padding: "0px 5px",
            color: "white",
          }}
          className="bg-red-600 text-white"
        >
          {count}
        </span>
      )}
    </Link>
  </div>
);

const Header: React.FC = () => {
  const favoriteCount = useSelector(
    (state: RootState) => state.favorite.favorites.length
  );
  const cartCount = useSelector(
    (state: RootState) => state.cart.cartData.length
  );

  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuth);
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const handleLogout = () => {
  //   deleteCookie("token"); // Clear your token
  //   dispatch(logout());
  //   router.push("/"); // Foydalanuvchi Logout bo'lgach bosh sahifaga o'tishi
  // };

  return (
    <Fragment>
      <div className="bg-gray-100 hidden tablet:hidden laptop:block">
        <div className="container py-4 flex justify-between items-center px-3">
          <button
            className="btn btn-muted text-white ftz-11"
            style={{
              backgroundColor: "rgb(0, 179, 168)",
              borderRadius: "7px",
              fontSize: "13.5px",
              padding: "5px 24px",
            }}
          >
            Sello Market
          </button>
          <div className="flex gap-[55px] items-center justify-between">
            <p className="text-gray-600 text-[13px]">
              Tarqatish punktigacha yetkazib berish bepul!
            </p>
            <div className="flex items-center gap-[35px]">
              <button
                className="btn btn-muted text-white px-2 ftz-10 py-1 text-[14px] rounded-[7px]"
                style={{
                  backgroundColor: "rgb(0, 144, 144)",
                }}
              >
                Sello-da sotish
              </button>
              <div className="flex">
                <p className="cursor-pointer text-gray-500 text-[14px]">Uzb </p>
                <Image
                  src="https://sello.uz/images/icn/chevron-down-grey.svg"
                  alt="Lang"
                  width={20}
                  height={10}
                />
              </div>
              <div className="flex gap-[7px]">
                <Image
                  src="https://sello.uz/images/icn/location.svg"
                  alt="Location"
                  width={10}
                  height={10}
                />
                <p className="cursor-pointer text-gray-500 text-[14px]">
                  Toshkent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 tablet:hidden">
        <div className="container flex justify-between items-center p-3">
          <div className="flex items-center gap-[10px]">
            <Image
              src="https://sello.uz/images/fixed/mob-logo.svg"
              alt="Mobile-Sello"
              width={50}
              height={50}
            />
            <p className="text-[10px]">Открыть в приложении</p>
          </div>
          <div>
            <button
              className="btn btn-muted text-white px-4 ftz-10 py-1 text-[12px] rounded-[10px]"
              style={{
                backgroundColor: "rgb(0, 179, 168)",
              }}
            >
              Открыть
            </button>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10">
        <header className="border-b border-gray-100 bg-white">
          <div className="flex items-center py-4 px-3 justify-between container gap-[7px]">
            <HeaderLogo />
            <button
              className="flex items-center border border-gray-100 rounded-[6px] px-3 py-1.5 space-x-2"
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              <Image src={menu} alt="Menu" width={24} height={24} />
              <p className="hidden laptop:block">Katalog</p>
            </button>
            <HeaderSearch />
            <div className="hidden laptop:block">
              <div className="flex space-x-7">
                <HeaderNavItem
                  icon={heart}
                  text="Sevimlilar"
                  href="/sevimlilar"
                  count={favoriteCount}
                />
                <HeaderNavItem
                  icon={shopping}
                  text="Savatcha"
                  href="/savat"
                  count={cartCount}
                />
                <HeaderNavItem icon={person} text="Register" href="/" />
                {/* <HeaderNavItem icon={person} text="Login" href="/login" /> */}
                {/* {isAuthenticated ? (
                  <Fragment>
                    <HeaderNavItem
                      icon={person}
                      text="Account"
                      href="/account"
                    />
                    <button onClick={handleLogout}>-</button>
                  </Fragment>
                ) : (
                  <>
                    <HeaderNavItem
                      icon={person}
                      text="Register"
                      href="/register"
                    />
                    <HeaderNavItem icon={person} text="Login" href="/login" />
                  </>
                )} */}
              </div>
            </div>
          </div>
          <div className="block laptop:hidden container p-3">
            <div
              className="flex border border-gray-200 rounded-lg overflow-hidden w-[100%]"
            >
              <input
                className="p-2 outline-none placeholder-gray-300 w-[100%] text-[16px]"
                type="text"
                placeholder="Mahsulotlar bo'yicha qidirish"
              />
              <div style={{ backgroundColor: "#00b3a8" }} className="p-2">
                <Image src={search} alt="Search" width={24} height={24} />
              </div>
            </div>
          </div>
        </header>
        <div className="bg-white w-100">
          <div
            className="container flex justify-between p-4 gap-[20px] items-center w-[100%]"
            style={{ overflowX: "scroll" }}
          >
            <Link
              href="/"
              style={{ whiteSpace: "nowrap", color: "red", fontWeight: "600" }}
            >
              🔥Chegirmalar
            </Link>
            <Link
              href="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Elektronika
            </Link>
            <Link
              href="/"
              style={{ whiteSpace: "nowrap" }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Kiyimlar, poyabzallar v aksessuarlar
            </Link>
            <Link
              href="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Kitoblar
            </Link>
            <Link
              href="/"
              style={{ whiteSpace: "nowrap" }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Zargarlik bezaklari
            </Link>
            <Link
              href="/"
              style={{ whiteSpace: "nowrap" }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Uy va bog
            </Link>
            <Link
              href="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Brendlar
            </Link>
            <Link
              href="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#009090";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              Sotuvchilar
            </Link>
          </div>
        </div>
      </div>
      <div
        className="py-3 bg-white w-[100%] block laptop:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 15,
          borderRadius: "16px 16px 0px 0px",
        }}
      >
        <div className="container px-3 sticky bottom-0 z-99 w-[100%]">
          <div className="flex justify-between">
            <HeaderNavItem icon={home} text="Home" href="/" />
            <HeaderNavItem
              icon={shopping}
              text="Savatcha"
              href="/savat"
              count={cartCount}
            />
            <HeaderNavItem
              icon={heart}
              text="Sevimlilar"
              href="/sevimlilar"
              count={favoriteCount}
            />
            <HeaderNavItem icon={person} text="Profil" href="/sevimlilar" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
