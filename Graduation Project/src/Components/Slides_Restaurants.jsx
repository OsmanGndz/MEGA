import React from "react";
import { Link } from "react-router-dom";

function Slides_Dini() {

  return (
    <div className="container">
      <div className="container cont">
        <h2>Restoranlar</h2>
      </div>
      <div id="carouselExampleCaptions1" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/camlibel">
              <img
                src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/17/kynk/cml_b_7.jpg"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Çamlıbel Konya Mutfağı</h4>
              <p>Konya'nın yöresel yemeklerinin bulunduğu bir restoran...</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/kirkikindi">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/28/ff/d4/e4/kirkikindi.jpg"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Kirki̇ki̇ndi̇ Restoran Millet Bahçesi</h4>
              <p>Kırkındi̇ Restoran Millet Bahçesi, Konya'nın Meram ilçesinde bulunan bir restorandır. Konya mutfağının en lezzetli örneklerini sunan restoran, tarihi ve otantik atmosferi ile de misafirlerini büyülemektedir.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/huzur-kafe">
              <img
                src="https://universitev.com/front/companies_media/konya-meram-kafe-meram-huzur/478631662230674/20220903214434-478631662230674-media-1920x1309.webp"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block contor">
              <h4>Kafe Meram Huzur</h4>
              <p>Kafe Meram Huzur, Konya'nın Meram ilçesinde bulunan bir kafedir. Şehir merkezine yakın bir konumda bulunan kafe, sakin ve huzurlu bir atmosfere sahiptir.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slides_Dini;
