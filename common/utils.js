export function findById(items, name){
    //Looping array
    for (let i = 0; i < items.length; i++){
        const item = items[i];

        if (item.pokemon === name) {
            return item;
        }
    }
    return null;
}

export function getPokemonData(){
    const rawEncountered = localStorage.getItem('POKEDATA');
    const encountered = JSON.parse(rawEncountered) || [];
    return encountered;
}
export function pushCaptured(array){
    const stringPokemon = JSON.stringify(array);
    localStorage.setItem('POKEDATA', stringPokemon);
}

export function encounteredPoke(encounteredArray, pokemon){
    const encountered = findById(encounteredArray, pokemon.pokemon);
    if (!encountered) {
    
        let newPokemon = {
            pokemon: pokemon.pokemon,
            captured:0,
            encountered:1,
        };
        encounteredArray.push(newPokemon);
    } else {
        encountered.encountered++;
    }
    pushEncountered(encounteredArray);
            

    
}

export function pushEncountered(array){
    const stringPokemon = JSON.stringify(array);
    localStorage.setItem('POKEDATA', stringPokemon);
}