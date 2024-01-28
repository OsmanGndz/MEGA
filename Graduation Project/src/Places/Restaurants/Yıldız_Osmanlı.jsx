import React from 'react'

function Yıldız_Osmanlı() {
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
      <h2>Osmanlı Kahvehanesi Yıldız Köşkü</h2>
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
              src="https://media-cdn.tripadvisor.com/media/photo-s/27/b8/fa/17/150-yillik-tarihi-mekanda.jpg"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://10619-2.s.cdn12.com/rests/original/107_536308709.jpg"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://10619-2.s.cdn12.com/rests/original/107_536490407.jpg"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://10619-2.s.cdn12.com/rests/original/107_536490401.jpg"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhb0w6UoRRmOz7AvyNMhw9O3MnnPfYbrJEEhLTL_uiN9ztsv9IyqI_8Fbq_m4ZITv4W8&usqp=CAU"
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
  
    <p style={{ fontSize: "20px" }}>Konya Meram Osmanlı Kahvehanesi Yıldız Köşkü, Konya'nın Meram ilçesinde bulunan bir kahvehanedir. Tarihi bir binada yer alan kahvehanesi, otantik atmosferi ve geleneksel Türk kahvesi ile misafirlerini cezbetmektedir. </p><br />

    <p style={{ fontSize: "20px" }}>Kahvehanenin menüsünde Türk kahvesi, çay, nargile ve çeşitli atıştırmalıklar yer almaktadır. Kahvenin ayrıca bir de bahçesi bulunmaktadır. Bahçe, Konya'nın eşsiz manzarasını sunmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Konya Meram Osmanlı Kahvehanesi Yıldız Köşkü, ailenizle veya arkadaşlarınızla keyifli bir vakit geçirebileceğiniz bir yerdir. Kahvenin lezzetli kahvesi, tarihi atmosferi ve Konya'nın eşsiz manzarası ile unutulmaz bir deneyim yaşayabilirsiniz.</p> <br />
    

    <div>
      <a
        href="https://www.google.com/maps?q=Osmanl%C4%B1+Kahvehanesi+Y%C4%B1ld%C4%B1z+K%C3%B6%C5%9Fk%C3%BC&source=lmns&entry=mt&bih=703&biw=1536&hl=tr"
        style={{ fontSize: "20px" }}
      >
        Konuma Gitmek İçin Tıklayın
      </a>
    </div>
    <br />
  </>
  )
}

export default Yıldız_Osmanlı