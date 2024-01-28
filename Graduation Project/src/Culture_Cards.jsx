import React from "react";
import { Link } from "react-router-dom";

function Culture_Cards() {
  return (
    <>
      <div className="row row-cols-sm-4 mb-5">
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/sahip-ata-muzesi">
            <img
              src="https://cdn.gokonya.com/other/bka1631.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Sahip Ata Vakıf Müzesi</h3>
          </div>
        </div>
        <div
          className="card "
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/kapu-camii">
            <img
              src="https://cdn.gokonya.com/other/kapu-camii-secilen-2.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Kapu Camii</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/ates-bazi-veli-turbesi">
            <img
              src="https://cdn.gokonya.com/other/atesbazi-veli-turbesi-3.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Ates Baz-i Veli Turbesi</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/80-binde-devr-i-alem-parki">
            <img
              src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1450000/1450617.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">80 Binde Devr-i Alem Parkı</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/akyokus">
            <img
              src="https://fastly.4sqi.net/img/general/600x600/169083149_3a152zSVOCu3IQfG0J4yVQKl-DW4kkpfqKVKfMS_Fss.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Akyokuş</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/tavus">
            <img
              src="https://cdn.konyaninsesi.com.tr/gallery/2023/09/1/%C5%9EEYH%20TAVUSBABA%20CAM%C4%B0%C4%B0%20VE%20T%C3%9CRBES%C4%B0.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">
              Şeyh Tavusbaba Camii ve Türbesi
            </h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/amber-reis-camii">
            <img
              src="https://tarihgezisi.com/wp-content/uploads/2020/09/3-38.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Amber Reis Camii</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/etnografia-müzesi">
            <img
              src="https://tr-static.eodev.com/files/d5a/263530aabe75fadb4cae193bdb009dcb.png"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Konya Etnografya Müzesi</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Culture_Cards;
