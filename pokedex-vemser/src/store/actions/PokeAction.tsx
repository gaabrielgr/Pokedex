import axios from "axios";

export const GetPokemons = async (dispatch: any) => {
  const idPokemons = (id: any) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonsArray = [];

  for (let i = 1; i <= 151; i++) {
    pokemonsArray.push(`${idPokemons(i)}`);
  }

  try {
    const pokemons = await Promise.all(
      pokemonsArray.map(async (url: any) => {
        const { data } = await axios.get(url);

        return data;
      })
    );

    const pokemonsDispatch = {
      type: "SET_POKEMON",
      pokemons: pokemons,
      loading: false,
    };

    dispatch(pokemonsDispatch);
  } catch (error) {
    console.log(error);
  }
};

// export const isLoading = (dispatch: any) => {
//   const isLoading = {
//     type: "IS_LOADING",
//     loading: false,
//   }

//   dispatch(isLoading);

// };

/**
  await Promise
      .all(pokemonsArray.map((pokemonGet) => axios.get(pokemonGet)))
      .then(
        axios.spread((...allData) => {
          dispatch({
            type: "SET_POKEMON",
            pokemons: allData,
          });
        })
      ); 
 
 */
