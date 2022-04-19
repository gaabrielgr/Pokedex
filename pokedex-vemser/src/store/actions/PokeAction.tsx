import axios from "axios";
import api from "../../api";
import { PokemonDTO } from "../../model/PokemonDTO";

export const GetPokemons = async (dispatch: any) => {
  const idPokemons = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonsArray = [];
  for (let i = 1; i <= 151; i++) {
    pokemonsArray.push(`${idPokemons(i)}`);
  }
  try {
    const pokemons = await Promise.all(
      pokemonsArray.map(async (url: string) => {
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
      error: false,
    };

    dispatch(pokemonsDispatch);
  } catch (error) {
    isError(dispatch);
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
    const pokemonsType = data.pokemon.map(
      (pokemon: PokemonDTO) => pokemon.pokemon
    );

    const namesPoke: any = [];
    pokemons.map((name: PokemonDTO) => namesPoke.push(name.name));

    const namesPokeClick: any = [];

    pokemonsType.map((name: PokemonDTO) => namesPokeClick.push(name.name));
    const listNamesPoke = namesPoke.concat(namesPokeClick);

    const newLista = listNamesPoke.filter(function (elem: string, pos: string) {
      return listNamesPoke.indexOf(elem) !== pos;
    });
    const listMenuPoke: any = [];
    try {
      const menuPromisse = await Promise.all(
        newLista.map(async (element: string) => {
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
export const GetPokemonsByType = async (dispatch: any, type: string) => {
  try {
    const { data } = await api.get(`type/${type}`);
    const pokemonsArray = data.pokemon.map(
      (pokemon: PokemonDTO) => pokemon.pokemon
    );
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

export const GetPokemonById = async (dispatch: any, id: string | undefined) => {
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
    isErrorActivePokemon(dispatch);
    console.log(error);
  }
};

export const GetPokemonByName = async (dispatch: any, inputValue: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
  try {
    const { data } = await axios.get(url);
    const pokemonDispatch = {
      type: "SET_TYPES",
      listTypesPokemon: data,
      loadingTypesPokemon: false,
    };
    dispatch(pokemonDispatch);
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

export const isError = (dispatch: any) => {
  const pokemonsDispatch = {
    type: "IS_ERROR",
    error: true,
    loading: false,
  };
  dispatch(pokemonsDispatch);
};

export const isErrorActivePokemon = (dispatch: any) => {
  const pokemonsDispatch = {
    type: "IS_ERROR_ACTIVE_POKEMON",
    errorActivePokemon: true,
    loadingActivePokemon: false,
  };

  dispatch(pokemonsDispatch);
};
