import capturaPokemon from "../manejadatos/manejaDatos.js";
import { datosPokemon,listadoDePokemones } from "../api/api.js";
import {capitalize} from './funciones.js'

const $mainScreen = document.querySelector('.main-screen');
const $cover = document.querySelector('.cover');
const $pokeName = document.querySelector('.poke-name');
const $pokeID = document.querySelector('.poke-id');
const $pokeFrontImage = document.querySelector('.poke-front-image');
const $pokeBackImage = document.querySelector('.poke-back-image');
const $pokeTypeOne = document.querySelector('.poke-type-one');
const $pokeTypeTwo = document.querySelector('.poke-type-two');
const $pokeWeight = document.querySelector('.poke-weight');
const $pokeHeight = document.querySelector('.poke-height');
const $pokeListItems = document.querySelectorAll('.list-item')
const $leftButton = document.querySelector('.left-button');
const $rightButton = document.querySelector('.right-button');
const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
];

let prevUrl = null;
let nextUrl = null;

const resetScreen = (types)=>{
    for (const type of types) {
        $mainScreen.classList.remove(type)
    }
    $pokeTypeTwo.classList.remove('hide')
}

const manejaPantalla = (pokemon)=>{
    $cover.classList.add('hide');
    resetScreen(TYPES);
    $mainScreen.classList.add(pokemon.types[0]['type']['name']);

}
const manejaPokemon = (pokemon)=>{
    $pokeID.textContent = '#' + (pokemon.id).toString().padStart(3,'0'); 
    $pokeName.textContent = capitalize(pokemon.name);
    $pokeTypeOne.textContent = capitalize(pokemon.types[0]['type']['name']);
    $pokeTypeTwo.textContent = pokemon.types[1]?capitalize(pokemon.types[1]['type']['name']):$pokeTypeTwo.classList.add('hide');
    $pokeFrontImage.src = pokemon.sprites["front_default"];
    $pokeBackImage.src = pokemon.sprites["back_default"];
    $pokeHeight.textContent = pokemon.height / 10 + 'm'; 
    $pokeWeight.textContent = pokemon.weight / 10 + 'kg';
}
const handleRightbutton = async (e)=>{
    if (nextUrl) {
        let pokeLista = (await listadoDePokemones(nextUrl));
        manejaListaDePokemones(pokeLista);
    }
}
const handleLeftbutton = async (e)=>{
    if (!nextUrl) {
        prevUrl='https://pokeapi.co/api/v2/pokemon?offset=1080&limit=20'
    }
    if (prevUrl) {
        let pokeLista = (await listadoDePokemones(prevUrl));
        manejaListaDePokemones(pokeLista);
    }
}
const handlePokeItem = async (e)=>{
    $cover.classList.remove('hide');
    let pokemon = capturaPokemon(await datosPokemon(e.target.textContent.split('.')[0]));
    manejaPantallaPokemon(pokemon);
}
 

$leftButton.addEventListener('click',handleLeftbutton)
$rightButton.addEventListener('click',handleRightbutton);
for (const item of $pokeListItems) {
    item.addEventListener('click',handlePokeItem)
}


export const manejaPantallaPokemon = pokemon => {
    manejaPantalla(pokemon);
    manejaPokemon(pokemon);
}
 
export const manejaListaDePokemones = (dataLista) => {
 
     const { results,next,previous } = dataLista;
     prevUrl = previous;
     nextUrl = next;
     for (let i = 0; i < $pokeListItems.length; i++) {
         const pokeItem = $pokeListItems[i];
         const resultData = results[i];
         if (resultData) {
             const { name,url } =resultData;
             let id = url.split('/')[url.split('/').length - 2];
             pokeItem.textContent = id + '. ' + capitalize(name);
            }else {
             pokeItem.textContent = '';
            }
        } 
}