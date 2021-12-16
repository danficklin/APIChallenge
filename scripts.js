const baseURL = 'https://pokeapi.co/api/v2';

// const totalPokemon = [1, 2, 3, 4, 5]

// const randomize = totalPokemon[Math.floor(Math.random() * totalPokemon.length)];

let formElement = document.getElementById('search-form');
let listElement = document.getElementById('pokemon-list');




// Show a faded out Pokemon and an invisible name

function fetchPokemonList() {
// pokemon/1 returns the first Pokemon, 
    // so if I can get a random number in there through 
    // another function I can randomize it
    fetch(`${ baseURL }/pokemon?limit=1&offset=0`) 
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            for(var pokemon of jsonData.results){
                fetchPokemon(pokemon);
            }
        })
    }
function fetchPokemon(pokemon){
    fetch(`${ baseURL }/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            displayPokemon(jsonData);
        })
}

function fetchPokemonList() {
    fetch(`${ baseURL }/pokemon?limit=1&offset=0`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            for(var pokemon of jsonData.results){
                fetchPokemon(pokemon);
            }
        })
    }
function fetchPokemon(pokemon){
    fetch(`${ baseURL }/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            displayPokemon(jsonData);
        })
}

function displayPokemon(pokemonData) {
    let pokemonCard = document.createElement('li');
    let pokemonTitle = document.createElement('h2');
    let pokemonImage = document.createElement('img');

    pokemonTitle.innerText = pokemonData.name;
    pokemonImage.src = pokemonData.sprites.front_default;


    pokemonCard.classList.add('pokemon-card');
    pokemonTitle.classList.add('pokemon-title');
    pokemonImage.classList.add('pokemon-image');

    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);

    
    listElement.appendChild(pokemonCard);
}



fetchPokemonList();




    
