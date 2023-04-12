import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const PokemonDetails = () => {
  const {fetchPokemonByName, pokemonByName, isLoading} = useGlobalContext();
    const { name } = useParams();
  console.log(pokemonByName);

useEffect(()=>{
    fetchPokemonByName(name);
}, []);

if(isLoading){
  return <h1>Loading Pokemons ...</h1>
}


  return <div className="pokemon-details">
    {name}</div>;
};

export default PokemonDetails;
