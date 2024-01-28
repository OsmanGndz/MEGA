import React from "react";
import "./des.css";

function Kapu() {
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
        <h2>Kapu Camii</h2>
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
                src="https://cdn.gokonya.com/other/kapu-camii-secilen-2.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dd/45/b1/guzel.jpg?w=1200&h=-1&s=1"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.gokonya.com/other/1-kapu-cami-ic-detay.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.gokonya.com/other/kapu-cami-6.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://dogusled.com/images/urunler/big/MTVjMGJlZDVlY2NmN2Q.jpg"
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
        </div>{" "}
        <br />
        
      </div>
      <br />
      <h3>Açıklama</h3>
        <p style={{ fontSize: "20px" }}>
          Konya’da Odun Pazarı semtinde, Sarraflar (Çıkrıkçılar) Caddesi
          üzerinde bulunan bu cami, eski Konya Kalesinin kapılarından birisinin
          yanında bulunduğundan Kapu Camisi ismi ile tanınmıştır. Camiyi
          Mevlâna’nın torunlarından postnişin Hasanoğlu Şeyh Hüseyin Çelebi 1658
          yılında yaptırmıştır. Yapımından bir süre sonra yıkılan camiyi 1811
          yılında Konya Müftüsü Esenlerlizade Seyyid Abdurrahman Efendi yeniden
          yaptırmıştır. Ancak cami 1867 yılı yangınında çevresindeki vakıf
          dükkânları ile birlikte yanmıştır. Bu olaydan sonra 1868’de cami
          üçüncü kez yapılmıştır. Bugünkü caminin kapı kemeri üzerindeki
          kitabesinden banisinin ismi yazılı olmamakla birlikte 1868’de
          yapıldığı yazılıdır.
        </p> <br />
      <div>
        <a
          href="https://www.google.com/maps?q=Konya+Kapu+Cami&source=lmns&entry=mt&bih=703&biw=1536&hl=tr"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  );
}

export default Kapu;
