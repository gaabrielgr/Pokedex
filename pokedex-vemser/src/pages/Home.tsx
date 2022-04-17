import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowTopPage from "../images/arrowTopScrollMed.png";
import { connect } from "react-redux";
import Loading from "../components/Loading";
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
} from "./Home.styles";
import { Link } from "react-router-dom";

import pokeCard from "../images/pokeBackGround.png";

const Home = (pokemon: any) => {
  const [handleType, setHandleType] = useState(false);
  const { pokemons, dispatch, typesPokemon, listTypesPokemon } = pokemon;
  const { results } = typesPokemon;
  const navigate = useNavigate();
  const [handleInput, setHandleInput] = useState("");
  const [handleSearch, setHandleSearch] = useState(false);
  const [typeName, setTypeName] = useState("");
  console.log(results);

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
    if(listTypesPokemon) {
      // isLoading(dispatch)

    }
  }, []);

  if (pokemon.loading) {
    return <Loading />;
  }

  console.log(pokemons);
  const findPokemon = (e: any) => {
    e.preventDefault();
    let find = pokemons.find(
      (pokemon: any) => pokemon.name === handleInput.toLowerCase()
    );
    console.log(find);

    setHandleSearch(true);
    if (find) {
      navigate(`/details/${find.id}`);
    } else {
      alert("não existe");
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
          <button onClick={() => setHandleType(false)}>HOME</button>
          <form onSubmit={findPokemon}>
            <input
              type="text"
              onChange={(e) => setHandleInput(e.target.value)}
            />
          </form>
        </ContainerSearch>
        <UlMenuLateral>
          {filterArr(results).map((type: any) => (
            <LiMenuLateral>
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
            <h1>ALL Pokes 1°Geração</h1>
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
  loadingTypesPokemon: state.pokeReducer.loadingTypesPokemon,
});

export default connect(mapStateToProps)(Home);
