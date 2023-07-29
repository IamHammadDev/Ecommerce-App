import React, { useEffect, useState, CSSProperties } from "react";
import Feature from "../../components/featureCard/Feature";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products/categories";
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log("result: ", result);
        setCategories(result);
      });
    });
  }, []);
  if (categories.length === 0)
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
  return <Feature cards={categories} />;
};

export default Category;
