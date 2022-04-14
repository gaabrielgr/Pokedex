import { combineReducers } from "redux";
import pokeReducer from "./PokeReducer";
export const rootReducer = combineReducers({
  pokeReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
