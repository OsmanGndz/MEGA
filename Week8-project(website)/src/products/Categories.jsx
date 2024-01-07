import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App";

function Categories({ user }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);
  return (
    <>
      <div className="container-me">
        <h2>Kategoriler</h2>
        <div className="list-group">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/category/${category}`}
              className="list-group-item list-group-item-action"
            >
              {category.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
