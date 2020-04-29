import { elements, capitalizeFirstLetter } from './base'; 

export const clearPokemon = () => {
    elements.singlePokemon.innerHTML = '';
};

export const renderSinglePokemon = pokemon => {

    const capitalName = capitalizeFirstLetter(pokemon.name)

    const markup = `
        <div class="pokemon-single">
            <div class="pokemon-info">
                <h2 class="pokemon-info__id">#${pokemon.id}</h2>
                <h1 class="pokemon-info__name">${capitalName}</h1>
                <span class="pokemon-info__type">${pokemon.type}</span>
            </div>

            <div class="pokemon__img">
                <img src="${pokemon.image}">
            </div>
        </div>
    `
    elements.singlePokemon.insertAdjacentHTML('afterbegin', markup);

}
