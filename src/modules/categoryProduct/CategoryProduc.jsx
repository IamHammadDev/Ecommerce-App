import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Product/Products";

const CategoryProduc = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `https://fakestoreapi.com/products/category/${name}`;
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log("result: ", result);
        setProducts(result);
      });
    });
  }, []);

  if (products.length === 0) return <div>Loading....</div>;
  return <Products products={products} />;
};

export default CategoryProduc;
