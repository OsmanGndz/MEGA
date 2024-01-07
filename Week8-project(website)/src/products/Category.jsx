import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "./ProductCards";

function Category({ user }) {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res))
      .catch((err) => console.log(err));
  }, [categoryName]);
  return (
    <>
      <div className="container-me urun ">
        <h1>{categoryName.toUpperCase()}</h1>
      </div>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map((item) => (
          <ProductCards user={user} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
