let card;
const total_pokemon = 500;

window.onload = start;

function random(min, max) {

return Math.floor(Math.random() * (max - min + 1) + min);
}

function start() {
card = document.getElementById("card");
window.addEventListener("click", drawCard);
}

function drawCard(event) {
card.innerHTML = "";
callData(random(1, total_pokemon));
}

function callData(id) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then((response) => response.json())
.then(function (data) {
let name = data.name;
let url = data.sprites.other.dream_world.front_default;
if (name && url) {
printCard(name, url);
}
});
}

function printCard(name, url) {
let template = `<div class="target">
<img src="${url}" alt="" >
<br>
<label for="">
${name}
</label> <br>
<a href="">Give me another pokemon!</a>
</div>`;
card.innerHTML += template;
}
