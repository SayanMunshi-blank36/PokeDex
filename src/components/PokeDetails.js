import React from "react";
import "../css/pokedetails.css";
import "../css/media_queries.css";

const PokeDetails = ({
  clickedId,
  clickedName,
  clickedType1,
  clickedType2,
  pokeData,
  view,
  setView,
  pokeSearchData,
}) => {
  //   console.log(pokeData);
  const closeModal = () => {
    setView(false);
  };

  //   console.log(clickedId, clickedName, clickedType1, clickedType2);

  let height = "";
  let weight = "";
  let ability = "";
  let hp = "";
  let attack = "";
  let defence = "";
  let spAtk = "";
  let spDef = "";
  let speed = "";

  pokeData.forEach((elem) => {
    if (elem.id === clickedId) {
      height = elem.height;
      weight = elem.weight;
      ability = elem.abilities[0].ability.name;
      hp = elem.stats[0].base_stat;
      attack = elem.stats[1].base_stat;
      defence = elem.stats[2].base_stat;
      spAtk = elem.stats[3].base_stat;
      spDef = elem.stats[4].base_stat;
      speed = elem.stats[5].base_stat;
    }
  });

  return (
    <div
      className={`poke_details_modal modal_non_visible poke_details_card ${clickedType1}_bg`}
      style={{
        opacity: `${!view ? "0" : "1"}`,
        visibility: `${!view ? "hidden" : "visible"}`,
      }}
    >
      <div className="main_modal">
        <i className="fas fa-times close_modal" onClick={closeModal}></i>
        <div className="details_id">
          #
          {clickedId < 10
            ? "00" + clickedId
            : clickedId < 100
            ? "0" + clickedId
            : clickedId}
        </div>
        <img
          className="poke_img_original"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${clickedId}.png`}
          alt="poke_img"
        />
        <div className="other_details_section">
          <p className={`poke_details_name ${clickedType1}_color`}>
            {clickedName}
          </p>
          <div className="poke_details_type">
            <p className={`type-1 detail_type ${clickedType1}`}>
              {clickedType1}
            </p>
            <p
              className={`type-2 detail_type ${clickedType2} ${
                !clickedType2 && "hide"
              }`}
            >
              {clickedType2 ? clickedType2 : ""}
            </p>
          </div>
          <div className="poke_details_physic">
            <div className="height">
              <p className="height_text">Height</p>
              <p className="height_val">
                {height === "" ? pokeSearchData.height * 10 : height * 10} cm
              </p>
            </div>
            <div className="weight">
              <p className="weight_text">Weight</p>
              <p className="weight_val">
                {weight === "" ? pokeSearchData.weight / 10 : weight / 10} kg
              </p>
            </div>
          </div>
          <div className="ability">
            <p className="ability_head">Ability</p>
            <p className="ability_val">
              {ability === ""
                ? pokeSearchData.abilities[0].ability.name
                : ability}
            </p>
          </div>
          <div className="poke_stats">
            <p className="stats_head">Base Stats</p>
            <div className="sub_stat hp">
              <p className="sub_stat_head">HP :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {hp === "" ? pokeSearchData.stats[0].base_stat : hp}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((hp === "" ? pokeSearchData.stats[0].base_stat : hp) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sub_stat attack">
              <p className="sub_stat_head">ATTACK :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {attack === "" ? pokeSearchData.stats[1].base_stat : attack}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((attack === ""
                          ? pokeSearchData.stats[1].base_stat
                          : attack) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sub_stat defence">
              <p className="sub_stat_head">DEFENCE :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {defence === "" ? pokeSearchData.stats[2].base_stat : defence}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((defence === ""
                          ? pokeSearchData.stats[2].base_stat
                          : defence) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sub_stat sp_atk">
              <p className="sub_stat_head">SP.ATK :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {spAtk === "" ? pokeSearchData.stats[3].base_stat : spAtk}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((spAtk === ""
                          ? pokeSearchData.stats[3].base_stat
                          : spAtk) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sub_stat sp_def">
              <p className="sub_stat_head">SP.DEF :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {spDef === "" ? pokeSearchData.stats[4].base_stat : spDef}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((spDef === ""
                          ? pokeSearchData.stats[4].base_stat
                          : spDef) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sub_stat speed">
              <p className="sub_stat_head">SPEED :</p>
              <div className="sub_stat_right">
                <p className="sub_stat_val">
                  {speed === "" ? pokeSearchData.stats[5].base_stat : speed}
                </p>
                <div className="stat_bar">
                  <div
                    className="stat_bar_filled"
                    style={{
                      width: `${
                        ((speed === ""
                          ? pokeSearchData.stats[5].base_stat
                          : speed) /
                          255) *
                        6
                      }rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <hr />
            <div className="sub_stat total">
              <p className="sub_stat_head">TOTAL :</p>
              <p className="sub_stat_val">
                {(hp === "" ? pokeSearchData.stats[0].base_stat : hp) +
                  (attack === "" ? pokeSearchData.stats[1].base_stat : attack) +
                  (defence === ""
                    ? pokeSearchData.stats[2].base_stat
                    : defence) +
                  (spAtk === "" ? pokeSearchData.stats[3].base_stat : spAtk) +
                  (spDef === "" ? pokeSearchData.stats[4].base_stat : spDef) +
                  (speed === "" ? pokeSearchData.stats[5].base_stat : speed)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetails;
