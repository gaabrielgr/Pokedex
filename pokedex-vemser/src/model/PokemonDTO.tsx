import { TypesDTO } from "./TypesDTO";

export interface PokemonDTO {
  pokemon?: {};
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {};
  stats: [];
  types: [TypesDTO];
  weight: number;
}
