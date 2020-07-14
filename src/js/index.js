// "https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=2
import axios from "axios";
import Search from './models/Search';
import Pokemon from './models/Pokemon';
import * as searchView from './views/searchView'; // import everything from searchView
import * as pokemonView from './views/pokemonView'; 
import { elements, getAllPokemons, renderLoader, clearLoader, } from './views/base';

// Global state of the app
const state = {}

// shows all pokemons

// pokemonView.clearSinglePokemon();
getAllPokemons();

const controlSearch = async () => {
    // get the query from the view
    const query = searchView.getInput(); //TODO
    // console.log(query);

    // if there is a query 
    if (query) {
        // new search object and add to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.searchPokeList)
        
        try {
            // Search for pokemons
            await state.search.getResults(); // this returns a promise
    
            // render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
            // console.log(state.search.result)
        }

        catch(error) {
            alert('Error finding Pokemon')
        }
    }
}

elements.searchForm.addEventListener('submit', e => { //whenever we submit a form, we prevent the default submit and then execute the controlSearch function
    e.preventDefault();
    controlSearch();
});


// Get a single Pokemon
// const p = new Pokemon(6)
// p.getPokemon();
// console.log(p);

const controlPokemon = async () => {

    // Get the id from the url
    const id = window.location.hash.replace('#', '');
    // console.log(id);

    if (id) {
        // Prepare the UI for changes
        
        pokemonView.clearPokemon();
        // pokemonView.clearAbout();
        // pokemonView.clearBaseStats();
        // pokemonView.clearEvolutionChain();
        // pokemonView.clearMoves();
        pokemonView.clearLeftSide();


        renderLoader(elements.singlePokemon);
        // Create new Pokemon object
        state.pokemon = new Pokemon(id);


        try {
            // Get the Pokemon Data
            await state.pokemon.getPokemon();
    
            // Render Pokemon
            // searchView.clearAllPokemons();

            clearLoader();

            pokemonView.renderSinglePokemon(state.pokemon)
            // pokemonView.renderAbout(state.pokemon)
            // pokemonView.renderStats(state.pokemon)
            // pokemonView.renderEvolutionChain(state.pokemon)
            // pokemonView.renderMoves(state.pokemon)
            console.log(state.pokemon);
        }
        catch (error) {
            console.log('Error finding Pokemon');
        }

    }
}


// window.addEventListener('hashchange', controlPokemon);
// window.addEventListener('load', controlPokemon);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlPokemon));

// Clear hash when reloading the page
document.location.hash = '';

// event listener increase hash by 1

// load controlPokemon



const controlNextPokemon = async () => {
    const hash = window.location.hash.replace('#', '');
    const newID = parseInt(hash) + 1;
    console.log(newID);

    if (newID) {
        // Prepare the UI for changes
        window.location.hash = newID;
        pokemonView.clearPokemon();
        // pokemonView.clearAbout();
        // pokemonView.clearBaseStats();
        // pokemonView.clearEvolutionChain();
        // pokemonView.clearMoves();
        pokemonView.clearAllPokemons();


        renderLoader(elements.singlePokemon);
        // Create new Pokemon object
        state.pokemon = new Pokemon(newID);


        try {
            // Get the Pokemon Data
            await state.pokemon.getPokemon();
    
            // Render Pokemon
            // searchView.clearAllPokemons();

            clearLoader();
            pokemonView.renderSinglePokemon(state.pokemon)
            pokemonView.clearPokemon();
            // pokemonView.renderAbout(state.pokemon)
            // pokemonView.renderStats(state.pokemon)
            // pokemonView.renderEvolutionChain(state.pokemon)
            // pokemonView.renderMoves(state.pokemon)
            console.log(state.pokemon);
        }
        catch (error) {
            console.log('Error finding Pokemon');
        }

    }
}

const controlPrevPokemon = async () => {
    const hash = window.location.hash.replace('#', '');
    const newID = parseInt(hash) - 1;
    console.log(newID);

    if (newID) {
        // Prepare the UI for changes
        window.location.hash = newID;
        pokemonView.clearPokemon();
        // pokemonView.clearAbout();
        // pokemonView.clearBaseStats();
        // pokemonView.clearEvolutionChain();
        // pokemonView.clearMoves();
        pokemonView.clearAllPokemons();


        renderLoader(elements.singlePokemon);
        // Create new Pokemon object
        state.pokemon = new Pokemon(newID);


        try {
            // Get the Pokemon Data
            await state.pokemon.getPokemon();
    
            // Render Pokemon
            // searchView.clearAllPokemons();

            clearLoader();
            pokemonView.renderSinglePokemon(state.pokemon)
            pokemonView.clearPokemon();
            // pokemonView.renderAbout(state.pokemon)
            // pokemonView.renderStats(state.pokemon)
            // pokemonView.renderEvolutionChain(state.pokemon)
            // pokemonView.renderMoves(state.pokemon)
            console.log(state.pokemon);
        }
        catch (error) {
            console.log('Error finding Pokemon');
        }

    }
}

document.querySelector('.pokemon').addEventListener('click', e => {
     if (e.target.closest('.next-pokemon')) { 
         controlNextPokemon();
        // console.log(newID);
     } else if (e.target.closest('.prev-pokemon')) { 
         controlPrevPokemon();
     }
});