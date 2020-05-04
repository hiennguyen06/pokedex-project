import axios from 'axios';

export default class Pokemon {
    constructor(id) {
        this.id = id;
    }

    async getPokemon() {
        try {
        
            // Get basic data from Pokemon request
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            console.log(res);
            this.image = `https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`;
            this.name = res.data.name;
            this.height = (res.data.height * 0.1).toFixed(2);
            this.weight = (res.data.weight * 0.1).toFixed(2);
            
            const types = res.data.types.map(type => type.type.name).join(' / ');
            this.type = types;

            // this.type2 = types.length == 2 ? types[1] : " ";
            const abilities = res.data.abilities.map(ability => ability.ability.name).join(', ')
            this.ability = abilities;    

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

            const pokemoneggGroups = speciesData.data.egg_groups.map(egg => egg.name).join(', ').replace('1', '');;
            this.eggGroup = pokemoneggGroups;

            const femaleRate = speciesData.data.gender_rate;
            this.genderRatioFemale = `${12.5 * femaleRate}% Female`;
            this.genderRatioMale = `${12.5 * (8 - femaleRate)}% Male`;

        }

        catch (error) {
            console.log(error)
        }
    }

}