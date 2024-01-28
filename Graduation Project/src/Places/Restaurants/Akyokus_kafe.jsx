import React from 'react'

function Akyokus_kafe() {
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
      <h2>Kafem Akyokuş Park</h2>
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
              src="https://lh3.googleusercontent.com/p/AF1QipPaKkBkhaRHjmi0mlB7AMyyD5FkwtHFvYOe20Cc=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMLzQxsGrTr7N0kVjYjgcpbJAFaaEgNU-o8btna=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNJwxQ3VGC2p1sbzTqJpW6IUX-LCVGuU9MFD00a=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNKI7B1JrUYy7i6LGyo7lIFM8hN58yTIDbPkTRC=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/09/57/a6/f3/akyokus-park-konya-mutfagi.jpg"
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
  
    <p style={{ fontSize: "20px" }}>Meram Kafem Akyokuş Park, Konya'nın Meram ilçesinde bulunan bir kafedir. Akyokuş Parkı'nın yanında yer alan kafe, modern atmosferi ve lezzetli menüsü ile misafirlerini cezbetmektedir. </p><br />

    <p style={{ fontSize: "20px" }}>Kafede kahvaltı, öğle yemeği ve akşam yemeği seçenekleri sunulmaktadır. Menüsünde serpme kahvaltı, tost, sandviç, salata, makarna, pizza, gözleme ve hamburger gibi lezzetler yer almaktadır. Kafenin ayrıca tatlı ve içecek menüsü de oldukça zengindir.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Kafem Akyokuş Park, geniş ve ferah bir alana sahiptir. Kafenin iç mekanında modern bir dekorasyon kullanılmıştır. Duvarlarda Akyokuş Parkı'nın manzarasını gösteren fotoğraflar ve Konya'nın tarihi ve kültürel değerlerini anlatan tablolar yer almaktadır. Kafenin ayrıca bir de bahçesi bulunmaktadır. Bahçe, Akyokuş Parkı'nın eşsiz manzarasını sunmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Kafem Akyokuş Park, ailenizle veya arkadaşlarınızla keyifli bir vakit geçirebileceğiniz bir yerdir. Kafenin lezzetli yemekleri, modern atmosferi ve Akyokuş Parkı'nın eşsiz manzarası ile unutulmaz bir deneyim yaşayabilirsiniz.</p> <br />
    

    <div>
      <a
        href="https://www.google.com/maps?q=Kafem+Akyoku%C5%9F+Park&source=lmns&entry=mt&bih=703&biw=1536&hl=tr"
        style={{ fontSize: "20px" }}
      >
        Konuma Gitmek İçin Tıklayın
      </a>
    </div>
    <br />
  </>
  )
}

export default Akyokus_kafe