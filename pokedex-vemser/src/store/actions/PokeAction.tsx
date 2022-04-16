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
        loading: false,
      };
      dispatch(pokemonsList);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
//manter as informações do pokemon clicado na tela
export const GetPokemonByIdDetails = async (
  dispatch: any,
  id: any,
  navigate: any
) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const { data } = await axios.get(url);

    const pokemonDispatch = {
      type: "SET_ACTIVE_POKEMON",
      pokemons: data,
      loading: false,
    };

    if (id > 151) {
      navigate("/");
    }

    dispatch(pokemonDispatch);
  } catch (error) {
    console.log(error);
  }
};
