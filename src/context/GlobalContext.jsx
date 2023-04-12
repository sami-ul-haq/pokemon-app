import { createContext, useContext, useEffect, useReducer } from "react";
import pokemonReducer from "./PokemonReducer";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const InitialState = {
  isLoading: true,
  data: [],
  pokemonByName: {},
  error: "",
  nextPage: "",
  previousPage:""
};

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, InitialState);

  const FetchPokemons = async () => {
    try {
      dispatch({ type: "IS_LOADING" });
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({
        type: "GET_POKEMON",
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOADING_FAILED",
        payload: error,
      });
    }
  };

  const fetchPokemonByName = async (url) => {
    try {
      dispatch({ type: "IS_LOADING" });
      const response = await fetch(`${API_URL}/${url}`);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_POKEMON_BY_NAME",
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOADING_FAILED",
        payload: error,
      });
    }
  }

  useEffect(() => {
    FetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ ...state , fetchPokemonByName}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PokemonContext);
};

export default PokemonContextProvider;
