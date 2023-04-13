import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const PokemonSearch = () => {
  const { fetchPokemonByName, pokemonByName, isLoading, error } =
    useGlobalContext();
  const { name, sprites, stats, types, weight, abilities } = pokemonByName;
  const [query, setQuery] = useState("");
  const [pokemonQuery, setPokemonQuery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setPokemonQuery(query);
    setQuery("");
  };

  useEffect(() => {
    fetchPokemonByName(pokemonQuery.toLowerCase());
  }, [pokemonQuery]);

  if (error) {
    <h1>No Such Pokemon, Try Searching Another Name ..</h1>;
  }

  return (
    <div className="search-container">
      <div className="search-pokemon">
        <h1>Search Pokemon</h1>
        <form on onSubmit={searchHandler}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="By default is IVYSAUR"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="queried-pokemon">
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
      </div>
    </div>
  );
};

export default PokemonSearch;
