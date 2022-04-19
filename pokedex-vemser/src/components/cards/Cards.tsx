import React from "react";
import { Link } from "react-router-dom";
import pokeCard from "../../images/pokeBackGround.png";
import { zeroLeft, ColorStandard, upperCaseLetter } from "../../utils/Utils";
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
const Cards = ({ pokemons, GetPokemonById, dispatch }: any) => {
  return (
    <>
      {pokemons.map((poke: any) => (
        <Link
          to={`/details/${poke.id}`}
          onClick={() => GetPokemonById(dispatch, poke.id)}
          key={poke.id}
        >
          <Card
            boxShadow={ColorStandard(poke.types[0].type.name)}
            color={ColorStandard(poke.types[0].type.name)}
          >
            <BackgroundCardImg>
              <img width={"400px"} src={pokeCard} alt="" />
            </BackgroundCardImg>
            <ContainerIdCard>
              <IdCard color={ColorStandard(poke.types[0].type.name)}>
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
              <ColorCard color={ColorStandard(poke.types[0].type.name)}>
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
