import Pokemon from './Data/pokemon.js';
import { getRandomPokemon } from './Pokemon-pages/getRandomPokemon.js';
import { findById } from './common/utils.js';
// import functions and grab DOM elements
const nextButton = document.getElementById('button');

// initialize state
let remainingPokemon = Pokemon.slice();
let capturedPokemon = [];
let encounteredPokemon = [];

// set event listeners to update state and DOM
function setPage(){
    const randomPokemon1 = getRandomPokemon(remainingPokemon);
    let randomPokemon2 = getRandomPokemon(remainingPokemon);
    let randomPokemon3 = getRandomPokemon(remainingPokemon);

    while (randomPokemon1.id === randomPokemon2.id || randomPokemon1 === randomPokemon3 || randomPokemon2 === randomPokemon3){
        randomPokemon2 = getRandomPokemon(remainingPokemon);
        randomPokemon3 = getRandomPokemon(remainingPokemon);
    
}

// console.log(randomPokemon1, randomPokemon2, randomPokemon3);

    const labels = document.querySelectorAll('label');
// console.log(labels);

//Creating labels for the 3 pokemon
    const firstLabel = labels[0];
    const pokeName1 = firstLabel.children[0];
    const input1 = firstLabel.children[1];
    const img1 = firstLabel.children[2];
    pokeName1.textContent = randomPokemon1.pokemon;
    img1.src = randomPokemon1.url_image;
    input1.value = randomPokemon1.pokemon;
    input1.addEventListener('click', eventHandler);

    const secondLabel = labels[1];
    const pokeName2 = secondLabel.children[0];
    const input2 = secondLabel.children[1];
    const img2 = secondLabel.children[2];
    pokeName2.textContent = randomPokemon2.pokemon;
    img2.src = randomPokemon2.url_image;
    input2.value = randomPokemon2.pokemon;
    input2.addEventListener('click', eventHandler);

    const thirdLabel = labels[2];
    const pokeName3 = thirdLabel.children[0];
    const input3 = thirdLabel.children[1];
    const img3 = thirdLabel.children[2];
    pokeName3.textContent = randomPokemon3.pokemon;
    img3.src = randomPokemon3.url_image;
    input3.value = randomPokemon3.pokemon;
    input3.addEventListener('click', eventHandler);

}





function eventHandler(e) { 
    console.log(e.target.value);
}



nextButton.addEventListener('click', ()=>{
    const clickedPokemon = document.querySelector('input:checked');
    const userChoice = clickedPokemon.value;
    const pokemon = findById(remainingPokemon, userChoice.name);

    console.log(userChoice);
    capturedPokemon.push(pokemon);
    console.log(capturedPokemon);
    clickedPokemon.checked = false;
    
    setPage();
   
});

setPage();