import Loading from "@/components/loading/loading";
import dynamic from "next/dynamic";
import React from "react";

const componentNames = [
  "Banner",
  "Contact",
  "Hamkorlarimiz",
  "Mahsulotlar",
  "Mashhur",
  "Muzika",
];

type DynamicComponent = React.ComponentType<any>;

const dynamicComponents: { [key: string]: DynamicComponent } = {};

const dynamicImport = (componentName: string) =>
  dynamic(() => import(`@/components/${componentName.toLowerCase()}`), {
    ssr: false,
    loading: () => <p className="container text-center"><Loading /></p>,
  });

componentNames.forEach((name) => {
  dynamicComponents[name] = dynamicImport(name);
});

export const {
  Banner,
  Contact,
  Hamkorlarimiz,
  Mahsulotlar,
  Mashhur,
  Muzika,
} = dynamicComponents;
