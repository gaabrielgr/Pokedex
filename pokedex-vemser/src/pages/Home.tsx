import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../api";
import { GetPokemons } from "../store/actions/PokeAction";
import { ColorDiv } from "./Home.styles";

const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  

  
  console.log(pokemons);
  
  useEffect(() => {
    GetPokemons(dispatch);    
  }, []);
  
  if(pokemon.loading) {
    return ( <h1>Loading...</h1> )
  }
  
  const upperCaseLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //criar função para colocar zero a esquerda
  const zeroLeft = (num: number) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };
  
  return (
      <ul> 
    
      {pokemons.map((poke: any) => (
            
          <li>
              
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                alt="imagem do pokemon"
              />
              
              <h1>{upperCaseLetter(poke.name)}</h1>
              {poke.name}
              {zeroLeft(poke.id)}

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
