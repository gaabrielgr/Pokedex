import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetPokemonByIdDetails } from "../../store/actions/PokeAction";
import { useNavigate, useParams } from "react-router-dom";
import {
  AbilitySpan,
  ArrowImg,
  ArrowName,
  ContainerPai,
  Description,
  ImgDiv,
  ImgStand,
  Info,
  InfoAbilities,
  InfoImg,
  InfoNumbers,
  InfoSpan,
  InfosPoke,
  NamePokemon,
  PokemonImg,
  PokemonInfo,
  PokemonInfos,
  PokemonStand,
  PokemonTypes,
  Stats,
  StatsBar,
  TitleInfo,
  TitleSpan,
  Types,
  ReturnDetails,
  PokeCard,
} from "./Details.styles";
import pokeCard from "../../images/pokeBackGround.png";
import arrow from "../../images/Arrow.svg";
import Weight from "../../images/weight.svg";
import Height from "../../images/height.svg";
import api from "../../api";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading";

function Details(pokemon: any) {
  const { activePokemon, dispatch } = pokemon;
  const [description, setDescription] = useState("");
  const { id: idParams } = useParams();
  const navigate = useNavigate();

  console.log(idParams);

  const getPokemonSpecies = async (id: string | undefined) => {
    try {
      const  response  = await api.get(`pokemon-species/${id}`);
        const {data} = response
      setDescription(data.flavor_text_entries[8].flavor_text);
        if(response.status === 404) {
            console.log('entrei');
            
            navigate('/')
        }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPokemonByIdDetails(dispatch, idParams, navigate);
    getPokemonSpecies(idParams);
    Aos.init({duration: 2000})
  }, []);

  if (pokemon.loading) {
    return <Loading />;
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
      <ContainerPai color={`${activePokemon.types[0].type.name}`}>
        <ImgDiv>
          <ArrowName>
            <ReturnDetails onClick={() => navigate("/")}>
              <ArrowImg src={arrow} alt="arrow" />
              <NamePokemon color="white">
                {upperCaseLetter(activePokemon.name)}
              </NamePokemon>
            </ReturnDetails>
          </ArrowName>
          <NamePokemon>#{zeroLeft(activePokemon.id)}</NamePokemon>
        </ImgDiv>
        <PokemonStand data-aos="fade-up">
          <PokeCard src={pokeCard} alt="" top="1px" />
          <PokeCard src={pokeCard} alt="" right="1px" />
          <PokeCard src={pokeCard} alt="" bottom="1px" />
          <PokeCard src={pokeCard} alt="" right="1px" bottom="1px" />
          <PokemonImg>
            <ImgStand
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${activePokemon.id}.svg`}
              alt="imagem pokemon"
              width={"200px"}
              height={"200px"}
            />
          </PokemonImg>
          <PokemonTypes>
            {Object.keys(activePokemon.types).map((type: any) => (
              <Types key={type} color={activePokemon.types[type].type.name}>
                {upperCaseLetter(activePokemon.types[type].type.name)}
              </Types>
            ))}
          </PokemonTypes>
          <PokemonInfo>
            <TitleInfo mT="32px" color={activePokemon.types[0].type.name}>
              {" "}
              About{" "}
            </TitleInfo>
          </PokemonInfo>
          <InfosPoke>
            <Info>
              <PokemonInfos>
                <InfoImg src={Weight} />{" "}
                <InfoSpan> {weightLeft(activePokemon.weight)}</InfoSpan>
              </PokemonInfos>
              <TitleSpan>Weight</TitleSpan>
            </Info>
            <Info>
              <PokemonInfos>
                <InfoImg src={Height} /> {weightLeft(activePokemon.height)}
              </PokemonInfos>
              <TitleSpan>Height</TitleSpan>
            </Info>
            <Info>
              <InfoAbilities>
                {Object.keys(activePokemon.abilities).map((special: any) => (
                  <AbilitySpan
                    key={special}
                    color={activePokemon.abilities[special].ability.name}
                  >
                    {upperCaseLetter(
                      activePokemon.abilities[special].ability.name
                    )}
                  </AbilitySpan>
                ))}
              </InfoAbilities>
              <TitleSpan>Moves</TitleSpan>
            </Info>
          </InfosPoke>
          <Description>
            <p>{description}</p>
          </Description>
          <PokemonInfo>
            <TitleInfo mT="10px" color={activePokemon.types[0].type.name}>
              {" "}
              BaseStats{" "}
            </TitleInfo>
          </PokemonInfo>
          <StatsBar>
            {Object.keys(activePokemon.stats).map((stat: any) => (
              <Stats key={stat}>
                <TitleInfo
                  bR="1px solid #E0E0E0"
                  wT="60px"
                  color={activePokemon.types[0].type.name}
                >
                  {abreviation(activePokemon.stats[stat].stat.name)}
                </TitleInfo>
                <InfoNumbers>
                  {zeroLeft(activePokemon.stats[stat].base_stat)}
                </InfoNumbers>

                <div>
                  <ProgressBar
                    abilities={activePokemon.stats[stat].base_stat}
                    color={activePokemon.types[0].type.name}
                    bgColor={activePokemon.types[0].type.name}
                  />
                </div>
              </Stats>
            ))}
          </StatsBar>
        </PokemonStand>
      </ContainerPai>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.pokeReducer.activePokemon,
  loading: state.pokeReducer.loadingActivePokemon,
});

export default connect(mapStateToProps)(Details);
