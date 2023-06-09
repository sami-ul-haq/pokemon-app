// import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokemons = () => {
  const { data, isLoading, error } = useGlobalContext();
  
  console.log(data);

  if (isLoading) {
    return <h1>Loading Pokemons ...</h1>;
  }

  if (error) {
    return <h1>Failed to load pokemoons ...</h1>;
  }

  return (
    <div className="pokemon-section">
      <div className="pokemon-container">
        {data ? (
          data.map((pokItem, i) => <Pokemon key={i} pokItem={pokItem} />)
        ) : (
          <p>No Pokemon Found</p>
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default Pokemons;
