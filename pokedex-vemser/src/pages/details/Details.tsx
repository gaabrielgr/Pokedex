import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import * as C from "./Details.styles";
import { GetPokemonById } from "../../store/actions/PokeAction";
import pokeCard from "../../images/pokeBackGround.png";
import arrow from "../../images/Arrow.svg";
import Weight from "../../images/weight.svg";
import Height from "../../images/height.svg";
import api from "../../api";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Loading from "../../components/Loading";
import Error from "../../components/error/Error";
import Background from "../../enums/Backgroud";

function Details(pokemon: any) {
  const { activePokemon, dispatch } = pokemon;
  const [description, setDescription] = useState("");
  const { idPoke } = useParams();
  const navigate = useNavigate();

  const getPokemonSpecies = async (id: string | undefined) => {
    try {
      const response = await api.get(`pokemon-species/${id}`);
      const { data } = response;
      setDescription(data.flavor_text_entries[8].flavor_text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPokemonById(dispatch, idPoke);
    getPokemonSpecies(idPoke);
    Aos.init({ duration: 950 });
  }, []);

  if (pokemon.loading) {
    return <Loading />;
  }

  if (pokemon.error) {
    return <Error />;
  }

  const upperCaseLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const weightLeft = (num: number) => {
    return num < 10 ? `0,${num}` : `${num},0`;
  };

  const zeroLeft = (num: number) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };

  const abreviation = (str: string) => {
    switch (str) {
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SPA";
      case "special-defense":
        return "SPD";
      case "speed":
        return "SPE";
      default:
        return str.toUpperCase();
    }
  };
  return (
    <>
      <C.ContainerPai color={Background[activePokemon?.types[0]?.type?.name]}>
        <C.ImgDiv>
          <C.ArrowName>
            <C.ReturnDetails onClick={() => navigate("/")}>
              <C.ArrowImg src={arrow} alt="arrow" />
              <C.NamePokemon color="white">
                {upperCaseLetter(activePokemon.name)}
              </C.NamePokemon>
            </C.ReturnDetails>
          </C.ArrowName>
          <C.NamePokemon>#{zeroLeft(activePokemon.id)}</C.NamePokemon>
        </C.ImgDiv>
        <C.PokemonStand data-aos="fade-up">
          <C.PokeCard src={pokeCard} alt="" top="1px" />
          <C.PokeCard src={pokeCard} alt="" right="1px" />
          <C.PokeCard src={pokeCard} alt="" bottom="1px" />
          <C.PokeCard src={pokeCard} alt="" right="1px" bottom="1px" />
          <C.PokemonImg>
            <C.ImgStand
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activePokemon.id}.png`}
              alt="imagem pokemon"
              width={"250px"}
              height={"250px"}
            />
          </C.PokemonImg>
          <C.PokemonTypes>
            {Object.keys(activePokemon.types).map((type: string) => (
              <C.Types key={type} color={activePokemon.types[type].type.name}>
                {upperCaseLetter(activePokemon.types[type].type.name)}
              </C.Types>
            ))}
          </C.PokemonTypes>
          <C.PokemonInfo>
            <C.TitleInfo mT="32px" color={activePokemon?.types[0]?.type?.name}>
              About
            </C.TitleInfo>
          </C.PokemonInfo>
          <C.InfosPoke>
            <C.Info>
              <C.PokemonInfos>
                <C.InfoImg src={Weight} />
                <C.InfoSpan> {weightLeft(activePokemon.weight)}</C.InfoSpan>
              </C.PokemonInfos>
              <C.TitleSpan>Weight</C.TitleSpan>
            </C.Info>
            <C.Info>
              <C.PokemonInfos>
                <C.InfoImg src={Height} /> {weightLeft(activePokemon.height)}
              </C.PokemonInfos>
              <C.TitleSpan>Height</C.TitleSpan>
            </C.Info>
            <C.Info>
              <C.InfoAbilities>
                {Object.keys(activePokemon.abilities).map((special: string) => (
                  <C.AbilitySpan
                    key={special}
                    color={activePokemon.abilities[special].ability.name}
                  >
                    {upperCaseLetter(
                      activePokemon.abilities[special].ability.name
                    )}
                  </C.AbilitySpan>
                ))}
              </C.InfoAbilities>
              <C.TitleSpan>Moves</C.TitleSpan>
            </C.Info>
          </C.InfosPoke>
          <C.Description>
            <p>{description}</p>
          </C.Description>
          <C.PokemonInfo>
            <C.TitleInfo mT="10px" color={activePokemon?.types[0]?.type?.name}>
              BaseStats
            </C.TitleInfo>
          </C.PokemonInfo>
          <C.StatsBar>
            {Object.keys(activePokemon.stats).map((stat: string) => (
              <C.Stats key={stat}>
                <C.TitleInfo
                  bR="1px solid #E0E0E0"
                  wT="60px"
                  color={activePokemon?.types[0]?.type?.name}
                >
                  {abreviation(activePokemon.stats[stat].stat.name)}
                </C.TitleInfo>
                <C.InfoNumbers>
                  {zeroLeft(activePokemon.stats[stat].base_stat)}
                </C.InfoNumbers>
                <div>
                  <ProgressBar
                    abilities={activePokemon.stats[stat].base_stat}
                    color={activePokemon?.types[0]?.type?.name}
                    bgColor={activePokemon?.types[0]?.type?.name}
                  />
                </div>
              </C.Stats>
            ))}
          </C.StatsBar>
        </C.PokemonStand>
      </C.ContainerPai>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.pokeReducer.activePokemon,
  loading: state.pokeReducer.loadingActivePokemon,
  error: state.pokeReducer.errorActivePokemon,
});

export default connect(mapStateToProps)(Details);
