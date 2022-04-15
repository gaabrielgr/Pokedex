export const INITIAL_STATE = {
  pokemons: [],

};

const pokeReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === "SET_POKEMON") {
    return {
      ...state,
      pokemons: action.pokemons,
    };
  }
  
  return state;
};

export default pokeReducer;
