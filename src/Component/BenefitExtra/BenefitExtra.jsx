import React from "react";
import modelBenefit from "../../assets/hanya_di_kami/model_hanya_di_kami_itgrow.png";
import "./BenefitExtra.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BenefitExtra = () => {
  return (
    <React.Fragment>
      <div className="parent-benefit-extra">
        <img className="img-model-hanya-dikami" src={modelBenefit} alt="" />
        <div className="parent-text-benefit-extra">
          <h1 className="title-benefit-extra"><span className="title-benefit-extra-2">Hanya</span> di Kami !</h1>
          <p className="paragraf-benefit-extra">
            Banyak Pelayanan dan Benefit Extra yang anda dapatkan
          </p>
          <li className="list-benefit-extra"><FontAwesomeIcon icon={faCheck} /> Gratis Pendaftaran Website ke Google</li>
          <li className="list-benefit-extra"><FontAwesomeIcon icon={faCheck} /> Gratis Pengiklanan Website Selama 3 hari</li>
          <li className="list-benefit-extra"><FontAwesomeIcon icon={faCheck} /> Gratis SEO Freindly</li>
          <li className="list-benefit-extra"><FontAwesomeIcon icon={faCheck} /> Laporan Pengujung Website</li>
        <a href="#"><button className="btn-benefit-extra">ORDER DISINI !</button></a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BenefitExtra;
