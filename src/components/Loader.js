import React from "react";
import PokeBall from "../images/Pokeball.png";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loading_div">
      <img className="loading" src={PokeBall} alt="no_img" />
      <p className="loading_text">Loading ...</p>
    </div>
  );
};

export default Loader;
