import { elements, capitalizeFirstLetter } from './base'; // name import

export const getInput = () => elements.searchInput.value; 

// clear the user input
export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResult = () => {
    elements.searchPokeList.innerHTML = "";
}

export const clearAllPokemons = () => {
    elements.allPokemons.innerHTML = "";
}

export const renderResults = result => {

    const pokeName = capitalizeFirstLetter(result.name)

    const markup = `
        <div class="pokemon__card">
            <a class="pokemon__card--link" href=#${result.id}>
            <img src="${result.sprites.front_default}">
                <div class="pokemon__card--data">
                    <p class="pokemon__name">${pokeName}</p>
                </div>                                      
            </a>
        </div>
    `
    elements.searchPokeList.insertAdjacentHTML('beforeend', markup);
};

