import React from "react";
import "./Paket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

const Paket = () => {
  return (
    <React.Fragment>
      <div className="super-parent-paket">
        <h1 className="title-paket">Pilihan Paket <span className="title-paket-2">Webiste Terbaik</span></h1>
        <p className="deskripsi-paket">
          Free Pengiklanan Website Selama 3 hari !
        </p>
        <div className="parent-paket">
          {/* PAKET 1 */}
          <div className="card-paket">
            <h2>Personal</h2>
            <div className="harga-dan-diskon">
              <strike>Rp1.500.000</strike>
              <button className="btn-diskon">Diskon 25%</button>
            </div>
            <h1>Rp.1.000.000</h1>
            <a className="btn-pilih-paket" href="">
              <button className="btn-pilih-paket">PILIH PAKET</button>
            </a>
            <div className="parent-rincian">
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Domain dan Hosting</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Google Index</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Menggunakan Bahasa Pemrograman Terkini (React & Node js)
                </span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Branding</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>1x Revisi Desain</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>2x Revisi Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3 - 7 Hari Pengerjaan</span>
              </li>
              <p className="other-rincian">Maintenance</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>1x Free edit/update Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Tambah Halaman Baru <b>Rp50.000</b>
                </span>
              </li>
              <p className="other-rincian">Features</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free SSL security</span>
              </li>
              <p className="other-rincian">Special</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-close" icon={faClose} />{" "}
                <span>-</span>
              </li>
            </div>
          </div>

          {/* PAKET 2 */}
          <div className="card-paket">
            <div className="parent-umkm">
            <h2>UMKM</h2>
            <button className="btn-paling-laris">Paling Laris</button>
            </div>
            <div className="harga-dan-diskon">
              <strike>Rp3.000.000</strike>
              <button className="btn-diskon">Diskon 25%</button>
            </div>
            <h1>Rp.2.500.000</h1>
            <a className="btn-pilih-paket" href="">
              <button className="btn-pilih-paket">PILIH PAKET</button>
            </a>
            <div className="parent-rincian">
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Domain dan Hosting</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Google Index</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free SEO freindly</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Menggunakan Bahasa Pemrograman Terkini (React & Node js)
                </span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Logo</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Favicon</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Desain UI/UX</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>1x Revisi Logo & Favicon</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>1x Revisi Desain UI/UX</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>2x Revisi Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Live Update selama pengerjaan</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>2 Minggu - 1 Bulan Pengerjaan</span>
              </li>
              <p className="other-rincian">Maintenance</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>2x Free edit/update Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Tambah Halaman Baru <b>Rp50.000</b>
                </span>
              </li>
              <p className="other-rincian">Features</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free SSL security</span>
              </li>
              <p className="other-rincian">Special</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3 Hari free pengiklanan Google Ads</span>
              </li>
            </div>
          </div>

          {/* PAKET 3 */}
          <div className="card-paket">
            <h2>Bisnis</h2>
            <div className="harga-dan-diskon">
              <strike>Rp3.500.000</strike>
              <button className="btn-diskon">Diskon 25%</button>
            </div>
            <h1>Rp.3.000.000</h1>
            <a className="btn-pilih-paket" href="">
              <button className="btn-pilih-paket">PILIH PAKET</button>
            </a>
            <div className="parent-rincian">
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Domain dan Hosting</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Google Index</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free SEO freindly</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Menggunakan Bahasa Pemrograman Terkini (React & Node js)
                </span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Logo</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Favicon</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Desain UI/UX</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3x Revisi Logo & Favicon</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3x Revisi Desain UI/UX</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>5x Revisi Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Live Update selama pengerjaan</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3 Minggu - 1,5 Bulan Pengerjaan</span>
              </li>
              <p className="other-rincian">Maintenance</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>2x Free edit/update Halaman</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>
                  Tambah Halaman Baru <b>Rp50.000</b>
                </span>
              </li>
              <p className="other-rincian">Features</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free SSL security</span>
              </li>
              <p className="other-rincian">Special</p>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>3 Hari free pengiklanan Google Ads</span>
              </li>
              <li className="bullet-paket">
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                <span>Free Admin Dashboard</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Paket;
