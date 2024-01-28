import React from "react";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Sahip from "./Places/Cultures/Sahip";
import Ates from "./Places/Cultures/Ates";
import Kapu from "./Places/Cultures/Kapu";
import Culture from "./Page/Culture";
import Restaurant from "./Page/Restaurant";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Seksen_Bin from "./Places/Cultures/Seksen_Bin";
import Akyokus from "./Places/Cultures/Akyokus";
import Tavus from "./Places/Cultures/Tavus";
import Amber from "./Places/Cultures/Amber";
import Etnografia from "./Places/Cultures/Etnografia";
import Camlibel from "./Places/Restaurants/Camlibel";
import Kırkİkindi from "./Places/Restaurants/Kırkİkindi";
import Huzur from "./Places/Restaurants/Huzur";
import TavusKafem from "./Places/Restaurants/TavusKafem";
import Yıldız_Osmanlı from "./Places/Restaurants/Yıldız_Osmanlı";
import Evliya from "./Places/Restaurants/Evliya";
import Aydın from "./Places/Restaurants/Aydın";
import Akyokus_kafe from "./Places/Restaurants/Akyokus_kafe";

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/rest" element={<Restaurant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sahip-ata-muzesi" element={<Sahip />} />
        <Route path="/ates-bazi-veli-turbesi" element={<Ates />} />
        <Route path="/kapu-camii" element={<Kapu />} />
        <Route path="/80-binde-devr-i-alem-parki" element={<Seksen_Bin />} />
        <Route path="/akyokus" element={<Akyokus />} />
        <Route path="/tavus" element={<Tavus />} />
        <Route path="/amber-reis-camii"element={<Amber />} />
        <Route path="/etnografia-müzesi"element={<Etnografia />} />
        <Route path="/camlibel"element={<Camlibel />} />
        <Route path="/kirkikindi"element={<Kırkİkindi />} />
        <Route path="/huzur-kafe"element={<Huzur />} />
        <Route path="/tavus-kafe"element={<TavusKafem />} />
        <Route path="/yıldız"element={<Yıldız_Osmanlı />} />
        <Route path="/evliya"element={<Evliya />} />
        <Route path="/aydin"element={<Aydın />} />
        <Route path="/akyokus-kafe"element={<Akyokus_kafe />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
