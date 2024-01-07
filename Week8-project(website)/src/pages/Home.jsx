import React, { useEffect, useState } from "react";
import { ProductCards, Products } from "../products";
import "../App.css";

function Home({ user }) {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1>DayStore'a Hoşgeldiniz</h1>
          <h5>İhtiyacınız olan ürünleri sepetinize ekleyip alabilirsiniz</h5>
        </div>
      </div>

      <Products user={user} />
    </>
  );
}

export default Home;
