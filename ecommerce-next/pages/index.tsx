import { useEffect } from "react";
//import play3 from "../playground/playground3";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

export async function getStaticProps() {
  const config = getConfig();
  console.log(config.apiUrl);
  console.log(config.fetch);
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div className="root">{JSON.stringify(products)}</div>;
}

Home.Layout = Layout;
