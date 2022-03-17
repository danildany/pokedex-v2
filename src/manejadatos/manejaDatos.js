import { Pokemon } from "../entidades/entidades.js";

const capturaPokemon = (data) => {
  const { name, id, types, sprites, height, weight } = data;
  return new Pokemon(id, name, types, sprites, height, weight);
};
export default capturaPokemon;
