const baseURL = 'https://pokeapi.co/api/v2';


let formElement = document.getElementById('search-form');
let listElement = document.getElementById('pokemon-list');
let totalPokemon = 151; 

function randomPokemon() {
    return Math.floor((Math.random() * totalPokemon) +1);
}

// Show a faded out Pokemon and an invisible name

function fetchPokemonList() {

// pokemon/1 returns the first Pokemon, pokemon/2 returns the second etc., 
// so if I can get a random number in there somehow I can randomize which appears.

//

    fetch(`${ baseURL }/pokemon/${ randomPokemon() }`) 
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            console.log(jsonData.types[0].type.name);
                displayPokemon(jsonData);
            }
        )}

function displayPokemon(pokemonData) {
    let pokemonCard = document.createElement('li');
    let pokemonTitle = document.createElement('h2');
    let pokemonImage = document.createElement('img');
    let pokemonType1 = document.createElement('h3');
    // let pokemonType2 = document.createElement('h2');

    pokemonTitle.innerText = `It's ${pokemonData.name}`;
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonType1.innerText = `${pokemonData.name} is a ${pokemonData.types[0].type.name} type Pokemon.`;
    // pokemonType2.innerText = pokemonData.types[1].type.name;


    pokemonCard.classList.add('pokemon-card');
    pokemonTitle.classList.add('pokemon-title');
    pokemonImage.classList.add('pokemon-image');
    pokemonType1.classList.add('pokemon-type1');
    // pokemonType2.classList.add('pokemon-type2');

    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonType1);
    // pokemonCard.appendChild(pokemonType2);
    
    listElement.appendChild(pokemonCard);
}

// How can I add a string of text before the name or type ex. "It's 'pokemon.name' "
// or "pokemon.name is a types.0.name and types.1.name type pokemon."

fetchPokemonList();