import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Fav({ user }) {
  const [favs, setFavs] = useState([]);

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs"));
    let itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, [favs]);

  const totalAmount = favs.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h2
          className="container-me "
          style={{ textAlign: "center", width: "970px" }}
        >
          Sepetin
        </h2>
        <div className="row ">
          <div className="col-md-10">
            <div className="row">
              {favs.map((item) => (
                <div className="card mb-3 " style={{ width: "470px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <h5 className="card-text">{item.price} $</h5>
                        <br />
                        <button
                          className="btn btn-danger"
                          onClick={() => handleClick(item)}
                        >
                          Sepetten Çıkar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" container-tam col-md-2">
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Tutar</h4>
            <ul className="list-group" style={{marginTop:"20px"}}>
            {favs.map((item) => (

                <li className="list-group-item">{item.title.substring(0,10)}...  {item.price} $</li>

            ))}
            </ul><br />
             
            <p className="container-tutar" >{totalAmount.toFixed(2)} $</p>

            <button className="btn btn-success ">Ödemeyi gerçekleştir</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fav;
