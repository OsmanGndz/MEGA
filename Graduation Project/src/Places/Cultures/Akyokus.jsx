import React from "react";

function Akyokus() {
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
        <h2>Akyokuş</h2>
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
                src="https://lh5.googleusercontent.com/p/AF1QipNnuhGoSrXJZ5ZUVxeOYl6eQWu-sdAiYFwvxqc6"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.memleket.com.tr/gallery/2389_2.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://irs2.4sqi.net/img/general/original/28130453_bt1RJ5ZQ5_0Ga08b4Jci6FCjFTP10djH4VOJGYcraOw.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.konhaber.com/sahifeler/2018/12/27/galeri/12mVs1Tgm8dY.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.konyaninsesi.com.tr/other/2023/08/12/akyokus.jpg"
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
        Konya'nın Meram ilçesinde bulunan Akyokuş, şehrin en güzel
        manzaralarından birini sunan bir tepe ve park kompleksidir. Konya'yı
        kuşbakışı seyredebileceğiniz bu alan, hem şehir sakinleri hem de
        turistler için popüler bir destinasyondur.
      </p>
      <div>
        <a
          href="https://www.google.com/maps/place/Akyoku%C5%9F/@37.8810587,32.1182305,11z/data=!4m10!1m2!2m1!1sakyoku%C5%9F+seyir+tepesi!3m6!1s0x14d086f4a4ca75db:0x171ff31a97423180!8m2!3d37.8810587!4d32.4231011!15sChVha3lva3XFnyBzZXlpciB0ZXBlc2laFyIVYWt5b2t1xZ8gc2V5aXIgdGVwZXNpkgELc2NlbmljX3Nwb3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjRaMDV1UVcxQlJSQULgAQA!16s%2Fg%2F11d_f32h13?hl=tr&entry=ttu"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  );
}

export default Akyokus;
