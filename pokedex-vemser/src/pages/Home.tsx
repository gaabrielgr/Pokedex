import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowTopPage from "../images/arrowTopScrollMed.png";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import { GetPokemonById, GetPokemonByIdDetails, getPokemonByType, GetPokemons } from "../store/actions/PokeAction";
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
  ContainerHome,
  ContainerMenuLateral,
  UlMenuLateral,
  LiMenuLateral,
  ItemMenu,
  ItemMenuLink,
  ContainerSearch,
  Footer,
} from "./Home.styles";
import { Link } from "react-router-dom";

const Home = (pokemon: any) => {
  const [handleType, setHandleType] = useState(false);
  const { pokemons, dispatch, typesPokemon, listTypesPokemon } = pokemon;
  const { results } = typesPokemon;
  const navigate = useNavigate();

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
  function topPage() {
    return window.scrollTo(0, 0);
  }

  function listPokeMenu(action: any, type: any, pokemons: any) {
    getPokemonByType(action, type, pokemons);
    setHandleType(true);
    topPage();
  }
  return (
    <ContainerHome>
      <ContainerMenuLateral>
        <ContainerSearch>
          <button onClick={() => setHandleType(false)}>HOME</button>
        </ContainerSearch>
        <UlMenuLateral>
          {results.map((type: any) => (
            <LiMenuLateral>
              <ItemMenu>
                <ItemMenuLink
                  onClick={() => listPokeMenu(dispatch, type.name, pokemons)}
                >
                  {type.name}
                </ItemMenuLink>
              </ItemMenu>
            </LiMenuLateral>
          ))}
        </UlMenuLateral>
      </ContainerMenuLateral>
      <ContainerCards>
        {handleType
          ? listTypesPokemon.map((poke: any) => (

          <Link to={`/details/${poke.id}`}  onClick={() => GetPokemonById(dispatch, poke.id)}>
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
                  </ColorCard>
                </ContainerNamePokemon>
              </Card>
            </Link>

            ))
          : pokemons.map((poke: any) => (
            <Link to={`/details/${poke.id}`}  onClick={() => GetPokemonById(dispatch, poke.id)}>
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
                  </ColorCard>
                </ContainerNamePokemon>
              </Card>
            </Link>
            ))}
      </ContainerCards>
      <Footer>
        <p> Projeto realizado no VemSer DBC</p>
        <a
          onClick={() => {
            topPage();
          }}
        >
          <img src={arrowTopPage} alt="" />
        </a>
      </Footer>
    </ContainerHome>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
  loading: state.pokeReducer.loading,
  typesPokemon: state.pokeReducer.typesPokemon,
  listTypesPokemon: state.pokeReducer.listTypesPokemon,
});

export default connect(mapStateToProps)(Home);
