import React from 'react'

function Etnografia() {
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
            <h2>Konya Etnografya Müzesi</h2>
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
                    src="https://tr-static.eodev.com/files/d5a/263530aabe75fadb4cae193bdb009dcb.png"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.gokonya.com/other/etnografya-muzesi1.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.gokonya.com/other/1-bka1727.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://muzeler.org/images/google-place-images/konya-arkeoloji-muzesi.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i0.wp.com/trendyer.com/wp-content/uploads/2022/09/39.Konya-Etnografya-MA%CC%8Azesi.jpg?resize=1024%2C576&ssl=1"
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
          Kadın giysilerinden kadife, saten, atlas gibi kumaşların üzerine sim sırma, kordon tutturma ve değişik kasnak işleme tekniklerinde bindallı, elbise, şalvar-işlik-cepken, yelek ve kaftanlar; kadın süs eşyalarından gümüş ve bafun malzemeden kemer tokaları, askı, bilezik ve küpeler, tepelikler; örme ve kumaş para, saat, mühür keseleri , yün çorap ve eldivenler, kadife, keten, atlas, saten cinsi kumaşlar üzerine kasnak işleme tekniklerinden Türk işi, sim sırma, hesap işi, çin iğnesi, tel kırma, sarma gibi tekniklerde bohça, peşkir, uçkur, yastık ve yatak takımları yer almaktadır. 
          </p>
          <div>
            <a
              href="https://www.google.com/maps/place/Konya+Etnografya+M%C3%BCzesi/@37.8666961,32.4890084,17z/data=!3m1!4b1!4m6!3m5!1s0x14d085aa87654227:0xfffef2c2ce3ee40a!8m2!3d37.8666961!4d32.4915833!16s%2Fg%2F12hhj28jp?entry=ttu"
              style={{ fontSize: "20px" }}
            >
              Konuma Gitmek İçin Tıklayın
            </a>
          </div>
          <br />
        </>
      )
}

export default Etnografia