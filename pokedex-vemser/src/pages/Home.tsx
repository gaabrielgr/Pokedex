import { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemons } from "../store/actions/PokeAction";
const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;
  const {} = pokemons;
  useEffect(() => {
    getPokemons(dispatch);
  }, []);
  console.log(pokemons);

  return (
    <div>
      <ul>
        {pokemons.map((poke: any) => (
          <li>
            <div>
              <h3>{poke.data.name}</h3>
              <img
                src={poke.data.sprites.other.dream_world.front_default}
                alt=""
              />
              <p>{poke.data.types[0].type.name}</p>
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
