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

    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    const pokemonsDispatch = {
      type: "SET_POKEMON",
      pokemons: pokemons,
      loading: false,
      typesPokemon: data,
    };

    dispatch(pokemonsDispatch);
  } catch (error) {
    console.log(error);
  }
};
export const getPokemonByType = async (
  dispatch: any,
  type: any,
  pokemons: any
) => {
  try {
    const { data } = await api.get(`type/${type}`);
    const pokemonsType = data.pokemon.map((pokemon: any) => pokemon.pokemon);

    const namesPoke: any = [];
    pokemons.map((name: any) => namesPoke.push(name.name));

    const namesPokeClick: any = [];

    pokemonsType.map((name: any) => namesPokeClick.push(name.name));
    const listNamesPoke = namesPoke.concat(namesPokeClick);

    const newLista = listNamesPoke.filter(function (elem: any, pos: any) {
      return listNamesPoke.indexOf(elem) !== pos;
    });
    const listMenuPoke: any = [];
    try {
      const menuPromisse = await Promise.all(
        newLista.map(async (element: any) => {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${element}`
          );
          listMenuPoke.push(data);
          return data;
        })
      );

      const pokemonsList = {
        type: "SET_TYPES",
        listTypesPokemon: listMenuPoke,
        loadingTypesPokemon: false,
      };
      dispatch(pokemonsList);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export const GetPokemonsByType = async (
  dispatch: any,
  type: any,
  navigate: any
) => {
  try {
    const { data } = await api.get(`type/${type}`);
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
export const GetPokemonByIdDetails = async (
  dispatch: any,
  id: any,
  navigate: any
) => {
  try {
    const response = await api.get(`pokemon/${id}`);
    const pokemonDispatch = {
      type: "SET_ACTIVE_POKEMON",
      pokemons: response.data,
      loadingActivePokemon: false,
    };
    if (id > 151) {
      navigate("/");
    }
    dispatch(pokemonDispatch);
  } catch (error) {
    console.log(error);
    if (error) {
      navigate("/");
    }
  }
};

export const GetPokemonById = async (dispatch: any, id: any) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const response = await axios.get(url);
    const pokemonDispatch = {
      type: "SET_ACTIVE_POKEMON",
      pokemons: response.data,
      loadingActivePokemon: false,
    };
    dispatch(pokemonDispatch);
  } catch (error) {
    console.log(error);
  }
};

export const GetPokemonByName = async (
  dispatch: any,
  inputValue: any,
  listPokemon: any,
  setName: any
) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
  try {
    const { data } = await axios.get(url);
    const pokemonDispatch = {
      type: "SET_TYPES",
      listTypesPokemon: data,
      loadingTypesPokemon: false,
    };
    dispatch(pokemonDispatch);
    console.log(pokemonDispatch);
  } catch (error) {
    console.log(error);
  }
};
export const isLoading = (dispatch: any) => {
  const pokemonsDispatch = {
    type: "IS_LOADING_TYPES",
    loadingTypesPokemon: false,
  };
  dispatch(pokemonsDispatch);
};
