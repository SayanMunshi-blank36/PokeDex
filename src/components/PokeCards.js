import React, { useState } from "react";
import "../css/pokecard.css";
import PokeDetails from "./PokeDetails";
import "../css/media_queries.css";

const PokeCards = ({
  id,
  pokeName,
  type1,
  type2,
  pokeImg,
  pokeData,
  pokeSearchData,
}) => {
  const [clickedId, setClickedId] = useState(0);
  const [clickedName, setClickedName] = useState("");
  const [clickedType1, setClickedType1] = useState("");
  const [clickedType2, setClickedType2] = useState("");
  const [view, setView] = useState(false);

  const moreDetails = (e) => {
    // document
    //   .querySelector(".poke_details_modal")
    //   .classList.remove("modal_non_visible");

    let clicked = "";

    if (e.target.classList.contains("each_poke_card")) {
      clicked = e.target;
    } else if (
      e.target.classList.contains("id_no") ||
      e.target.classList.contains("name_and_type") ||
      e.target.classList.contains("img_container")
    ) {
      clicked = e.target.parentElement;
    } else {
      clicked = e.target.parentElement.parentElement;
    }

    setView(true);
    // console.log(clicked);
    // console.log(Number(clicked.children[0].innerHTML.slice(1))); // id
    setClickedId(Number(clicked.children[0].innerHTML.slice(1)));
    // console.log(clicked.children[1].children[0].innerHTML); // name
    setClickedName(clicked.children[1].children[0].innerHTML);
    // console.log(clicked.children[1].children[1].innerHTML); // type1
    setClickedType1(clicked.children[1].children[1].innerHTML);
    // console.log(clicked.children[1].children[2].innerHTML); // type2
    setClickedType2(clicked.children[1].children[2].innerHTML);
  };

  return (
    <>
      <div className="poke_card" onClick={moreDetails}>
        <div className={`each_poke_card ${type1}`}>
          <p className="id_no">
            #{id < 10 ? "00" + id : id < 100 ? "0" + id : id}
          </p>
          <div className="name_and_type">
            <p className="poke_name">{pokeName}</p>
            <p className="type t-1">{type1}</p>
            <p className={`type t-2 ${!type2 && "hide"}`}>{type2}</p>
          </div>
          <div className="img_container">
            <img className="pokeCard_img" src={pokeImg} alt="poke_img" />
          </div>
        </div>
      </div>
      {view && (
        <PokeDetails
          clickedId={clickedId}
          clickedName={clickedName}
          clickedType1={clickedType1}
          clickedType2={clickedType2}
          pokeData={pokeData}
          view={view}
          setView={setView}
          pokeSearchData={pokeSearchData}
        />
      )}
    </>
  );
};

export default PokeCards;
