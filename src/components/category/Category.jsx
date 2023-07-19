import React, { useEffect, useState } from "react";
import Feature from "../../components/featureCard/Feature";

const Category = () => {
  const [categories, setCategories] = useState([]);
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
      <div className="h-[55vh] flex justify-center items-center text-4xl">
        Loading....
      </div>
    );
  return <Feature cards={categories} />;
};

export default Category;
