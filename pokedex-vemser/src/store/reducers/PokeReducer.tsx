export const INITIAL_STATE = {

  activePokemon: [],
  pokemons: [],
  loading: true
  

};

const pokeReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === "SET_POKEMON") {
    return {
      ...state,
      pokemons: action.pokemons,
      loading: action.loading,
     
    };
  }

  if (action.type === "SET_ACTIVE_POKEMON") {
    return {
      ...state,
      activePokemon: action.pokemons,
      loading: action.loading,
    };
  }

  
  return state;
};

export default pokeReducer;
