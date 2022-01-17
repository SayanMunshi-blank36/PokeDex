import React from "react";
import Pokeball from "../images/Pokeball.png";
import "../css/media_queries.css";
import "../css/header.css";

export const Header = () => {
  return (
    <div className="header_section">
      <img className="header_pokeball" src={Pokeball} alt="" />
      <h1 className="heading">Pokedex</h1>
    </div>
  );
};
