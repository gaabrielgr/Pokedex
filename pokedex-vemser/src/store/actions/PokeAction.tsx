import axios from "axios";
import api from "../../api";


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

export const GetPokemonById = async (dispatch: any, id: any, navigate: any) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const { data } = await axios.get(url);

    const pokemonDispatch = {
      type: "SET_ACTIVE_POKEMON",
      pokemons: data,
      loading: false,
    };

     navigate('/details/' + id);

    dispatch(pokemonDispatch);
    

  } catch (error) {
    console.log(error);
  }
}

//manter as informações do pokemon clicado na tela 
export const GetPokemonByIdDetails = async (dispatch: any, id: any, navigate: any) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  

  try {
    const { data } = await axios.get(url);

    const pokemonDispatch = {
      type: "SET_ACTIVE_POKEMON",
      pokemons: data,
      loading: false,
    };

    if(id > 151){
      navigate('/')
    }

   
    
    dispatch(pokemonDispatch);
    

  } catch (error) {
    console.log(error);
  }
}



export const GetPokemonsByType = async (dispatch: any, type: any, navigate: any) => {
  const url = `https://pokeapi.co/api/v2/type/${type}`;

  try {
    const { data } = await axios.get(url);

    const pokemonsArray = data.pokemon.map((pokemon: any) => pokemon.pokemon);

    const pokemons = await Promise.all(
      pokemonsArray.map(async (url: any) => {
        const { data } = await axios.get(url.url);

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


