import { elements, capitalizeFirstLetter, getAllPokemons} from './base'; // name import

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

    const pokeName = capitalizeFirstLetter(result.name);
    const image = `https://pokeres.bastionbot.org/images/pokemon/${result.id}.png`;


    const markup = `
        <a class="pokedex-item__link" href=#${result.id}>
            <li class="pokedex-item">
                <div class="pokedex-item__img">
                    <img src="${image}">
                </div>
                <div class="pokedex-info">
                    <span class="pokedex-info__id">#${result.id.toString().padStart(3, '0')}</span><br>
                    <span class="pokedex-info__name">${pokeName}</span><br>                
                </div>                                      
            </li>
        </a>
    `
    elements.searchPokeList.insertAdjacentHTML('beforeend', markup);
};

