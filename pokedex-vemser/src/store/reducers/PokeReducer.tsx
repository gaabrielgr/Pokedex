export const INITIAL_STATE = {
  pokemons: [],
  loading: true,
  error: false,

  typesPokemon: [],

  listTypesPokemon: [],
  loadingTypesPokemon: true,

  activePokemon: [],
  loadingActivePokemon: true,
  errorActivePokemon: false

};

const pokeReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === "SET_POKEMON") {
    return {
      ...state,
      pokemons: action.pokemons,
      loading: action.loading,
      typesPokemon: action.typesPokemon,
      error: action.error,
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
      errorActivePokemon: action.errorActivePokemon,
    };
  }

  if (action.type === "IS_LOADING_TYPES") {
    return {
      ...state,
      loadingTypesPokemon: action.loadingTypesPokemon,
    };
  }

  if (action.type === "IS_ERROR") {
    return {
      ...state,
      error: action.error,
      loading: action.loading,
    };
  }

  if (action.type === "IS_ERROR_ACTIVE_POKEMON") {
    return {
      ...state,
      errorActivePokemon: action.errorActivePokemon,
      loadingActivePokemon: action.loadingActivePokemon,
    };
  }

  return state;
};

export default pokeReducer;
