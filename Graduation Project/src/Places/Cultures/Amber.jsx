import React from 'react'

function Amber() {
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
            <h2>Amber Reis Camii</h2>
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
                    src="https://tarihgezisi.com/wp-content/uploads/2020/09/3-38.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0c/80/7b/78/amber-reis-camii-1911.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://fastly.4sqi.net/img/general/600x600/47008352_iP4p4oPuSib0dfB_qfzrvQKjgOSw6QKffRzLEKB2I2s.jpg"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipPjz-_RbuYubr80Gld1jjxWid8BovqWn_KhEq45"
                    className="d-block mx-auto img-fluid"
                    style={{ objectFit: "cover", height: "550px" }}
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.pinimg.com/originals/0e/22/c0/0e22c049d92ab31c710c80ee9530bfbf.jpg"
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
          Anıt alanında bulunan cami Osmanlıların son dönemlerine aittir. 1911 yılında Arifi Paşa’nın Konya valiliği sırasında aynı adlı eski caminin yerine yaptırılmıştır. Kesme taş ile inşa edilen eser dikdörtgen planlı olup üzeri kırma beşik çatı ile kaplanmıştır. Yapıya kuzeyde, birkaç basamaklı merdivenle çıkılan son cemaat yerinden geçilir. Son cemaat yeri cepheye göre daha dar fakat daha yüksek yapılmıştır. Harime geçit veren kapı oldukça sade tutulmuştur. Harimin kuzeyi sanki ikinci bir son cemaat yeri biçiminde tasarlanmış, ortada yer alan iki büyük ayak enine olarak birbirlerine ve doğu ve batı duvarlara bitişik ayaklara sivri kemerlerle bağlanmıştır. Harimin kuzey duvarı ile bu ayakların arasında kalan bölüm mahfil olarak tasarlanmıştır. Harimin ortasında poligonal formlu karşılıklı olarak dört adet metal ayak bulunmaktadır. Ayaklar kuzey-güney yönünde uzanan kirişleri taşımaktadır. Tavan tahtalar ile geometrik kompozisyonlar oluşturacak şekilde tasarlanmıştır. Güney duvarı ortasındaki mihrabı çini kaplamalıdır. Farklı renk ve Özellikteki çinilerin kullanıldığı mihrapta, kenar bordürün alt kısmında geometrik, diğer kısımlarda ise bitkisel ve yazı süslemeye yer verilmiştir. Mihrap nişi ve kavsarası ise lacivert renkli çinilerle kaplanmıştır.
          </p>
          <div>
            <a
              href="https://www.google.com/maps?q=Amber+Reis+Camii&um=1&ie=UTF-8"
              style={{ fontSize: "20px" }}
            >
              Konuma Gitmek İçin Tıklayın
            </a>
          </div>
          <br />
        </>
      )
}

export default Amber