import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const PokemonDetails = () => {
  const { id } = useParams();
  const { fetchPokemonByName, pokemonByName, isLoading } = useGlobalContext();
  const navigate = useNavigate();
  const { name, sprites, stats, types, weight, abilities } = pokemonByName;

  console.log(pokemonByName);

  useEffect(() => {
    fetchPokemonByName(id);
  }, []);

  return (
    <div className="pokemon-box">
      {isLoading ? (
        <h1>Loading Pokemon ...</h1>
      ) : (
        <div className="pokemon-details">
          <h1>{name}</h1>
          <img
            src={sprites?.front_default}
            alt="pokemon"
            onError={(e) => (e.target.src = "")}
          />

          <table>
            <thead>
              <tr>
                <th colSpan={"2"}>Stats</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((item, i) => (
                <tr key={i}>
                  <td>{item.stat.name}</td>
                  <td>{item.base_stat}</td>
                </tr>
              ))}

              <tr>
                <td>Types:</td>
                <td>
                  {types.map((item, i) => (
                    <span key={i}>{item.type.name}</span>
                  ))}
                </td>
              </tr>

              <tr>
                <td>Weight:</td>
                <td>{weight}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={"2"}>Abilities</th>
              </tr>
            </thead>
            <tbody>
              {abilities.map((item, i) => (
                <tr key={i}>
                  <td>{item.ability.name}</td>
                  <td>{item.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="back-button">
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
