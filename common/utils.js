export function findById(items, name){
    //Looping array
    for (let i = 0; i < items.length; i++){
        const item = items[i];

        if (item.name === name) {
            return item;
        }
    }
    return null;
}

export function getEncountered(){
    const rawEncountered = localStorage.getItem('ENCOUNTERED');
    const encountered = JSON.parse(rawEncountered) || [];
    return encountered;
}
export function pushToLocal(array){
    const stringPokemon = JSON.stringify(array);
    localStorage.setItem('Captured', stringPokemon);
}