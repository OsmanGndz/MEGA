import React from "react";

function Footer() {
  return (
    <footer className="site-footer" style={{background: "linear-gradient(to right, #61ed74, #068565)"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br />
            <h3>Gezilecek Yerler</h3>
            <ul className="footer-links">
              <li>
                <a href="kapu-camii">Kapu Camii</a>
              </li>
              <li>
                <a href="/sahip-ata-muzesi">Sahip Ata Müzesi</a>
              </li>
              <li>
                <a href="80-binde-devr-i-alem-parki">80 Binde Devr-i Alem Parkı</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <br />
            <h3>Restoranlar</h3>
            <ul className="footer-links">
              <li>
                <a href="/aydin">Aydın Çavuş Restoranı</a>
              </li>
              <li>
                <a href="/kirkikindi">Kırki̇ki̇ndi̇ Restoran Millet Bahçesi</a>
              </li>
              <li>
                <a href="camlibel">Çamlıbel Konya Mutfağı</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <br />
            <h3>İletişim</h3>
            <p>
              Meram, Konya
              <br />
              Türkiye
            </p>
            <p>
              Telefon: 123-456-7890
              <br />
              Email: info@konyameram.com
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p>&copy; 2024 Konya Meram Rehberi - Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
