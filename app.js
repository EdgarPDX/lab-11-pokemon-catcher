import Pokemon from './Data/pokemon.js';
import { getRandomPokemon } from './Pokemon-pages/getRandomPokemon.js';
import { findById, pushToLocal, getStorage } from './common/utils.js';
// import functions and grab DOM elements
const nextButton = document.getElementById('next-button');
const resultsButton = document.getElementById('results-button');
const resultsSpan = document.getElementById('captured-pokemon');
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
    
    resultsSpan.textContent = `You have captured:${capturedPokemon.length} POKEMON`;
    encounteredPokemon.push(randomPokemon1, randomPokemon2, randomPokemon3);
    // console.log(encounteredPokemon);
    
}
function eventHandler(e) { 
    if (capturedPokemon.length === 10){
        nextButton.classList.add('hidden');
        resultsButton.classList.remove('hidden');
        e.target.value.checked = false;
    
    } 
}

nextButton.addEventListener('click', ()=>{
    
    eventHandler();
    //console.log(cars.id);
    const local = getStorage();
    const clickedPokemon = document.querySelector('input:checked');
    const userChoice = clickedPokemon.value;

    const capturedPokemon = findById(remainingPokemon, userChoice.pokemon);
       
        //need to increment quantity if item is already there || 
    if (capturedPokemon) {
        capturedPokemon.captured++;
    } else {
        const newPokemon = {
            id: userChoice.pokemon,
            captured:1,
            encountered:1
        };
        local.push(newPokemon);
    }
    console.log(local);
    pushToLocal(capturedPokemon);
        


        
   
    
        // console.log(userChoice);
        // console.log(capturedPokemon);
    
    setPage();
    
});

setPage();








