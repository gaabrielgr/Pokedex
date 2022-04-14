import { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemons } from "../store/actions/PokeAction";
const Home = (pokemon: any) => {
  const { pokemons, dispatch } = pokemon;

  useEffect(() => {
    getPokemons(dispatch);
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((poke: any) => (
          <li key={poke.url.split("/")[6]}>
            <div>
              <h3>{poke.name}</h3>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  poke.url.split("/")[6]
                }.png`}
                alt=""
              />
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
