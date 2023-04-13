import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const PokemonSearch = () => {
    const { fetchPokemonByName } = useGlobalContext();
  const [query, setQuery] = useState("");
  const [pokemonQuery, setPokemonQuery] = useState("");

  console.log(pokemonQuery);

  const searchHandler = (e) => {
    e.preventDefault();
    setPokemonQuery(query);
    fetchPokemonByName(pokemonQuery);
  };

  return (
    <div className="search-pokemon">
      <h1>Search Pokemon</h1>
      <form on onSubmit={searchHandler}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokemon"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default PokemonSearch;