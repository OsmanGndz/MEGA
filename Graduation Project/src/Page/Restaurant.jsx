import React from 'react'
import Logo from '../Components/Logo'
import Culture_Cards from '../Culture_Cards'
import Restaurant_Cards from '../Restaurant_Cards'
function Restaurant() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: "30px", marginBottom: "60px"}}
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
        <div className="container w-75">
        <p style={{ fontSize: "20px", textAlign:"center" }}>
        <strong>Meram</strong>, sadece tarihi ve mimari zenginlikleriyle değil, aynı zamanda lezzet duraklarıyla da ünlüdür. Şehrin sokakları, yöresel tatlar ve ulusal mutfakların en özel lezzetlerini sunan restoranlarla doludur.
        </p>
        </div>
      </div> <br />
      <div className="container cont">
        <h2>Restoranlar</h2>
      </div>
       <br />
      <Restaurant_Cards />
    </>

  )
}

export default Restaurant