export async function datosPokemon(id = 1){
    return (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
}
let URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';

export async function listadoDePokemones(url = URL){
    return (await fetch(url)).json()
}