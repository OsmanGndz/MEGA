import React from "react";
import { Link } from "react-router-dom";

function ProductCards({ item, user }) {
  const productUrl = `/products/product/${item.id}`;

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    let itemIndex = localFavs.findIndex((localItem) => product.id === localItem.id);
    if ((itemIndex) >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title, img: product.image, desc: product.description, price:product.price  });
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }
  return (
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={productUrl}>
          <img src={item.image} className="card-img-top" alt={item.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description.substring(0, 100)}...</p>
          <p className="lead">{item.price} $</p>
          {user && (
            <a href="#" className="btn btn-primary" onClick={()=> handleClick(item)}>
              Sepete ekle
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
