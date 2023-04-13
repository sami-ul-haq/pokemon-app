import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const PokemonDetails = () => {
  const { fetchPokemonByName, pokemonByName, isLoading } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, sprites, stats, types, weight } = pokemonByName;

  useEffect(() => {
    fetchPokemonByName(id);
  }, []);

  if (isLoading) {
    return <h1>Loading Pokemon ...</h1>;
  }

  return (
    <div className="pokemon-box">
      <div className="pokemon-details">
        <h1>{name}</h1>
        <img src={sprites.front_default ? sprites.front_default : ""} alt="pokemon" />

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
      </div>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
