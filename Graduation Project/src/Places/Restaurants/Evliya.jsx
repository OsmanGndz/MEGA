import React from 'react'

function Evliya() {
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
      <h2>Evliya Çelebi Kafem</h2>
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
              src="https://kafem.com.tr/assets/img/locations/evliya.png"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOGk0Kj83hK32OcD5l-dPWj-f1rFMXRRfjYWbtp=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNRTmtowpeUvDShGDMRo29LiA_gKvPaRvzQrhBC=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipO-x7vcVKBOBt7CID34KAvFUtfUuG7nHuiqCvwl=s1360-w1360-h1020"
              className="d-block mx-auto img-fluid"
              style={{ objectFit: "cover", height: "550px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNL4Mc54kNI1ekG-kJ1NJdKAuGSARGqDQ7IIPmw=s1360-w1360-h1020"
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
  
    <p style={{ fontSize: "20px" }}>Meram Kafem Evliya Çelebi, Konya'nın Meram ilçesinde bulunan bir kafedir. Evliya Çelebi Parkı'nın yanında yer alan kafe, modern atmosferi ve lezzetli menüsü ile misafirlerini cezbetmektedir. </p><br />

    <p style={{ fontSize: "20px" }}>Kahvehanenin menüsünde Türk kahvesi, çay, nargile ve çeşitli atıştırmalıklar yer almaktadır. Kahvenin ayrıca bir de bahçesi bulunmaktadır. Bahçe, Konya'nın eşsiz manzarasını sunmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Kafem Evliya Çelebi, geniş ve ferah bir alana sahiptir. Kafenin iç mekanında modern bir dekorasyon kullanılmıştır. Duvarlarda Evliya Çelebi'nin seyahatlerini anlatan resimler ve Konya'nın tarihi ve kültürel değerlerini anlatan tablolar yer almaktadır. Kafenin ayrıca bir de bahçesi bulunmaktadır. Bahçe, Evliya Çelebi Parkı'nın eşsiz manzarasını sunmaktadır.</p> <br />

    <p style={{ fontSize: "20px" }}>Meram Kafem Evliya Çelebi, ailenizle veya arkadaşlarınızla keyifli bir vakit geçirebileceğiniz bir yerdir. Kafenin lezzetli yemekleri, modern atmosferi ve Evliya Çelebi Parkı'nın eşsiz manzarası ile unutulmaz bir deneyim yaşayabilirsiniz.</p> <br />
    

    <div>
      <a
        href="https://www.google.com/maps/place/Kafem+Evliya+%C3%87elebi/@37.8652067,32.3787582,13z/data=!4m10!1m2!2m1!1sevliya+%C3%A7elebi+restoran%C4%B1!3m6!1s0x14d0842597fb0ab7:0xb0da0c6bd13f0781!8m2!3d37.8652038!4d32.4549751!15sChlldmxpeWEgw6dlbGViaSByZXN0b3JhbsSxWhsiGWV2bGl5YSDDp2VsZWJpIHJlc3RvcmFuxLGSAQRjYWZlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJEWnpSRWN5MW5SUkFC4AEA!16s%2Fg%2F11cnbms40_?entry=ttu"
        style={{ fontSize: "20px" }}
      >
        Konuma Gitmek İçin Tıklayın
      </a>
    </div>
    <br />
  </>
  )
}

export default Evliya