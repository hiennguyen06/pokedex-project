import { elements, capitalizeFirstLetter } from './base'; 

export const clearPokemon = () => {
    elements.singlePokemon.innerHTML = '';
};

export const clearAllPokemons = () => {
    elements.allPokemons.innerHTML = '';
};

export const clearSinglePokemon = () => {
    elements.pokemon.innerHTML = '';
};

export const clearLeftSide = () => {
    elements.leftside.innerHTML = '';
};




export const renderSinglePokemon = (pokemon, isLiked) => {

    const genderF = pokemon.genderRatioFemale == '-12.5% Female' ? "genderless" : pokemon.genderRatioFemale
    const genderM = pokemon.genderRatioMale == '112.5% Male' ? "" : pokemon.genderRatioMale
    const capitalName = capitalizeFirstLetter(pokemon.name)

    const markup = `

        <div class="pokemon-nav">
            <button class="goback-btn"><i class="fas fa-arrow-left"></i></button>
            <span>POKEMON DETAIL</span>

            <button class="fav-btn"><i class="${ isLiked ? 'fas fa-star' : 'far fa-star'}"></i></button>
        </div>
        
        <div class="pokemon__img">
            <button class="prev-pokemon" style="justify-self: flex-start;"><i class="fas fa-angle-left"></i></button>
            <img src="${pokemon.image}">
            <button class="next-pokemon" style="justify-self: flex-end;"><i class="fas fa-angle-right"></i></button>
        </div>

        <div class="pokemon-title">
            <p class="pokemon-title__id">#${pokemon.id.toString().padStart(3, '0')}</p>
            <p class="pokemon-title__name">${capitalName}</p>
            <p class="pokemon-title__type" style="background-color: ${pokemon.color}">${pokemon.type}</p>
        </div>

        <div class="pokemon-about">

        <div class="pokemon-about__container">
                <p class="pokemon-about__label">Height<span>:</span></p>
                <p class="pokemon-about__data">${pokemon.height}m</<p>
                <p class="pokemon-about__label">Weight<span>:</span></p>
                <p class="pokemon-about__data">${pokemon.weight}kg</<p>
                <p class="pokemon-about__label">Abilities<span>:</span></p>
                <p class="pokemon-about__data about-capitalize">${pokemon.ability}</p>
                <p class="pokemon-about__label">Gender<span>:</span></p>
                <p class="pokemon-about__data">${genderF}, ${genderM}</<p>
                <p class="pokemon-about__label">Egg Group<span>:</span></p>
                <p class="pokemon-about__data about-capitalize">${pokemon.eggGroup}</<p>
            </div>

            
        </div>

        <div class="pokemon-description">
            <p class="pokemon__heading">Pokedex Entry</p>
            <p class="pokemon-description__entry">${pokemon.desc}</p>
        </div>

        
        <div class="stats-info">
            <p class="pokemon__heading">Stats</p>

            <div class="stats-info__container">
                <p class="stats-info__label">HP</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.hp}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.hp}%"></div>
                    </div>
                </div>
                <p class="stats-info__label">ATK</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.attack}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.attack}%"></div>
                    </div>
                </div>
                <p class="stats-info__label">DEF</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.defense}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.defense}%"></div>
                    </div>
                </div>
                <p class="stats-info__label">SPD</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.speed}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.speed}%"></div>
                    </div>
                </div>
                <p class="stats-info__label">SPA</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.specialAttack}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialAttack}%"></div>
                    </div>
                </div>
                <p class="stats-info__label">SPD</p>
                <div class="stats-info__stat">
                    <p class="stats-info__data">${pokemon.stat.specialDefense}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialDefense}%"></div>
                    </div>
                </div>
            </div>
        </div>

        
    `
    elements.singlePokemon.insertAdjacentHTML('afterbegin', markup);
};


// export const renderAbout = pokemon => {

//     const genderF = pokemon.genderRatioFemale == '-12.5% Female' ? "genderless" : pokemon.genderRatioFemale
//     const genderM = pokemon.genderRatioMale == '112.5% Male' ? "" : pokemon.genderRatioMale

//     const markup = `
//         <div class="about-info">
//             <p class="about-info__label">Description:</p>
//             <p class="about-info__data">${pokemon.desc}</p>
//             <p class="about-info__label">Height:</p>
//             <p class="about-info__data">${pokemon.height}m</p>
//             <p class="about-info__label">Weight:</p>
//             <p class="about-info__data">${pokemon.weight}kg</p>
//             <p class="about-info__label">Abilities:</p>
//             <p class="about-info__data about-capitalize">${pokemon.ability}</p>
//             <p class="about-info__label">Gender:</p>
//             <p class="about-info__data">${genderF} ${genderM}</p>
//             <p class="about-info__label">Egg Group:</p>
//             <p class="about-info__data about-capitalize">${pokemon.eggGroup}</p>
//         </div>
//     `
//     elements.about.insertAdjacentHTML('afterbegin', markup);
// };

