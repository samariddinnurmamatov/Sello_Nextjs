"use client";

import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "react-scroll-to-top";

import {
  Banner,
  Contact,
  Hamkorlarimiz,
  Mahsulotlar,
  Mashhur,
  Muzika,
} from "@/utils/components";

import { HomeData, Item, SectionProps } from "@/types";
import { request } from "@/server/request";

const fetchData = async (endpoint: string): Promise<Item[]> => {
  try {
    const response = await request(endpoint);
    if (response.data && (response.data.hits || response.data.data)) {
      return response.data.hits || response.data.data;
    } else {
      throw new Error("Invalid data format from the API.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};


const Section: React.FC<SectionProps> = ({ title, data, Component }) => (
  <div className="container py-6 px-3">
    <div className="flex justify-between items-center gap-[10px]">
      <h2 style={{fontWeight: "500", fontFamily: "Roboto, sans-serif", }} className="text-[22px] mobile:text-[18px] tablet:text-[28px] text-dark">{title}</h2>
      <p className="cursor-pointer" style={{ color: "#009c92" }}>
        Hammasini korish
      </p>
    </div>
    <div
      className="py-2 grid mobile:grid-cols-2 mobi2:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-6"
      style={{
        display: "grid",
        width: "100%",
        justifyContent: "space-between",
        gap: "13px",
      }}
    >
      {data?.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer border border-gray-200 overflow-hidden p-1"
          style={{
            width: "100%",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <Component key={item.id} {...item} />
        </div>
      ))}
    </div>
  </div>
);

const Home: React.FC = () => {
  const [data, setData] = useState<HomeData>({
    hityProdaz: null,
    algoliaData: null,
    algoliaDataTwo: null,
    skidki: null,
    merchant: null,
  });

  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    const endpoints = [
      "algolia/hity-prodaz?page=1&perPage=12",
      // "algolia/podborka?=&page=1&perPage=12",
      "algolia/podborka?=&page=1&perPage=12&personalization=true&userToken=3c90809e-0288-4487-b4bd-3dcb582c4823",
      "algolia/podborka?=&page=1&perPage=18",
      "algolia/skidki?page=1&perPage=12",
      "merchant/active?page=1&perPage=15&letter=",
    ];

    const fetchDataConcurrently = async () => {
      try {
        const results = await Promise.all(endpoints.map(fetchData));
        const [
          hityProdazData,
          algoliaDataData,
          algoliaDataTwoData,
          skidkiData,
          merchantData,
        ] = results;

        setData({
          hityProdaz: hityProdazData,
          algoliaData: algoliaDataData,
          algoliaDataTwo: algoliaDataTwoData,
          skidki: skidkiData,
          merchant: merchantData,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        ); // Set error message
        toast.error("An error occurred while fetching data."); // Use toast for user-friendly error notification
      }
    };

    fetchDataConcurrently();
  }, []);

  const renderComponent = (
    title: string,
    dataKey: keyof HomeData,
    componentKey: React.ComponentType<any>,
    sliceIndex: number
  ) => (
    <Section
      title={title}
      data={data[dataKey]?.slice(sliceIndex)}
      Component={componentKey}
    />
  );

  return (
    <>
      <Banner />
      <ToastContainer />
      {error && (
        <div className="error-message container p-5 text-center">{error}</div>
      )}{" "}
      {data.hityProdaz &&
        renderComponent(
          "Eng kop sotiladigan mahsulotlar",
          "hityProdaz",
          Mahsulotlar,
          0
        )}
      {data.algoliaData &&
        renderComponent("Siz uchun saralangan", "algoliaData", Mahsulotlar, 0)}
      <div className="bg-gray-100">
        <Muzika />
      </div>
      {data.algoliaDataTwo &&
        renderComponent("Yangi", "algoliaDataTwo", Mahsulotlar, 6)}
      {error && (
        <div className="error-message container 5 text-center">{error}</div>
      )}{" "}
      {data.skidki && renderComponent("Chegirmalar", "skidki", Mahsulotlar, 0)}
      <div className="bg-gray-100">
        <Mashhur />
      </div>
      <div className="container py-5 px-3 hidden laptop:block">
        <div className="flex items-center gap-[7px] justify-between">
          <div style={{ width: "50%" }} className="hidden laptop:block">
            <img
              src="https://sello.uz/images/banner/main-bottom-left-banner.svg"
              alt="Hamkor"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
              Bizning hamkorlarimiz
            </h2>
            {/* <span className="text-gray-600 text-[16px]">
              Biz bilan hamkorlik qilib, siz o'z do'koningiz savdos ini
              oshirishingiz mumkin.
            </span> */}
            {error && (
              <div className="error-message container 5 text-center">
                {error}
              </div>
            )}{" "}
            {data.merchant && (
              <Section
                title=""
                data={data.merchant}
                Component={Hamkorlarimiz}
                // style={{
                //   display: "grid",
                //   gridTemplateColumns: "repeat(5, 1fr)",
                // }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <Contact />
      </div>
      <ScrollToTop
        smooth
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
          bottom: "70px",
        }}
      />
    </>
  );
};

export default Home;