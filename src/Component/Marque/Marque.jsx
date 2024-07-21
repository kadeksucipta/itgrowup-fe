import React from "react";
import "./Marque.css";
import logoTek from "../../assets/teknologi/bahasa_pemrograman.png";

const Marque = () => {
  return (
    <React.Fragment>
      <div className="container-asal-sekolah">
        <div className="parent-title-asal-sekolah">
          <h1 className="title-asal-sekolah">
            <span className="title-asal-sekolah-2">Teknologi</span> yang Kami
            gunakan
          </h1>
          <div className="parent-card-asalsekolah">
            <div className="marquee">
              <div className="track">
                <div className="content">
                  <img className="logo-school" src={logoTek} alt="" />
                  <img className="logo-school" src={logoTek} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Marque;
