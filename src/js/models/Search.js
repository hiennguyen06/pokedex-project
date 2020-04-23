import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {

        const proxy = 'https://cors-anywhere.herokuapp.com/';    
    
        try {
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.query}`);
            this.result = res.data
        } catch (error) {
            alert(error);
        }
    }
}

