const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_POKEMON":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
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
