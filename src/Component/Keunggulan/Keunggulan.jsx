import React from "react";
import "./Keunggulan.css";
import desainKustom from "../../assets/keunggulan/desain_costom.png";
import seoFrendly from "../../assets/keunggulan/seo_friendly.png";
import kecepatanWeb from "../../assets/keunggulan/kecepatan_web.png";
import maintenance from "../../assets/keunggulan/maintenace.png";
import branding from "../../assets/keunggulan/brand_web.png";
import keamananWeb from "../../assets/keunggulan/keamanan.png";

const Keunggulan = () => {
  return (
    <React.Fragment>
      <div className="super-parent-keunggulan">
        <h1 className="title-keunggulan">Alasan Memilih Kami</h1>
        <p className="paragraf-keunggulan">Tentunya Banyak Benefit yang kami berikan untuk Anda</p>
        <div className="parent-keunggulan">
          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={desainKustom} alt="" />
            <h3 className="title-card-keunggulan">Desain Kustom & Responsif</h3>
            <p className="paragraf-card-keunggulan">
              Kami menyediakan desain website yang unik dan disesuaikan dengan
              kebutuhan spesifik bisnis Anda, memastikan tampilan yang menarik
              dan responsif di berbagai perangkat, baik desktop, tablet, maupun
              smartphone.
            </p>
          </div>
          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={seoFrendly} alt="" />
            <h3 className="title-card-keunggulan">SEO Friendly</h3>
            <p className="paragraf-card-keunggulan">
              Kami memastikan setiap website yang kami buat dioptimalkan untuk
              mesin pencari, membantu bisnis Anda meraih peringkat tinggi di
              hasil pencarian Google dan meningkatkan visibilitas online.
            </p>
          </div>
          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={kecepatanWeb} alt="" />
            <h3 className="title-card-keunggulan">
              Kecepatan & Kinerja yang Optimal
            </h3>
            <p className="paragraf-card-keunggulan">
              Kami mengoptimalkan kinerja website anda agar memiliki waktu
              loading yang cepat, memberikan pengalaman pengguna yang lebih baik
              dan membantu SEO.
            </p>
          </div>

          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={maintenance} alt="" />
            <h3 className="title-card-keunggulan">
              Dukungan Teknis & Pemeliharaan
            </h3>
            <p className="paragraf-card-keunggulan">
              Kami memberikan layanan dukungan teknis dan pemeliharaan rutin
              untuk memastikan website Anda selalu up-to-date, aman, dan
              berfungsi dengan baik.
            </p>
          </div>
          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={branding} alt="" />
            <h3 className="title-card-keunggulan">
              Branding & Identitas Visual
            </h3>
            <p className="paragraf-card-keunggulan">
              Kami membantu membangun dan memperkuat branding bisnis Anda
              melalui elemen visual yang konsisten dan menarik, meningkatkan
              pengenalan merek dan kredibilitas.
            </p>
          </div>
          <div className="card-keunggulan">
            <img className="icon-keunggulan" src={keamananWeb} alt="" />
            <h3 className="title-card-keunggulan">Keamanan yang Terjamin</h3>
            <p className="paragraf-card-keunggulan">
              Kami mengimplementasikan protokol keamanan terbaru untuk
              melindungi data pengguna dan mencegah serangan siber, termasuk
              SSL, enkripsi, dan firewall.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keunggulan;
