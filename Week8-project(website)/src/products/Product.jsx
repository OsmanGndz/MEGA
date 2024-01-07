import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import "../App.css";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isInFavorites, setIsInFavorites] = useState(false);

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    let itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
      setIsInFavorites(false);
    } else {
      localFavs.push({ id: product.id, title: product.title, img: product.image, desc: product.description, price: product.price });
      setIsInFavorites(true);
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        // Ürün favorilere ekli mi kontrol et
        let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
        let isInFavorites = localFavs.some((item) => item.id === json.id);
        setIsInFavorites(isInFavorites);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <>
      <div className="container-me row">
        <h3 className="mb-5">{product.title}</h3>
        <div className="col-sm-6">
          <img src={product.image} alt="" className="w-55 img-thumbnail" />
        </div>
        <div className="col-sm-6">
          <p style={{ fontSize: "20px" }}>{product.description}</p><br />
          <h4>{product.price} $</h4><br />
          <button
            className={`btn ${isInFavorites ? "btn-danger" : "btn-primary"} `} style={{ marginLeft: "15px" }}
            onClick={() => handleClick(product)}
          >
            {isInFavorites ? "Sepetten Çıkar" : "Sepete Ekle"}
          </button>
          
        </div>
        
      </div>
    </>
  );
}

export default Product;
