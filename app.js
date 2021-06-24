import { datosPokemon } from "./api.js";
import { capitalize,resetScreen } from "./ui.js";
const $mainScreen = document.querySelector('.main-screen')
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



/*

const resetScreen = (types)=>{
    for (const type of types) {
        $mainScreen.classList.remove(type)
    }
}
const capitalize = (str)=>{
    let capStr = str[0].toUpperCase() + str.substr(1);
    return capStr
}

const handleRightbutton = (e)=>{
    if (nextUrl) {
         fetchPokelist(nextUrl); 
    }
}
const handleLeftbutton = (e)=>{
    if (prevUrl) {
         fetchPokelist(prevUrl); 
    }
}
const handlePokeItem = (e)=>{
   fetchPokemon(e.target.textContent.split('.')[0]);
}
const fetchPokelist = url => {
    fetch(url)
.then(response => response.json())
.then(data=>{
    const { results,next,previous } = data;
    prevUrl = previous;
    nextUrl = next;
    for (let i = 0; i < $pokeListItems.length; i++) {
        const pokeItem = $pokeListItems[i];
        const resultData = results[i];
        const { name,url } =resultData;
        if (resultData) {
            let id = url.split('/')[url.split('/').length - 2];
            pokeItem.textContent = id + '. ' + capitalize(name);
        } else {
            pokeItem.textContent = '';
        }
        
    }
});

}
const fetchPokemon = (id = 1) =>{
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(response => response.json())
.then(data=>{
    resetScreen(TYPES);
    $mainScreen.classList.remove('hide');
    $pokeName.textContent = capitalize(data['name']);
    $pokeID.textContent = '#'+(data['id']).toString().padStart(3,'0')
    $pokeWeight.textContent = data['weight']/10 +' kg';    
    $pokeHeight.textContent = data['height']/10 +' m';
    $pokeTypeOne.textContent = capitalize(data['types'][0]['type']['name']);
    $pokeTypeTwo.textContent = data['types'][1]?capitalize(data['types'][1]['type']['name']):$pokeTypeTwo.classList.add('hide');;
    $pokeFrontImage.src = data['sprites']['front_default'] || '';
    $pokeBackImage.src = data['sprites']['back_default'] || '';
    $mainScreen.classList.add(data['types'][0]['type']['name']);
});
}

$leftButton.addEventListener('click',handleLeftbutton)
$rightButton.addEventListener('click',handleRightbutton);
for (const item of $pokeListItems) {
    item.addEventListener('click',handlePokeItem)
}

const start =  () =>{
fetchPokelist('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
fetchPokemon();
}

start();
*/


class Pokemon {
    constructor(id, name, types = [], sprites = {}, height, weight) {
      this.id = id;
      this.name = name;
      this.types = types;
      this.sprites = sprites;
      this.height = height;
      this.weight = weight;
    }
}



const capturaPokemon = (data)=>{
    const {
        name,
        id,
        types,
        sprites,
        height,
        weight
    } = data;
    return new Pokemon(id,name,types,sprites,height,weight);
}


const muestraPokemon = pokemon => {
    $mainScreen.classList.remove('hide');
    $pokeID.textContent = pokemon.id; 
    $pokeName.textContent = capitalize(pokemon.name);
    $pokeTypeOne.textContent = capitalize(pokemon.types[0]['type']['name']);
    $pokeTypeTwo.textContent = pokemon.types[1]?capitalize(pokemon.types[1]['type']['name']):$pokeTypeTwo.classList.add('hide');;
    $pokeFrontImage.src = pokemon.sprites["front_default"];
    $pokeBackImage.src = pokemon.sprites["back_default"];
    $pokeHeight.textContent = pokemon.height / 10 + 'm'; 
    $pokeWeight.textContent = pokemon.weight / 10 + 'kg';
}
let pokemon = capturaPokemon(await datosPokemon(225));
muestraPokemon(pokemon);