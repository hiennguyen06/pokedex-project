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
export const clearEvolutionChain = () => {
    elements.evolution.innerHTML = '';
};

export const clearMoves = () => {
    elements.move.innerHTML = '';
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
                <p class="about-info__data about-capitalize">${pokemon.ability}</p>
                <p class="about-info__label">Gender</p>
                <p class="about-info__data">${genderF} ${genderM}</p>
                <p class="about-info__label">Egg Group</p>
                <p class="about-info__data about-capitalize">${pokemon.eggGroup}</p>
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

export const renderEvolutionChain = pokemon => {
    // console.log(pokemon);
    const imageOne = pokemon.evoImageOne == 'https://pokeres.bastionbot.org/images/pokemon/undefined.png' ? "" : pokemon.evoImageOne;
    const imageTwo = pokemon.evoImageTwo == 'https://pokeres.bastionbot.org/images/pokemon/undefined.png' ? "" : pokemon.evoImageTwo;

    const markup = `
    <div>
        <h3>Evolution Line</h3>

        <div class="evolution__card">
            <div class="evolution__card--image">
                <img class="evolution-images" src="${pokemon.evoImageBase}">
            </div>
            <div class="evolution__card--info">
                <h4>${pokemon.evolutionBase}</h4>
                <p>Unevolved</p>
            </div>
        </div>

        <div class="evolution__card">
            <div class="evolution__card--image">
                <img class="evolution-images" src="${imageOne}">
            </div>
            <div class="evolution__card--info">
                <h4>${pokemon.evolutionOne}</h4>
                <p>${pokemon.evolutionBase.charAt(0).toUpperCase() + pokemon.evolutionBase.slice(1)} reaches level ${pokemon.levelBase}</p>
            </div>
        </div>

        <div class="evolution__card">
            <div class="evolution__card--image">
                <img class="evolution-images" src="${imageTwo}">
            </div>
            <div class="evolution__card--info">
                <h4>${pokemon.evolutionTwo}</h4>
                <p>${pokemon.evolutionOne.charAt(0).toUpperCase() + pokemon.evolutionOne.slice(1)} reaches level ${pokemon.levelTwo}</p>
            </div>
        </div>
    </div>

    `

    elements.evolution.insertAdjacentHTML('afterbegin', markup);

};

export const renderMoves = pokemon => {
    

    console.log(pokemon);
    const markup = pokemon.moves.map(pokeman => `
        <li>
            <div class="moves-list__name">
                <span><strong>${pokeman.moveName.replace('-', ' ')}</strong></span><br>
                <span>Level ${pokeman.moveLevel}</span>
            </div>
            <div class="moves-list__method">
                ${pokeman.moveMethod.replace('-', ' ')}
            </div>
        </li>
    `).join('');

    elements.move.insertAdjacentHTML('afterbegin', markup);
};
