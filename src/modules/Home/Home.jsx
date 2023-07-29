import React, { useEffect, useState, CSSProperties } from "react";
import Category from "../../components/category/Category";
import Feature from "../../components/featureCard/Feature";
import Heros from "../../components/Hero/Heros";
import Products from "../../components/Product/Products";
import Stat from "../../components/statsCard/Stat.jsx";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <Category />
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
        <RingLoader
          color="yellowgreen"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <Products />
      <Stat />
    </>
  );
};

export default Index;
