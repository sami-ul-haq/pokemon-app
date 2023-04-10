import { createContext, useContext, useEffect, useReducer } from "react";
import pokemonReducer from "./PokemonReducer";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const InitialState = {
  isLoading: true,
  data: [],
  error: "",
};

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, InitialState);
  console.log(state);

  const FetchPokemons = async () => {
    try {
      dispatch({ type: "GET_POKEMON" });
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_POKEMON",
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: "LOADING_FAILED",
        payload: error,
      });
    }
  };

  useEffect(() => {
    FetchPokemons();
    console.log("I run");
  }, []);

  return (
    <PokemonContext.Provider value={{ ...state }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PokemonContext);
};

export default PokemonContextProvider;
