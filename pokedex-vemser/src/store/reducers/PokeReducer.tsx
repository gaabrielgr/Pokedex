export const INITIAL_STATE = {
  pokemons: [],
  loading: true,
  
  typesPokemon: [],
  listTypesPokemon: [],

  activePokemon: [],
  loadingActivePokemon: true,
};

const pokeReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === "SET_POKEMON") {
    return {
      ...state,
      pokemons: action.pokemons,
      loading: action.loading,
      typesPokemon: action.typesPokemon,
    };
  }
  if (action.type === "SET_TYPES") {
    return {
      ...state,
      loading: action.loading,
      listTypesPokemon: action.listTypesPokemon,
    };
  }

  if (action.type === "SET_ACTIVE_POKEMON") {
    return {
      ...state,
      activePokemon: action.pokemons,
      loadingActivePokemon: action.loadingActivePokemon,
    };
  }

  return state;
};

export default pokeReducer;
