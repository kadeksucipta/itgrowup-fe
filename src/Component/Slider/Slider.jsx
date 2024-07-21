import React from "react";

import "./Slider.css";

import carousel1 from "../../assets/carousel/carousel_desktop_1.png";
import carousel2 from "../../assets/carousel/carousel_desktop_2.png";
import carousel3 from "../../assets/carousel/carousel_desktop_3.png";
import carousel4 from "../../assets/carousel/carousel_desktop_4.png";

import carouselMobile_1 from "../../assets/carousel/carousel_mobile_1.png";
import carouselMobile_2 from "../../assets/carousel/carousel_mobile_2.png";
import carouselMobile_3 from "../../assets/carousel/carousel_mobile_3.png";
import carouselMobile_4 from "../../assets/carousel/carousel_mobile_4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderTop = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "button-slider",
  };

  return (
    <React.Fragment>
      <div className="slider-top" style={{ background: "" }}>
        <Slider {...settings}>
          <div>
            <img className="img-desktop" src={carousel1} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carousel2} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carousel3} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carousel4} alt="" />
          </div>
        </Slider>
      </div>

      <div className="slider-top-2" style={{ background: "" }}>
        <Slider {...settings}>
          <div>
            <img className="img-desktop" src={carouselMobile_1} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carouselMobile_2} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carouselMobile_3} alt="" />
          </div>
          <div>
            <img className="img-desktop" src={carouselMobile_4} alt="" />
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};
export default SliderTop;
