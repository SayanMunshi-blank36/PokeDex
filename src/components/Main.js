import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/media_queries.css";
import Loader from "./Loader";
import PokeCards from "./PokeCards";
import SearchErrorImg from "../images/search_err.png";

const Main = ({ pokeSName, setPokeSName }) => {
  const [offSet, setOffSet] = useState(0);

  const [searchError, setSearchError] = useState("");

  const [pokeData, setPokeData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchResult, setSearchResult] = useState(null);

  const searchCall = async (pokeSName) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeSName.toLowerCase()}`
      );

      const data = await res.json();

      console.log(data);
      setSearchResult(data);
    } catch (err) {
      // console.log(err);
      // alert("wrong Input");
      setSearchError("No Results Found");
    }
  };

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

  const closeErrModal = (e) => {
    e.target.parentElement.parentElement.style.display = "none";
    setSearchError("");
    window.location.reload();
  };

  useEffect(() => {
    pokeApiCall();
  }, [offSet]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (pokeSName !== "") searchCall(pokeSName);
  }, [pokeSName]);

  return (
    <>
      {searchError !== "" && (
        <div className="search_error">
          <div className="searchErrorBody">
            <i
              onClick={closeErrModal}
              className="fa fa-times close_search_err"
            ></i>
            {searchError}
            <img src={SearchErrorImg} alt="error" className="search_err_img" />
          </div>
        </div>
      )}
      <div className="main_section">
        {loading ? (
          <Loader />
        ) : searchResult === null ? (
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
        ) : (
          <div className="searchResSection">
            {searchResult !== undefined ? (
              <PokeCards
                id={searchResult.id}
                pokeName={searchResult.name}
                type1={searchResult.types[0].type.name}
                type2={
                  searchResult.types.length === 1
                    ? ""
                    : searchResult.types[1].type.name
                }
                pokeImg={searchResult.sprites.front_default}
                pokeData={pokeData}
                pokeSearchData={searchResult}
              />
            ) : (
              alert("No Search Results Found")
            )}
            <button
              onClick={() => {
                setSearchResult(null);
                setPokeSName("");
              }}
              className="search_btn back_home"
            >
              Back To Home
            </button>
          </div>
        )}
      </div>
      <div
        style={{ display: `${searchResult === null ? "flex" : "none"}` }}
        className="main_button_section"
      >
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
