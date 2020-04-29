import axios from "axios";

export const elements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchPokeList: document.querySelector('.pokemons-results'),
    allPokemons: document.querySelector('.pokedex'),
    singlePokemon: document.querySelector('.pokemon'),
};

export const elementStrings = {
    loader: 'loader'
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Loader Functions
export const renderLoader = parent => {
    const loader = `
        <div class= "${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-spinner2"></use>
            </svg>
            <span class="loading">loading</span>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};

// Render all Pokemons to the Home Page
export const getAllPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

    const res = await axios(url);
    const data = res.data.results;
    // console.log(data);

    const pokemon = data.map((result, index) => ({
        name: result.name,
        id: index + 1,
        image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
    }));


    // console.log(pokemon); // an array of objects

    renderPokemons(pokemon);
}


const displayAllPokemons = async (pokemon) => {

    const pokeName = capitalizeFirstLetter(pokemon.name);

    // const typesURL = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`;
    // const res = await axios(typesURL);
    // console.log(res)

    // const data = res.data.types;
    // const type = data.map(type => type.type.name)
    // const type1 = type[0];
    // const type2 = type.length == 2 ? type[1] : " ";
    
    const markup = `
        <a class="pokedex-item__link" href=#${pokemon.id}>
            <li class="pokedex-item">
                <div class="pokedex-item__img">
                    <img src="${pokemon.image}">
                </div>
                <div class="pokedex-info">
                    <span class="pokedex-info__id">#${pokemon.id}</span><br>
                    <span class="pokedex-info__name">${pokeName}</span><br>                
                </div>                                      
            </li>
        </a>
    `
    elements.allPokemons.insertAdjacentHTML('beforeend', markup);
};

const renderPokemons = pokemons => {
    pokemons.forEach(displayAllPokemons);
}
