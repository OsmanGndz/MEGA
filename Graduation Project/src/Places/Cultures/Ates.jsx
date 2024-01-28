import React from 'react'
import "./des.css"
function Ates() {
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
        <h2>Ates Baz-i Veli Turbesi</h2>
      </div>
      
      <br />

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
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/db/31/20/ates-baz-i-veli-turbesi.jpg?w=1200&h=-1&s=1" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.gokonya.com/other/atesbazi-veli-turbesi-3.jpg" className="d-block mx-auto img-fluid" style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.gokonya.com/other/atesbazi-veli-turbesi-5.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mozartcultures.com/wp-content/uploads/2022/02/20150506_090905.jpg" className="d-block mx-auto img-fluid" 
              style={{ objectFit: "cover", height: "550px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://d.merhabahaber.com/news/156599.jpg" className="d-block mx-auto img-fluid" 
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
          
        </div> <br />
        <h3>Açıklama</h3>
      <p style={{ fontSize: "20px" }}>
      Konya’da Yeni Meram yolu üzerinde, halk arasında “Âşıklar Semti” olarak bilinen Aşkan yakınlarında, Ateşbaz Veli Efendi Türbesi adıyla meşhur bir ziyaretgâh bulunur. Şöhreti ülke sınırları aşmış olan Ateşbaz Veli’nin türbesi, Hz. Mevlânâ Dergâhı’ndan yaklaşık 10 kilometre kadar uzaklıkta bulunur. Ateşbaz Veli Hazretleri, Hz. Mevlânâ’nın aşçısı olup onun sır dostlarındandır. Türbesi, Eski Eserler ve Anıtlar Yüksek Kurulu’nun kararıyla 1982 yılında tescil edilmiştir. Ateşbaz Veli’nin hayatı ve Hz. Mevlânâ ile ilişkisi menkıbelere dayanmakta ve bu konuda çok çeşitli rivayetler anlatılmaktadır. Bilinenlere göre, Ateşbaz Veli’nin adı Şemseddin Yusuf, babasının adı ise İzzeddin’dir. Menkıbelerde keramet sahibi bir insan olduğu sıkça dile getirilmekte ve Anadolu’ya gelişi, Hz. Mevlânâ’ya talebe oluşu hakkında farklı görüşler ortaya atılmaktadır. Rivayetlerden birine göre Şemseddin Yusuf, büyük göç denilen yolculukta Hz. Mevlânâ'nın babası Bahaeddin Veled ile Horasan'dan Karaman’a, oradan da Konya’ya gelmiştir. Bu konudaki rivayete göre, Ateşbaz Veli, Hz. Mevlânâ’nın babasına, kendisine ve oğlu olan Sultan Veled’e hizmet ettikten sonra yaklaşık yüz yaşındayken 1285 yılında vefat etmiştir.
      </p>
      <div>
      <a href="https://www.google.com/maps?q=Ates+Baz-i+Veli+Turbesi.&source=lmns&entry=mt&bih=703&biw=1536&hl=tr" style={{fontSize:"20px"}}>Konuma Gitmek İçin Tıklayın</a>
      </div>
      </div><br />
    </>
  )
}

export default Ates