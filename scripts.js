const baseURL = 'https://pokeapi.co/api/v2';


let formElement = document.getElementById('search-form');
let listElement = document.getElementById('pokemon-list');
let totalPokemon = 151; 

function randomPokemon() {
    return Math.floor((Math.random() * totalPokemon) +1);
}

// Show a faded out Pokemon and an invisible name

function fetchPokemonList() {


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

    pokemonTitle.innerText = `It's ${pokemonData.name}`;
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonType1.innerText = `${pokemonData.name} is a Pokemon of the  ${pokemonData.types[0].type.name} type.`;


    pokemonCard.classList.add('pokemon-card');
    pokemonTitle.classList.add('pokemon-title');
    pokemonImage.classList.add('pokemon-image');
    pokemonType1.classList.add('pokemon-type1');

    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonType1);
    
    listElement.appendChild(pokemonCard);
}


fetchPokemonList();

$(':radio[name="generation"]').change(function() {
    var totalPokemon = $(this).filter(':checked').val();
    window.location.reload();
    });

    