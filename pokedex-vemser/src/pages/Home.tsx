import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../api";
import { GetPokemons } from "../store/actions/PokeAction";
import { ColorDiv } from "./Home.styles";

const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  console.log(pokemons);

  console.log(pokemon.loading);

  useEffect(() => {
    GetPokemons(dispatch);
    console.log(pokemons.loading);
  }, []);

  if (pokemon.loading) {
    return <h1>Loading...</h1>;
  }
  const upperCaseLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const zeroLeft = (num: number) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };
  return (
    <ul>
      {pokemons.map((poke: any) => (
        <li key={poke.id}>
          <ColorDiv color={poke.types[0].type.name}>
            {/* primeira letra do nome do pokemon em maiuscula */}
            <p>#{zeroLeft(poke.id)}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
              alt=""
            />
            <h3>{upperCaseLetter(poke.name)} </h3>

            <p>{poke.types[0].type.name}</p>

            {/* <p>{poke.data.color.name}</p> */}
          </ColorDiv>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
  loading: state.pokeReducer.loading,
});

export default connect(mapStateToProps)(Home);
