import React from "react";
import "./FloatCta.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const FloatCta = () => {
  return (
    <React.Fragment>
        <p className="label-cta">Bantuan <b>cepat</b></p>
      <a href="" className="float" target="_blank">
      <FontAwesomeIcon className="my-float" icon={faMessage} />
      </a>
    </React.Fragment>
  );
};

export default FloatCta;