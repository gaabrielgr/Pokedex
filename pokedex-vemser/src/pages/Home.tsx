import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { GetPokemonById, GetPokemons } from "../store/actions/PokeAction";
import Loading from "../components/Loading";
import {
  ColorCard,
  IdCard,
  ContainerNamePokemon,
  ContainerCards,
  Card,
  CardImg,
  ContainerCardImg,
  ContainerIdCard,
  TitleCard,
} from "./Home.styles";

const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  const navigate = useNavigate()
  console.log(pokemons);

  useEffect(() => {
    GetPokemons(dispatch);
  }, []);

  if (pokemon.loading) {
    return <Loading />;
  }
  const upperCaseLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const zeroLeft = (num: number) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };
  return (
    <ContainerCards>
      {pokemons.map((poke: any) => (
        <Card key={poke.id} color={poke.types[0].type.name}>
          <ContainerIdCard>
            <IdCard color={poke.types[0].type.name}>
              #{zeroLeft(poke.id)}
            </IdCard>
          </ContainerIdCard>
          <ContainerCardImg>
            <CardImg
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
              alt=""
            />
          </ContainerCardImg>
          <ContainerNamePokemon>
            <ColorCard color={poke.types[0].type.name}>
              <TitleCard>{upperCaseLetter(poke.name)} </TitleCard>
              <button type="button" onClick={() => GetPokemonById(dispatch, poke.id, navigate)}>take</button>
            </ColorCard>
          </ContainerNamePokemon>
        </Card>
      ))}
    </ContainerCards>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
  loading: state.pokeReducer.loading,
});

export default connect(mapStateToProps)(Home);
