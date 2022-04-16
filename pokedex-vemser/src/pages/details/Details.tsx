import { useEffect } from "react";
import { connect } from "react-redux";
import { GetPokemonByIdDetails } from "../../store/actions/PokeAction";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowImg, ArrowName, ContainerPai, ImgDiv, NamePokemon } from "./Details.styles";
import pokeCard from "../../images/pokeCardInvi.png";
import arrow from '../../images/Arrow.svg';


function Details(pokemon: any) {
    console.log(pokemon);
    const { activePokemon,  dispatch } = pokemon;
    const { id: idParams } = useParams();
    const navigate = useNavigate();

    
    
    
    
    useEffect(() => {
        GetPokemonByIdDetails(dispatch, idParams, navigate);
    }, []);
    
    // let hability = activePokemon.abilities.map((ability: any) => ability.ability.name);
    if(pokemon.loading) {
        return <h1>Loading...</h1>;
    }
    
    
    console.log(activePokemon.base_experience);
    
    
const upperCaseLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
  return (
      <>
    <ContainerPai color={`${activePokemon.types[0].type.name}`}>
        <ImgDiv>
            <ArrowName>
                <ArrowImg src={arrow} alt="arrow" onClick={() => navigate("/")}/>
                <NamePokemon>{upperCaseLetter(activePokemon.name)}</NamePokemon>
            </ArrowName>
            <img src={pokeCard} alt="pokebola" />
        </ImgDiv>
            {activePokemon.abilities[0].ability.name}
            {activePokemon.types[0].type.name}
       
        
      </ContainerPai>
    </>
    
  )
}

//trazer o active pokemon
const mapStateToProps = (state: any) => ({
    activePokemon: state.pokeReducer.activePokemon,
    loading: state.pokeReducer.loading,
});


export default connect(mapStateToProps)(Details);