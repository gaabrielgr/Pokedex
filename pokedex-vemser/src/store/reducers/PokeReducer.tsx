export const INITIAL_STATE = {

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

  
  return state;
};

export default pokeReducer;
