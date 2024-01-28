import React from "react";

function Camlibel() {
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
        <h2>Çamlıbel Konya Mutfağı</h2>
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
                src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/17/kynk/cml_b_7.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/17/kynk/cml_b_6.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://karamangundemcom.teimg.com/karamangundem-com/images/haberler/2017/05/meram_camlibelde_konya_mutfagi_ve_kafem_hizmete_basladi.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://sepet.konya.bel.tr/kbb/kbb/bldfoto/17/kynk/cml_b_12.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://turistdostuapi.konya.bel.tr//Upload/c7083075-fded-4bc7-9972-c98f233cf52-0550432a-b18c-4-4904.jpg"
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
        Konya mutfağı, Anadolu mutfağının en zengin ve en çeşitli mutfaklarından
        biridir. Tarihi boyunca birçok medeniyete ev sahipliği yapan Konya, bu
        medeniyetlerin mutfaklarından da etkilenmiştir. Konya mutfağı, Selçuklu,
        Mevlana ve Osmanlı mutfağının izlerini taşır. Konya mutfağının en önemli
        özelliklerinden biri, etin yoğun olarak kullanılmasıdır. Konya'da etli
        ekmek, fırın kebabı, tirit, etli nohutlu pilav, etli bamya çorbası gibi
        birçok et yemeği yapılmaktadır. Konya mutfağında kullanılan etler
        genellikle kuzu ve dana etidir. Konya mutfağının bir diğer önemli
        özelliği de, tahılların ve bakliyatların yoğun olarak kullanılmasıdır.
        Konya'da ekmek, bulgur, pirinç, nohut, mercimek ve fasulye gibi birçok
        tahıl ve bakliyat yemeği yapılmaktadır. Konya mutfağının en bilinen
        tahıl ve bakliyat yemekleri arasında etli nohutlu pilav, bulgur pilavı,
        nohutlu köfte ve mercimek köftesi yer alır. Konya mutfağında sebzeler de
        önemli bir yer tutar. Konya'da bamya, patlıcan, kabak, domates, biber ve
        soğan gibi birçok sebze yemeği yapılmaktadır. Konya mutfağının en
        bilinen sebze yemekleri arasında bamya çorbası, patlıcan kebabı, kabak
        kalye, fırında domates ve biber dolması yer alır. Konya mutfağı,
        tatlıları ile de meşhurdur. Konya'da Mevlana şekeri, fırın sütlaç,
        höşmerim, aşure ve su muhallebisi gibi birçok tatlı yapılmaktadır. Konya
        mutfağının en bilinen tatlısı Mevlana şekeridir. Mevlana şekeri, badem,
        ceviz ve üzüm ile yapılan bir tatlıdır.
      </p>
      <div>
        <a
          href="https://www.google.com/maps/place/Kafem+%C3%87aml%C4%B1bel/@37.853216,32.4171651,17z/data=!3m1!4b1!4m6!3m5!1s0x14d086c95fb8750b:0xff7b60f9eccb4be2!8m2!3d37.853216!4d32.41974!16s%2Fg%2F11c7w091v0?hl=tr&entry=ttu"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  );
}

export default Camlibel;
