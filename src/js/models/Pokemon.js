import axios from 'axios';

export default class Pokemon {
    constructor(id) {
        this.id = id;
    }

    async getPokemon() {
        try {
        
            // Get basic data from Pokemon request
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            // console.log(res);
            this.image = `https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`;
            this.name = res.data.name;
            this.height = (res.data.height * 0.1).toFixed(2);
            this.weight = (res.data.weight * 0.1).toFixed(2);
            
            const types = res.data.types.map(type => type.type.name).join(' / ');
            this.type = types;

            // this.type2 = types.length == 2 ? types[1] : " ";
            const abilities = res.data.abilities.map(ability => ability.ability.name).join(', ')
            this.ability = abilities;    

            // get base stats
            let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
            res.data.stats.map(stat => {
                switch(stat.stat.name) {
                    case 'hp':
                        hp = stat.base_stat;
                        break;
                    case 'attack':
                        attack = stat.base_stat;
                        break;
                    case 'defense':
                        defense = stat.base_stat;
                        break;
                    case 'speed':
                        speed = stat.base_stat;
                        break;
                    case 'special-attack':
                        specialAttack = stat.base_stat;
                        break;
                    case 'special-defense':
                        specialDefense = stat.base_stat;
                        break;
                }
            });
            
           
            this.stat = { hp, attack, defense, speed, specialAttack, specialDefense };
            // console.log(this.stat);

            // get all level up moves
            // console.log(res);
            const movesLevelUp = res.data.moves;
            // console.log(movesLevelUp);

            const filterLevelUp = movesLevelUp.filter(move => move.version_group_details[0].move_learn_method.name === "level-up");
            // console.log(filterLevelUp)

            const PokemonMoves = filterLevelUp
                .map((move) => ({
                    moveName: move.move.name,
                    moveLevel: move.version_group_details[0].level_learned_at,
                    moveMethod: move.version_group_details[0].move_learn_method.name
                }))
                .sort((a,b) => (a.moveLevel > b.moveLevel ? 1 : -1));
            console.log(PokemonMoves);
            this.moves = PokemonMoves
                   
            // console.log(this.moves);

            // console.log(evs);

            // Get the Pokemon Description from species URL
            const speciesData = await axios(`https://pokeapi.co/api/v2/pokemon-species/${this.id}`);
            // console.log(speciesData);
            let description = '';
            speciesData.data.flavor_text_entries.some(flavor => {
                if(flavor.language.name === 'en') {
                    description = flavor.flavor_text;
                    return;
                }
            })
            this.desc = description;
            // console.log(this.desc);

            const pokemoneggGroups = speciesData.data.egg_groups.map(egg => egg.name).join(', ').replace('1', '');
            this.eggGroup = pokemoneggGroups;

            const femaleRate = speciesData.data.gender_rate;
            this.genderRatioFemale = `${12.5 * femaleRate}% Female`;
            this.genderRatioMale = `${12.5 * (8 - femaleRate)}% Male`;

            //Get the evolution chain id
            const evolutionChainId = speciesData.data.evolution_chain.url.match(/([^\/]*)\/*$/)[1];
            // console.log(evolutionChainId)

            const getEvolutionChain = await axios(`https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}`);
            // console.log(getEvolutionChain)
            const getEvolutionChainData = getEvolutionChain.data.chain.evolves_to.map(evo => evo.species.name).join('');
            // console.log(getEvolutionChainData)

            const dataExample = getEvolutionChain.data.chain.evolves_to;
            // console.log(dataExample)
            const getEvolutionChainData2nd = dataExample.map(evolve => evolve.evolves_to.map(evo => evo.species.name)).join('');
            // console.log(getEvolutionChainData2nd);

            this.evolutionBase = getEvolutionChain.data.chain.species.name;
            this.evolutionOne = getEvolutionChainData;
            this.evolutionTwo = getEvolutionChainData2nd;
            // console.log(this.evolutionOne);

            this.levelBase = dataExample.map(evolve => evolve.evolution_details.map(level => level.min_level)).join('');
            // console.log(this.levelBase);

            this.levelTwo = dataExample.map(evolve => evolve.evolves_to.map(evo => evo.evolution_details.map(level => level.min_level))).join('');
            // console.log(this.levelTwo);

            const getPokemonBase = await axios(`https://pokeapi.co/api/v2/pokemon/${this.evolutionBase}`);
            const getIdBase = getPokemonBase.data.id;
            const evolutionImageBase = `https://pokeres.bastionbot.org/images/pokemon/${getIdBase}.png`;
            this.evoImageBase = evolutionImageBase;

            const getPokemonOne = await axios(`https://pokeapi.co/api/v2/pokemon/${this.evolutionOne}`);
            const getIdOne = getPokemonOne.data.id;
            const evolutionImageOne = `https://pokeres.bastionbot.org/images/pokemon/${getIdOne}.png`;
            this.evoImageOne = evolutionImageOne;
            // console.log(this.evoImageOne);

            const getPokemonTwo = await axios(`https://pokeapi.co/api/v2/pokemon/${this.evolutionTwo}`);
            const getIdTwo = getPokemonTwo.data.id;
            const evolutionImageTwo = `https://pokeres.bastionbot.org/images/pokemon/${getIdTwo}.png`;
            this.evoImageTwo = evolutionImageTwo;

        }

        

        catch (error) {
            console.log(error)
        }
    }

}