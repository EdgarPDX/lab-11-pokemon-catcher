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