// export const renderStats = pokemon => {
//     const markup = `
//         <div class="about-info">
//             <p class="about-info__label">HP</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.hp}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.hp}%"></div>
//                 </div>
//             </div>
//             <p class="about-info__label">ATK</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.attack}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.attack}%"></div>
//                 </div>
//             </div>
//             <p class="about-info__label">DEF</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.defense}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.defense}%"></div>
//                 </div>
//             </div>
//             <p class="about-info__label">SPD</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.speed}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.speed}%"></div>
//                 </div>
//             </div>
//             <p class="about-info__label">SPA</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.specialAttack}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialAttack}%"></div>
//                 </div>
//             </div>
//             <p class="about-info__label">SPD</p>
//             <div class="about-info__stat">
//                 <p class="about-info__data">${pokemon.stat.specialDefense}</p>
//                 <div class="progress">
//                     <div class="progress-bar" role="progressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.stat.specialDefense}%"></div>
//                 </div>
//             </div>
//         </div>
//     `
//     elements.base.insertAdjacentHTML('afterbegin', markup);

// };

// export const renderEvolutionChain = pokemon => {
//     // console.log(pokemon);
//     const imageOne = pokemon.evoImageOne == 'https://pokeres.bastionbot.org/images/pokemon/undefined.png' ? "" : pokemon.evoImageOne;
//     const imageTwo = pokemon.evoImageTwo == 'https://pokeres.bastionbot.org/images/pokemon/undefined.png' ? "" : pokemon.evoImageTwo;

//     const markup = `
//     <div>
//         <div class="evolution__card">
//             <div class="evolution__card--image">
//                 <img class="evolution-images" src="${pokemon.evoImageBase}">
//             </div>
//             <div class="evolution__card--info">
//                 <h4>${pokemon.evolutionBase}</h4>
//                 <p>Unevolved</p>
//             </div>
//         </div>

//         <div class="evolution__card">
//             <div class="evolution__card--image">
//                 <img class="evolution-images" src="${imageOne}">
//             </div>
//             <div class="evolution__card--info">
//                 <h4>${pokemon.evolutionOne}</h4>
//                 <p>${pokemon.evolutionBase.charAt(0).toUpperCase() + pokemon.evolutionBase.slice(1)} reaches level ${pokemon.levelBase}</p>
//             </div>
//         </div>

//         <div class="evolution__card">
//             <div class="evolution__card--image">
//                 <img class="evolution-images" src="${imageTwo}">
//             </div>
//             <div class="evolution__card--info">
//                 <h4>${pokemon.evolutionTwo}</h4>
//                 <p>${pokemon.evolutionOne.charAt(0).toUpperCase() + pokemon.evolutionOne.slice(1)} reaches level ${pokemon.levelTwo}</p>
//             </div>
//         </div>
//     </div>

//     `

//     elements.evolution.insertAdjacentHTML('afterbegin', markup);

// };

// export const renderMoves = pokemon => {
    

//     console.log(pokemon);
//     const markup = pokemon.moves.map(pokeman => `
//         <li>
//             <div class="moves-list__name">
//                 <span><strong>${pokeman.moveName.replace('-', ' ')}</strong></span><br>
//                 <span>Level ${pokeman.moveLevel}</span>
//             </div>
//             <div class="moves-list__method">
//                 ${pokeman.moveMethod.replace('-', ' ')}
//             </div>
//         </li>
//     `).join('');

//     elements.move.insertAdjacentHTML('afterbegin', markup);
// };


// <div class="pokemon-about__container">
//                 <p class="pokemon-about__label"><span>Height</span><span>:</span><span class="pokemon-about__data">${pokemon.height}m</span</p>
//                 <p class="pokemon-about__label"><span>Weight</span><span>:</span><span class="pokemon-about__data">${pokemon.weight}kg</span</p>
//                 <p class="pokemon-about__label"><span>Abilities</span><span>:</span><span class="pokemon-about__data about-capitalize">${pokemon.ability}</span</p>
//                 <p class="pokemon-about__label"><span>Gender</span><span>:</span><span class="pokemon-about__data">${genderF}, ${genderM}</span</p>
//                 <p class="pokemon-about__label"><span>Egg Group</span><span>:</span><span class="pokemon-about__data about-capitalize">${pokemon.eggGroup}</span</p>
//             </div>