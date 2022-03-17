import { datosPokemon, listadoDePokemones } from "./api/api.js";
import capturaPokemon from "./manejadatos/manejaDatos.js";
import { manejaListaDePokemones, manejaPantallaPokemon } from "./ui/ui.js";

export const Inicializar = async () => {
  manejaListaDePokemones(await listadoDePokemones());
  const pokemon = capturaPokemon(await datosPokemon());
  manejaPantallaPokemon(pokemon);
};
