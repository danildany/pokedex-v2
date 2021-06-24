export async function datosPokemon(id = 1){
    return (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
}
