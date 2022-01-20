import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/media_queries.css";
import Loader from "./Loader";
import PokeCards from "./PokeCards";

const Main = () => {
  const [offSet, setOffSet] = useState(0);

  const [pokeData, setPokeData] = useState([]);

  const [loading, setLoading] = useState(false);

  const pokeApiCall = async () => {
    setLoading(true);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`
    );

    const initialPokeData = await res.json();

    const resultsArr = initialPokeData.results;

    const urlArr = resultsArr.map((elem) => elem.url);

    const exactPokeData = urlArr.map(async (elem) => {
      const data = await fetch(elem);
      const mainPokeData = await data.json();

      return mainPokeData;
    });

    setPokeData(await Promise.all(exactPokeData));
    // console.log(await Promise.all(exactPokeData));
    setLoading(false);
  };

  const handlePrevClick = () => {
    let newOffset = offSet - 20;
    setOffSet(newOffset);
  };

  const handleNextClick = () => {
    let newOffset = offSet + 20;
    setOffSet(newOffset);
  };

  useEffect(() => {
    pokeApiCall();
  }, [offSet]);

  return (
    <>
      <div className="main_section">
        {loading ? (
          <Loader />
        ) : (
          pokeData.map((elem, idx) => {
            return (
              <PokeCards
                key={idx}
                id={elem.id}
                pokeName={elem.name}
                type1={elem.types[0].type.name}
                type2={elem.types.length === 1 ? "" : elem.types[1].type.name}
                pokeImg={elem.sprites.front_default}
                pokeData={pokeData}
              />
            );
          })
        )}
      </div>
      <div className="main_button_section">
        <button
          disabled={offSet === 0}
          className={`search_btn ${offSet === 0 ? "disabled_btn" : ""}`}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          disabled={offSet === 1100}
          className={`search_btn ${offSet === 1100 ? "disabled_btn" : ""}`}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Main;
