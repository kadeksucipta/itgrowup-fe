import React from "react";
import "./Navbar.css"
import logoItGrow from "../../assets/logo/logo_header.png"

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <img className="logo-it-grow" src={logoItGrow} alt="" />
        <div className="menu-navbar">
          <a className="item-navbar" href="">Home</a>
          <a className="item-navbar" href="">Layanan</a>
          <a className="item-navbar" href="">Paket</a>
          <a className="btn-item-navbar" href="">Konsultasi Gratis !</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
