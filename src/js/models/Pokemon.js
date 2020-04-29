import axios from 'axios';

export default class Pokemon {
    constructor(id) {
        this.id = id;
    }

    async getPokemon() {
        try {

            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            // this.image = res.data.sprites.front_default;
            this.image = `https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`;
            this.name = res.data.name;
            this.height = res.data.height;
            this.weight = res.data.weight;
            
            const types = res.data.types.map(type => type.type.name).join(' / ');
            this.type = types;
            // this.type2 = types.length == 2 ? types[1] : " ";
            // console.log(res);
        }

        catch (error) {
            console.log(error)
        }
    }
}