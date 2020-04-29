import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.query}`);
            this.result = res.data
            console.log(this.result)
            
        } catch (error) {
            alert(error);
        }
    }
}
