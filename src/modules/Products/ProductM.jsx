import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Products from "../../components/Product/Products";

const ProductM = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log("result: ", result);
        setProducts(result);
      });
    });
  }, []);

  return (
    <div>
      <Category />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="h-[55vh] flex justify-center items-center text-4xl">Loading....</div>
      )}
    </div>
  );
};

export default ProductM;
