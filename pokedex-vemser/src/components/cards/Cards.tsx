import React from "react";
import { Link } from "react-router-dom";
import pokeCard from "../../images/pokeBackGround.png";
import { zeroLeft, upperCaseLetter } from "../../utils/Utils";
import {
  Card,
  BackgroundCardImg,
  ContainerIdCard,
  IdCard,
  ContainerCardImg,
  CardImg,
  ContainerNamePokemon,
  ColorCard,
  TitleCard,
} from "../../pages/Home.styles";
import { PokemonDTO } from "../../model/PokemonDTO";
import Colors from "../../enums/Colors";
const Cards = ({ pokemons, GetPokemonById, dispatch }: any) => {
  return (
    <>
      {pokemons.map((poke: PokemonDTO) => (
        <Link
          to={`/details/${poke.id}`}
          onClick={() => GetPokemonById(dispatch, poke.id)}
          key={poke.id}
        >
          <Card
            boxShadow={Colors[poke.types[0].type.name]}
            color={Colors[poke.types[0].type.name]}
          >
            <BackgroundCardImg>
              <img width={"400px"} src={pokeCard} alt="" />
            </BackgroundCardImg>
            <ContainerIdCard>
              <IdCard color={Colors[poke.types[0].type.name]}>
                #{zeroLeft(poke.id)}
              </IdCard>
            </ContainerIdCard>
            <ContainerCardImg>
              <CardImg
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt=""
              />
            </ContainerCardImg>
            <ContainerNamePokemon>
              <ColorCard color={Colors[poke.types[0].type.name]}>
                <TitleCard bg="#fff" size="20px" marginB="5px">
                  {upperCaseLetter(poke.name)}{" "}
                </TitleCard>
              </ColorCard>
            </ContainerNamePokemon>
          </Card>
        </Link>
      ))}
    </>
  );
};
export default Cards;
