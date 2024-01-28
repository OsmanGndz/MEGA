import React from 'react'
import { Link } from "react-router-dom";

function Restaurant_Cards() {
  return (
    <>
      <div className="row row-cols-sm-4 mb-5">
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/camlibel">
            <img
              src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/17/kynk/cml_b_7.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Çamlıbel Konya Mutfağı</h3>
          </div>
        </div>
        <div
          className="card "
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/kirkikindi">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/28/ff/d4/e4/kirkikindi.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Kırki̇ki̇ndi̇ Restoran Millet Bahçesi</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/huzur-kafe">
            <img
              src="https://universitev.com/front/companies_media/konya-meram-kafe-meram-huzur/478631662230674/20220903214434-478631662230674-media-1920x1309.webp"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Kafe Meram Huzur</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/tavus-kafe">
            <img
              src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/18/yapi/kafem_tavusbaba_b_6.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Tavusbaba Kafem</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/yıldız">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/27/b8/fa/17/150-yillik-tarihi-mekanda.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Osmanlı Kahvehanesi Yıldız Köşkü</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/evliya">
            <img
              src="https://kafem.com.tr/assets/img/locations/evliya.png"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">
              Evliya Çelebi Kafem
            </h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/aydin">
            <img
              src="https://cdn.konyabakis.com/news/58259.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Aydın Çavuş Restoranı</h3>
          </div>
        </div>
        <div
          className="card"
          style={{ marginRight: "10px", marginBottom: "20px", width: "600px" }}
        >
          <Link to="/akyokus-kafe">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPaKkBkhaRHjmi0mlB7AMyyD5FkwtHFvYOe20Cc=s1360-w1360-h1020"
              className="card-img-top"
              alt="..."
              style={{ width: "580px", height: "300px" }}
            />{" "}
          </Link>
          <div className="card-body">
            <h3 className="card-text center">Kafem Akyokuş Park</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Restaurant_Cards