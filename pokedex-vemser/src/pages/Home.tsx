import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../api";
import { getPokemons } from "../store/actions/PokeAction";
import { ColorDiv } from "./Home.styles";

const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  
  console.log(pokemons.data);
  
  
  
  useEffect(() => {
    getPokemons(dispatch);
    // console.log(pokemons);
  }, []);

  
  return (
    <div>
      <ul> 
    
      {pokemons.map((poke: any) => (
          <li>
            <div>
              <ColorDiv color={poke.data.color.name}>

              <h3>{poke.data.name}</h3>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.data.id}.svg`}
                alt=""
              />
              
              <p>{poke.data.color.name}</p>
              </ColorDiv>
            </div>
          </li>
        ))}
      
      

         
        
      </ul>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  pokemons: state.pokeReducer.pokemons,
});
export default connect(mapStateToProps)(Home);
