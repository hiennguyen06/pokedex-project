import { elements } from './base'; // name import

export const getInput = () => elements.searchInput.value; 

// clear the user input
export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResult = () => {
    elements.searchPokeList.innerHTML = "";
}

export const renderPokemon = pokemon => {
    const markup = `
        <div class="pokemon__card">
            <a class="pokemon__card--link" href=#${pokemon.id}>
            <img src="${pokemon.sprites.front_default}">
                <div class="pokemon__card--data">
                    <p class="pokemon__title">${pokemon.name}</p>
                    <p class="pokemon__year">${pokemon.weight}</p>
                </div>                                      
            </a>
        </div>
    `
    elements.searchPokeList.insertAdjacentHTML('beforeend', markup);
};

// export const renderPokemons = pokemons => {
//     pokemons.forEach(renderPokemon);
// }