const $mainScreen = document.querySelector('.main-screen')
const $pokeName = document.querySelector('.poke-name');
const $pokeID = document.querySelector('.poke-id');
const $pokeFrontImage = document.querySelector('.poke-front-image');
const $pokeBackImage = document.querySelector('.poke-Back-image');
const $pokeTypeOne = document.querySelector('.poke-type-one');
const $pokeTypeTwo = document.querySelector('.poke-type-two');
const $pokeWeight = document.querySelector('.poke-weight');
const $pokeHeight = document.querySelector('.poke-height');

fetch('https://pokeapi.co/api/v2/pokemon/234')
.then(response => response.json())
.then(data=>{
    $mainScreen.classList.remove('hide');
    $pokeName.textContent = data['name'];
    $pokeID.textContent = data['id']
    $pokeWeight.textContent = data['weight']/10 +' kg';    
    $pokeHeight.textContent = data['height']/10 +' m';
    $pokeTypeOne.textContent = data['types'][0]['type']['name'];
    $pokeTypeTwo.textContent = data['types'][1]?data['types'][1]['type']['name']:$pokeTypeTwo.classList.add('hide');;

})