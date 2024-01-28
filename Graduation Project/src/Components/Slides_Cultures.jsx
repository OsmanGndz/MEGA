import React from "react";
import { Link } from "react-router-dom";
import "./slide.css";

function Slides_Mimari() {
  return (
    <div className="container">
      <div className="container cont">
        <h2>Tarihi Yerler</h2>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/sahip-ata-muzesi">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a2/e0/c7/sahibi-ata-camisi.jpg?w=1200&h=-1&s=1"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Sahip Ata Muzesi ve Camii</h4>
              <p>Anadolu Selçuklu Devleti vezirlerinden Sâhib Atâ Fahreddin Ali tarafından...</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/ates-bazi-veli-turbesi">
              <img
                src="https://cdn.gokonya.com/other/atesbazi-veli-turbesi-3.jpg"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Ates Baz-i Veli Turbesi</h4>
              <p>Konya’da Yeni Meram yolu üzerinde, halk arasında “Âşıklar Semti” olarak bilinen Aşkan yakınlarında, Ateşbaz Veli Efendi Türbesi adıyla meşhur bir ziyaretgâh bulunur.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/kapu-camii">
              <img
                src="https://www.yenikonya.com.tr/uploads/2023/07/20/568c4d01_big.jpg"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Kapu Camii</h4>
              <p>Konya’da Odun Pazarı semtinde, Sarraflar (Çıkrıkçılar) Caddesi üzerinde bulunan bu cami, eski Konya Kalesinin kapılarından birisinin yanında bulunduğundan Kapu Camisi ismi ile tanınmıştır.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slides_Mimari;
