const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_POKEMON":
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        nextPage: action.payload.next,
        previousPage: action.payload.previous
      };
      case "GET_POKEMON_BY_NAME":
        console.log(action.payload)
        return {
          ...state,
          pokemonByName: action.payload
        };
    case "LOADING_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
