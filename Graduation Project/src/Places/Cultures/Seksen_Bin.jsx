import React from "react";
import "./des.css";

function Seksen_Bin() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: "30px" }}
      >
        <a href="/">
          <img
            src="https://www.meram.bel.tr/assets/img/logo.svg"
            alt="Meram Belediyesi"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </a>
      </div>
      <br />
      <div className="container cont">
        <h2>80 Binde Devr-i Alem Parkı</h2>
      </div>
      <div>
        <h3>Fotoğraflar</h3>
        <br />
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1450000/1450617.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.meram.bel.tr/upload/medya/HE5B5601.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/07/05/thumbs_b_c_8a2222049ea37189ed0590c7310897a8.jpg?v=170540"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i1.haber7.net//haber/haber7/photos/2020/47/BfnYt_1605527112_177.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/42/2f/7d/80-binde-devri-alem.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />

      <h3>Açıklama</h3>
      <p style={{ fontSize: "20px" }}>
        Konya'nın Meram ilçesinde bulunan 80 Binde Devr-i Alem Parkı, her yaştan
        ziyaretçiye hitap eden muhteşem bir tema parkıdır. 80 dönümlük bir alan
        üzerine kurulu park, Jules Verne'in ünlü romanı 80 Günde Devri Alem'den
        esinlenerek tasarlanmıştır. Parkta, romanda geçen ülkeler ve şehirlerin
        minyatürleri, dinozor replikaları, peri masalı figürleri ve daha birçok
        şey bulunmaktadır. Ziyaretçiler, parkta dünyayı dolaşabilir, tarihte
        yolculuk yapabilir ve fantastik bir dünyaya adım atabilirler.
      </p>
      <div>
        <a
          href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KSELicgXgdAUMVl4jKcXb38v&daddr=Durunday,+Dutlu+Cd.+No:139,+42140+Meram/Konya"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  );
}

export default Seksen_Bin;
