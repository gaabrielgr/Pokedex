import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Notiflix from "notiflix";
import { connect } from "react-redux";
import arrowTopPage from "../images/arrowTopScrollMed.png";
import Loading from "../components/Loading";
import {
  zeroLeft,
  topPage,
  upperCaseLetter,
} from "../utils/Utils";
import {
  GetPokemonById,
  getPokemonByType,
  GetPokemons,
} from "../store/actions/PokeAction";
import * as C from "./Home.styles";
import searchImg from "../images/searchImg.png";
import pokeCard from "../images/pokeBackGround.png";
import gpsPoke from "../images/gps.png";
import arrowHome from "../images/arrowHome.png";
import Error from "../components/error/Error";
import { PokemonDTO } from "../model/PokemonDTO";
import { ListTypesDTO } from "../model/ListTypesDTO";
import Colors from "../enums/Colors";



const Home = (pokemon: any) => {
  const [handleType, setHandleType] = useState(false);
  const { pokemons, dispatch, typesPokemon, listTypesPokemon } = pokemon;
  const { results } = typesPokemon;
  const navigate = useNavigate();
  const [handleInput, setHandleInput] = useState("");
  const [handleSearch, setHandleSearch] = useState(false);
  const [typeName, setTypeName] = useState("");

  
  
  
  
  const filterArr = (arr: Array<ListTypesDTO>) => {
    
    return arr.filter(
      (item: ListTypesDTO) =>
      item.name !== "unknown" &&
      item.name !== "dark" &&
      item.name !== "shadow"
      );
    };
    
    useEffect(() => {
      GetPokemons(dispatch);
    }, []);
    
    useEffect(() => {
      GetPokemons(dispatch);
      if (listTypesPokemon) {
      }
    }, []);


  if (pokemon.loading) {
    return <Loading />;
  }

  if (pokemon.error) {
    return <Error />;
  }


  console.log(pokemons);
  

  const findPokemon = (e: any) => {
    e.preventDefault();
    let find = pokemons.find(
      (pokemon: PokemonDTO) => pokemon.name === handleInput.toLowerCase()
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

  function listPokeMenu(action: any, type: string, pokemons: PokemonDTO) {
    getPokemonByType(action, type, pokemons);
    setTypeName(type);
    setHandleType(true);
    topPage();
  }

  return (
    <C.ContainerHome>
      <C.ContainerMenuLateral>
        <C.ContainerSearch>
          <C.ButtonHome onClick={() => setHandleType(false)}>
            <C.ReturnHome
              src={arrowHome}
              alt=""
              height={"24px"}
              width={"24px"}
            />
            <C.Title small>Home</C.Title>
          </C.ButtonHome>
          <C.Form onSubmit={findPokemon}>
            <C.SearchPokemon
              type="text"
              placeholder="Search your pokemon..."
              onChange={(e) => setHandleInput(e.target.value)}
            />
          </C.Form>
          <C.SearchImg src={searchImg} alt="" width={"20px"} height={"20px"} />
        </C.ContainerSearch>
        <C.UlMenuLateral>
          <C.ContainerTitleMenuLateral>
            <C.Title>Menu Types Pokemons </C.Title>
          </C.ContainerTitleMenuLateral>

          {filterArr(results).map((type: ListTypesDTO) => (
            <C.LiMenuLateral key={type.name}>
              <C.ImgSearch
                src={gpsPoke}
                alt=""
                width={"16px"}
                height={"16px"}
              />
              <C.ItemMenu>
                <C.ItemMenuLink
                  onClick={() => listPokeMenu(dispatch, type.name, pokemons)}
                >
                  {type.name}
                </C.ItemMenuLink>
              </C.ItemMenu>
            </C.LiMenuLateral>
          ))}
        </C.UlMenuLateral>
      </C.ContainerMenuLateral>
      <C.ContainerCards>
        {handleType ? (
          <C.TitleType>
            <C.Title>{typeName}</C.Title>
          </C.TitleType>
        ) : (
          <C.TitleType>
            <C.Title>ALL Pokemons 1°Generation</C.Title>
          </C.TitleType>
        )}
        {handleType
          ? listTypesPokemon.map((poke: PokemonDTO) => (
              <Link
                to={`/details/${poke.id}`}
                onClick={() => GetPokemonById(dispatch, poke.id)}
                key={poke.id}
              >
                <C.Card
                  boxShadow={Colors[poke.types[0].type.name]}
                  color={Colors[poke.types[0].type.name]}
                >
                  <C.BackgroundCardImg>
                    <img width={"400px"} src={pokeCard} alt="" />
                  </C.BackgroundCardImg>
                  <C.ContainerIdCard>
                    <C.IdCard color={Colors[poke.types[0]?.type?.name]}>
                      #{zeroLeft(poke.id)}
                    </C.IdCard>
                  </C.ContainerIdCard>
                  <C.ContainerCardImg>
                    <C.CardImg
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                      alt=""
                    />
                  </C.ContainerCardImg>
                  <C.ContainerNamePokemon>
                    <C.ColorCard color={Colors[poke.types[0]?.type?.name]}>
                      <C.TitleCard bg="#fff" size="20px" marginB="5px">
                        {upperCaseLetter(poke.name)}{" "}
                      </C.TitleCard>
                    </C.ColorCard>
                  </C.ContainerNamePokemon>
                </C.Card>
              </Link>
            ))
          : pokemons.map((poke: PokemonDTO) => (
              <Link
                to={`/details/${poke.id}`}
                onClick={() => GetPokemonById(dispatch, poke.id)}
                key={poke.id}
              >
                <C.Card
                  boxShadow={Colors[poke.types[0]?.type?.name]}
                  color={Colors[poke.types[0]?.type?.name]}
                >
                  <C.BackgroundCardImg>
                    <img width={"400px"} src={pokeCard} alt="" />
                  </C.BackgroundCardImg>
                  <C.ContainerIdCard>
                    <C.IdCard color={Colors[poke.types[0]?.type?.name]}>
                      #{zeroLeft(poke.id)}
                    </C.IdCard>
                  </C.ContainerIdCard>
                  <C.ContainerCardImg>
                    <C.CardImg
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                      alt=""
                    />
                  </C.ContainerCardImg>
                  <C.ContainerNamePokemon>
                    <C.ColorCard color={Colors[poke.types[0]?.type?.name]}>
                      <C.TitleCard bg="#fff" size="20px" marginB="5px">
                        {upperCaseLetter(poke.name)}{" "}
                      </C.TitleCard>
                    </C.ColorCard>
                  </C.ContainerNamePokemon>
                </C.Card>
              </Link>
            ))}
      </C.ContainerCards>
      <C.Footer>
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
      </C.Footer>
    </C.ContainerHome>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
  loading: state.pokeReducer.loading,
  typesPokemon: state.pokeReducer.typesPokemon,
  listTypesPokemon: state.pokeReducer.listTypesPokemon,
  loadingTypesPokemon: state.pokeReducer.loadingTypesPokemon,
  error: state.pokeReducer.error,
});

export default connect(mapStateToProps)(Home);
