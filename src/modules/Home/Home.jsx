import React, { useEffect, useState } from "react";
import Feature from "../../components/featureCard/Feature";
import Heros from "../../components/Hero/Heros";
import Products from "../../components/Product/Products";
import Stat from "../../components/statsCard/Stat.jsx";
const Index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products?limit=12";
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log("result: ", result);
        setProducts(result);
      });
    });
  }, []);

  return (
    <>
      <Heros />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading....</div>
      )}
      <Products />
      <Feature />
      <Stat />
    </>
  );
};

export default Index;
