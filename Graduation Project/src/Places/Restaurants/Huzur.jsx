import React from 'react'

function Huzur() {
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
        <h2>Kafe Meram Huzur</h2>
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
                src="https://universitev.com/front/companies_media/konya-meram-kafe-meram-huzur/478631662230674/20220903214434-478631662230674-media-1920x1309.webp"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.meram.bel.tr/upload/medya/MRM_4708.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/21/f1/82/16/kafe-meram-huzur.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.konhaber.com/sahifeler/upload/2021/08/22/1629628836.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://kafemeram.com/upload/subegaleri/kafemeram-287a7d7dd69a173fdb4bbf15ac79ae84.jpg"
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

      <h3>Açıklama</h3> <br />
    
      <p style={{ fontSize: "20px" }}>Kafe Meram Huzur, Konya'nın Meram ilçesinde bulunan bir kafedir. Şehir merkezine yakın bir konumda bulunan kafe, sakin ve huzurlu bir atmosfere sahiptir. </p><br />

      <p style={{ fontSize: "20px" }}>Kafede kahvaltı, öğle yemeği ve akşam yemeği seçenekleri sunulmaktadır. Menüsünde serpme kahvaltı, tost, sandviç, salata, makarna, pizza, gözleme ve hamburger gibi lezzetler yer almaktadır. Kafenin ayrıca tatlı ve içecek menüsü de oldukça zengindir.</p> <br />

      <p style={{ fontSize: "20px" }}>Kafe Meram Huzur, geniş ve ferah bir alana sahiptir. Kafenin iç mekanında otantik bir dekorasyon kullanılmıştır. Kafenin ayrıca bir de bahçesi bulunmaktadır. Bahçe, Konya'nın eşsiz manzarasını sunmaktadır.</p> <br />

      <p style={{ fontSize: "20px" }}>Kafe Meram Huzur, ailenizle veya arkadaşlarınızla keyifli bir vakit geçirebileceğiniz bir yerdir. Kafenin lezzetli yemekleri, sakin atmosferi ve Konya'nın eşsiz manzarası ile unutulmaz bir deneyim yaşayabilirsiniz.</p><br />
      

      <div>
        <a
          href="https://www.google.com/maps?q=Kafe+Meram+Huzur&source=lmns&entry=mt&bih=703&biw=1536&hl=tr"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  )
}

export default Huzur