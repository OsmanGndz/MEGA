import React from 'react'

function Tavus() {
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
        <h2>Şeyh Tavusbaba Camii ve Türbesi</h2>
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
                src="https://cdn.konyaninsesi.com.tr/gallery/2023/09/1/%C5%9EEYH%20TAVUSBABA%20CAM%C4%B0%C4%B0%20VE%20T%C3%9CRBES%C4%B0.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://konyakultur.gov.tr/images/uploads/images/Meram-ba__lari.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.gokonya.com/other/bka1955.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.gokonya.com/other/tavusbaba-turbesi-1.jpg"
                className="d-block mx-auto img-fluid"
                style={{ objectFit: "cover", height: "550px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/proxy/p82t9-4Mq9zD4xk7-P9cmh-O0-wv0iGj-cP0xIqDrTVBJPr-YQkqcvFyvYiZLntj23w_KU1E1mKAPvPLIkni8aOoYb6b2k_hsVtYqrYx82OTgLwzsM_CRNO2DNs7eYBCpy4n-_0OdXoPl7SVbiX-LNUTZdOvswFauqAb8A"
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
      Konya'da Hz. Mevlânâ, Şems-i Tebrizi ve Şeyh Sadreddin Konevî türbelerinden sonra en fazla ziyaret edilen yerlerden biri de Meram'da bulunan Tavus Baba Türbesi'dir. Tavus Baba, Meram Çayı’na hâkim bir tepe üzerinde, Meram bağlarının yeşillikleri arasında sade, küçük ve mütevazı türbesinde asırlardır yatmaktadır. Uzun yıllardır gizemini koruyan Tavus Baba hakkında çeşitli rivayetler anlatılır. Her gün yüzlerce insan tarafından ziyaret edilen bu zatın kim olduğu, cinsiyeti ve hangi devirde yaşadığı hakkındaki rivayetler farklıllık gösterir. Türbede bulunan mermer kitabede Tavus Mehmet El-Hindi yazmakta, ancak doğum ve vefat tarihleri bilinmemektedir. Birkaç araştırmacıya göre memleketi Hindistan olan Tavus Baba, Selçuklu sultanlarından Rükneddin Süleyman ve Alâeddin Keykubat dönemlerinde Konya’da yaşamış Şeyh Tavus-ı Hindi adında bir evliyadır. Rivayete göre, Selçuklu sultanlarının kültür adamları ile tasavvuf erbabına gösterdikleri hürmetten dolayı Hindistan’dan uzun ve zahmetli bir yolculuk sonrasında gelip Konya’ya yerleşmiştir. Bu rivayetlerin aksine Ahmet Eflaki’nin “Ariflerin Menkıbeleri” adlı eserinde bu konuda ilginç bir hikâye anlatılır. Bu hikâyeden kaynaklı olmak üzere, halk arasında Tavus Baba namıyla meşhur kişi Konya’nın en büyük kadın evliyalarından biri olduğu anlatılır. Bu kadın tasavvuf ilmine sahip, ilim ve keramet sahibi tayy-i mekânla, dünya ve ötelere vakıf, Hz. Mevlânâ’nın özel olarak yetiştirdiği güzel bir insan olduğu rivayet edilir. Oldukça gizemli hikâyeleri nedeniyle Tavus Baba’nın Türbesi bilhassa yaz aylarında çokça ziyaret edilen yerlerin başında gelir.
      </p>
      <div>
        <a
          href="https://www.google.com/maps?q=%C5%9Eeyh+Tavusbaba+Camii+ve+T%C3%BCrbesi&bih=703&biw=1536&hl=tr&um=1&ie=UTF-8"
          style={{ fontSize: "20px" }}
        >
          Konuma Gitmek İçin Tıklayın
        </a>
      </div>
      <br />
    </>
  )
}

export default Tavus