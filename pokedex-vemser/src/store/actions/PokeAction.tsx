import axios from "axios";

export const getPokemons = async (dispatch: any) => {
  const idPokemons = (id: any) => `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const pokemonsArray = [];
  
  for (let i = 1; i <= 151; i++) {
    pokemonsArray.push(`${idPokemons(i)}`);
  }

  try {
    await axios
      .all(pokemonsArray.map((pokemonGet) => axios.get(pokemonGet)))
      .then(
        axios.spread((...allData) => {
          dispatch({
            type: "SET_POKEMON",
            pokemons: allData,
          });
        })
      );
  } catch (error) {
    console.log(error);
  }
};






