import React from "react";
import "./des.css"
function Sahip() {
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
        <h2>Sahip Ata Vakıf Müzesi</h2>
      </div>
      

      <div>
        <h3>Fotoğraflar</h3><br />
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
              <img src="https://cdn.gokonya.com/other/bka1631.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.aydinlik.com.tr/storage/files/images/2023/03/31/sahip-ata-GOt9.jpg" className="d-block mx-auto img-fluid" style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://tarihgezisi.com/wp-content/uploads/2020/09/16-27.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/564x/e9/cc/1d/e9cc1d336b903080746d417b592a8547.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.yollardan.com/wp-content/uploads/2021/01/Konya-Sahip-Ata-Kulliyesi-fotograflari-turbe-icindeki-sandukalar.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
        </div>
      </div><br />
      <h3>Açıklama</h3>
      <p style={{ fontSize: "20px" }}>
        Anadolu Selçuklu Devleti vezirlerinden Sâhib Atâ Fahreddin Ali
        tarafından 1277 yılında yaptırılan külliyenin mimarı Keluk b.
        Abdullah’tır. Külliye yerleşim planı olarak, kuzeyde câmi, câminin
        mihrap duvarına bitişik inşâ edilmiş içinde Fahreddin Ali, eşi ve
        çocuklarının kabirleri bulunan türbe, türbenin güney duvarı bitişiğinde
        hânkâh, hemen yol aşırı karşısında çifte hamam yer almaktadır. Câmi,
        kuzeyden bir portal girişine sahiptir. Portalın sağ ve solunda altlı
        üstlü ikişer hücre bulunmakta, alttakiler sebil vazifesi görmektedir.
        Giriş kapısını çevreleyen pervazın üzerinde Besmele ve Fâtiha suresi
        yazılıdır. Külliyenin hânkâh (dergâh) kısmı Vakıflar Bölge Müdürlüğü
        tarafından Sâhib Atâ Vakıf Müzesi olarak düzenlenmiş ve ziyarete
        açılmıştır.
      </p>
      <div>
      <a href="https://www.google.com/maps/place/Sahip+Ata+Vak%C4%B1f+M%C3%BCzesi/@37.867578,32.4917671,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08500d04f5159:0xb0f9dbde9e2e3e5b!8m2!3d37.867578!4d32.494342!16s%2Fg%2F11gbp50r17?hl=tr&entry=ttu" style={{fontSize:"20px"}}>Konuma Gitmek İçin Tıklayın</a>
      </div>
      <br />
      

    </>
  );
}

export default Sahip;
