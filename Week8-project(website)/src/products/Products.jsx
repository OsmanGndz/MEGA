import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import "../App"

function Products({ user }) {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });
  return (
    <>
      <h2 className="urun container-me">Ürünler </h2>
      <div className="container-me">
        <div className="row row-cols-sm-3 row-cols-md-4">
          {last10Products.map((product) => (
            <ProductCards user={user} key={product.id} item={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
