import api from "../../api";

export const getPokemons = async (dispatch: any) => {
  try {
    const { data } = await api.get("pokemon?limit=151&offset=0");
    const { results }: any = data;

    const pokemon = {
      type: "SET_POKEMON",
      pokemons: results,
    };
    dispatch(pokemon);
  } catch (error) {
    console.log(error);
  }
};
