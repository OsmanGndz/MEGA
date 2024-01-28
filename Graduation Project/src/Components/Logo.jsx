import React from "react";
import Navbar from "./Navbar";

function Logo() {
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
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          fontSize: "40px",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>Gez Konya'yı Gör Meram'ı</h1>
        <br />
        <div className="container w-75">
        <p style={{ fontSize: "20px", textAlign:"center" }}>
        <strong>Konya</strong>, Türkiye'nin kalbinde yer alan tarihi zenginlikleriyle ünlü bir şehirdir. Şehrin <strong> Meram ilçesi</strong>, bu zenginliklerin en yoğun yaşandığı bölgelerden biridir. <strong>Meram</strong>, sadece tarihi ve mimari yapılarıyla değil, aynı zamanda enfes lezzetleri sunan restoran ve kafeleriyle de dikkat çeker.
        </p>
        </div>
      </div>
    </>
  );
}

export default Logo;
