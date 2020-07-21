export function getRandomPokemon(pokemonArray){
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    return pokemonArray[randomIndex];
}