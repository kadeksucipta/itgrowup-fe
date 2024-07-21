import { faCube, faGlobe, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BottomBar.css"
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const BottomBar = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div id="bottom-bar">
          <div className="bottom-bar-element">
            <FontAwesomeIcon className="icon-home-bottombar" icon={faHouse} />
            <br />
            <span className="text-bottombar">Home</span>
          </div>
          <div className="bottom-bar-element">
            <FontAwesomeIcon className="icon-home-bottombar" icon={faGlobe} />
            <br />
            <span className="text-bottombar">Layanan</span>
          </div>
          <div className="bottom-bar-element">
            <FontAwesomeIcon className="icon-home-bottombar-about" icon={faCube} />
            <br />
            <span className="text-bottombar">Paket</span>
          </div>
          <div className="bottom-bar-element">
            <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
              <FontAwesomeIcon className="icon-home-bottombar" icon={faUser} />
              <br />
              <span className="text-bottombar">Konsultasi</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomBar;
