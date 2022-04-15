import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../api";
import { GetPokemons } from "../store/actions/PokeAction";
import { ColorDiv } from "./Home.styles";

const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  

  
  console.log(pokemon.loading);
  
  useEffect(() => {
    GetPokemons(dispatch);
    console.log(pokemons.loading);
    
  }, []);
  
  if(pokemon.loading) {
    return ( <h1>Loading...</h1> )
  }
  
  
  return (
      <ul> 
    
      {pokemons.map((poke: any) => (
            
          <li key={poke.id}>
              <ColorDiv color={poke.color.name}>
              {/* primeira letra do nome do pokemon em maiuscula */}
             
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                alt=""
              />
              {poke.name}

              {/* <p>{poke.data.color.name}</p> */}
              </ColorDiv>
          </li>
            
        ))}
      </ul>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
  loading: state.pokeReducer.loading,
});

export default connect(mapStateToProps)(Home);
