import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowTopPage from "../images/arrowTopScrollMed.png";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import Notiflix from "notiflix";
import {
  GetPokemonById,
  getPokemonByType,
  GetPokemons,
} from "../store/actions/PokeAction";
import {
  BackgroundCardImg,
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
  TitleType,
  ContainerTitleMenuLateral,
  SearchPokemon,
  ButtonHome,
  SearchImg,
} from "./Home.styles";
import { Link } from "react-router-dom";
import searchImg from "../images/searchImg.png";
import pokeCard from "../images/pokeBackGround.png";
import gpsPoke from "../images/gps.png";
const Home = (pokemon: any) => {
  const [handleType, setHandleType] = useState(false);
  const { pokemons, dispatch, typesPokemon, listTypesPokemon } = pokemon;
  const { results } = typesPokemon;
  const navigate = useNavigate();
  const [handleInput, setHandleInput] = useState("");
  const [handleSearch, setHandleSearch] = useState(false);
  const [typeName, setTypeName] = useState("");

  const filterArr = (arr: any) => {
    return arr.filter(
      (item: any) =>
        item.name !== "unknown" &&
        item.name !== "dark" &&
        item.name !== "shadow"
    );
  };

  useEffect(() => {
    GetPokemons(dispatch);
    if (listTypesPokemon) {
    }
  }, []);

  if (pokemon.loading) {
    return <Loading />;
  }

  const findPokemon = (e: any) => {
    e.preventDefault();
    let find = pokemons.find(
      (pokemon: any) => pokemon.name === handleInput.toLowerCase()
    );

    setHandleSearch(true);
    if (find) {
      navigate(`/details/${find.id}`);
    } else {
      Notiflix.Notify.failure("Pokemon não encontrado!", {
        timeout: 1000,
        position: "center-top",
      });
    }
  };

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
    setTypeName(type);

    setHandleType(true);
    topPage();
  }

  return (
    <ContainerHome>
      <ContainerMenuLateral>
        <ContainerSearch>
          <ButtonHome onClick={() => setHandleType(false)}>HOME</ButtonHome>
          <form onSubmit={findPokemon}>
            <SearchPokemon
              type="text"
              placeholder="Pesquise seu pokemon..."
              onChange={(e) => setHandleInput(e.target.value)}
            />
          </form>
          <SearchImg src={searchImg} alt="" width={"20px"} height={"20px"} />
        </ContainerSearch>
        <UlMenuLateral>
          <ContainerTitleMenuLateral>
            <h1>Menu Types Pokemons</h1>
          </ContainerTitleMenuLateral>

          {filterArr(results).map((type: any) => (
            <LiMenuLateral>
              <img src={gpsPoke} alt="" width={"16px"} height={"16px"} />
              <ItemMenu>
                <ItemMenuLink
                  onClick={() => listPokeMenu(dispatch, type.name, pokemons)}
                >
                  {type.name}
                </ItemMenuLink>
              </ItemMenu>
              <img src="" alt="" />
            </LiMenuLateral>
          ))}
        </UlMenuLateral>
      </ContainerMenuLateral>
      <ContainerCards>
        {handleType ? (
          <TitleType>
            <h1>{typeName}</h1>
          </TitleType>
        ) : (
          <TitleType>
            <h1>ALL Pokemons 1°Generation</h1>
          </TitleType>
        )}
        {handleType
          ? listTypesPokemon.map((poke: any) => (
              <Link
                to={`/details/${poke.id}`}
                onClick={() => GetPokemonById(dispatch, poke.id)}
              >
                <Card key={poke.id} color={poke.types[0].type.name}>
                  <BackgroundCardImg>
                    <img width={"400px"} src={pokeCard} alt="" />
                  </BackgroundCardImg>
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
              <Link
                to={`/details/${poke.id}`}
                onClick={() => GetPokemonById(dispatch, poke.id)}
              >
                <Card key={poke.id} color={poke.types[0].type.name}>
                  <BackgroundCardImg>
                    <img width={"400px"} src={pokeCard} alt="" />
                  </BackgroundCardImg>
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
        <p>
          Projeto realizado no VemSer 2022 DBC-Company - Gabriel Gomes e Rafael
          Santini
        </p>
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
  loadingTypesPokemon: state.pokeReducer.loadingTypesPokemon,
});

export default connect(mapStateToProps)(Home);
