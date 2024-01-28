import React from 'react'

function Aydın() {
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
      <h2>Aydın Çavuş Restoranı</h2>
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
              src="https://cdn.konyabakis.com/news/58259.jpg"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOTGORU-Nm6_sIRitbsjwk8gTGYsO4zpwuQfcU=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPYEXPzQsqJ6YeI4g_9KoNv_Bpkc1IB1v0myWbp=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMktyo8rHp68-Z3KPcYFOYyf95L2lImhD2p32aD=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNdrGu8VtESPtYump9Q4hLJoQFqcbAgnW_SfxHA=s1360-w1360-h1020"
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
  
    <p style={{ fontSize: "20px" }}>Meram Aydın Çavuş Restaurant, Konya'nın Meram ilçesinde bulunan bir restorandır. Konya mutfağının en lezzetli örneklerini sunan restoran, tarihi ve otantik atmosferi ile de misafirlerini büyülemektedir. </p><br />

    <p style={{ fontSize: "20px" }}>Restoranın menüsünde etli ekmek, fırın kebabı, tirit, etli nohutlu pilav, bamya çorbası ve Mevlana şekeri gibi Konya mutfağının en bilinen lezzetleri yer almaktadır. Restoranın tüm yemekleri taze ve kaliteli malzemelerle yapılmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Aydın Çavuş Restaurant, geniş ve ferah bir salona sahiptir. Restoranın salonu, tarihi Konya evlerinin mimarisine göre tasarlanmıştır. Salondaki duvarlarda Konya'nın tarihi ve kültürel değerlerini anlatan tablolar yer almaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Restoranın ayrıca bir de bahçesi bulunmaktadır. Bahçe, Konya'nın eşsiz manzarasını sunmaktadır. Bahçede çocuklar için oyun parkı da bulunmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Aydın Çavuş Restaurant, ailenizle veya arkadaşlarınızla keyifli bir akşam yemeği yiyebileceğiniz bir yerdir. Restoranın lezzetli yemekleri, tarihi atmosferi ve Konya'nın eşsiz manzarası ile unutulmaz bir akşam geçirebilirsiniz.</p> <br />
    

    <div>
      <a
        href="https://www.google.com/maps?q=Ayd%C4%B1n+%C3%87avu%C5%9F+Restaurant&um=1&ie=UTF-8"
        style={{ fontSize: "20px" }}
      >
        Konuma Gitmek İçin Tıklayın
      </a>
    </div>
    <br />
  </>
  )
}

export default Aydın