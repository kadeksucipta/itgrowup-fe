import React from "react";
import "./Homepage.css";
import Navbar from "../Component/Navbar/Navbar";
import Layanan from "../Component/Layanan/Layanan";
import Paket from "../Component/Paket/Paket";
import CtaBottom from "../Component/CtaBottom/CtaBottom";
import Footer from "../Component/Footer/Footer";
import FloatCta from "../Component/FloatCta/FloatCta";
import Faq from "../Component/Faq/Faq";
import Keunggulan from "../Component/Keunggulan/Keunggulan";
import BenefitExtra from "../Component/BenefitExtra/BenefitExtra";
import Marque from "../Component/Marque/Marque";
import SliderTop from "../Component/Slider/Slider";
import BottomBar from "../Component/BottomBar/BottomBar";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <SliderTop />
        <Layanan />
        <Paket />
        <Keunggulan />
        <BenefitExtra />
        <Faq />
        <Marque/>
        <CtaBottom />
      </div>
      <FloatCta />
      <BottomBar />
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
