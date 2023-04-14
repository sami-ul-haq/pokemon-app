const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_POKEMON":
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        nextPage: action.payload.next,
        previousPage: action.payload.previous,
      };
    case "GET_POKEMON_BY_NAME":
      return {
        ...state,
        pokemonByName: action.payload,
        isLoading: false,
      };
    case "LOADING_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "PREVIOUS_PAGE":
      return {
        ...state,
        API_URL: action.payload,
      };

    case "NEXT_PAGE":
      console.log(action)
      return {
        ...state,
        API_URL: state.nextPage,
        // previousPage: state.API_URL
      };
    default:
      return state;
  }
};

export default pokemonReducer;
