import React from 'react';
import ctaBottom from "../../assets/cta_bottom/cta_bottom.png"
import "./CtaBottom.css"

const CtaBottom = () => {
  return (
    <React.Fragment>
      <img className='img-cta-bottom' src={ctaBottom} alt="" />
    </React.Fragment>
  );
}

export default CtaBottom;
