import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Audionic Headsets",
    price: "420",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Digital Watches",
    price: "490",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Digital Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Airbuds",
    price: "390",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Headphone",
    price: "920",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Headsets",
    price: "320",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Digital Goggles",
    price: "730",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Airbuds",
    price: "310",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
