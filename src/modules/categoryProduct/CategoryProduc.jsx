import React, { useEffect, useState, CSSProperties } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Product/Products";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const CategoryProduc = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/category/${name}`;
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log("result: ", result);
        setProducts(result);
      });
    });
  }, []);

  if (products.length === 0)
    return (
      <RingLoader
        color="yellowgreen"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  return <Products products={products} />;
};

export default CategoryProduc;
