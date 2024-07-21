import React from "react";
import "./Layanan.css";
import jasaPembuatanWeb from "../../assets/layanan/app-development.png";
import jasaPengiklananWeb from "../../assets/layanan/bullhorn.png";
import jasaUIUX from "../../assets/layanan/website-layout.png";
import jasaBranding from "../../assets/layanan/brand.png";
import buttonLayanan from "../../assets/layanan/button_layanan.png";

const Layanan = () => {
  return (
    <React.Fragment>
      <div className="super-parent-layanan">
        <h1 className="parent-title-layanan">PILIHAN LAYANAN</h1>
        <div className="parent-card">
          <div className="card">
            <img className="img-layanan" src={jasaPembuatanWeb} alt="" />
            <h1 className="title-layanan">
              Jasa Pembuatan <br /> Website
            </h1>
            {/* <p className="paragraf-layanan">
              Buat Website Terbaik anda dengan layanan penuh dari ITGROWUP.
            </p> */}
            <img className="btn-layanan" src={buttonLayanan} alt="" />
          </div>

          <div className="card">
            <img className="img-layanan" src={jasaPengiklananWeb} alt="" />
            <h1 className="title-layanan">
              Jasa Iklan <br /> Website
            </h1>
            {/* <p className="paragraf-layanan">
              Iklankan Website Bisnis anda dengan Metode Google Ads Untuk
              memperoleh lebih banyak customer.
            </p> */}
            <img className="btn-layanan" src={buttonLayanan} alt="" />
          </div>

          <div className="card">
            <img className="img-layanan" src={jasaUIUX} alt="" />
            <h1 className="title-layanan">
              Jasa UI/UX <br /> Desain
            </h1>
            {/* <p className="paragraf-layanan">
              Buat Tampilan Webiste Bisnis Anda Menjadi lebih unik, menarik dan
              modern.
            </p> */}
            <img className="btn-layanan" src={buttonLayanan} alt="" />
          </div>

          <div className="card">
            <img className="img-layanan" src={jasaBranding} alt="" />
            <h1 className="title-layanan">
              Jasa Branding <br /> Produk
            </h1>
            {/* <p className="paragraf-layanan">
              Bangun Produk anda dengan Branding agar lebih mudah dikenali oleh
              customer - customer di seluruh Indonesia.
            </p> */}
            <img className="btn-layanan" src={buttonLayanan} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layanan;
