export const INITIAL_STATE = {
  pokemons: [],
  loading: true,

  typesPokemon: [],

  listTypesPokemon: [],
  loadingTypesPokemon: true,

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
      loadingTypesPokemon: action.loadingTypesPokemon,
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
