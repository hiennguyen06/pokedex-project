import { elements, capitalizeFirstLetter } from './base'; 

export const clearPokemon = () => {
    elements.singlePokemon.innerHTML = '';
};
export const clearAbout = () => {
    elements.about.innerHTML = '';
};

export const clearBaseStats = () => {
    elements.base.innerHTML = '';
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
};

export const renderAbout = pokemon => {

    const genderF = pokemon.genderRatioFemale == '-12.5% Female' ? "genderless" : pokemon.genderRatioFemale
    const genderM = pokemon.genderRatioMale == '112.5% Male' ? "" : pokemon.genderRatioMale

    const markup = `
        <div class="about-info">
                <p class="about-info__label">Description</p>
                <p class="about-info__data">${pokemon.desc}</p>
                <p class="about-info__label">Height</p>
                <p class="about-info__data">${pokemon.height}m</p>
                <p class="about-info__label">Weight</p>
                <p class="about-info__data">${pokemon.weight}kg</p>
                <p class="about-info__label">Abilities</p>
                <p class="about-info__data">${pokemon.ability}</p>
                <p class="about-info__label">Gender</p>
                <p class="about-info__data">${genderF} ${genderM}</p>
                <p class="about-info__label">Egg Group</p>
                <p class="about-info__data">${pokemon.eggGroup}</p>
                </div>
    `
    elements.about.insertAdjacentHTML('afterbegin', markup);
};

export const renderStats = pokemon => {
    const markup = `
        <div class="about-info">
            <p class="about-info__label">HP</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.hp}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.hp}%"></div>
                </div>
            </div>
            <p class="about-info__label">Attack</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.attack}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.attack}%"></div>
                </div>
            </div>
            <p class="about-info__label">Defense</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.defense}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.defense}%"></div>
                </div>
            </div>
            <p class="about-info__label">Speed</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.speed}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.speed}%"></div>
                </div>
            </div>
            <p class="about-info__label">Sp. Atk</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.specialAttack}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialAttack}%"></div>
                </div>
            </div>
            <p class="about-info__label">Sp. Def</p>
            <div class="about-info__stat">
                <p class="about-info__data">${pokemon.stat.specialDefense}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialDefense}%"></div>
                </div>
            </div>
        </div>
    `
    elements.base.insertAdjacentHTML('afterbegin', markup);

};